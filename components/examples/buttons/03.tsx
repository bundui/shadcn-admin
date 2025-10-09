import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return (
    <div className="flex gap-3">
      <Button disabled={true}>Default</Button>
      <Button disabled={true} variant="outline">
        Outline
      </Button>
      <Button disabled={true} variant="destructive">
        Destructive
      </Button>
      <Button disabled={true} variant="secondary">
        Secondary
      </Button>
      <Button disabled={true} variant="ghost">
        Ghost
      </Button>
      <Button disabled={true} variant="link">
        Link
      </Button>
    </div>
  );
}
