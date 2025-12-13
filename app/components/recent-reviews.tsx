import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    id: 1,
    name: "David Berks",
    rating: 5,
    comment: "I am very satisfied with this product.",
    avatar: "D"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    rating: 4,
    comment: "Great quality and fast shipping. Would recommend!",
    avatar: "S"
  },
  {
    id: 3,
    name: "Mike Chen",
    rating: 5,
    comment: "Exceeded my expectations. Perfect for what I needed.",
    avatar: "M"
  },
  {
    id: 4,
    name: "Sarah Johnson",
    rating: 4,
    comment: "Great quality and fast shipping. Would recommend!",
    avatar: "S"
  }
];

export default function RecentReviews() {
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
          />
        ))}
        <span className="text-muted-foreground ml-1 text-sm">({rating})</span>
      </div>
    );
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Reviews</CardTitle>
        <CardAction>
          <Button variant="link" asChild>
            <Link href="#">View All</Link>
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="divide-y">
          {reviews.map((review, i) => (
            <Link href="#" key={i} className="hover:bg-muted/50 group flex gap-4 px-2 py-4">
              <Avatar className="bg-yellow-400">
                <AvatarFallback className="bg-yellow-400 font-medium text-white">
                  {review.avatar}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex justify-between gap-1">
                  <h4 className="text-sm font-medium">{review.name}</h4>
                  {renderStars(review.rating)}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{review.comment}</p>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
