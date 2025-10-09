import { Badge } from "@/components/ui/badge";

export default function BadgeDemo() {
  return (
    <div className="flex items-center gap-2">
      <Badge variant="outline">
        <span className="me-0.5 size-2 rounded-full bg-green-500" />
        Green
      </Badge>
      <Badge variant="outline">
        <span className="me-0.5 size-2 rounded-full bg-indigo-500" />
        Indigo
      </Badge>
      <Badge variant="outline">
        <span className="bg-destructive me-0.5 size-2 rounded-full" />
        Destructive
      </Badge>
    </div>
  );
}
