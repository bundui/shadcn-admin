import { Metadata } from "next";
import Image from "next/image";
import { generateMeta } from "@/lib/generate-meta";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Logo from "@/components/layout/logo";

export async function generateMetadata(): Promise<Metadata> {
  return generateMeta({
    title: "Order Receipt",
    description:
      "An order receipt page is a page that displays purchase details and confirms a completed transaction. Built with shadcn/ui, Tailwind CSS, Next.js, Vue.js, and React. Typescript is supported.",
    canonical: "/order-receipt"
  });
}

// Mock data for the order
const orderItems = [
  {
    id: 1,
    name: "Cloud Shift Lightweight Runner Pro Edition",
    sku: "BT-A1-YLW-8",
    price: 120.0,
    quantity: 1,
    image: "https://bundui-images.netlify.app/products/01.jpeg"
  },
  {
    id: 2,
    name: "Titan Edge High Impact Stability Lightweight..",
    sku: "SNK-888-RED-42",
    price: 99.0,
    quantity: 1,
    image: "https://bundui-images.netlify.app/products/02.jpeg"
  },
  {
    id: 3,
    name: "Cloud Shift Lightweight Runner Pro Edition",
    sku: "SD-999-TAN-38",
    price: 120.0,
    quantity: 1,
    image: "https://bundui-images.netlify.app/products/02.jpeg"
  },
  {
    id: 4,
    name: "Cloud Shift Lightweight Runner Pro Edition",
    sku: "SD-Z9-BRN-39",
    originalPrice: 179.0,
    price: 149.0,
    quantity: 1,
    image: "https://bundui-images.netlify.app/products/04.jpeg",
    discount: "SAVE 25%"
  }
];

const orderDetails = {
  orderId: "X319330-S24",
  orderDate: "26 June, 2025",
  total: 512.6,
  shipTo: "Jeroen van Dijk",
  estimatedDelivery: "07 July, 2025"
};

export default function ThanksPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-4xl px-4">
        {/* Gradient border card */}
        <Card className="relative overflow-hidden">
          {/* Gradient border */}
          <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-purple-500 via-green-500 to-yellow-500" />

          <CardContent className="p-8">
            {/* Logo/Brand */}
            <div className="mb-8 text-center">
              <div className="mb-6 flex items-center justify-center gap-2">
                <Logo />
                <span className="text-xl font-bold">Shadcn Admin</span>
              </div>

              {/* Main heading */}
              <h1 className="mb-4 text-3xl font-bold">Order Confirmation</h1>
              <p className="text-muted-foreground">
                Thank you! Your order #{orderDetails.orderId} is confirmed and being processed.
              </p>
            </div>

            {/* Order items */}
            <div className="space-y-4">
              {orderItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 rounded-lg bg-gray-50 p-4">
                  <Image
                    src={item.image || "/avatars/08.jpeg"}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                    <p className="text-muted-foreground text-sm">SKU: {item.sku}</p>
                    {item.discount && (
                      <Badge variant="destructive" className="mt-1 text-xs">
                        {item.discount}
                      </Badge>
                    )}
                  </div>
                  <div className="text-center">
                    <p className="text-muted-foreground text-sm">{item.quantity}x</p>
                  </div>
                  <div className="text-right">
                    {item.originalPrice && (
                      <p className="text-sm text-gray-500 line-through">
                        ${item.originalPrice.toFixed(2)}
                      </p>
                    )}
                    <p className="font-semibold text-gray-900">${item.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            <Separator className="my-6" />

            {/* Order summary */}
            <div className="mb-8 grid grid-cols-2 gap-6 md:grid-cols-4">
              <div>
                <p className="text-muted-foreground mb-1 text-sm font-medium">Order placed</p>
                <p className="font-semibold text-gray-900">{orderDetails.orderDate} ID</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1 text-sm font-medium">Total</p>
                <p className="font-semibold text-gray-900">${orderDetails.total.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1 text-sm font-medium">Ship to</p>
                <p className="font-semibold text-gray-900">{orderDetails.shipTo}</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1 text-sm font-medium">Estimated Delivery</p>
                <p className="font-semibold text-gray-900">{orderDetails.estimatedDelivery}</p>
              </div>
            </div>

            {/* Action button */}
            <div className="text-center">
              <Button variant="outline" className="bg-transparent">
                📋 My Orders
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
