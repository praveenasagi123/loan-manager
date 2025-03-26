const loans = [
  {
    user: "Tom Cruise",
    details: "Contact Email not Linked",
    date: "June 09, 2021",
    status: "Pending",
  },
  {
    user: "Matt Damon",
    details: "Adding Images to Featured Posts",
    date: "June 08, 2021",
    status: "Pending",
  },
  {
    user: "Robert Downey",
    details: "When will I be charged?",
    date: "June 07, 2021",
    status: "Pending",
  },
  {
    user: "Chris Evans",
    details: "Downtime since last week",
    date: "June 07, 2021",
    status: "Approved",
  },
];

export default function Loans() {
  return (
    <div className="bg-white shadow rounded-lg p-4 mt-6">
      <h2 className="text-xl font-semibold mb-4">Recent Loans</h2>
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="p-2 text-left">User Details</th>
            <th className="p-2 text-left">Customer Name</th>
            <th className="p-2 text-left">Date</th>
            <th className="p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {loans.map(({ user, details, date, status }, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{details}</td>
              <td className="p-2">{user}</td>
              <td className="p-2">{date}</td>
              <td className="p-2">
                <span
                  className={`px-3 py-1 text-xs rounded-full ${
                    status === "Pending" ? "bg-yellow-500" : "bg-green-500"
                  } text-white`}
                >
                  {status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
