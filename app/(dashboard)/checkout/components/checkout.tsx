"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, ChevronLeft, CreditCard, Plus, ShoppingCart, Truck, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Mock data
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
    image: "https://bundui-images.netlify.app/products/03.jpeg"
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

const addresses = [
  {
    id: 1,
    name: "Jeroen's Home",
    recipient: "Jeroen van Dijk",
    address: "1016 DWKeizersgracht 172",
    city: "Amsterdam",
    country: "Netherlands",
    phone: "+31612345678",
    isSelected: true
  },
  {
    id: 2,
    name: "Sophie's Office",
    recipient: "Sophie de Vries",
    address: "2517 ANLaan van Meerdervoort 88",
    city: "The Hague",
    country: "Netherlands",
    phone: "+31687654321"
  },
  {
    id: 3,
    name: "Jeroen's Home",
    recipient: "Jeroen van Dijk",
    address: "1016 DWKeizersgracht 172",
    city: "Amsterdam",
    country: "Netherlands",
    phone: "+31612345678"
  },
  {
    id: 4,
    name: "Emma's Apartment",
    recipient: "Emma van den Berg",
    address: "1054 GJVondelstreet 45",
    city: "Amsterdam",
    country: "Netherlands",
    phone: "+31623456789"
  }
];

const paymentMethods = [
  {
    id: 1,
    type: "visa",
    name: "Jeroen's Visa",
    details: "Jeroen van Dijk\nEnding 3604 Expires on 12/2026",
    isSelected: true
  },
  {
    id: 2,
    type: "ideal",
    name: "Sophie's iDeal",
    details: "Sophie de Vries\niDeal with ABN Ambro"
  },
  {
    id: 3,
    type: "paypal",
    name: "Emma's Paypal",
    details: "Emma van den Berg\nemma@reui.io"
  },
  {
    id: 4,
    type: "amex",
    name: "Bob's American Express",
    details: "Bob van den Berg\nbob@reui.io"
  }
];

const steps = [
  { id: 1, name: "Order Summary", icon: ShoppingCart },
  { id: 2, name: "Shipping Info", icon: Truck },
  { id: 3, name: "Payment Method", icon: CreditCard },
  { id: 4, name: "Order Placed", icon: Check },
  { id: 5, name: "Thank You", icon: Check }
];

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedAddress, setSelectedAddress] = useState(1);
  const [selectedPayment, setSelectedPayment] = useState(1);

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0;
  const vat = 0;
  const total = subtotal + shipping + vat;

  const selectedAddressData = addresses.find((addr) => addr.id === selectedAddress);
  const selectedPaymentData = paymentMethods.find((payment) => payment.id === selectedPayment);

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepIndicator = () => (
    <div className="mb-8 flex w-full items-center px-4">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
              currentStep > step.id
                ? "border-green-500 bg-green-500 text-white"
                : currentStep === step.id
                  ? "border-blue-500 bg-blue-500 text-white"
                  : "text-muted-foreground border-gray-300 bg-gray-100"
            }`}>
            <step.icon className="h-5 w-5" />
          </div>
          <span
            className={`ml-2 text-sm font-medium ${currentStep >= step.id ? "text-muted-foreground" : "text-muted-foreground"}`}>
            {step.name}
          </span>
          {index < steps.length - 1 && (
            <div
              className={`mx-4 h-0.5 w-8 ${currentStep > step.id ? "bg-green-500" : "bg-gray-300"}`}
            />
          )}
        </div>
      ))}
    </div>
  );

  const renderOrderSummary = () => (
    <div className="mx-auto px-4">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Order Summary</h1>
              <p className="text-muted-foreground text-sm">Review your items before checkout</p>
            </div>
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <ShoppingCart className="h-4 w-4" />
              View Cart
            </Button>
          </div>

          <div className="space-y-4">
            {orderItems.map((item) => (
              <Card key={item.id} className="p-0">
                <CardContent className="flex gap-4">
                  <Image
                    src={item.image || "/avatars/08.jpeg"}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-muted-foreground text-sm">SKU: {item.sku}</p>
                    {item.discount && (
                      <Badge variant="destructive" className="mt-1">
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
                    <p className="font-semibold">${item.price.toFixed(2)}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">Price Details</h4>
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(1)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(1)}</span>
                </div>
                <div className="flex justify-between">
                  <span>VAT</span>
                  <span>${vat.toFixed(1)}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <Button onClick={handleNext} className="flex items-center gap-2">
          Shipping Info
          <ChevronLeft className="rotate-180" />
        </Button>
      </div>
    </div>
  );

  const renderShippingInfo = () => (
    <div className="px-4">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Shipping Info</h1>
              <p className="text-muted-foreground text-sm">
                Enter and confirm your delivery address
              </p>
            </div>
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <User className="h-4 w-4" />
              Add Address
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {addresses.map((address) => (
              <Card
                key={address.id}
                className={`cursor-pointer p-0 transition-colors ${
                  selectedAddress === address.id ? "ring-2 ring-blue-500" : ""
                }`}
                onClick={() => setSelectedAddress(address.id)}>
                <CardContent>
                  <div className="mb-2 flex items-start justify-between">
                    <h3 className="font-medium">{address.name}</h3>
                    {selectedAddress === address.id && (
                      <Badge className="bg-green-100 text-green-800">Ship here</Badge>
                    )}
                  </div>
                  <div className="text-muted-foreground space-y-1 text-sm">
                    <p className="font-medium text-gray-900">{address.recipient}</p>
                    <p>{address.address}</p>
                    <p>{address.city}</p>
                    <p>{address.country}</p>
                    <p>Phone Number: {address.phone}</p>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <Button variant="link" size="sm" className="h-auto p-0 text-blue-600">
                      Edit
                    </Button>
                    <Button variant="link" size="sm" className="h-auto p-0 text-blue-600">
                      Remove
                    </Button>
                    {selectedAddress !== address.id && (
                      <Button variant="link" size="sm" className="ml-auto h-auto p-0 text-blue-600">
                        Select Address
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {selectedAddressData && (
                <div>
                  <h4 className="mb-2 font-medium">Shipping to {selectedAddressData.name}</h4>
                  <div className="text-muted-foreground space-y-1 text-sm">
                    <p className="font-medium text-gray-900">{selectedAddressData.recipient}</p>
                    <p>{selectedAddressData.address}</p>
                    <p>
                      {selectedAddressData.city}, {selectedAddressData.country}
                    </p>
                  </div>
                </div>
              )}
              <Separator />
              <div className="space-y-2">
                <h4 className="font-medium">Price Details</h4>
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(1)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(1)}</span>
                </div>
                <div className="flex justify-between">
                  <span>VAT</span>
                  <span>${vat.toFixed(1)}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <Button
          variant="outline"
          onClick={handleBack}
          className="flex items-center gap-2 bg-transparent">
          <ChevronLeft className="h-4 w-4" />
          Order Summary
        </Button>
        <Button onClick={handleNext} className="flex items-center gap-2">
          Payment Method
          <ChevronLeft className="h-4 w-4 rotate-180" />
        </Button>
      </div>
    </div>
  );

  const renderPaymentMethod = () => (
    <div className="px-4">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Payment Method</h1>
              <p className="text-muted-foreground">Select how you want to pay</p>
            </div>
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <Plus className="h-4 w-4" />
              Add Card
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {paymentMethods.map((payment) => (
              <Card
                key={payment.id}
                className={`cursor-pointer p-0 transition-colors ${
                  selectedPayment === payment.id ? "ring-2 ring-blue-500" : ""
                }`}
                onClick={() => setSelectedPayment(payment.id)}>
                <CardContent>
                  <div className="mb-2 flex items-start justify-between">
                    <h3 className="font-medium">{payment.name}</h3>
                    {selectedPayment === payment.id && (
                      <Badge className="bg-green-100 text-green-800">Pay with this</Badge>
                    )}
                  </div>
                  <div className="mb-3 flex items-center gap-3">
                    {payment.type === "visa" && (
                      <div className="flex h-5 w-8 items-center justify-center rounded bg-blue-600 text-xs font-bold text-white">
                        VISA
                      </div>
                    )}
                    {payment.type === "ideal" && (
                      <div className="flex h-5 w-8 items-center justify-center rounded bg-pink-500 text-xs font-bold text-white">
                        iD
                      </div>
                    )}
                    {payment.type === "paypal" && (
                      <div className="flex h-5 w-8 items-center justify-center rounded bg-blue-500 text-xs font-bold text-white">
                        PP
                      </div>
                    )}
                    {payment.type === "amex" && (
                      <div className="flex h-5 w-8 items-center justify-center rounded bg-green-600 text-xs font-bold text-white">
                        AE
                      </div>
                    )}
                    <div className="text-muted-foreground text-sm whitespace-pre-line">
                      {payment.details}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="link" size="sm" className="h-auto p-0 text-blue-600">
                      Edit
                    </Button>
                    <Button variant="link" size="sm" className="h-auto p-0 text-blue-600">
                      Remove
                    </Button>
                    {selectedPayment !== payment.id && (
                      <Button variant="link" size="sm" className="ml-auto h-auto p-0 text-blue-600">
                        Select Card
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {selectedAddressData && (
                <div>
                  <h4 className="mb-2 font-medium">Shipping to {selectedAddressData.name}</h4>
                  <div className="text-muted-foreground space-y-1 text-sm">
                    <p className="font-medium text-gray-900">{selectedAddressData.recipient}</p>
                    <p>{selectedAddressData.address}</p>
                    <p>
                      {selectedAddressData.city}, {selectedAddressData.country}
                    </p>
                  </div>
                </div>
              )}
              <Separator />
              <div className="space-y-2">
                <h4 className="font-medium">Price Details</h4>
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(1)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(1)}</span>
                </div>
                <div className="flex justify-between">
                  <span>VAT</span>
                  <span>${vat.toFixed(1)}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <Button
          variant="outline"
          onClick={handleBack}
          className="flex items-center gap-2 bg-transparent">
          <ChevronLeft className="h-4 w-4" />
          Shipping Info
        </Button>
        <Button onClick={handleNext} className="flex items-center gap-2">
          Place Order
          <ChevronLeft className="h-4 w-4 rotate-180" />
        </Button>
      </div>
    </div>
  );

  const renderOrderPlaced = () => (
    <div className="px-4">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Order Placed</h1>
              <p className="text-muted-foreground">Your purchase has been successfully completed</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">My Orders</Button>
              <Button>Continue Shopping</Button>
            </div>
          </div>

          <Card className="p-0">
            <CardContent>
              <div className="grid grid-cols-5 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground font-medium">Order ID</p>
                  <p className="font-semibold">X319330-S24</p>
                </div>
                <div>
                  <p className="text-muted-foreground font-medium">Order placed</p>
                  <p className="font-semibold">26 June, 2025</p>
                </div>
                <div>
                  <p className="text-muted-foreground font-medium">Total</p>
                  <p className="font-semibold">$512.60</p>
                </div>
                <div>
                  <p className="text-muted-foreground font-medium">Ship to</p>
                  <p className="font-semibold">Jeroen van Dijk</p>
                </div>
                <div>
                  <p className="text-muted-foreground font-medium">Estimated Delivery</p>
                  <p className="font-semibold">07 July, 2025</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {orderItems.map((item) => (
              <Card key={item.id} className="p-0">
                <CardContent className="flex items-center gap-4">
                  <Image
                    src={item.image || "/avatars/08.jpeg"}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-muted-foreground text-sm">SKU: {item.sku}</p>
                    {item.discount && (
                      <Badge variant="destructive" className="mt-1">
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
                    <p className="font-semibold">${item.price.toFixed(2)}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Payment</CardTitle>
              </CardHeader>
              <CardContent>
                {selectedPaymentData && (
                  <div className="flex items-center gap-3">
                    <div className="flex h-5 w-8 items-center justify-center rounded bg-blue-600 text-xs font-bold text-white">
                      VISA
                    </div>
                    <div className="text-sm">
                      <p className="font-medium">Jeroen van Dijk</p>
                      <p className="text-muted-foreground">Ending 3604 Expires on 12/2026</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Delivery to</CardTitle>
              </CardHeader>
              <CardContent>
                {selectedAddressData && (
                  <div className="space-y-1 text-sm">
                    <p className="font-medium">{selectedAddressData.recipient}</p>
                    <p className="text-muted-foreground">{selectedAddressData.address}</p>
                    <p className="text-muted-foreground">
                      {selectedAddressData.city}, {selectedAddressData.country}
                    </p>
                    <p className="text-muted-foreground">
                      Phone number: {selectedAddressData.phone}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">Price Details</h4>
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(1)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(1)}</span>
                </div>
                <div className="flex justify-between">
                  <span>VAT</span>
                  <span>${vat.toFixed(1)}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  const renderThanksPage = () => (
    <div className="mx-auto max-w-4xl px-4">
      <div className="relative overflow-hidden rounded-lg bg-white shadow-sm">
        {/* Gradient border */}
        <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-purple-500 via-green-500 to-yellow-500" />

        <div className="p-8">
          {/* Logo/Brand */}
          <div className="mb-8 text-center">
            <div className="mb-6 flex items-center justify-center gap-2">
              <div className="h-6 w-6 rotate-45 transform bg-red-500" />
              <span className="text-xl font-bold text-gray-900">METRONIC</span>
            </div>

            {/* Main heading */}
            <h1 className="mb-4 text-3xl font-bold text-gray-900">Order Confirmation</h1>
            <p className="text-muted-foreground">
              Thank you! Your order #X319330-S24 is confirmed and being processed.
            </p>
          </div>

          {/* Order items */}
          <div className="mb-8 space-y-4">
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
              <p className="font-semibold text-gray-900">26 June, 2025 ID</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1 text-sm font-medium">Total</p>
              <p className="font-semibold text-gray-900">$512.60</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1 text-sm font-medium">Ship to</p>
              <p className="font-semibold text-gray-900">Jeroen van Dijk</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1 text-sm font-medium">Estimated Delivery</p>
              <p className="font-semibold text-gray-900">07 July, 2025</p>
            </div>
          </div>

          {/* Action button */}
          <div className="text-center">
            <Button variant="outline" className="bg-transparent">
              📋 My Orders
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="py-8">
      <div className="mx-auto max-w-5xl">
        {renderStepIndicator()}

        {currentStep === 1 && renderOrderSummary()}
        {currentStep === 2 && renderShippingInfo()}
        {currentStep === 3 && renderPaymentMethod()}
        {currentStep === 4 && renderOrderPlaced()}
        {currentStep === 5 && renderThanksPage()}
      </div>
    </div>
  );
}
