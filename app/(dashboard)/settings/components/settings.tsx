"use client";

import { useState } from "react";
import { User, Lock, Bell, CreditCard, Puzzle } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ProfileSettings } from "./profile-settings";
import { SecuritySettings } from "./security-settings";
import { NotificationSettings } from "./notification-settings";
import { BillingSettings } from "./billing-settings";
import { IntegrationSettings } from "./integration-settings";

type Section = "profile" | "security" | "notifications" | "billing" | "integrations";

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState<Section>("profile");

  const renderSection = () => {
    switch (activeSection) {
      case "profile":
        return <ProfileSettings />;
      case "security":
        return <SecuritySettings />;
      case "notifications":
        return <NotificationSettings />;
      case "billing":
        return <BillingSettings />;
      case "integrations":
        return <IntegrationSettings />;
      default:
        return <ProfileSettings />;
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex w-full max-w-6xl">
        {/* Sidebar Navigation */}
        <aside className="w-64 shrink-0 space-y-2 border-r p-6">
          <h2 className="mb-4 text-lg font-semibold">Settings</h2>
          <nav className="space-y-1">
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start gap-2",
                activeSection === "profile" && "text-primary bg-gray-100"
              )}
              onClick={() => setActiveSection("profile")}>
              <User className="h-5 w-5" />
              Profile
            </Button>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start gap-2",
                activeSection === "security" && "text-primary bg-gray-100"
              )}
              onClick={() => setActiveSection("security")}>
              <Lock className="h-5 w-5" />
              Security
            </Button>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start gap-2",
                activeSection === "notifications" && "text-primary bg-gray-100"
              )}
              onClick={() => setActiveSection("notifications")}>
              <Bell className="h-5 w-5" />
              Notification
            </Button>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start gap-2",
                activeSection === "billing" && "text-primary bg-gray-100"
              )}
              onClick={() => setActiveSection("billing")}>
              <CreditCard className="h-5 w-5" />
              Billing
            </Button>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start gap-2",
                activeSection === "integrations" && "text-primary bg-gray-100"
              )}
              onClick={() => setActiveSection("integrations")}>
              <Puzzle className="h-5 w-5" />
              Integration
            </Button>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto p-6">{renderSection()}</main>
      </div>
    </div>
  );
}
