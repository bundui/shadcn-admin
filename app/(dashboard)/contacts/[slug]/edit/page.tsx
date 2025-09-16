import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

export default async function Page() {
  return (
    <div className="h-[calc(100vh-3rem)]">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left Column - Form */}
        <div className="space-y-8">
          {/* General Info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">General Info</CardTitle>
              <CardDescription>General and contact information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="Albert" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="McDoe" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="prefix">Prefix</Label>
                  <Select defaultValue="mr">
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mr">Mr.</SelectItem>
                      <SelectItem value="mrs">Mrs.</SelectItem>
                      <SelectItem value="ms">Ms.</SelectItem>
                      <SelectItem value="dr">Dr.</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="credentials">Credentials / Suffix</Label>
                  <Input id="credentials" placeholder="e.g., PhD" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Contact Info</CardTitle>
              <CardDescription>This information is hidden from clients.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="albert@email.com/redacted"
                  className="text-gray-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="flex gap-2">
                  <Input id="phone" type="tel" defaultValue="(647) 86-1744" className="flex-1" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Profile Management */}
        <div className="space-y-8">
          {/* Team Member Profile Picture */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Team Member Profile Picture</CardTitle>
              <CardDescription>Upload a profile picture for this team member.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative inline-block">
                <div className="relative h-32 w-32 overflow-hidden rounded-full bg-gray-200">
                  <Image
                    src="/avatars/01.jpeg"
                    alt="Profile picture"
                    width={128}
                    height={128}
                    className="h-full w-full object-cover"
                    unoptimized
                  />
                </div>
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-0 right-0 h-7 w-7 rounded-full">
                  <XIcon className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Archive Team Member */}
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-lg">Archive Team Member</CardTitle>
              <CardDescription>
                Team Member will no longer be visible. This action can be undone.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                className="w-full border-orange-300 bg-transparent text-orange-700 hover:bg-orange-100">
                Archive Team Member
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex justify-end gap-3">
        <Button variant="outline">Cancel</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  );
}
