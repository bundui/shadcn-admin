import { useId } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Component() {
  const id = useId();

  return (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor={id}>Label</Label>
      <Input type="email" placeholder="Email" />
    </div>
  );
}
