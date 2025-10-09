import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover Me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <div className="space-y-2 p-2">
          <p>Tooltip Content</p>
          <Button size="sm">Go Home</Button>
        </div>
      </TooltipContent>
    </Tooltip>
  );
}
