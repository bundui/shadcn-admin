"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLinkIcon } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "50+", label: "Components" },
  { value: "20+", label: "Page Templates" },
  { value: "1k+", label: "Happy Customers" },
  { value: "99%", label: "Satisfaction Rate" }
];

export const HeroSection = () => {
  return (
    <section className="relative -mt-20 w-full bg-gradient-to-r from-gray-300 to-blue-50 px-4">
      <div className="relative mx-auto grid place-items-center pt-28 md:pt-40 lg:max-w-(--breakpoint-xl)">
        <div className="space-y-10 pb-20 text-center lg:max-w-(--breakpoint-md)">
          <div className="space-y-4">
            <h1 className="text-4xl leading-12 font-bold md:text-5xl lg:leading-16">
              Multipurpose Tailwind CSS Admin Dashboard Template
            </h1>
            <p className="text-muted-foreground mx-auto text-xl text-balance">
              Admin dashboard template built with <b>Shadcn UI</b>, <b>Tailwind CSS</b> and{" "}
              <b>Next.js</b> (React) to quickly start your project. Contains Typescript files.
            </p>
          </div>

          <div className="space-x-4">
            <Button size="lg" asChild>
              <Link href="/ecommerce">
                Live Preview
                <ExternalLinkIcon />
              </Link>
            </Button>
            <Button size="lg" asChild variant="secondary">
              <Link href="/pricing">Get Shadcn Admin</Link>
            </Button>
          </div>

          <div className="bg-muted/40 mx-auto grid max-w-2xl grid-cols-2 gap-8 rounded-xl p-4 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <figure className="relative aspect-video w-full">
          <img
            className="rouded-lg bg-muted relative mx-auto flex w-full items-center rounded-lg border mask-b-from-50% mask-b-to-90% object-cover p-2 leading-none dark:hidden"
            src="/hero.png"
            alt="shadcn admin dashboard landing page"
          />
        </figure>
      </div>
    </section>
  );
};
