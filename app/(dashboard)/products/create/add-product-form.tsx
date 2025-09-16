"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CirclePlusIcon, UploadIcon } from "lucide-react";
import { AddMediaFromUrl } from "./add-media-from-url";
import AddNewCategory from "./add-category";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  sku: z.string(),
  barcode: z.string(),
  description: z.string(),
  file: z.string(),
  variants: z.string(),
  price: z.string(),
  status: z.string(),
  category: z.string(),
  sub_category: z.string(),
});

export default function AddProductForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      sku: "",
      barcode: "",
      description: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mb-4 flex items-center justify-between space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">Add Products</h1>
          <div className="flex gap-2">
            <Button type="button" variant="secondary">
              Discard
            </Button>
            <Button type="button" variant="outline">
              Save Draft
            </Button>
            <Button type="submit">Publish</Button>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-4 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Product Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid gap-4 lg:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="sku"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>SKU</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="barcode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Barcode</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description (Optional)</FormLabel>
                        <FormControl>
                          <Textarea {...field} />
                        </FormControl>
                        <FormDescription>
                          Set a description to the product for better
                          visibility.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>
            {/* -- Product images -- */}
            <Card>
              <CardHeader className="flex-row items-center justify-between">
                <CardTitle>Images</CardTitle>
                <AddMediaFromUrl>
                  <Button variant="link" size="sm" className="mt-0!">
                    Add media from URL
                  </Button>
                </AddMediaFromUrl>
              </CardHeader>
              <CardContent>
                <FormField
                  name="file"
                  control={form.control}
                  render={() => (
                    <div className="flex h-40 items-center justify-center rounded-lg border-2 border-dashed">
                      <Button type="button" variant="outline">
                        <UploadIcon className="me-2 h-3 w-3" /> Browse image
                      </Button>
                    </div>
                  )}
                />
              </CardContent>
            </Card>
            {/* -- Variants -- */}
            <Card>
              <CardHeader>
                <CardTitle>Variants</CardTitle>
              </CardHeader>
              <CardContent>
                <FormField
                  name="variants"
                  control={form.control}
                  render={({ field }) => (
                    <div className="space-y-4">
                      <div className="grid gap-4 lg:grid-flow-col">
                        <FormItem>
                          <FormLabel>Options</FormLabel>
                          <Select {...field}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectItem value="apple">Size</SelectItem>
                                <SelectItem value="blueberry">Color</SelectItem>
                                <SelectItem value="banana">Weight</SelectItem>
                                <SelectItem value="banana">Smell</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                        <FormItem>
                          <FormLabel>Value</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                        <FormItem>
                          <FormLabel>Price</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      </div>
                      <div className="grid gap-4 lg:grid-flow-col">
                        <FormItem>
                          <Select {...field}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectItem value="apple">Size</SelectItem>
                                <SelectItem value="blueberry">Color</SelectItem>
                                <SelectItem value="banana">Weight</SelectItem>
                                <SelectItem value="banana">Smell</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                        <FormItem>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                        <FormItem>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      </div>
                    </div>
                  )}
                />
              </CardContent>
              <CardFooter className="justify-center border-t p-0">
                <Button
                  type="button"
                  variant="ghost"
                  className="w-full rounded-none"
                >
                  <CirclePlusIcon className="me-2 h-4 w-4" /> Add Variant
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="col-span-2 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <FormField
                    name="price"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Base Price</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="price"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Discounted Price</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Charge tax on this product
                    </label>
                  </div>
                  <hr />
                  <div className="flex items-center space-x-2">
                    <Switch id="airplane-mode" checked />
                    <Label htmlFor="airplane-mode">In stock</Label>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Status</CardTitle>
              </CardHeader>
              <CardContent>
                <FormField
                  name="status"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select {...field}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="apple">Draft</SelectItem>
                              <SelectItem value="blueberry">Active</SelectItem>
                              <SelectItem value="banana">Archived</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormDescription>Set the product status.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex-row items-center justify-between">
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <FormField
                    name="category"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="flex gap-2">
                            <div className="grow">
                              <Select {...field}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectItem value="Electronics">
                                      Electronics
                                    </SelectItem>
                                    <SelectItem value="Clothing">
                                      Clothing
                                    </SelectItem>
                                    <SelectItem value="banana">
                                      Accessories
                                    </SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                            </div>
                            <AddNewCategory />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="sub_category"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="flex gap-2">
                            <div className="grow">
                              <Select {...field}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a sub category" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectItem value="Toys">Toys</SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                            </div>
                            <AddNewCategory />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </Form>
  );
}
