"use client";

import { Search, Filter } from "lucide-react";
import Link from "next/link";

const loans = [
  {
    name: "John Okoh",
    amount: "50,000.00",
    date: "June 09, 2021",
    time: "6:30 PM",
    status: "PENDING",
    statusColor: "bg-yellow-400",
  },
  {
    name: "John Okoh",
    amount: "100,000.00",
    date: "June 07, 2021",
    time: "6:30 PM",
    status: "VERIFIED",
    statusColor: "bg-green-500",
  },
];

export default function LoanDashboard() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2 text-green-800 font-semibold text-lg">
          <span className="bg-green-600 p-2 rounded text-white">💰</span>
          <span>DEFICIT</span>
          <span className="text-gray-900 text-xl">₦ 0.0</span>
        </div>
        <Link
          href="/apply-loan"
          className="bg-gray-200 px-4 py-2 rounded-lg text-gray-800"
        >
          Get A Loan
        </Link>
      </div>
      <div className="bg-gray-100 p-2 rounded-lg flex">
        <button className="flex-1 px-4 py-2 bg-green-200 text-green-900 rounded-l-lg">
          Borrow Cash
        </button>
        <button className="flex-1 px-4 py-2 text-gray-700">Transact</button>
        <button className="flex-1 px-4 py-2 text-gray-700 rounded-r-lg">
          Deposit Cash
        </button>
      </div>
      <div className="mt-4 flex items-center bg-gray-100 p-2 rounded-lg">
        <Search className="w-5 h-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search for loans"
          className="w-full bg-transparent outline-none px-2"
        />
      </div>
      <LoanTable loans={loans} />
    </div>
  );
}

function LoanTable({ loans }: { loans: any[] }) {
  return (
    <div className="mt-6 bg-white p-4 rounded-lg shadow-lg">
      <div className="flex justify-between items-center border-b pb-2 mb-2">
        <h2 className="text-lg font-semibold">Applied Loans</h2>
        <div className="flex space-x-4 text-gray-600">
          {/* <Sort className="w-5 h-5 cursor-pointer" /> */}
          <Filter className="w-5 h-5 cursor-pointer" />
        </div>
      </div>
      <div className="space-y-4">
        {loans.map((loan: any) => (
          <div
            key={loan.id}
            className="flex justify-between items-center p-3 border rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <img
                src="https://via.placeholder.com/40"
                alt="User"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">{loan.name}</p>
                <p className="text-sm text-gray-500">Updated 1 day ago</p>
              </div>
            </div>
            <p className="text-gray-800">₦ {loan.amount}</p>
            <div>
              <p className="text-gray-700">{loan.date}</p>
              <p className="text-gray-500 text-sm">{loan.time}</p>
            </div>
            <span
              className={`px-3 py-1 text-white text-sm rounded-full ${loan.statusColor}`}
            >
              {loan.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
