import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";
import { UserRole } from "@prisma/client";

export async function POST(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json(
        { message: "Unauthorized", isOk: false },
        { status: 401 }
      );
    }

    if (session.user.role !== UserRole.ADMIN) {
      return NextResponse.json(
        { message: "Forbidden", isOk: false },
        { status: 403 }
      );
    }

    const { id } = context.params;

    const user = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        role: UserRole.ADMIN,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    return NextResponse.json({ user, isOk: true }, { status: 200 });
  } catch (error) {
    console.error("Error updating user role:", error);
    return NextResponse.json(
      { message: "Failed to update user role", isOk: false },
      { status: 500 }
    );
  }
}
