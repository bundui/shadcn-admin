"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

export function NotificationSettings() {
  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle>Notification</CardTitle>
        <CardDescription>Manage your notification preferences.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="desktop-notifications" className="font-medium">
              Enable desktop notification
            </Label>
            <p className="text-muted-foreground text-sm">
              Decide whether you want to be notified of new message & updates
            </p>
          </div>
          <Switch id="desktop-notifications" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="unread-badge" className="font-medium">
              Enable unread notification badge
            </Label>
            <p className="text-muted-foreground text-sm">
              Display a red indicator on of the notification icon when you have unread message
            </p>
          </div>
          <Switch id="unread-badge" />
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">Enable unread notification badge</h3>
          <RadioGroup defaultValue="mentions-only" className="space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all-messages" id="all-messages" />
              <Label htmlFor="all-messages">All new messages</Label>
              <p className="text-muted-foreground ml-auto text-sm">
                Broadcast notifications to the channel for each new message
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="mentions-only" id="mentions-only" />
              <Label htmlFor="mentions-only">Mentions only</Label>
              <p className="text-muted-foreground ml-auto text-sm">
                Only alert me in the channel if someone mentions me in a message
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="nothing" id="nothing" />
              <Label htmlFor="nothing">Nothing</Label>
              <p className="text-muted-foreground ml-auto text-sm">Don&apos;t notify me anything</p>
            </div>
          </RadioGroup>
        </div>

        <Separator />

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Email notification</h3>
              <p className="text-muted-foreground text-sm">
                Substance can send you email notification for any new direct message
              </p>
            </div>
            <Switch id="email-notifications" defaultChecked />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="news-updates" defaultChecked />
              <Label htmlFor="news-updates">News & updates</Label>
              <p className="text-muted-foreground ml-auto text-sm">
                New about product and features update
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="tips-tutorials" defaultChecked />
              <Label htmlFor="tips-tutorials">Tips & tutorials</Label>
              <p className="text-muted-foreground ml-auto text-sm">
                Tips & trick in order to increase your performance efficiency
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="offer-promotions" />
              <Label htmlFor="offer-promotions">Offer & promotions</Label>
              <p className="text-muted-foreground ml-auto text-sm">
                Promotion about product price & fastest discount
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="follow-up-reminder" />
              <Label htmlFor="follow-up-reminder">Follow up remider</Label>
              <p className="text-muted-foreground ml-auto text-sm">
                Receive notification all the reminder that have been made
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
