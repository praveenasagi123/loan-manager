const statusColors = {
  FINDING: 'bg-yellow-100 text-yellow-800',
  VIEWTED: 'bg-blue-100 text-blue-800',
  REJECTED: 'bg-red-100 text-red-800',
  APPROVED: 'bg-green-100 text-green-800',
};

export default function Badge({ status }: { status: string }) {
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}>
      {status}
    </span>
  );
}