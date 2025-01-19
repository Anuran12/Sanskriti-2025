import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { sendEmail } from "@/helper/mailer";

export async function POST(
  request: NextRequest,
  context: { params: { paymentId: string } }
) {
  const session = await auth();

  if (!session) {
    return NextResponse.json(
      { message: "Unauthorized", isOk: false },
      { status: 401 }
    );
  }

  return NextResponse.json(
    { message: "Razorpay email sending removed." },
    { status: 200 }
  );
}
