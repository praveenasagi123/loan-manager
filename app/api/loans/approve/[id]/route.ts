import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import LoanModel from "@/models/Loan";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDatabase();
    const loanId = params.id;

    const updatedLoan = await LoanModel.findByIdAndUpdate(
      loanId,
      { status: "approved" },
      { new: true }
    );

    if (!updatedLoan) {
      return NextResponse.json(
        { success: false, error: "Loan not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, loan: updatedLoan },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
