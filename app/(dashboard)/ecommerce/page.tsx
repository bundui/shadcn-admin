import { Metadata } from "next";
import { generateMeta } from "@/lib/generate-meta";
import { ListFilterIcon } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CalendarDateRangePicker from "@/components/custom-date-range-picker";
import { Button } from "@/components/ui/button";

import PerformanceGoal from "./components/performance-goal";
import MonthlyEarning from "./components/monthly-earning";
import SalesReport from "./components/sales-report";
import StoreOverview from "./components/store-overview";
import WeeklyStats from "./components/weekly-stats";
import SalesHistory from "./components/sales-history";
import BestSelling from "./components/best-selling";
import TopSellingStores from "./components/top-selling-stores";
import SalesByCountries from "./components/sales-by-countries";
import EcommerceKpi from "./components/ecommerce-kpi";
import RecentReviews from "./components/recent-reviews";

export async function generateMetadata(): Promise<Metadata> {
  return generateMeta({
    title: "E-commerce Dashboard Template",
    description:
      "An eCommerce template is a pre-designed ui template for managing products, orders, and sales data. Built with shadcn/ui, Tailwind CSS, Next.js, Vue.js, and React. Typescript is supported.",
    canonical: "/ecommerce"
  });
}

export default function Page() {
  return (
    <div className="min-h-screen space-y-6 p-6">
      <Tabs defaultValue="account" className="w-full">
        <div className="flex justify-between">
          <TabsList>
            <TabsTrigger value="account">Overview</TabsTrigger>
            <TabsTrigger value="password">Reports</TabsTrigger>
          </TabsList>
          <div className="flex gap-2">
            <CalendarDateRangePicker />
            <Button>
              <ListFilterIcon /> Filter
            </Button>
          </div>
        </div>
        <TabsContent value="account" className="space-y-4">
          <EcommerceKpi />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <PerformanceGoal />
            <MonthlyEarning />
            <SalesByCountries />
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <SalesReport />
            <StoreOverview />
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <WeeklyStats />
            <SalesHistory />
            <BestSelling />
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="col-span-1">
              <RecentReviews />
            </div>
            <div className="col-span-2">
              <TopSellingStores />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="password">reports</TabsContent>
      </Tabs>
    </div>
  );
}
