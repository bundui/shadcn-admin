"use client";

import { useState } from "react";
import { ShoppingCart, MapPin, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { useCheckoutStore } from "../store";
import { CheckoutSteps } from "./checkout-steps";

interface Address {
  id: number;
  name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  type: "Home" | "Office";
  isDefault?: boolean;
}

const defaultAddresses: Address[] = [
  {
    id: 1,
    name: "John Doe",
    phone: "+1 234 567 8900",
    address: "123 Main Street, Apt 4B",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    type: "Home",
    isDefault: true
  },
  {
    id: 2,
    name: "John Doe",
    phone: "+1 234 567 8900",
    address: "456 Business Ave, Suite 200",
    city: "New York",
    state: "NY",
    zipCode: "10002",
    type: "Office"
  }
];

export function AddressPage() {
  const { selectedAddressId, setSelectedAddress, setStep } = useCheckoutStore();
  const [addresses, setAddresses] = useState<Address[]>(defaultAddresses);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newAddress, setNewAddress] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    type: "Home" as const
  });

  const handleAddAddress = () => {
    const newId = addresses.length + 1;
    setAddresses([...addresses, { id: newId, ...newAddress }]);
    setSelectedAddress(newId.toString());
    setIsDialogOpen(false);
    setNewAddress({
      name: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      type: "Home"
    });
  };

  return (
    <div className="min-h-screen p-4">
      <div className="mx-auto max-w-5xl space-y-4">
        <CheckoutSteps />

        <div className="grid items-start gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardContent>
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="text-muted-foreground size-4" />
                    <span className="text-foreground font-semibold">Select Delivery Address</span>
                  </div>
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Plus />
                        Add New Address
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Add New Address</DialogTitle>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <Label>Full Name</Label>
                          <Input
                            value={newAddress.name}
                            onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label>Phone Number</Label>
                          <Input
                            value={newAddress.phone}
                            onChange={(e) =>
                              setNewAddress({ ...newAddress, phone: e.target.value })
                            }
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label>Street Address</Label>
                          <Input
                            value={newAddress.address}
                            onChange={(e) =>
                              setNewAddress({ ...newAddress, address: e.target.value })
                            }
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label>City</Label>
                            <Input
                              value={newAddress.city}
                              onChange={(e) =>
                                setNewAddress({ ...newAddress, city: e.target.value })
                              }
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label>State</Label>
                            <Input
                              value={newAddress.state}
                              onChange={(e) =>
                                setNewAddress({ ...newAddress, state: e.target.value })
                              }
                            />
                          </div>
                        </div>
                        <div className="grid gap-2">
                          <Label>Zip Code</Label>
                          <Input
                            value={newAddress.zipCode}
                            onChange={(e) =>
                              setNewAddress({ ...newAddress, zipCode: e.target.value })
                            }
                          />
                        </div>
                        <Button onClick={handleAddAddress}>Save Address</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                <RadioGroup value={selectedAddressId} onValueChange={setSelectedAddress}>
                  {addresses.map((addr) => (
                    <div
                      key={addr.id}
                      className={`relative rounded-lg border p-4 ${selectedAddressId === addr.id.toString() ? "border-primary bg-primary/5" : "border-border"}`}>
                      <div className="flex items-start gap-3">
                        <RadioGroupItem value={addr.id.toString()} id={`address-${addr.id}`} />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <Label
                              htmlFor={`address-${addr.id}`}
                              className="text-foreground font-semibold">
                              {addr.name}
                            </Label>
                            <span className="bg-muted text-muted-foreground rounded px-2 py-0.5 text-xs">
                              {addr.type}
                            </span>
                            {addr.isDefault && (
                              <span className="bg-primary/10 text-primary rounded px-2 py-0.5 text-xs">
                                Default
                              </span>
                            )}
                          </div>
                          <p className="text-muted-foreground mt-1 text-sm">{addr.phone}</p>
                          <p className="text-foreground mt-1 text-sm">
                            {addr.address}, {addr.city}, {addr.state} {addr.zipCode}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent>
              <h3 className="text-foreground mb-4 font-semibold">Delivery Information</h3>
              <p className="text-muted-foreground text-sm">
                Your order will be delivered to the selected address within 3-5 business days.
              </p>
              <div className="mt-6 flex gap-2">
                <Button variant="outline" onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button className="flex-1" onClick={() => setStep(3)}>
                  Continue to Payment
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
