import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/config/db";
import bookingModel from "@/app/lib/models/bookingModel";
import mongoose from "mongoose";

export async function POST(request) {

  try {

    await connectDB();

    const body = await request.json();

    const {
      name,
      email,
      phone,
      checkIn,
      checkOut,
      roomId,
      roomName,
      roomPrice,
    } = body;

    // VALIDATION
    if (
      !name ||
      !email ||
      !phone ||
      !checkIn ||
      !checkOut ||
      !roomId
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 }
      );
    }

    // SAVE BOOKING
    const booking = await bookingModel.create({
      name,
      email,
      phone,
      checkIn,
      checkOut,
      roomId,
      roomName,
      roomPrice,
    });

    return NextResponse.json({
      success: true,
      message: "Room booked successfully",
      booking,
    });

  } catch (error) {

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}




// GET ALL BOOKINGS
export async function GET() {
  try {
    await connectDB();

    const bookings = await bookingModel
      .find({})
      .sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      bookings,
    });

  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}


// DELETE Booking
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

    await bookingModel.findByIdAndDelete(id);

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