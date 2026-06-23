import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { connectDB } from "@/app/lib/config/db";
import User from "@/app/lib/models/User";

const SECRET_KEY = process.env.JWT_SECRET ||"0987654321";

export async function POST(req) {
  await connectDB();

  const { email, password } = await req.json();

  if (!email?.trim() || !password?.trim()) {
    return NextResponse.json(
      { success: false, message: "Required fields missing" },
      { status: 400 }
    );
  }

  const user = await User.findOne({ email });

  if (!user) {
    return NextResponse.json(
      { success: false, message: "Invalid credentials" },
      { status: 401 }
    );
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return NextResponse.json(
      { success: false, message: "Invalid credentials" },
      { status: 401 }
    );
  }
const token = jwt.sign(
  {
    id: user._id.toString(),
    email: user.email,
  },
  SECRET_KEY,
  { expiresIn: "7d" }
);

  const response = NextResponse.json({
    success: true,
    message: "Login successful",
  });

  response.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return response;
}