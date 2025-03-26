export default function RecentLoans() {
    const loans = [
      { user: 'Tem Codes', type: 'Connect Email not Linked', date: 'Jan 06, 2021' },
      { user: 'Must Downs', type: 'Adding Images to Posts', date: 'Jan 06, 2021' },
      // ... more loans
    ];
  
    return (
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-bold mb-4">Recent Loans</h3>
        <div className="space-y-4">
          {loans.map((loan, i) => (
            <div key={i} className="flex items-start pb-4 border-b border-gray-100">
              <div className="ml-3">
                <p className="text-sm font-medium">{loan.type}</p>
                <div className="flex text-sm text-gray-500">
                  <span>{loan.user}</span>
                  <span className="mx-1">•</span>
                  <span>{loan.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }