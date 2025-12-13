"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Check, Info } from "lucide-react";

const properties = [
  {
    id: 1,
    title: "3 BHK Residential Apartment in Ayyapakkam",
    location: "BBCL Ayyapakkam",
    price: 95000,
    pricePerSqFt: 73,
    area: 1305,
    areaDetails: "(121 sq.m.) Super built-up Area",
    bhk: 3,
    baths: 2,
    description:
      "Residential apartment for sale in BBCL Ayyapakkam, Chennai. This property promises a contented and comfortable lifestyle with modern amenities and excellent connectivity.",
    verified: true,
    postedDate: "April 22, 2020",
    owner: "Inez Freeman",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    society: "vijay",
    furnishing: "furnished",
    underConstruction: false,
    readyToMove: true,
    hasPhotos: true
  },
  {
    id: 2,
    title: "3 BHK Residential Apartment in K.K. Nagar",
    location: "NML K.K. Nagar",
    price: 98000,
    pricePerSqFt: 75,
    area: 1305,
    areaDetails: "(121 sq.m.) Super built-up Area",
    bhk: 3,
    baths: 2,
    description:
      "This beautiful east facing, Vastu compliant unit is situated on ground of 2 floors, in a builder floor building with premium finishes and great natural light.",
    verified: false,
    postedDate: "May 13, 2020",
    owner: "Carrie Reyes",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    society: "olympia",
    furnishing: "Semi furnished",
    underConstruction: true,
    readyToMove: false,
    hasPhotos: true
  },
  {
    id: 3,
    title: "3 BHK Residential Apartment in Lancor Abode Valley",
    location: "Lancor Abode Valley, Potheri",
    price: 92000,
    pricePerSqFt: 70,
    area: 1305,
    areaDetails: "(121 sq.m.) Super built-up Area",
    bhk: 3,
    baths: 2,
    description:
      "This builder floor is a semi-furnished unit and consists of one wardrobe, AC, fans, lights and modular kitchen with excellent amenities in a gated community.",
    verified: true,
    postedDate: "June 13, 2020",
    owner: "Mitchell Spencer",
    image:
      "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    society: "alliance",
    furnishing: "Semi furnished",
    underConstruction: false,
    readyToMove: true,
    hasPhotos: true
  },
  {
    id: 4,
    title: "2 BHK Apartment in Provident Cosmo City",
    location: "Provident Cosmo City",
    price: 65000,
    pricePerSqFt: 68,
    area: 950,
    areaDetails: "(88 sq.m.) Super built-up Area",
    bhk: 2,
    baths: 2,
    description:
      "Spacious 2 bedroom apartment with modern amenities, gym, swimming pool and children's play area. Perfect for small families looking for quality living.",
    verified: true,
    postedDate: "March 15, 2020",
    owner: "Sarah Johnson",
    image:
      "https://plus.unsplash.com/premium_photo-1689609950069-2961f80b1e70?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    society: "provident",
    furnishing: "Fully furnished",
    underConstruction: false,
    readyToMove: true,
    hasPhotos: true
  },
  {
    id: 5,
    title: "4 BHK Luxury Villa in KG Signature City",
    location: "KG Signature City",
    price: 185000,
    pricePerSqFt: 92,
    area: 2010,
    areaDetails: "(187 sq.m.) Super built-up Area",
    bhk: 4,
    baths: 3,
    description:
      "Luxurious 4 bedroom villa with premium specifications, private garden, and exclusive clubhouse facilities. Experience elevated living in a prime location.",
    verified: true,
    postedDate: "July 8, 2020",
    owner: "David Williams",
    image:
      "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    society: "kg",
    furnishing: "Unfurnished",
    underConstruction: false,
    readyToMove: false,
    hasPhotos: true
  }
];

const societies = [
  { id: "provident", name: "Provident Cosmo City" },
  { id: "olympia", name: "Olympia Opaline" },
  { id: "vijay", name: "Vijay Shanthi Lotus Pond", checked: true },
  { id: "kg", name: "KG Signature City" },
  { id: "alliance", name: "Alliance Orchid Springs" }
];

export function RealEstateListings() {
  const [budget, setBudget] = useState([20, 200]);
  const [selectedBedrooms, setSelectedBedrooms] = useState<number[]>([]);
  const [selectedFurnishing, setSelectedFurnishing] = useState<string[]>([]);
  const [selectedSocieties, setSelectedSocieties] = useState<string[]>([]);
  const [ownerVerified, setOwnerVerified] = useState(false);
  const [underConstruction, setUnderConstruction] = useState(false);
  const [readyToMove, setReadyToMove] = useState(false);
  const [withPhotos, setWithPhotos] = useState(false);
  const [familyMode, setFamilyMode] = useState(false);
  const [sortBy, setSortBy] = useState("price");

  const filteredAndSortedProperties = useMemo(() => {
    const filtered = properties.filter((property) => {
      // Budget filter (price in thousands)
      if (property.price < budget[0] * 1000 || property.price > budget[1] * 1000) return false;

      // Bedroom filter
      if (selectedBedrooms.length > 0 && !selectedBedrooms.includes(property.bhk)) return false;

      // Society filter
      if (selectedSocieties.length > 0 && !selectedSocieties.includes(property.society))
        return false;

      // Furnishing filter
      if (selectedFurnishing.length > 0 && !selectedFurnishing.includes(property.furnishing))
        return false;

      // Top filter badges
      if (ownerVerified && !property.verified) return false;
      if (underConstruction && !property.underConstruction) return false;
      if (readyToMove && !property.readyToMove) return false;
      if (withPhotos && !property.hasPhotos) return false;

      return true;
    });

    // Sort filtered results
    filtered.sort((a, b) => {
      if (sortBy === "price") return a.price - b.price;
      if (sortBy === "area") return b.area - a.area;
      if (sortBy === "date")
        return new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime();
      return 0;
    });

    return filtered;
  }, [
    budget,
    selectedBedrooms,
    selectedSocieties,
    selectedFurnishing,
    ownerVerified,
    underConstruction,
    readyToMove,
    withPhotos,
    sortBy
  ]);

  const toggleBedroom = (bedroom: number) => {
    setSelectedBedrooms((prev) =>
      prev.includes(bedroom) ? prev.filter((b) => b !== bedroom) : [...prev, bedroom]
    );
  };

  const toggleFurnishing = (furnishing: string) => {
    setSelectedFurnishing((prev) =>
      prev.includes(furnishing) ? prev.filter((f) => f !== furnishing) : [...prev, furnishing]
    );
  };

  const toggleSociety = (society: string) => {
    setSelectedSocieties((prev) =>
      prev.includes(society) ? prev.filter((s) => s !== society) : [...prev, society]
    );
  };

  const clearAllFilters = () => {
    setBudget([20, 200]);
    setSelectedBedrooms([]);
    setSelectedFurnishing([]);
    setSelectedSocieties([]);
    setOwnerVerified(false);
    setUnderConstruction(false);
    setReadyToMove(false);
    setWithPhotos(false);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="px-4">
      <header className="py-4">
        <h1 className="text-xl font-semibold">
          {filteredAndSortedProperties.length} search results
        </h1>
      </header>

      <div className="grid gap-4 lg:grid-cols-[300px_1fr]">
        {/* Sidebar Filters */}
        <aside className="space-y-4">
          <Card className="shadow-none">
            <CardHeader className="flex items-center justify-between">
              <CardTitle>Applied Filters</CardTitle>
              <CardAction>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary"
                  onClick={clearAllFilters}>
                  Clear All
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Budget Filter */}
              <div className="space-y-3">
                <Label className="font-semibold">Budget</Label>
                <div className="px-2 pt-2">
                  <Slider
                    value={budget}
                    onValueChange={setBudget}
                    min={20}
                    max={200}
                    step={5}
                    className="mb-4"
                  />
                  <div className="text-muted-foreground flex justify-between text-sm">
                    <span>${budget[0]}k</span>
                    <span>${budget[1]}k</span>
                  </div>
                </div>
              </div>

              {/* Bedrooms Filter */}
              <div className="space-y-3">
                <Label className="font-semibold">No. of Bedrooms</Label>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 6, 7, 8].map((bedroom) => (
                    <Button
                      key={bedroom}
                      variant={selectedBedrooms.includes(bedroom) ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleBedroom(bedroom)}>
                      {bedroom}BHK
                    </Button>
                  ))}
                </div>
              </div>

              {/* Societies Filter */}
              <div className="space-y-3">
                <Label className="font-semibold">New Projects / Societies</Label>
                <div className="space-y-2">
                  {societies.map((society) => (
                    <div key={society.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={society.id}
                        checked={selectedSocieties.includes(society.id)}
                        onCheckedChange={() => toggleSociety(society.id)}
                      />
                      <Label htmlFor={society.id} className="cursor-pointer text-sm font-normal">
                        {society.name}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Furnishing Status Filter */}
              <div className="space-y-3">
                <Label className="font-semibold">Furnishing Status</Label>
                <div className="grid grid-cols-2 gap-2">
                  {["Unfurnished", "Semi furnished", "furnished", "Fully furnished"].map(
                    (furnishing) => (
                      <Button
                        key={furnishing}
                        variant={selectedFurnishing.includes(furnishing) ? "default" : "outline"}
                        size="sm"
                        onClick={() => toggleFurnishing(furnishing)}
                        className="text-xs">
                        {furnishing}
                      </Button>
                    )
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </aside>

        {/* Property Listings */}
        <main className="space-y-4">
          <Card className="p-0">
            <CardContent className="bg-card">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant={ownerVerified ? "default" : "secondary"}
                    className="cursor-pointer px-3 py-1"
                    onClick={() => setOwnerVerified(!ownerVerified)}>
                    Owner Verified
                  </Badge>
                  <Badge
                    variant={underConstruction ? "default" : "secondary"}
                    className="cursor-pointer px-3 py-1"
                    onClick={() => setUnderConstruction(!underConstruction)}>
                    Under Construction
                  </Badge>
                  <Badge
                    variant={readyToMove ? "default" : "secondary"}
                    className="cursor-pointer px-3 py-1"
                    onClick={() => setReadyToMove(!readyToMove)}>
                    Ready To Move
                  </Badge>
                  <Badge
                    variant={withPhotos ? "default" : "secondary"}
                    className="cursor-pointer px-3 py-1"
                    onClick={() => setWithPhotos(!withPhotos)}>
                    With Photos
                  </Badge>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-2">
                    <Switch id="family-mode" checked={familyMode} onCheckedChange={setFamilyMode} />
                    <Label htmlFor="family-mode" className="flex items-center gap-1 text-sm">
                      Family mode <Info className="text-muted-foreground size-4" />
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger id="sort" className="">
                        Sort by: <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="price">Price</SelectItem>
                        <SelectItem value="date">Date</SelectItem>
                        <SelectItem value="area">Area</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {filteredAndSortedProperties.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <p className="text-muted-foreground text-lg">
                  No properties found matching your filters. Try adjusting your search criteria.
                </p>
              </CardContent>
            </Card>
          ) : (
            filteredAndSortedProperties.map((property) => (
              <Card key={property.id} className="py-0 shadow-none">
                <CardContent className="bg-card p-0">
                  <div className="grid md:grid-cols-[250px_1fr]">
                    {/* Property Image */}
                    <div className="relative">
                      <img
                        src={property.image || "/placeholder.svg"}
                        alt={property.title}
                        className="aspect-square h-full w-full object-cover md:rounded-l-lg"
                      />
                      {property.verified && (
                        <Badge className="absolute top-2 right-2 bg-white text-green-600 hover:bg-white">
                          <Check /> Verified
                        </Badge>
                      )}
                    </div>

                    {/* Property Details */}
                    <div className="px-6 py-4">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-foreground text-lg font-semibold">
                            {property.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">{property.location}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                          <div>
                            <p className="text-xl font-bold">{formatPrice(property.price)}</p>
                            <p className="text-muted-foreground text-xs">
                              ${property.pricePerSqFt}/sq.ft.
                            </p>
                          </div>
                          <div>
                            <p className="text-xl font-bold">{property.area} sq.ft.</p>
                            <p className="text-muted-foreground text-xs">{property.areaDetails}</p>
                          </div>
                          <div>
                            <p className="text-xl font-bold">{property.bhk} BHK</p>
                            <p className="text-muted-foreground text-xs">{property.baths} Baths</p>
                          </div>
                        </div>

                        <p className="text-muted-foreground line-clamp-2 text-sm">
                          {property.description}{" "}
                          <span className="text-primary cursor-pointer">More</span>
                        </p>

                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                          <Button className="w-full sm:w-auto">Contact Owner</Button>
                          <div className="text-muted-foreground text-xs sm:text-right">
                            <p>
                              Posted on {property.postedDate} by Owner {property.owner}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </main>
      </div>
    </div>
  );
}
