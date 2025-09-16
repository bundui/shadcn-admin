"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import { Search, Grid3X3, List, MapPin, Calendar, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    id: 1,
    title: "Vintage Camera Collection",
    description: "A set of beautifully preserved vintage cameras from various eras.",
    price: 1200,
    location: "Downtown",
    date: "6/15/2023",
    seller: "RetroCollector",
    category: "Electronics",
    subcategory: "Cameras",
    condition: "Good",
    sellerType: "Individual",
    shipping: "Paid",
    warranty: "No",
    negotiable: "Yes",
    image: "https://bundui-images.netlify.app/products/01.jpeg"
  },
  {
    id: 2,
    title: "Designer Handbag",
    description: "Authentic designer handbag, gently used and in excellent condition.",
    price: 850,
    location: "Fashion District",
    date: "6/14/2023",
    seller: "LuxuryFinds",
    category: "Fashion",
    subcategory: "Bags",
    condition: "Like New",
    sellerType: "Business",
    shipping: "Free",
    warranty: "Yes",
    negotiable: "No",
    image: "https://bundui-images.netlify.app/products/02.jpeg"
  },
  {
    id: 3,
    title: "Mountain Bike",
    description: "High-performance mountain bike, perfect for trails and rough terrain.",
    price: 599,
    location: "Suburbs",
    date: "6/13/2023",
    seller: "BikeEnthusiast",
    category: "Sports & Outdoors",
    subcategory: "Bicycles",
    condition: "Good",
    sellerType: "Individual",
    shipping: "Pickup",
    warranty: "No",
    negotiable: "Yes",
    image: "https://bundui-images.netlify.app/products/03.jpeg"
  },
  {
    id: 4,
    title: "Antique Wooden Desk",
    description: "Beautiful antique wooden desk with intricate carvings and ample storage.",
    price: 750,
    location: "Historic District",
    date: "6/12/2023",
    seller: "AntiqueDealer",
    category: "Home & Garden",
    subcategory: "Furniture",
    condition: "Fair",
    sellerType: "Business",
    shipping: "Paid",
    warranty: "Yes",
    negotiable: "Yes",
    image: "https://bundui-images.netlify.app/products/04.jpeg"
  }
];

const categories = ["All", "Electronics", "Fashion", "Sports & Outdoors", "Home & Garden"];
const subcategories = ["All", "Cameras", "Bags", "Bicycles", "Furniture"];
const conditions = ["New", "Like New", "Good", "Fair", "Poor"];
const sellerTypes = ["Individual", "Business"];
const shippingOptions = ["Free", "Paid", "Pickup"];
const warrantyOptions = ["All", "Yes", "No"];
const negotiableOptions = ["All", "Yes", "No"];

export default function ProductFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [selectedSellerTypes, setSelectedSellerTypes] = useState<string[]>([]);
  const [selectedShipping, setSelectedShipping] = useState<string[]>([]);
  const [selectedWarranty, setSelectedWarranty] = useState("All");
  const [selectedNegotiable, setSelectedNegotiable] = useState("All");
  const [sortBy, setSortBy] = useState("Date (Newest first)");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const handleConditionToggle = (condition: string) => {
    setSelectedConditions((prev) =>
      prev.includes(condition) ? prev.filter((c) => c !== condition) : [...prev, condition]
    );
  };

  const handleSellerTypeToggle = (type: string) => {
    setSelectedSellerTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleShippingToggle = (shipping: string) => {
    setSelectedShipping((prev) =>
      prev.includes(shipping) ? prev.filter((s) => s !== shipping) : [...prev, shipping]
    );
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSelectedSubcategory("All");
    setPriceRange([0, 10000]);
    setSelectedConditions([]);
    setSelectedSellerTypes([]);
    setSelectedShipping([]);
    setSelectedWarranty("All");
    setSelectedNegotiable("All");
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      const matchesSubcategory =
        selectedSubcategory === "All" || product.subcategory === selectedSubcategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesCondition =
        selectedConditions.length === 0 || selectedConditions.includes(product.condition);
      const matchesSellerType =
        selectedSellerTypes.length === 0 || selectedSellerTypes.includes(product.sellerType);
      const matchesShipping =
        selectedShipping.length === 0 || selectedShipping.includes(product.shipping);
      const matchesWarranty = selectedWarranty === "All" || product.warranty === selectedWarranty;
      const matchesNegotiable =
        selectedNegotiable === "All" || product.negotiable === selectedNegotiable;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesSubcategory &&
        matchesPrice &&
        matchesCondition &&
        matchesSellerType &&
        matchesShipping &&
        matchesWarranty &&
        matchesNegotiable
      );
    });
  }, [
    searchTerm,
    selectedCategory,
    selectedSubcategory,
    priceRange,
    selectedConditions,
    selectedSellerTypes,
    selectedShipping,
    selectedWarranty,
    selectedNegotiable
  ]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Filters */}
      <div className="w-80 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Filters</h2>
          <Button variant="outline" size="sm" onClick={clearFilters}>
            Clear Filters
          </Button>
        </div>

        <div className="space-y-6">
          {/* Category */}
          <div>
            <Label className="mb-2 block text-sm font-medium">Category</Label>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Subcategory */}
          <div>
            <Label className="mb-2 block text-sm font-medium">Subcategory</Label>
            <Select value={selectedSubcategory} onValueChange={setSelectedSubcategory}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {subcategories.map((subcategory) => (
                  <SelectItem key={subcategory} value={subcategory}>
                    {subcategory}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Price Range */}
          <div>
            <Label className="mb-4 block text-sm font-medium">Price Range</Label>
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={10000}
              min={0}
              step={50}
              className="mb-2"
            />
            <div className="text-muted-foreground flex justify-between text-sm">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>

          {/* Condition */}
          <div>
            <Label className="mb-3 block text-sm font-medium">Condition</Label>
            <div className="flex flex-wrap gap-2">
              {conditions.map((condition) => (
                <Button
                  key={condition}
                  variant={selectedConditions.includes(condition) ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleConditionToggle(condition)}>
                  {condition}
                </Button>
              ))}
            </div>
          </div>

          {/* Seller Type */}
          <div>
            <Label className="mb-3 block text-sm font-medium">Seller Type</Label>
            <div className="flex gap-2">
              {sellerTypes.map((type) => (
                <Button
                  key={type}
                  variant={selectedSellerTypes.includes(type) ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleSellerTypeToggle(type)}>
                  {type}
                </Button>
              ))}
            </div>
          </div>

          {/* Shipping */}
          <div>
            <Label className="mb-3 block text-sm font-medium">Shipping</Label>
            <div className="flex gap-2">
              {shippingOptions.map((shipping) => (
                <Button
                  key={shipping}
                  variant={selectedShipping.includes(shipping) ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleShippingToggle(shipping)}>
                  {shipping}
                </Button>
              ))}
            </div>
          </div>

          {/* Warranty */}
          <div>
            <Label className="mb-3 block text-sm font-medium">Warranty</Label>
            <div className="flex gap-2">
              {warrantyOptions.map((warranty) => (
                <Button
                  key={warranty}
                  variant={selectedWarranty === warranty ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedWarranty(warranty)}>
                  {warranty}
                </Button>
              ))}
            </div>
          </div>

          {/* Negotiable */}
          <div>
            <Label className="mb-3 block text-sm font-medium">Negotiable</Label>
            <div className="flex gap-2">
              {negotiableOptions.map((negotiable) => (
                <Button
                  key={negotiable}
                  variant={selectedNegotiable === negotiable ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedNegotiable(negotiable)}>
                  {negotiable}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="relative max-w-md flex-1">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
            <Input
              placeholder="Search ads..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Date (Newest first)">Date (Newest first)</SelectItem>
                <SelectItem value="Date (Oldest first)">Date (Oldest first)</SelectItem>
                <SelectItem value="Price (Low to High)">Price (Low to High)</SelectItem>
                <SelectItem value="Price (High to Low)">Price (High to Low)</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex rounded-md border">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}>
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}>
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Products */}
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
              : "space-y-4"
          }>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`rounded-lg border bg-white shadow-sm ${viewMode === "list" ? "flex gap-4 p-4" : "overflow-hidden"}`}>
              <div className={viewMode === "list" ? "w-48 flex-shrink-0" : ""}>
                <div className="relative">
                  <Image
                    src={product.image || "/avatars/08.jpeg"}
                    alt={product.title}
                    width={200}
                    height={200}
                    className={`object-cover ${viewMode === "list" ? "h-full w-full rounded-md" : "aspect-video w-full"}`}
                  />
                  <Badge className="absolute top-2 left-2 text-xs">{product.category}</Badge>
                </div>
              </div>

              <div className={`${viewMode === "list" ? "flex-1" : "p-4"}`}>
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <span className="text-xl font-bold">${product.price}</span>
                </div>

                <p className="text-muted-foreground mb-3 line-clamp-2 text-sm">
                  {product.description}
                </p>

                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>{product.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{product.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    <span>{product.seller}</span>
                  </div>
                </div>

                <Button className="mt-4" size="sm">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-gray-500">No products found matching your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
