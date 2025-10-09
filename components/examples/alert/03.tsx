import { CheckCircle2Icon } from "lucide-react";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export default function AlertDemo() {
  return (
    <Alert className="flex items-center justify-between">
      <div className="flex gap-3">
        <CheckCircle2Icon className="mt-0.5 size-4" />
        <AlertTitle>Success! Your changes have been saved</AlertTitle>
      </div>
      <Button variant="outline" size="sm">
        Go it!
      </Button>
    </Alert>
  );
}
