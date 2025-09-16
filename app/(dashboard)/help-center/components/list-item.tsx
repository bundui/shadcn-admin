import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface HelpCenterCardProps {
  title: string;
  description: string;
  linkText: string;
  href: string;
}

const ListItem = ({ title, description, linkText, href }: HelpCenterCardProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-200 bg-card border-border pb-0">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col h-full border-t py-3">
        <Link
          href={href}
          className="flex justify-between items-center text-link hover:underline font-medium group transition-colors duration-200"
        >
          {linkText}
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default ListItem;