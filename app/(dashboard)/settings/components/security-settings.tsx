"use client";

import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function SecuritySettings() {
  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle>Password</CardTitle>
        <CardDescription>
          Remember, your password is your digital key to your account. Keep it safe, keep it secure!
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label htmlFor="currentPassword">Current password</Label>
            <Input id="currentPassword" type="password" defaultValue="********" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="newPassword">New password</Label>
            <Input id="newPassword" type="password" defaultValue="********" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm new password</Label>
            <Input id="confirmPassword" type="password" defaultValue="********" />
          </div>
          <Button className="ml-auto w-fit">Update</Button>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">2-Step verification</h3>
          <p className="text-muted-foreground text-sm">
            Your account holds great value to hackers. Enable two-step verification to safeguard
            your account!
          </p>
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image src="/avatars/08.jpeg" alt="Google Authenticator" width={24} height={24} />
                <div>
                  <p className="font-medium">Google Authenticator</p>
                  <p className="text-muted-foreground text-sm">
                    Using Google Authenticator app generates time-sensitive codes for secure logins.
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                className="border-green-200 bg-green-100 text-green-700 hover:bg-green-200">
                Activated
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image src="/avatars/08.jpeg" alt="Okta Verify" width={24} height={24} />
                <div>
                  <p className="font-medium">Okta Verify</p>
                  <p className="text-muted-foreground text-sm">
                    Receive push notifications from Okta Verify app on your phone for quick login
                    approval.
                  </p>
                </div>
              </div>
              <Button variant="outline">Enable</Button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image src="/avatars/08.jpeg" alt="Email verification" width={24} height={24} />
                <div>
                  <p className="font-medium">E Mail verification</p>
                  <p className="text-muted-foreground text-sm">
                    Unique codes sent to email for confirming logins.
                  </p>
                </div>
              </div>
              <Button variant="outline">Enable</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
