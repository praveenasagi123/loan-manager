import { connectToDatabase } from "@/lib/db";
import Loan from "@/models/Loan";

export async function applyForLoan(userId: string | undefined, amount: number) {
  await connectToDatabase();
  return await Loan.create({
    userId,
    amount,
    loanOfficer: "John Okoh", // Default officer
  });
}

export async function getUserLoans(userId: string) {
  await connectToDatabase();
  return await Loan.find({ userId }).sort({ appliedDate: -1 }).lean();
}
