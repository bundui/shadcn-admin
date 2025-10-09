"use client";

import { useId } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function Component() {
  const check1 = useId();
  const check2 = useId();
  const check3 = useId();

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2 [--primary:var(--color-indigo-500)] [--ring:var(--color-indigo-300)]">
        <Checkbox id={check1} defaultChecked={true} />
        <Label htmlFor={check1}>Indigo</Label>
      </div>
      <div className="flex items-center gap-2 [--primary:var(--color-green-500)] [--ring:var(--color-green-300)]">
        <Checkbox id={check2} defaultChecked={true} />
        <Label htmlFor={check2}>Green</Label>
      </div>
      <div className="flex items-center gap-2 [--primary:var(--color-orange-500)] [--ring:var(--color-orange-300)]">
        <Checkbox id={check3} defaultChecked={true} />
        <Label htmlFor={check3}>Orange</Label>
      </div>
    </div>
  );
}
