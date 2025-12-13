"use client";

import { ShoppingCart, CheckCircle2, Package, Truck, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCheckoutStore, useCartTotals } from "../store";
import { CheckoutSteps } from "./checkout-steps";

export function ConfirmationPage() {
  const { setStep } = useCheckoutStore();
  const { subtotal, tax, finalTotal, itemCount } = useCartTotals();
  const orderNumber = "ORD-2024-001234";

  return (
    <div className="min-h-screen p-4">
      <div className="mx-auto max-w-5xl space-y-4">
        <CheckoutSteps />

        <div className="grid items-start gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="bg-success/10 flex h-20 w-20 items-center justify-center rounded-full">
                    <CheckCircle2 className="text-success h-12 w-12" />
                  </div>
                </div>
                <h2 className="text-foreground mb-2 text-2xl font-bold">
                  Order Placed Successfully!
                </h2>
                <p className="text-muted-foreground">
                  Thank you for your purchase. Your order has been confirmed.
                </p>
                <div className="bg-muted mt-6 rounded-lg p-4">
                  <p className="text-muted-foreground text-sm">Order Number</p>
                  <p className="text-foreground text-lg font-semibold">{orderNumber}</p>
                </div>

                <Separator className="my-6" />

                <div className="space-y-4">
                  <h3 className="text-foreground font-semibold">What happens next?</h3>
                  {[
                    {
                      icon: Package,
                      title: "Order Processing",
                      desc: "We're preparing your items for shipment"
                    },
                    {
                      icon: Truck,
                      title: "Shipping",
                      desc: "Your order will be shipped within 1-2 business days"
                    },
                    {
                      icon: MapPin,
                      title: "Delivery",
                      desc: "Estimated delivery: 3-5 business days"
                    }
                  ].map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="flex items-start gap-4 text-left">
                      <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
                        <Icon className="text-primary h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-foreground font-medium">{title}</p>
                        <p className="text-muted-foreground text-sm">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Card>
              <CardContent>
                <h3 className="text-foreground mb-4 font-semibold">Order Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Items ({itemCount})</span>
                    <span className="text-foreground">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-success">Free</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax (8%)</span>
                    <span className="text-foreground">${tax.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span className="text-foreground">Total Paid</span>
                    <span className="text-foreground">${finalTotal.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <h3 className="text-foreground mb-4 font-semibold">Delivery Address</h3>
                <p className="text-foreground text-sm">John Doe</p>
                <p className="text-muted-foreground text-sm">123 Main Street, Apt 4B</p>
                <p className="text-muted-foreground text-sm">New York, NY 10001</p>
                <p className="text-muted-foreground text-sm">+1 234 567 8900</p>
              </CardContent>
            </Card>

            <Button className="w-full" onClick={() => setStep(1)}>
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
