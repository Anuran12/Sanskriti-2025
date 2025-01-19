import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

export async function POST(request: NextRequest) {
  const session = await auth();

  if (!session) {
    return NextResponse.json(
      { message: "Unauthorized", isOk: false },
      { status: 401 }
    );
  }

  return NextResponse.json(
    { message: "Razorpay verification removed." },
    { status: 200 }
  );
}
