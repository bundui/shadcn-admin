import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  title: string | React.ReactNode;
  subTitle?: string;
  description?: string | React.ReactNode;
  className?: string;
}

export default function SectionHeader({
  className,
  title,
  subTitle,
  description,
}: Props) {
  return (
    <header
      className={cn(
        "mb-6 lg:mb-12 text-center max-w-(--breakpoint-md) mx-auto",
        className
      )}
    >
      {subTitle ? (
        <div className="text-lg text-primary mb-2 tracking-wider">
          {subTitle}
        </div>
      ) : null}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {description ? (
        <p className="text-xl text-muted-foreground mb-8">{description}</p>
      ) : null}
    </header>
  );
}
