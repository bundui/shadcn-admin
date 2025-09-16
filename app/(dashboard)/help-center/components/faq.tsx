import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

const FAQ = ({ items }: FAQAccordionProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Accordion type="single" collapsible className="space-y-4">
        {items.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="border border-border rounded-lg px-4 bg-card shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <AccordionTrigger className="text-left text-lg font-medium hover:no-underline py-4">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;