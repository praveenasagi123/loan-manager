import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white p-4 h-screen">
      <h1 className="text-xl font-bold mb-8">CREDIT APP</h1>
      <nav>
        <ul className="space-y-2">
          <SidebarItem href="/dashboard" text="Home" />
          <SidebarItem href="/dashboard/loans" text="Loans" />
          <SidebarItem href="/dashboard/apply-loan" text="Apply Loan" />
        </ul>
      </nav>
    </div>
  );
}

function SidebarItem({ href, text }: { href: string; text: string }) {
  return (
    <li>
      <Link href={href} className="block px-4 py-2 rounded hover:bg-gray-700">
        {text}
      </Link>
    </li>
  );
}
