import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import PendingLoansTable from '@/components/dashboard/PendingLoansTable';

export default async function VerifierDashboard() {
  const session = await auth();
  if (!session) redirect('/auth/signin');
  if (session.user.role !== 'verifier') redirect('/dashboard/user');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Pending Loan Applications</h1>
      <PendingLoansTable />
    </div>
  );
}