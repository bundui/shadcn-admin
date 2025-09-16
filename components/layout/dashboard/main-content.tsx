import React from "react";
import { cn } from "@/lib/utils";

export default function MainContent({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("p-6", className)}>{children}</div>;
}
