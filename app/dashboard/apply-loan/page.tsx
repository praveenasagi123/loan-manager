"use client";

import { useRouter } from "next/navigation";
import { applyForLoan } from "@/lib/actions/loan";
import { useSession } from "next-auth/react";

export default function ApplyLoanPage() {
  const router = useRouter();
  const { data: session } = useSession();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const amount = parseFloat(formData.get("amount") as string);

    await applyForLoan(session?.user?.id, amount);
    router.push("/dashboard/loans");
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">APPLY FOR A LOAN</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Loan Amount</label>
          <input
            name="amount"
            type="number"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}
