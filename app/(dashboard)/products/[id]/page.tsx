import ProductImageGallery from "./product-image-gallery";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CircleDollarSign,
  HandCoinsIcon,
  HeartIcon,
  Layers2Icon,
  ShoppingCart,
  StarIcon,
  TruckIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductReviewList from "./reviews";
import SubmitReviewForm from "./submit-review-form";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { generateMeta } from "@/lib/generate-meta";

export async function generateMetadata() {
  return generateMeta({
    title: "Product Detail Page",
    description:
      "The product detail page is a user-friendly interface that allows you to see the basic data of the product in detail. Built with Tailwind CSS and Next.js",
    canonical: "/pages/products/detail"
  });
}

export default function Page() {
  return (
    <div className="grid gap-4 xl:grid-cols-3">
      <div className="min-w-0 xl:col-span-1">
        <ProductImageGallery />
      </div>
      <div className="space-y-4 xl:col-span-2">
        <Card>
          <CardContent className="space-y-6 pt-6">
            <div className="flex flex-col items-start justify-between md:flex-row">
              <h1 className="text-2xl font-bold lg:text-3xl">Acme Prism T-Shirt</h1>
              <div className="text-muted-foreground">SKU: WH1000XM4</div>
            </div>
            <div className="text-muted-foreground inline-flex gap-4 text-sm">
              <div>
                <span className="text-foreground font-semibold">Seller :</span> Zoetic Fashion
              </div>
              <div>
                <span className="text-foreground font-semibold">Published :</span> 20 Oct, 2024
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
              <div className="hover:border-primary/30 grid auto-cols-max grid-flow-col gap-4 rounded-lg border p-4">
                <CircleDollarSign className="h-7 w-7 opacity-40" />
                <div className="flex flex-col gap-1">
                  <span className="text-muted-foreground text-sm">Price</span>
                  <span className="text-lg font-bold">$120.40</span>
                </div>
              </div>
              <div className="hover:border-primary/30 grid auto-cols-max grid-flow-col gap-4 rounded-lg border p-4">
                <TruckIcon className="h-7 w-7 opacity-40" />
                <div className="flex flex-col gap-1">
                  <span className="text-muted-foreground text-sm">No. of Orders</span>
                  <span className="text-lg font-bold">250</span>
                </div>
              </div>
              <div className="hover:border-primary/30 grid auto-cols-max grid-flow-col gap-4 rounded-lg border p-4">
                <Layers2Icon className="h-7 w-7 opacity-40" />
                <div className="flex flex-col gap-1">
                  <span className="text-muted-foreground text-sm">Available Stocks</span>
                  <span className="text-lg font-bold">2,550</span>
                </div>
              </div>
              <div className="hover:border-primary/30 grid auto-cols-max grid-flow-col gap-4 rounded-lg border p-4">
                <HandCoinsIcon className="h-7 w-7 opacity-40" />
                <div className="flex flex-col gap-1">
                  <span className="text-muted-foreground text-sm">Total Revenue</span>
                  <span className="text-lg font-bold">$45,938</span>
                </div>
              </div>
            </div>
            <div className="grid auto-cols-max grid-flow-col gap-8">
              <div>
                <div className="mb-4 font-semibold">Colors:</div>
                <RadioGroup defaultValue="card" className="flex gap-4">
                  <div>
                    <RadioGroupItem
                      value="card"
                      id="card"
                      className="peer sr-only"
                      aria-label="Card"
                    />
                    <Label
                      htmlFor="card"
                      className="border-muted hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary flex h-10 w-10 cursor-pointer flex-col items-center justify-between rounded-full border-2 bg-green-400 p-4 -indent-[9999px]">
                      Card
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem
                      value="paypal"
                      id="paypal"
                      className="peer sr-only"
                      aria-label="Paypal"
                    />
                    <Label
                      htmlFor="paypal"
                      className="border-muted hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary flex h-10 w-10 cursor-pointer flex-col items-center justify-between rounded-full border-2 bg-indigo-400 p-4 -indent-[9999px]">
                      Paypal
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem
                      value="apple"
                      id="apple"
                      className="peer sr-only"
                      aria-label="Apple"
                    />
                    <Label
                      htmlFor="apple"
                      className="border-muted hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary flex h-10 w-10 cursor-pointer flex-col items-center justify-between rounded-full border-2 bg-purple-400 p-4 -indent-[9999px]">
                      Apple
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <div className="mb-4 font-semibold">Sizes:</div>
                <RadioGroup defaultValue="card" className="flex gap-4">
                  <div>
                    <RadioGroupItem value="sm" id="sm" className="peer sr-only" aria-label="sm" />
                    <Label
                      htmlFor="sm"
                      className="border-muted bg-muted hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary flex h-10 w-10 cursor-pointer flex-col items-center justify-center rounded-full border-2">
                      SM
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="lg" id="lg" className="peer sr-only" aria-label="lg" />
                    <Label
                      htmlFor="lg"
                      className="border-muted bg-muted hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary flex h-10 w-10 cursor-pointer flex-col items-center justify-center rounded-full border-2">
                      LG
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="xl" id="xl" className="peer sr-only" aria-label="xl" />
                    <Label
                      htmlFor="xl"
                      className="border-muted bg-muted hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary flex h-10 w-10 cursor-pointer flex-col items-center justify-center rounded-full border-2">
                      XL
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem
                      value="xxl"
                      id="xxl"
                      className="peer sr-only"
                      aria-label="xxl"
                    />
                    <Label
                      htmlFor="xxl"
                      className="border-muted bg-muted hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary flex h-10 w-10 cursor-pointer flex-col items-center justify-center rounded-full border-2">
                      XXL
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <Button>
                <ShoppingCart className="me-2 h-4 w-4" /> Add to Card
              </Button>
              <Button variant="outline">
                <HeartIcon className="me-2 h-4 w-4" /> Wishlist
              </Button>
            </div>
            <div className="grid gap-8 pt-6 xl:grid-cols-3">
              <div className="rounded-lg border xl:col-span-1">
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-semibold">Category</TableCell>
                      <TableCell className="text-right">T-Shirt</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">Brand</TableCell>
                      <TableCell className="text-right">Tommy Hilfiger</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">Color</TableCell>
                      <TableCell className="text-right">Purple</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">Weight</TableCell>
                      <TableCell className="text-right">140 Gr</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <div className="space-y-8 xl:col-span-2">
                <div>
                  <h3 className="mb-2 font-semibold">Description:</h3>
                  <p className="text-muted-foreground">
                    Tommy Hilfiger men striped pink sweatshirt. Crafted with cotton. Material
                    composition is 100% organic cotton.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Key Features:</h3>
                  <ul className="text-muted-foreground list-inside list-disc">
                    <li>Industry-leading noise cancellation</li>
                    <li>30-hour battery life</li>
                    <li>Touch sensor controls</li>
                    <li>Speak-to-chat technology</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex-row justify-between">
            <CardTitle>Ratings & Reviews</CardTitle>
            <div className="mt-0!">
              <SubmitReviewForm />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 xl:grid-cols-3">
              <div className="order-last lg:order-first xl:col-span-2">
                <ProductReviewList />
              </div>
              <div className="order-first lg:order-last xl:col-span-1">
                <div className="rounded-lg border">
                  <div className="bg-muted flex items-center gap-4 rounded-lg p-4">
                    <div className="flex items-center gap-1">
                      <StarIcon className="h-6 w-6 fill-orange-400 stroke-orange-400" />
                      <StarIcon className="h-6 w-6 fill-orange-400 stroke-orange-400" />
                      <StarIcon className="h-6 w-6 fill-orange-400 stroke-orange-400" />
                      <StarIcon className="h-6 w-6 stroke-orange-400" />
                      <StarIcon className="h-6 w-6 stroke-orange-400" />
                    </div>
                    <span className="text-muted-foreground">4.3 (12 reviews)</span>
                  </div>
                  <div className="space-y-6 p-4">
                    <div className="flex items-center gap-4 text-sm">
                      <span className="w-20">5 stars</span>
                      <Progress value={70} color="bg-orange-400" />
                      <span>70%</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="w-20">4 stars</span>
                      <Progress value={17} color="bg-orange-600" />
                      <span>17%</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="w-20">3 stars</span>
                      <Progress value={7} color="bg-yellow-300" />
                      <span>7%</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="w-20">2 stars</span>
                      <Progress value={4} color="bg-yellow-600" />
                      <span>4%</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="w-20">1 star</span>
                      <Progress value={2} color="bg-red-600" />
                      <span>2%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
