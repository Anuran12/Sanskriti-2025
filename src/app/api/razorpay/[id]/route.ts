import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { UserRole } from "@prisma/client";

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const session = await auth();
  if (!session) {
    return NextResponse.json(
      { message: "Unauthorized", isOk: false },
      { status: 401 }
    );
  }

  if (session.user.role !== UserRole.ADMIN) {
    return NextResponse.json(
      { message: "Unauthorized", isOk: false },
      { status: 403 }
    );
  }

  return NextResponse.json(
    { message: "Razorpay payment fetch removed." },
    { status: 200 }
  );
}
