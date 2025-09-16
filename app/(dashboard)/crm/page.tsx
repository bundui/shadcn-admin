import { Metadata } from "next";
import { generateMeta } from "@/lib/generate-meta";

import CalendarDateRangePicker from "@/components/date-range-picker";
import { Button } from "@/components/ui/button";

import MainContent from "@/components/layout/dashboard/main-content";
import { LeadsCard } from "./components/leads";
import { LeadBySourceCard } from "./components/leads-by-source";
import { LeadsByCountryCard } from "./components/leads-by-country";
import PerformanceAnalytics from "./components/performance-analytics";
import StatCards from "./components/stat-cards";

export async function generateMetadata(): Promise<Metadata> {
  return generateMeta({
    title: "CRM Dashboard Template",
    description:
      "CRM admin dashboard template is a pre-designed ui template to manage customer data, interactions and sales analytics. Built with shadcn/ui, Tailwind CSS, Next.js, Vue.js, and React. Typescript is supported.",
    canonical: "/crm"
  });
}

export default function Page() {
  return (
    <MainContent>
      <div className="space-y-4">
        <StatCards />
        <div className="grid gap-4 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <PerformanceAnalytics />
          </div>
          <LeadBySourceCard />
        </div>
        <div className="grid gap-4 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <LeadsByCountryCard />
          </div>
          <LeadsCard />
        </div>
      </div>
    </MainContent>
  );
}
