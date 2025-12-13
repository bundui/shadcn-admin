import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Star } from "lucide-react";

const items = [
  {
    id: "1",
    name: "Edifier headphone",
    code: "RWL-H-001",
    rating: 5,
    reviews: 380,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop"
  },
  {
    id: "2",
    name: "Apple watch ultra",
    code: "RWL-H-002",
    rating: 5,
    reviews: 750,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=100&h=100&fit=crop"
  },
  {
    id: "3",
    name: "Google pixel buds",
    code: "RWL-H-003",
    rating: 5,
    reviews: 420,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=100&h=100&fit=crop"
  },
  {
    id: "4",
    name: "iPhone 15 pro max",
    code: "RWL-H-004",
    rating: 5,
    reviews: 543,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=100&h=100&fit=crop"
  },
  {
    id: "5",
    name: "Mouse",
    code: "RWL-H-005",
    rating: 5,
    reviews: 467,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=100&h=100&fit=crop"
  },
  {
    id: "6",
    name: "Canon camera kit",
    code: "RWL-H-006",
    rating: 5,
    reviews: 350,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=100&h=100&fit=crop"
  }
];

export function BestSelling() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Best Selling</CardTitle>
        <CardAction>
          <Button variant="ghost" size="icon">
            <MoreHorizontal />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((product) => (
          <div key={product.id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={product.image}
                alt={product.name}
                className="bg-muted h-12 w-12 rounded-lg object-cover"
              />
              <div>
                <p className="text-foreground font-medium">{product.name}</p>
                <p className="text-muted-foreground text-sm">{product.code}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < product.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>
              <p className="text-muted-foreground text-sm">{product.reviews} Reviews</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
