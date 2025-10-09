import { Progress } from "@/components/ui/progress";

export default function ProgressDemo() {
  const progress = 50;

  return (
    <div className="flex items-center gap-2">
      <Progress value={progress} className="shrink" />
      <span className="text-muted-foreground text-sm font-semibold">%{progress}</span>
    </div>
  );
}
