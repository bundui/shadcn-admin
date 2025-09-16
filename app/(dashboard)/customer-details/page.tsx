import { Metadata } from "next";
import { generateMeta } from "@/lib/generate-meta";
import {
  Edit,
  Facebook,
  Linkedin,
  MessageCircle,
  PinIcon as Pinterest,
  Trash2,
  Twitter
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export async function generateMetadata(): Promise<Metadata> {
  return generateMeta({
    title: "Customer Details",
    description:
      "A customer detail page is a page displaying individual customer information, history, and interactions. Built with shadcn/ui, Tailwind CSS, Next.js, Vue.js, and React. Typescript is supported.",
    canonical: "/customer-details"
  });
}

export default function Page() {
  return (
    <div className="p-6">
      <div className="grid gap-6 lg:grid-cols-[350px_1fr]">
        <Card className="h-fit">
          <CardContent className="p-6">
            <div className="flex flex-col items-center space-y-4">
              {/* Edit Icon */}
              <div className="relative w-full">
                <Button variant="ghost" size="icon" className="absolute top-0 right-0 h-8 w-8">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>

              {/* Profile Image */}
              <div className="relative h-24 w-24 overflow-hidden rounded-full">
                <Avatar className="mx-auto h-20 w-20">
                  <AvatarImage
                    src={
                      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=72&h=72&fit=crop&crop=face"
                    }
                    alt={"..."}
                  />
                  <AvatarFallback className="text-lg">AC</AvatarFallback>
                </Avatar>
              </div>

              {/* Customer Name */}
              <h2 className="text-xl font-semibold text-gray-900">Angelina Gotelli</h2>

              {/* Customer Details */}
              <div className="w-full space-y-4 text-sm">
                <div>
                  <p className="text-gray-500">Email</p>
                  <p className="font-medium text-gray-900">carolyn_h@hotmail.com</p>
                </div>

                <div>
                  <p className="text-gray-500">Phone</p>
                  <p className="font-medium text-gray-900">+12-123-1234</p>
                </div>

                <div>
                  <p className="text-gray-500">Date of birth</p>
                  <p className="font-medium text-gray-900">10/10/1992</p>
                </div>

                <div>
                  <p className="text-gray-500">Last Online</p>
                  <p className="font-medium text-gray-900">12 Aug 2024 05:40 AM</p>
                </div>

                <div>
                  <p className="mb-2 text-gray-500">Social</p>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon" className="h-8 w-8 bg-transparent">
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8 bg-transparent">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8 bg-transparent">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8 bg-transparent">
                      <Pinterest className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="w-full space-y-2 pt-4">
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-red-200 bg-transparent text-red-600 hover:bg-red-50">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="space-y-6">
          <Tabs defaultValue="billing" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="billing">Billing</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>

            <TabsContent value="billing" className="space-y-6">
              {/* Purchase History */}
              <Card>
                <CardHeader>
                  <CardTitle>Purchase history</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-gray-100 py-3 last:border-b-0">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">Acme pro plan (monthly)</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                          Pending
                        </Badge>
                        <span className="text-sm text-gray-500">02/09/2025</span>
                        <span className="font-medium text-gray-900">$59.90</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-b border-gray-100 py-3 last:border-b-0">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">Acme pro plan (monthly)</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          Paid
                        </Badge>
                        <span className="text-sm text-gray-500">01/13/2025</span>
                        <span className="font-medium text-gray-900">$59.90</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between py-3">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">Acme pro plan (monthly)</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          Paid
                        </Badge>
                        <span className="text-sm text-gray-500">12/13/2024</span>
                        <span className="font-medium text-gray-900">$59.90</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Addresses */}
              <Card>
                <CardHeader>
                  <CardTitle>Addresses</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="mb-3 font-medium text-gray-900">Billing Address</h4>
                      <div className="text-muted-foreground space-y-1 text-sm">
                        <p>123 Main St</p>
                        <p>New York</p>
                        <p>10001</p>
                        <p>United States</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-3 font-medium text-gray-900">Delivery Address</h4>
                      <div className="text-muted-foreground space-y-1 text-sm">
                        <p>123 Main St</p>
                        <p>New York</p>
                        <p>10001</p>
                        <p>United States</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Methods */}
              <Card>
                <CardHeader>
                  <CardTitle>Payment Methods</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex h-5 w-8 items-center justify-center rounded bg-blue-600">
                          <span className="text-xs font-bold text-white">VISA</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Angelina Gotelli •••• 0392</p>
                          <p className="text-sm text-gray-500">Expired Dec 2025</p>
                        </div>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                          Primary
                        </Badge>
                      </div>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </div>

                    <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex h-5 w-8 items-center justify-center rounded bg-gradient-to-r from-red-500 to-yellow-500">
                          <div className="h-3 w-3 rounded-full bg-red-500"></div>
                          <div className="-ml-1 h-3 w-3 rounded-full bg-yellow-500"></div>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Angelina Gotelli •••• 8461</p>
                          <p className="text-sm text-gray-500">Expired Jun 2025</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="activity">
              <Card>
                <CardContent className="p-6">
                  <p className="text-center text-gray-500">Activity content would go here...</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
