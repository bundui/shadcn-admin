"use client";

import { ShoppingCart, Star, Trash2, Heart, Minus, Plus, Gift, GiftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { useCheckoutStore, useCartTotals } from "../store";
import { CheckoutSteps } from "./checkout-steps";

export function Cart() {
  const {
    cartItems,
    promoCode,
    appliedPromo,
    updateQuantity,
    removeItem,
    applyPromo,
    removePromo,
    setPromoCode,
    setStep
  } = useCheckoutStore();
  const {
    bagTotal,
    couponDiscount,
    orderTotal,
    deliveryCharges,
    subtotal,
    tax,
    finalTotal,
    totalSavings,
    itemCount,
    isCartEmpty
  } = useCartTotals();

  return (
    <div className="min-h-screen p-4">
      <div className="mx-auto max-w-5xl space-y-4">
        <CheckoutSteps />

        <div className="grid items-start gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex gap-2">
                  <ShoppingCart className="text-muted-foreground size-4" /> My Cart{" "}
                  <span className="text-muted-foreground">({itemCount} items)</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isCartEmpty ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <ShoppingCart className="text-muted-foreground/50 mb-4 h-16 w-16" />
                    <h3 className="text-foreground text-lg font-medium">Your cart is empty</h3>
                    <p className="text-muted-foreground mt-1 text-sm">
                      Add some products to continue shopping.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item, index) => (
                      <div key={item.id}>
                        <div className="flex gap-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-24 w-24 rounded-lg object-cover"
                          />
                          <div className="flex flex-1 flex-col justify-between">
                            <div>
                              <h3 className="text-foreground font-medium">{item.name}</h3>
                              <div className="mt-1 flex items-center gap-1">
                                <Star className="fill-warning text-warning h-4 w-4" />
                                <span className="text-foreground text-sm">{item.rating}</span>
                                <span className="text-muted-foreground text-sm">
                                  ({item.reviews})
                                </span>
                              </div>
                              <div className="mt-1 flex items-center gap-2">
                                <span className="text-foreground font-semibold">
                                  ${item.price.toFixed(2)}
                                </span>
                                <span className="text-muted-foreground text-sm line-through">
                                  ${item.originalPrice.toFixed(2)}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col gap-2">
                            {item.size && (
                              <div className="flex items-center gap-2">
                                <span className="text-muted-foreground text-sm">Size:</span>
                                <Select defaultValue={item.size}>
                                  <SelectTrigger className="w-24">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="50 ml">50 ml</SelectItem>
                                    <SelectItem value="100 ml">100 ml</SelectItem>
                                    <SelectItem value="150 ml">150 ml</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            )}
                            {item.color && (
                              <div className="flex items-center gap-2">
                                <span className="text-muted-foreground text-sm">Color:</span>
                                <Select defaultValue={item.color}>
                                  <SelectTrigger className="w-24">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="Brown">
                                      <div className="flex items-center gap-2">
                                        <div className="h-3 w-3 rounded-full bg-amber-700" />
                                        Brown
                                      </div>
                                    </SelectItem>
                                    <SelectItem value="Black">
                                      <div className="flex items-center gap-2">
                                        <div className="h-3 w-3 rounded-full bg-black" />
                                        Black
                                      </div>
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            )}
                            <div className="flex items-center gap-2">
                              <span className="text-muted-foreground text-sm">Qty:</span>
                              <div className="flex items-center gap-1 rounded-md border">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => updateQuantity(item.id, -1)}>
                                  <Minus className="h-3 w-3" />
                                </Button>
                                <span className="w-6 text-center text-sm">{item.quantity}</span>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => updateQuantity(item.id, 1)}>
                                  <Plus className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col items-end gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-destructive hover:text-destructive"
                              onClick={() => removeItem(item.id)}>
                              <Trash2 className="mr-1 h-4 w-4" />
                              Delete
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Heart className="text-primary mr-1 h-4 w-4" />
                              Move to wishlist
                            </Button>
                          </div>
                        </div>
                        {index < cartItems.length - 1 && <Separator className="my-4" />}
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Card>
              <CardContent>
                {totalSavings > 0 && (
                  <div className="flex items-center justify-center gap-2 text-sm text-green-600">
                    <GiftIcon className="size-4 lg:size-5" /> You are saving $
                    {totalSavings.toFixed(2)} on this order
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <h3 className="text-foreground mb-4 font-semibold">Order details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Bag total</span>
                    <span className="text-foreground">${bagTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Coupon discount</span>
                    <span className="text-success">-${couponDiscount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Order total</span>
                    <span className="text-foreground">${orderTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">Delivery charges</span>
                      {deliveryCharges > 0 && (
                        <Badge variant="outline" className="text-xs">
                          Free
                        </Badge>
                      )}
                    </div>
                    <span className="text-success">-${deliveryCharges.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground">${subtotal.toFixed(2)}</span>
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
                <Button className="mt-4 w-full" onClick={() => setStep(2)} disabled={isCartEmpty}>
                  Place Order
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <h4 className="text-foreground mb-3 font-semibold">Offer</h4>
                {appliedPromo ? (
                  <div className="border-success bg-success/10 flex items-center justify-between rounded-md border px-3 py-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="border-success text-success">
                        SAVE10
                      </Badge>
                      <span className="text-success text-sm">10% discount applied</span>
                    </div>
                    <Button variant="ghost" size="sm" onClick={removePromo}>
                      Remove
                    </Button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <Button variant="ghost" onClick={applyPromo}>
                      Apply
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <h4 className="text-foreground font-semibold">10% Instant Discount</h4>
                <p className="text-muted-foreground mt-1 text-sm">
                  Shop for $99 and get flat 10% off on Bank of America Corp Bank Debit and Credit
                  cards
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <Badge variant="outline" className="border-primary border-dashed px-3 py-1">
                    SAVE10
                  </Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setPromoCode("SAVE10");
                      useCheckoutStore.getState().applyPromo();
                    }}>
                    Apply
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckoutHeader() {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-lg">
        <ShoppingCart className="text-primary-foreground h-5 w-5" />
      </div>
      <div>
        <h1 className="text-foreground text-2xl font-bold">Checkout</h1>
        <p className="text-muted-foreground text-sm">New way to shopping your collections</p>
      </div>
    </div>
  );
}
