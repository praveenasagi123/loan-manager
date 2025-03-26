"use client";

import UserNavbar from "@/app/components/UserNavbar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home({ children }: { children: React.ReactNode }) {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/dashboard");
    } else {
      router.replace("/login");
    }
  }, [status, router]);

  return (
    <main>
      {status === "authenticated" && <UserNavbar />}
      <div className="flex-1 bg-gray-50">{children}</div>
    </main>
  );
}
