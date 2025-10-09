import { Button } from "@/components/ui/button";
import { ChevronRightIcon, PlusIcon, TrashIcon } from "lucide-react";

export default function ButtonDemo() {
  return (
    <div className="flex gap-3">
      <Button>
        <PlusIcon /> Add
      </Button>
      <Button variant="outline">
        View More <ChevronRightIcon />
      </Button>
      <Button variant="destructive">
        <TrashIcon /> Delete
      </Button>
    </div>
  );
}
