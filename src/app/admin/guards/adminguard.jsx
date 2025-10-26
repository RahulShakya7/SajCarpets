"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AdminGuard({ children }) {
  const { status, data } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return null;
  }

  if (status === "unauthenticated") {
    router.replace("/auth/signin");
    return null;
  }

  if (data?.user?.role !== "admin") {
    router.replace("/");
    return null;
  }

  return children;
}
