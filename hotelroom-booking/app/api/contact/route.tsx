import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/config/db";
import mongoose from "mongoose";
import ContactModel from "@/app/lib/models/ContactModel";

export async function POST(request) {

  try {

    await connectDB();

    const body = await request.json();

    const { name, email, number, message } = body;

    // VALIDATION
    if (!name || !email || !number || !message) {

      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        {
          status: 400,
        }
      );
    }

    // CHECK EXISTING EMAIL
    const exists = await ContactModel.findOne({ email });

    if (exists) {

      return NextResponse.json(
        {
          success: false,
          message: "Message already submitted with this email",
        },
        {
          status: 409,
        }
      );
    }

    // SAVE DATA
    await ContactModel.create({
      name,
      email,
      number,
      message,
    });

    // SUCCESS RESPONSE
    return NextResponse.json({
      success: true,
      message: "Message submitted successfully",
    });

  } catch (error) {

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}


// GET ALL CONTACTS
export async function GET() {

  try {

    await connectDB();

    // FETCH DATA
    const contacts = await ContactModel
      .find({})
      .sort({ createdAt: -1 });

    // RESPONSE
    return NextResponse.json({
      success: true,
      contacts,
    });

  } catch (error) {

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}



// DELETE CONTACT
export async function DELETE(request) {

  try {

    await connectDB();

    const { searchParams } = new URL(request.url);

    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: "ID is required"
        },
        { status: 400 }
      );
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid ID"
        },
        { status: 400 }
      );
    }

    await ContactModel.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Data Deleted successfully"
    });

  } catch (error) {

    return NextResponse.json(
      {
        success: false,
        message: error.message
      },
      { status: 500 }
    );
  }
}