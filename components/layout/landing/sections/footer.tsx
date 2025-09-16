import Link from "next/link";
import Logo from "@/components/layout/logo";
import { Github, Twitter } from "lucide-react";
import React from "react";
import { Separator } from "@/components/ui/separator";

export const FooterSection = () => {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <Logo className="mb-4 flex items-center gap-2" />
            <p className="text-muted-foreground text-balance">
              The most comprehensive and modern admin dashboard template. Built with React,
              TypeScript, and Tailwind CSS for maximum performance and customization. shadcn/ui is
              compatible.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Sources</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-primary transition-colors hover:underline">
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/ecommerce"
                  className="hover:text-primary transition-colors hover:underline">
                  Live Demo
                </Link>
              </li>
              <li>
                <Link href="/" className="transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/roadmap"
                  className="hover:text-primary transition-colors hover:underline">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link
                  href="/updates"
                  className="hover:text-primary transition-colors hover:underline">
                  Updates
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Legal</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>
                <Link href="/licenses" className="transition-colors">
                  Licenses
                </Link>
              </li>
              <li className="hover:text-primary cursor-pointer transition-colors hover:underline">
                Privacy Policy
              </li>
              <li className="hover:text-primary cursor-pointer transition-colors hover:underline">
                Terms of Service
              </li>
              <li className="hover:text-primary cursor-pointer transition-colors hover:underline">
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors hover:underline">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator />

        <div className="text-muted-foreground text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Shadcn Admin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
