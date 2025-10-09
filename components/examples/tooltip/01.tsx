import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function TooltipDemo() {
  return (
    <div className="flex gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button>Hover Me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Tooltip Content</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
