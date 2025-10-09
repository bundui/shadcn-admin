import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return (
    <div className="flex gap-3">
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="lg">Large</Button>
    </div>
  );
}
