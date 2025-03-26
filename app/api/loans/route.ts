// app/api/loans/route.ts
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import LoanModel from "@/models/Loan";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    await connectToDatabase();
    const loans = await LoanModel.find({ userId: session.user.id }).sort({
      appliedDate: -1,
    });

    return NextResponse.json({ success: true, loans });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const body = await req.json();

    const {
      userId,
      fullName,
      amount,
      loanTenure,
      employmentStatus,
      employmentAddress,
      reason,
    } = body;

    const newLoan = await LoanModel.create({
      userId,
      fullName,
      amount,
      loanTenure,
      employmentStatus,
      employmentAddress,
      reason,
    });

    return NextResponse.json({ success: true, loan: newLoan });
  } catch {
    return NextResponse.json({ success: false, error: "error" });
  }
}
