"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function IntegrationSettings() {
  const integrations = [
    {
      name: "Google Drive",
      description: "Upload your files to Google Drive",
      logoQuery: "Google Drive logo",
      enabled: true
    },
    {
      name: "Slack",
      description: "Post to a Slack channel",
      logoQuery: "Slack logo",
      enabled: true
    },
    {
      name: "Notion",
      description: "Retrieve notion note to your project",
      logoQuery: "Notion logo",
      enabled: false
    },
    {
      name: "Jira",
      description: "Create Jira issues",
      logoQuery: "Jira logo",
      enabled: false
    },
    {
      name: "Zendesk",
      description: "Exchange data with Zendesk",
      logoQuery: "Zendesk logo",
      enabled: false
    },
    {
      name: "Dropbox",
      description: "Exchange files with a Dropbox account",
      logoQuery: "Dropbox logo",
      enabled: false
    },
    {
      name: "Github",
      description: "Exchange files with a GitHub repository",
      logoQuery: "Github logo",
      enabled: false
    },
    {
      name: "Gitlab",
      description: "Exchange files with a GitLab repository",
      logoQuery: "Gitlab logo",
      enabled: false
    }
  ];

  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle>Integration</CardTitle>
        <CardDescription>Supercharge your workflow using these integration</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {integrations.map((integration) => (
          <div key={integration.name} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src={`/avatars/07.jpeg&query=${integration.logoQuery}`}
                alt={`${integration.name} logo`}
                width={32}
                height={32}
              />
              <div>
                <Label className="font-medium">{integration.name}</Label>
                <p className="text-muted-foreground text-sm">{integration.description}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-primary flex items-center gap-1 text-sm">
                Learn more
                <ExternalLink className="h-3 w-3" />
              </a>
              <Switch defaultChecked={integration.enabled} />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
