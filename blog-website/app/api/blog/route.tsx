import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { connectDB } from "@/app/lib/config/db";
import BlogModel from "@/app/lib/models/BlogModel";
import mongoose from "mongoose";
import path from "path";
import fs from "fs";



let LoadDB= async()=>{
await connectDB();
}
LoadDB();

// Api upload Blogs to get/show blogs on page


export async function GET(request) {

  try {

    let blogId = request.nextUrl.searchParams.get('id');

    // ✅ Single Blog
    if (blogId) {

      // ✅ Check MongoDB ObjectId
      if (mongoose.Types.ObjectId.isValid(blogId)) {

        let blog = await BlogModel.findById(blogId);

        return NextResponse.json(blog);

      } else {

        return NextResponse.json(
          { error: "Invalid MongoDB ID" },
          { status: 400 }
        );

      }

    }

    // ✅ All Blogs
    let blogs = await BlogModel.find({}).sort({ createdAt: -1 });

    return NextResponse.json({ blogs });

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      { error: "Server Error" },
      { status: 500 }
    );

  }

}








// Api endpiont to upload blog Data
export async function POST(request) {
  try {
    // await connectDB();

    const formData = await request.formData();
    const timestamp = Date.now();

    const image = formData.get("image");

    // ✅ Check image
    if (!image || typeof image === "string") {
      return NextResponse.json(
        { success: false, error: "No image uploaded" },
        { status: 400 }
      );
    }

    // ✅ Convert image to buffer
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);

    // ✅ Safe file name
    const fileName = `${timestamp}_${image.name || "image.png"}`;
    const path = `./public/${fileName}`;

    // ✅ Save file
    await writeFile(path, buffer);

    const imgUrl = `/${fileName}`;

    // ✅ Validate fields
    const blogData = {
      title: formData.get("title") || "",
      description: formData.get("description") || "",
      category: formData.get("category") || "General",
      author: formData.get("author") || "Admin",
      image: imgUrl,
      authorImg: formData.get("authorImg") || "",
    };

    // ❗ Optional: prevent empty title
    if (!blogData.title) {
      return NextResponse.json({
        success: false,
        error: "Title is required",
      });
    }

    // ✅ Save to DB
    await BlogModel.create(blogData);

    return NextResponse.json({
      success: true,
      msg: "Blog saved successfully",
      imgUrl,
    });

  } catch (error) {
    console.error(error); // 👈 important for debugging

    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}

// Delete BLoG
export async function DELETE(request) {

  try {

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, message: "ID required" }, { status: 400 });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, message: "Invalid ID" }, { status: 400 });
    }

    // 🔥 Find blog first
    const blog = await BlogModel.findById(id);

    if (!blog) {
      return NextResponse.json({ success: false, message: "Blog not found" });
    }

    // 🧹 Delete image from /public folder
    if (blog.image) {

      const imagePath = path.join(process.cwd(), "public", blog.image);

      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath); // delete file
      }
    }

    // 🗑️ Delete blog from DB
    await BlogModel.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Blog and image deleted successfully"
    });

  } catch (error) {

    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
