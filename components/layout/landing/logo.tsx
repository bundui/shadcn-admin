import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <img className="w-7 rounded-md" src="/logo.svg" alt="" />
      <span className="text-xl font-bold">Shadcn Admin</span>
    </Link>
  );
}
