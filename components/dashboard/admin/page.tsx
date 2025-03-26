import AdminStats from '@/components/dashboard/AdminStats';
import RecentLoans from '@/components/dashboard/RecentLoans';

export default function AdminDashboard() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <AdminStats 
          title="ACTIVE USERS"
          value="200"
          icon={<UsersIcon />}
        />
        <AdminStats 
          title="BORROWERS"
          value="100"
          icon={<UserGroupIcon />}
        />
        <AdminStats 
          title="CASH DISBURSED"
          value="550,000"
          icon={<CurrencyDollarIcon />}
        />
        <AdminStats 
          title="CASH RECEIVED"
          value="1,000,000"
          icon={<CashIcon />}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentLoans />
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold mb-4">Other Stats</h3>
          {/* Additional admin widgets */}
        </div>
      </div>
    </div>
  );
}