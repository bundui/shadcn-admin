"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

function Avatar({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn("relative flex size-8 shrink-0 overflow-hidden rounded-full", className)}
      {...props}
    />
  );
}

function AvatarImage({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn("bg-muted flex size-full items-center justify-center rounded-full", className)}
      {...props}
    />
  );
}

const indicatorVariants = cva("size-2 absolute rounded-full", {
  variants: {
    variant: {
      success: "bg-green-400",
      danger: "bg-red-400",
      warning: "bg-orange-400"
    },
    position: {
      "top-end": "end-0.5 top-0.5",
      "bottom-end": "end-0.5 bottom-0.5",
      "bottom-start": "start-0.5 bottom-0.5",
      "top-start": "start-0.5 top-0.5"
    }
  }
});

export interface AvatarIndicatorProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof indicatorVariants> {
  variant?: "success" | "danger" | "warning" | null;
  position?: "top-end" | "bottom-end" | "bottom-start" | "top-start" | null;
}

function AvatarIndicator({
  variant,
  position = "bottom-end",
  className,
  ...props
}: AvatarIndicatorProps) {
  return (
    <div
      data-slot="avatar-indicator"
      className={cn(indicatorVariants({ variant, position, className }))}
      {...props}></div>
  );
}

export { Avatar, AvatarImage, AvatarFallback, AvatarIndicator };
