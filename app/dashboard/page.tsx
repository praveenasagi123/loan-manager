"use client";

import { getUserLoans } from "@/lib/actions/loan";
import LoanTable from "@/components/dashboard/LoanTable";
import { useSession } from "next-auth/react";

export default function UserDashboard() {
  const { data: session } = useSession();
  // const loans = session?.user?.id ? getUserLoans(session.user.id) : [];

  const loans: any[] = [];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Borrow Cash</h1>
        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Transact
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded">
            Deposit Cash
          </button>
        </div>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search for loans"
          className="border p-2 rounded w-full max-w-md"
        />
      </div>

      <h2 className="text-xl font-semibold mb-4">Applied Loans</h2>
      <LoanTable loans={loans} />
    </div>
  );
}
