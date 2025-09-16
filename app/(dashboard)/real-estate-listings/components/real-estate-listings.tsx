"use client";

import { useState } from "react";
import {
  Heart,
  MapPin,
  Bed,
  Users,
  Bath,
  Maximize2,
  Search,
  SlidersHorizontal
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";

const propertyTypes = [
  { id: "house", label: "House", icon: "🏠" },
  { id: "apartment", label: "Apartment", icon: "🏢" },
  { id: "commercial", label: "Commercial", icon: "🏪" },
  { id: "land", label: "Land Plot", icon: "🏞️" }
];

const properties = [
  {
    id: 1,
    title: "Summit Crest Residences",
    location: "Beverly Hills, California",
    price: 13600000,
    bedrooms: 2,
    guests: 2,
    baths: 2,
    area: "4x7 m²",
    image: "/avatars/07.jpeg",
    featured: true
  },
  {
    id: 2,
    title: "Palm Grove Estates",
    location: "London Docklands, UK",
    price: 5435032,
    bedrooms: 2,
    guests: 2,
    baths: 2,
    area: "4x7 m²",
    image: "/avatars/07.jpeg",
    featured: false
  },
  {
    id: 3,
    title: "Oceanview Retreat",
    location: "Dubai Marina, UAE",
    price: 25430000,
    bedrooms: 2,
    guests: 2,
    baths: 2,
    area: "4x7 m²",
    image: "/avatars/07.jpeg",
    featured: false
  },
  {
    id: 4,
    title: "Skyline Peaks",
    location: "South Beach, Miami",
    price: 456000,
    bedrooms: 2,
    guests: 2,
    baths: 2,
    area: "4x7 m²",
    image: "/avatars/07.jpeg",
    featured: false
  }
];

const basicCriteria = [
  { id: "newly-built", label: "Newly Built" },
  { id: "parking", label: "Parking Space" },
  { id: "furnished", label: "Furnished" },
  { id: "pool", label: "Swimming Pool" }
];

export default function RealEstateListings() {
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState(["house"]);
  const [priceRange, setPriceRange] = useState([500, 4500]);
  const [selectedRooms, setSelectedRooms] = useState([2]);
  const [selectedCriteria, setSelectedCriteria] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [searchLocation, setSearchLocation] = useState("");

  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `$${(price / 1000000).toFixed(1)}M`;
    }
    return `$${price.toLocaleString()}`;
  };

  const toggleFavorite = (propertyId: number) => {
    setFavorites((prev) =>
      prev.includes(propertyId) ? prev.filter((id) => id !== propertyId) : [...prev, propertyId]
    );
  };

  const togglePropertyType = (typeId: string) => {
    setSelectedPropertyTypes((prev) =>
      prev.includes(typeId) ? prev.filter((id) => id !== typeId) : [...prev, typeId]
    );
  };

  const toggleRoom = (roomCount: number) => {
    setSelectedRooms((prev) =>
      prev.includes(roomCount) ? prev.filter((count) => count !== roomCount) : [...prev, roomCount]
    );
  };

  const toggleCriteria = (criteriaId: string) => {
    setSelectedCriteria((prev) =>
      prev.includes(criteriaId) ? prev.filter((id) => id !== criteriaId) : [...prev, criteriaId]
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Filters */}
      <div className="w-80 border-r bg-white p-6 shadow-sm">
        <div className="space-y-6">
          <div>
            <h2 className="mb-4 text-lg font-semibold">Filters</h2>

            {/* Location Search */}
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <div className="relative">
                <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                <Input
                  id="location"
                  placeholder="Enter location..."
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          {/* Property Type */}
          <div>
            <h3 className="mb-3 font-medium">Property Type</h3>
            <div className="grid grid-cols-2 gap-2">
              {propertyTypes.map((type) => (
                <Button
                  key={type.id}
                  variant={selectedPropertyTypes.includes(type.id) ? "default" : "outline"}
                  size="sm"
                  onClick={() => togglePropertyType(type.id)}
                  className="h-auto flex-col justify-start gap-1 p-3">
                  <span className="text-lg">{type.icon}</span>
                  <span className="text-xs">{type.label}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="mb-3 font-medium">Price Range</h3>
            <div className="px-2">
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={5000}
                min={0}
                step={100}
                className="mb-4"
              />
              <div className="text-muted-foreground flex justify-between text-sm">
                <span>{priceRange[0]}</span>
                <span>{priceRange[1]}</span>
              </div>
            </div>
          </div>

          {/* Number of Rooms */}
          <div>
            <h3 className="mb-3 font-medium">Number Of Rooms</h3>
            <div className="flex gap-2">
              {[1, 2, 3, "4+"].map((room) => (
                <Button
                  key={room}
                  variant={
                    selectedRooms.includes(typeof room === "number" ? room : 4)
                      ? "default"
                      : "outline"
                  }
                  size="sm"
                  onClick={() => toggleRoom(typeof room === "number" ? room : 4)}
                  className="h-12 w-12">
                  {room}
                </Button>
              ))}
            </div>
          </div>

          {/* Basic Criteria */}
          <div>
            <h3 className="mb-3 font-medium">Basic Criteria</h3>
            <div className="space-y-3">
              {basicCriteria.map((criteria) => (
                <div key={criteria.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={criteria.id}
                    checked={selectedCriteria.includes(criteria.id)}
                    onCheckedChange={() => toggleCriteria(criteria.id)}
                  />
                  <Label htmlFor={criteria.id} className="text-sm">
                    {criteria.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <Button variant="outline" className="w-full bg-transparent">
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            All Filters
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Property Listings */}
        <div className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Search Results (248)</h1>
          </div>

          <div className="space-y-6">
            {properties.map((property) => (
              <Card key={property.id} className="overflow-hidden transition-shadow hover:shadow-lg">
                <CardContent className="p-0">
                  <div className="flex">
                    <div className="relative h-48 w-80">
                      <img
                        src={property.image || "/avatars/08.jpeg"}
                        alt={property.title}
                        className="h-full w-full object-cover"
                      />
                      {property.featured && (
                        <Badge className="absolute top-3 left-3 bg-blue-600">Featured</Badge>
                      )}
                    </div>

                    <div className="flex flex-1 justify-between p-6">
                      <div className="space-y-3">
                        <div className="text-muted-foreground flex items-center text-sm">
                          <MapPin className="mr-1 h-4 w-4" />
                          {property.location}
                        </div>

                        <h3 className="text-xl font-semibold">{property.title}</h3>

                        <div className="text-muted-foreground flex items-center gap-6 text-sm">
                          <div className="flex items-center gap-1">
                            <Bed className="h-4 w-4" />
                            {property.bedrooms} Bedrooms
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {property.guests} Guests
                          </div>
                          <div className="flex items-center gap-1">
                            <Bath className="h-4 w-4" />
                            {property.baths} Baths
                          </div>
                        </div>

                        <div className="text-muted-foreground flex items-center gap-1 text-sm">
                          <Maximize2 className="h-4 w-4" />
                          {property.area}
                        </div>
                      </div>

                      <div className="flex flex-col items-end justify-between">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleFavorite(property.id)}
                          className="p-2">
                          <Heart
                            className={`h-5 w-5 ${
                              favorites.includes(property.id)
                                ? "fill-red-500 text-red-500"
                                : "text-gray-400"
                            }`}
                          />
                        </Button>

                        <div className="text-right">
                          <div className="text-2xl font-bold">{formatPrice(property.price)}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Map View */}
        <div className="w-96 border-l bg-white">
          <div className="border-b p-4">
            <Button variant="outline" size="sm" className="w-full bg-transparent">
              View larger map
            </Button>
          </div>
          <div className="relative h-full overflow-hidden bg-gradient-to-br from-green-100 to-blue-200">
            {/* Simplified map representation */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-200 via-blue-100 to-blue-300">
              <div className="absolute top-20 left-20 h-2 w-2 rounded-full bg-red-500"></div>
              <div className="absolute top-32 right-16 h-2 w-2 rounded-full bg-red-500"></div>
              <div className="absolute bottom-32 left-12 h-2 w-2 rounded-full bg-red-500"></div>
              <div className="absolute right-20 bottom-20 h-2 w-2 rounded-full bg-red-500"></div>

              {/* Map labels */}
              <div className="absolute top-16 left-8 text-xs font-medium">Vancouver</div>
              <div className="absolute top-24 right-8 text-xs font-medium">Toronto</div>
              <div className="absolute bottom-40 left-16 text-xs font-medium">Los Angeles</div>
              <div className="absolute right-12 bottom-28 text-xs font-medium">Miami</div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-sm font-semibold">
                United States
              </div>
            </div>

            {/* Map controls */}
            <div className="absolute right-4 bottom-4 flex flex-col gap-1">
              <Button size="sm" variant="outline" className="h-8 w-8 bg-transparent p-0">
                +
              </Button>
              <Button size="sm" variant="outline" className="h-8 w-8 bg-transparent p-0">
                -
              </Button>
            </div>

            {/* Attribution */}
            <div className="text-muted-foreground absolute bottom-2 left-2 text-xs">
              © 2025 Google, INEGI | Terms
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
