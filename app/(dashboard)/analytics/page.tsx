import { Metadata } from "next";
import { generateMeta } from "@/lib/generate-meta";

import { QuickView } from "./components/quick-view";
import { TopReferralPages } from "./components/top-referral-pages";
import { TopBrowsingPages } from "./components/top-browsing-pages";
import { VisitorsByCountries } from "./components/visitors-by-countries";
import { AudienceMetricsChart } from "./components/audience-metrics-chart";
import { SessionsByDevice } from "./components/session-by-device";
import { TopCampaignsTable } from "./components/top-campaigns-table";
import { VisitBySource } from "./components/visit-by-source";
import { StatCards } from "./components/stat-cards";

export async function generateMetadata(): Promise<Metadata> {
  return generateMeta({
    title: "Analytics Dashboard",
    description:
      "A list of orders generated using the Tanstack Table. Built with Tailwind CSS, Shadcn UI and Next.js.",
    canonical: "/project-management-dashboard"
  });
}

export default function Page() {
  return (
    <div className="gap-4 space-y-4 p-4">
      <StatCards />
      <div className="grid grid-cols-3 gap-4">
        <QuickView />
        <TopReferralPages />
        <TopBrowsingPages />
      </div>
      <div className="grid grid-cols-4 gap-4">
        <SessionsByDevice />
        <div className="col-span-2">
          <TopCampaignsTable />
        </div>
        <VisitBySource />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <VisitorsByCountries />
        <div className="col-span-2">
          <AudienceMetricsChart />
        </div>
      </div>
    </div>
  );
}
