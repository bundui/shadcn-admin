import { StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import UserAvatar from "@/components/user-avatar";

const reviews = [
  {
    id: 4,
    name: "Mark P.",
    image: "/images/avatars/4.png",
    title: "Decent but could be better",
    body: "The product is okay, but I expected more for the price. A few minor flaws, but overall, it's acceptable.",
    date: "5 days ago"
  },
  {
    id: 5,
    name: "Jessica K.",
    image: "/images/avatars/5.png",
    title: "Beautiful design",
    body: "I love the sleek design and the ease of use. Haven’t come across such a stylish product in a long time. Highly satisfied!",
    date: "2 weeks ago"
  },
  {
    id: 6,
    name: "Michael B.",
    image: "/images/avatars/6.png",
    title: "Satisfied with my purchase",
    body: "I’m really happy with this purchase. The quality is great, and it works just as described. No complaints so far!",
    date: "4 days ago"
  },
  {
    id: 7,
    name: "Anna M.",
    image: "/images/avatars/7.png",
    title: "Could be improved",
    body: "The product works, but there’s room for improvement. It does its job, but the build quality feels a bit cheap.",
    date: "6 days ago"
  },
  {
    id: 8,
    name: "Chris T.",
    image: "/images/avatars/8.png",
    title: "Great for everyday use",
    body: "Perfect for daily use. It’s simple, efficient, and does exactly what it promises. Definitely worth the money.",
    date: "1 day ago"
  },
  {
    id: 9,
    name: "Lisa G.",
    image: "/images/avatars/9.png",
    title: "Not worth the price",
    body: "The product does the job, but I feel it’s overpriced for what it offers. There are better options available at a similar price.",
    date: "3 weeks ago"
  },
  {
    id: 10,
    name: "David L.",
    image: "/images/avatars/10.jpeg",
    title: "Highly functional and stylish",
    body: "This product is both functional and stylish. It fits perfectly with my needs, and I’m really impressed with the overall quality.",
    date: "1 month ago"
  }
];

export default function ProductReviewList() {
  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div key={review.id} className="grid gap-4 rounded-lg border p-4">
          <div className="flex items-start gap-4">
            <UserAvatar
              image={`${process.env.DASHBOARD_BASE_URL}/${review.image}`}
              fallback={review.name}
            />
            <div className="grid grow gap-1">
              <div className="flex items-center justify-between gap-2">
                <div className="font-medium">{review.name}</div>
                <div className="text-muted-foreground text-xs">{review.date}</div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">
                  <div className="flex items-center gap-2">
                    <StarIcon className="h-4 w-4 fill-orange-400 stroke-orange-400" />
                    <div className="text-muted-foreground text-sm">3.2</div>
                  </div>
                </Badge>
              </div>
            </div>
          </div>
          <div className="grid gap-2">
            <div className="font-semibold">{review.title}</div>
            <div className="text-muted-foreground">{review.body}</div>
          </div>
        </div>
      ))}
      <div className="text-center">
        <Button variant="outline">Load more..</Button>
      </div>
    </div>
  );
}
