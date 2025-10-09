import { Progress } from "@/components/ui/progress";

export default function ProgressDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Progress value={50} />
      <Progress value={40} indicatorClassName="bg-red-400" />
      <Progress value={80} indicatorClassName="bg-green-400" />
      <Progress value={30} indicatorClassName="bg-orange-400" />
    </div>
  );
}
