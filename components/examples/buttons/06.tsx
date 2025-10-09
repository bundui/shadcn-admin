"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LoaderCircleIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ButtonDemo() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex gap-3">
      <Button disabled>
        <LoaderCircleIcon className="animate-spin" aria-hidden="true" />
        Loading...
      </Button>

      <Button disabled variant="outline" size="icon">
        <LoaderCircleIcon className="animate-spin" aria-hidden="true" />
      </Button>

      <Button
        variant="destructive"
        className="group relative"
        data-loading={isLoading || undefined}
        disabled={isLoading}
        onClick={handleClick}>
        <span className={cn({ "text-transparent": isLoading })}>Click Me</span>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <LoaderCircleIcon className="animate-spin" size={16} aria-hidden="true" />
          </div>
        )}
      </Button>
    </div>
  );
}
