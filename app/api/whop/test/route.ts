import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("https://api.whop.com/api/v5/me", {
      headers: {
        Authorization: `Bearer ${process.env.WHOP_API_KEY}`,
      },
    });

    const data = await response.json();

    return NextResponse.json({
      success: response.ok,
      data,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: "Connection failed",
    });
  }
}