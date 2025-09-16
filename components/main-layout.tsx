import NextTopLoader from "nextjs-toploader";
import Header from "./layout/dashboard/header";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NextTopLoader color="hsl(var(--primary))" showSpinner={false} height={2} shadow-sm="none" />
      <div className="flex">
        <div className="w-full flex-1">
          <Header />
          <main className="min-h-full p-4 lg:container lg:pt-10">{children}</main>
        </div>
      </div>
    </>
  );
}
