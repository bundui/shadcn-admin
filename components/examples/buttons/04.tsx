import { Button } from "@/components/ui/button";
import { ChevronRightIcon, MicIcon, PlusIcon, TrashIcon } from "lucide-react";
import { EnterIcon } from "@radix-ui/react-icons";

export default function ButtonDemo() {
  return (
    <div className="flex gap-3">
      <Button size="icon">
        <PlusIcon />
      </Button>
      <Button variant="outline" size="icon">
        <ChevronRightIcon />
      </Button>
      <Button variant="destructive" size="icon">
        <TrashIcon />
      </Button>
      <Button variant="secondary" size="icon">
        <MicIcon />
      </Button>
      <Button variant="ghost" size="icon">
        <EnterIcon />
      </Button>
    </div>
  );
}
