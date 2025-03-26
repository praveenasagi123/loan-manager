import Badge from "@/components/ui/Badge";

export default function LoanTable({ loans }: { loans: any[] }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Loan Officer
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Amount
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Date Applied
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {loans.map((loan) => (
            <tr key={loan._id.toString()}>
              <td className="px-6 py-4">
                <div>{loan.loanOfficer}</div>
                <div className="text-sm text-gray-500">Updated 1 day ago</div>
              </td>
              <td className="px-6 py-4">
                <div>₦{loan.amount.toLocaleString()}</div>
                <div className="text-sm text-gray-500">
                  {new Date(loan.updatedAt).toLocaleTimeString()}
                </div>
              </td>
              <td className="px-6 py-4">
                {new Date(loan.appliedDate).toLocaleDateString()}
              </td>
              <td className="px-6 py-4">
                <Badge status={loan.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="px-6 py-3 flex items-center justify-between border-t border-gray-200">
        <div className="text-sm text-gray-500">
          Rows per page:
          <select className="ml-2 border rounded px-2 py-1">
            <option>7</option>
            <option>15</option>
          </select>
        </div>
        <div className="text-sm text-gray-500">
          1-{loans.length} of {loans.length}
        </div>
      </div>
    </div>
  );
}
