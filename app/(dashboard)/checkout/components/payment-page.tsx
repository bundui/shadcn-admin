"use client";

import { useState } from "react";
import { ShoppingCart, CreditCard, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { useCheckoutStore, useCartTotals } from "../store";
import { CheckoutSteps } from "./checkout-steps";

export function PaymentPage() {
  const { paymentMethod, setPaymentMethod, setStep } = useCheckoutStore();
  const { subtotal, tax, finalTotal } = useCartTotals();
  const [cardDetails, setCardDetails] = useState({ number: "", name: "", expiry: "", cvv: "" });

  return (
    <div className="min-h-screen p-4">
      <div className="mx-auto max-w-5xl space-y-4">
        <CheckoutSteps />

        <div className="grid items-start gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardContent>
                <div className="mb-6 flex items-center gap-2">
                  <CreditCard className="text-muted-foreground size-4" />
                  <span className="text-foreground font-semibold">Select Payment Method</span>
                </div>

                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div
                    className={`rounded-lg border p-4 ${paymentMethod === "card" ? "border-primary bg-primary/5" : "border-border"}`}>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex items-center gap-2 font-medium">
                        <CreditCard className="h-5 w-5" />
                        Credit / Debit Card
                      </Label>
                    </div>
                    {paymentMethod === "card" && (
                      <div className="mt-4 grid gap-4 pl-6">
                        <div className="grid gap-2">
                          <Label>Card Number</Label>
                          <Input
                            placeholder="1234 5678 9012 3456"
                            value={cardDetails.number}
                            onChange={(e) =>
                              setCardDetails({ ...cardDetails, number: e.target.value })
                            }
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label>Name on Card</Label>
                          <Input
                            placeholder="John Doe"
                            value={cardDetails.name}
                            onChange={(e) =>
                              setCardDetails({ ...cardDetails, name: e.target.value })
                            }
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label>Expiry Date</Label>
                            <Input
                              placeholder="MM/YY"
                              value={cardDetails.expiry}
                              onChange={(e) =>
                                setCardDetails({ ...cardDetails, expiry: e.target.value })
                              }
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label>CVV</Label>
                            <Input
                              placeholder="123"
                              type="password"
                              value={cardDetails.cvv}
                              onChange={(e) =>
                                setCardDetails({ ...cardDetails, cvv: e.target.value })
                              }
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div
                    className={`rounded-lg border p-4 ${paymentMethod === "netbanking" ? "border-primary bg-primary/5" : "border-border"}`}>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="netbanking" id="netbanking" />
                      <Label htmlFor="netbanking" className="flex items-center gap-2 font-medium">
                        <Building2 className="h-5 w-5" />
                        Net Banking
                      </Label>
                    </div>
                  </div>

                  <div
                    className={`rounded-lg border p-4 ${paymentMethod === "cod" ? "border-primary bg-primary/5" : "border-border"}`}>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="cod" id="cod" />
                      <Label htmlFor="cod" className="font-medium">
                        Cash on Delivery
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent>
              <h3 className="text-foreground mb-4 font-semibold">Order Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
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
                  <span className="text-foreground">Total</span>
                  <span className="text-foreground">${finalTotal.toFixed(2)}</span>
                </div>
              </div>
              <div className="mt-6 flex gap-2">
                <Button variant="outline" onClick={() => setStep(2)}>
                  Back
                </Button>
                <Button className="flex-1" onClick={() => setStep(4)}>
                  Pay ${finalTotal.toFixed(2)}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
