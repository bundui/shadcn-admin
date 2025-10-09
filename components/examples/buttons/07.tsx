import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return (
    <div className="flex gap-3">
      <Button>Rounded</Button>
      <Button className="rounded-none">None</Button>
      <Button className="rounded-full">Circle</Button>
    </div>
  );
}
