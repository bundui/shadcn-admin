import { Badge } from "@/components/ui/badge";

export default function BadgeDemo() {
  return (
    <div className="flex items-center gap-2">
      <Badge>Default</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  );
}
