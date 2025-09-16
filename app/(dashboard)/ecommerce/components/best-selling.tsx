import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Star } from "lucide-react";

const data = [
  { name: "Edifier headphone", code: "RWL-H-001", rating: 5, reviews: "380 Reviews" },
  { name: "Apple watch ultra", code: "RWL-H-002", rating: 5, reviews: "750 Reviews" },
  { name: "Google pixel buds", code: "RWL-H-003", rating: 5, reviews: "420 Reviews" },
  { name: "iPhone 15 pro max", code: "RWL-H-004", rating: 5, reviews: "543 Reviews" },
  { name: "Canon camera kit", code: "RWL-H-005", rating: 5, reviews: "467 Reviews" }
];

export default function BestSelling() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Best Selling</CardTitle>
        <Button variant="ghost" size="sm">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((product, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gray-200"></div>
              <div className="flex-1">
                <div className="text-sm font-medium">{product.name}</div>
                <div className="text-xs text-gray-500">{product.code}</div>
              </div>
              <div className="text-right">
                <div className="mb-1 flex items-center gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-xs text-gray-500">{product.reviews}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
