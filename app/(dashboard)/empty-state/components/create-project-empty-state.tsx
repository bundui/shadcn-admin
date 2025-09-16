import type React from "react";
import { Megaphone, SquareTerminal, CalendarDays, ChevronRight, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function CreateProjectEmptyState() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <h2 className="text-2xl font-bold text-gray-900">Create your first project</h2>
        <p className="mt-2 text-gray-500">
          Get started by selecting a template or start from an empty project.
        </p>

        <div className="mt-8 space-y-4">
          <TemplateCard
            icon={<Megaphone className="h-6 w-6 text-white" />}
            iconBgColor="bg-pink-500"
            title="Marketing Campaign"
            description="I think the kids call these memes these days."
          />
          <TemplateCard
            icon={<SquareTerminal className="h-6 w-6 text-white" />}
            iconBgColor="bg-purple-500"
            title="Engineering Project"
            description="Something really expensive that will ultimately get cancelled."
          />
          <TemplateCard
            icon={<CalendarDays className="h-6 w-6 text-white" />}
            iconBgColor="bg-orange-500"
            title="Event"
            description="Like a conference all about you that no one will care about."
          />
        </div>

        <div className="mt-8">
          <Link
            href="#"
            className="text-primary inline-flex items-center text-sm font-medium hover:underline">
            Or start from an empty project
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

interface TemplateCardProps {
  icon: React.ReactNode;
  iconBgColor: string;
  title: string;
  description: string;
}

function TemplateCard({ icon, iconBgColor, title, description }: TemplateCardProps) {
  return (
    <Card className="flex cursor-pointer flex-row items-center rounded-lg p-4 shadow-sm transition-colors hover:bg-gray-50">
      <div className={`flex-shrink-0 rounded-md p-3 ${iconBgColor}`}>{icon}</div>
      <div className="flex-grow text-left">
        <h3 className="text-base font-medium text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <ChevronRight className="ml-auto h-5 w-5 text-gray-400" />
    </Card>
  );
}
