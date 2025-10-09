import { extractCodeFromFilePath } from "@/lib/code";
import ListCardClient from "./list-card-client";
import { ComponentExampleType } from "@/app/(dashboard)/components/[slug]/page";

export default async function ListCard({
  componentName,
  example
}: {
  componentName: string;
  example: ComponentExampleType;
}) {
  const fileContent = extractCodeFromFilePath(`examples/${componentName}/${example.name}.tsx`);

  const { default: Example } = await import(
    `@/components/examples/${componentName}/${example.name}.tsx`
  );

  return <ListCardClient example={example} fileContent={fileContent} preview={<Example />} />;
}
