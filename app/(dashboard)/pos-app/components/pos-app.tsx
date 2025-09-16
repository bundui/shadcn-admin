"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Plus,
  Trash2,
  Settings,
  History,
  FileText,
  Star,
  Building2,
  Warehouse,
  CreditCard,
  QrCode
} from "lucide-react";
import Image from "next/image";

interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description?: string;
}

interface OrderItem extends MenuItem {
  quantity: number;
}

const categories = [
  { name: "Burger", icon: "🍔" },
  { name: "Hot Dog", icon: "🌭" },
  { name: "Pizza", icon: "🍕" },
  { name: "Sandwich", icon: "🥪" },
  { name: "Popcorn", icon: "🍿" },
  { name: "Taco", icon: "🌮" },
  { name: "Burrito", icon: "🌯" },
  { name: "Pizza", icon: "🍕" },
  { name: "Burrito", icon: "🌯" }
];

const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Duck Salad",
    category: "Pizza",
    price: 35.0,
    image: "/avatars/07.jpeg"
  },
  {
    id: "2",
    name: "Breakfast board",
    category: "Taco",
    price: 14.0,
    image: "/avatars/07.jpeg"
  },
  {
    id: "3",
    name: "Hummus",
    category: "Sandwich",
    price: 24.0,
    image: "/avatars/07.jpeg"
  },
  {
    id: "4",
    name: "Roast beef",
    category: "Kebab",
    price: 17.5,
    image: "/avatars/07.jpeg"
  },
  {
    id: "5",
    name: "Tuna salad",
    category: "Popcorn",
    price: 35.0,
    image: "/avatars/07.jpeg"
  },
  {
    id: "6",
    name: "Salmon",
    category: "Burger",
    price: 48.0,
    image: "/avatars/07.jpeg"
  },
  {
    id: "7",
    name: "California roll",
    category: "Taco",
    price: 74.0,
    image: "/avatars/07.jpeg"
  },
  {
    id: "8",
    name: "Sashimi",
    category: "Burrito",
    price: 74.0,
    image: "/avatars/07.jpeg"
  }
];

export default function PosApp() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [orderItems, setOrderItems] = useState<OrderItem[]>([
    { ...menuItems[3], quantity: 1, price: 12.0 },
    { ...menuItems[4], quantity: 1, price: 14.0 },
    { ...menuItems[5], quantity: 1, price: 45.0 },
    { ...menuItems[6], quantity: 1, price: 22.0 },
    { id: "9", name: "Duck carpaccio", category: "Special", price: 18.0, image: "", quantity: 1 }
  ]);
  const [draftNumber, setDraftNumber] = useState(1);

  const addToOrder = (item: MenuItem) => {
    const existingItem = orderItems.find((orderItem) => orderItem.id === item.id);
    if (existingItem) {
      setOrderItems(
        orderItems.map((orderItem) =>
          orderItem.id === item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem
        )
      );
    } else {
      setOrderItems([...orderItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromOrder = (id: string) => {
    setOrderItems(orderItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      removeFromOrder(id);
    } else {
      setOrderItems(orderItems.map((item) => (item.id === id ? { ...item, quantity } : item)));
    }
  };

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Sidebar */}
      <div className="flex w-64 flex-col border-r border-gray-200 bg-white">
        <div className="border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-gray-800">CHANNELS</h2>
            <div className="flex items-center gap-2">
              <Search className="h-4 w-4 text-gray-400" />
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3 rounded-lg bg-red-50 p-2 text-red-600">
              <Building2 className="h-4 w-4" />
              <span className="text-sm font-medium">Office</span>
            </div>
            <div className="text-muted-foreground flex cursor-pointer items-center gap-3 rounded-lg p-2 hover:bg-gray-50">
              <Warehouse className="h-4 w-4" />
              <span className="text-sm">Main Warehouse</span>
            </div>
            <div className="text-muted-foreground flex cursor-pointer items-center gap-3 rounded-lg p-2 hover:bg-gray-50">
              <Warehouse className="h-4 w-4" />
              <span className="text-sm">Warehouse East</span>
            </div>
            <div className="text-muted-foreground flex cursor-pointer items-center gap-3 rounded-lg p-2 hover:bg-gray-50">
              <Warehouse className="h-4 w-4" />
              <span className="text-sm">Warehouse #12</span>
            </div>
          </div>

          <Separator className="my-4" />

          <div className="space-y-2">
            <div className="text-muted-foreground flex cursor-pointer items-center gap-3 rounded-lg p-2 hover:bg-gray-50">
              <Star className="h-4 w-4" />
              <span className="text-sm">Top Deals</span>
            </div>
            <div className="text-muted-foreground flex cursor-pointer items-center gap-3 rounded-lg p-2 hover:bg-gray-50">
              <Settings className="h-4 w-4" />
              <span className="text-sm">Setting</span>
            </div>
            <div className="text-muted-foreground flex cursor-pointer items-center gap-3 rounded-lg p-2 hover:bg-gray-50">
              <History className="h-4 w-4" />
              <span className="text-sm">History</span>
            </div>
            <div className="text-muted-foreground flex cursor-pointer items-center gap-3 rounded-lg p-2 hover:bg-gray-50">
              <FileText className="h-4 w-4" />
              <span className="text-sm">Report</span>
            </div>
          </div>
        </nav>

        <div className="border-t border-gray-200 p-4">
          <div className="text-muted-foreground text-sm">Sales Today</div>
          <div className="text-lg font-semibold">134.55$</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <div className="border-b border-gray-200 bg-white p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Categories</h1>
            <div className="flex items-center gap-2">
              <ChevronLeft className="h-5 w-5 text-gray-400" />
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="border-b border-gray-200 bg-white p-4">
          <div className="flex gap-4 overflow-x-auto">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex min-w-[80px] cursor-pointer flex-col items-center rounded-lg p-2 hover:bg-gray-50"
                onClick={() => setSelectedCategory(category.name)}>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-2xl">
                  {category.icon}
                </div>
                <span className="text-muted-foreground text-center text-xs">{category.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="flex-1 overflow-auto p-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {menuItems.map((item) => (
              <Card
                key={item.id}
                className="cursor-pointer transition-shadow hover:shadow-lg"
                onClick={() => addToOrder(item)}>
                <CardContent className="p-0">
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <Image
                      src={item.image || "/avatars/08.jpeg"}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="mb-1 font-semibold text-gray-800">{item.name}</h3>
                    <p className="mb-2 text-sm text-gray-500">{item.category}</p>
                    <p className="text-lg font-bold text-blue-600">${item.price.toFixed(2)}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Right Sidebar - Order Summary */}
      <div className="flex w-80 flex-col border-l border-gray-200 bg-white">
        <div className="border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Draft #{draftNumber.toString().padStart(3, "0")}</h2>
            <div className="flex items-center gap-2">
              <Plus className="h-4 w-4 text-gray-400" />
              <Trash2 className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>

        <ScrollArea className="flex-1 p-4">
          <div className="space-y-3">
            {orderItems.map((item, index) => (
              <div key={`${item.id}-${index}`} className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                  <span className="text-lg">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium">{item.name}</h4>
                  <p className="text-xs text-gray-500">
                    {item.description || "Lorem ipsum dolor sit"}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="border-t border-gray-200 p-4">
          <div className="mb-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>{subtotal.toFixed(2)}$</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Tax</span>
              <span>{tax.toFixed(2)}$</span>
            </div>
            <Separator />
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>{total.toFixed(2)}$</span>
            </div>
          </div>

          <div className="mb-4 grid grid-cols-3 gap-2">
            <Button
              variant="outline"
              className="flex h-auto flex-col items-center bg-transparent p-4">
              <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-green-100">
                <span className="font-semibold text-green-600">$</span>
              </div>
              <span className="text-xs">Cash</span>
            </Button>
            <Button
              variant="outline"
              className="flex h-auto flex-col items-center bg-transparent p-4">
              <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                <CreditCard className="h-4 w-4 text-blue-600" />
              </div>
              <span className="text-xs">Debit</span>
            </Button>
            <Button
              variant="outline"
              className="flex h-auto flex-col items-center bg-transparent p-4">
              <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100">
                <QrCode className="h-4 w-4 text-purple-600" />
              </div>
              <span className="text-xs">Scan</span>
            </Button>
          </div>

          <Button className="w-full bg-blue-600 py-3 text-white hover:bg-blue-700">
            Checkout ${total.toFixed(2)}
          </Button>
        </div>
      </div>
    </div>
  );
}
