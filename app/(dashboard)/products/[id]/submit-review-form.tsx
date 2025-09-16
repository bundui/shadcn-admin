import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CirclePlusIcon, StarIcon } from "lucide-react";
import { DialogDescription } from "@radix-ui/react-dialog";

export default function SubmitReviewForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <CirclePlusIcon className="me-2 h-4 w-4" /> Submit Review
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-md">
        <DialogHeader>
          <DialogTitle>Leave a Review</DialogTitle>
          <DialogDescription>Share your thoughts about this product.</DialogDescription>
        </DialogHeader>
        <form className="mt-4 grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="comment">Comment</Label>
            <Textarea id="comment" placeholder="Share your thoughts..." rows={4} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="rating">Rating</Label>
            <div className="flex items-center gap-2">
              <StarIcon className="h-6 w-6 fill-primary" />
              <StarIcon className="h-6 w-6 fill-primary" />
              <StarIcon className="h-6 w-6 fill-primary" />
              <StarIcon className="h-6 w-6 fill-muted stroke-muted-foreground" />
              <StarIcon className="h-6 w-6 fill-muted stroke-muted-foreground" />
            </div>
          </div>
          <Button type="submit" className="mt-4 w-full">
            Submit Review
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
