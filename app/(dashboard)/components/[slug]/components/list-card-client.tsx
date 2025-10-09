"use client";

import React, { useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { CodeIcon } from "lucide-react";
import CodeBlock from "@/components/code-block";
import { ComponentExampleType } from "@/app/(dashboard)/components/[slug]/page";

type Props = {
  fileContent: string;
  example: ComponentExampleType;
  preview: React.ReactNode;
};

export default function ListCardClient({ fileContent, example, preview }: Props) {
  const [showCode, setShowCode] = useState(false);

  return (
    <Card id={example.name}>
      <CardHeader className="flex items-center justify-between">
        <CardTitle>{example.title}</CardTitle>
        <CardDescription>{example.description}</CardDescription>
        <CardAction>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" onClick={() => setShowCode(!showCode)}>
                <CodeIcon />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Show Code</p>
            </TooltipContent>
          </Tooltip>
        </CardAction>
      </CardHeader>
      <CardContent className="space-y-4">
        {preview}
        {showCode && <CodeBlock code={fileContent} lang="tsx" />}
      </CardContent>
    </Card>
  );
}
