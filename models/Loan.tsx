import mongoose, { Document } from "mongoose";

export interface ILoan extends Document {
  userId: mongoose.Types.ObjectId;
  amount: number;
  status: "pending" | "approved" | "rejected" | "finding";
  appliedDate: Date;
  verifiedBy?: mongoose.Types.ObjectId;
  verifiedAt?: Date;
  loanOfficer?: string;
}

const LoanSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  amount: { type: Number, required: true },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected", "finding"],
    default: "pending",
  },
  appliedDate: { type: Date, default: Date.now },
  verifiedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  verifiedAt: { type: Date },
  loanOfficer: { type: String },
});

export default mongoose.models?.Loan ||
  mongoose.model<ILoan>("Loan", LoanSchema);
