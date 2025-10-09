"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { XIcon } from "lucide-react";

export default function BadgeDemo() {
  const [badges, setBadges] = useState([
    { id: 1, label: "Next.js" },
    { id: 2, label: "Tailwind CSS" },
    { id: 3, label: "Laravel" }
  ]);

  function removeBadge(id: number) {
    setBadges((prev) => prev.filter((badge) => badge.id !== id));
  }

  return (
    <div className="flex items-center gap-2">
      {badges.map(({ id, label }) => (
        <Badge
          key={id}
          variant="secondary"
          className="flex cursor-pointer items-center gap-1 hover:opacity-80"
          onClick={() => removeBadge(id)}>
          {label}
          <XIcon className="size-3" />
        </Badge>
      ))}
    </div>
  );
}
