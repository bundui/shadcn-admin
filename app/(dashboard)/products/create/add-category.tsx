import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { PlusCircle } from "lucide-react";

export default function AddNewCategory() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="icon" variant="outline">
          <PlusCircle className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72">
        <div className="grid items-center gap-4 lg:grid-flow-col">
          <Label htmlFor="width">Name</Label>
          <Input id="width" className="h-8" />
        </div>
      </PopoverContent>
    </Popover>
  );
}
