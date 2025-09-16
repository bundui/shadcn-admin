"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Check, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export default function Page() {
  const [isYearly, setIsYearly] = useState(false);

  const pricingTiers = [
    {
      name: "Basic",
      monthlyPrice: 9.99,
      yearlyPrice: 99.99,
      features: {
        users: "1 user",
        storage: "5GB storage",
        support: "Basic support",
        integrations: "Limited integrations",
        analytics: false,
        api: false
      }
    },
    {
      name: "Pro",
      monthlyPrice: 19.99,
      yearlyPrice: 199.99,
      features: {
        users: "5 users",
        storage: "50GB storage",
        support: "Priority support",
        integrations: "Advanced integrations",
        analytics: true,
        api: false
      }
    },
    {
      name: "Enterprise",
      monthlyPrice: 49.99,
      yearlyPrice: 499.99,
      features: {
        users: "Unlimited users",
        storage: "500GB storage",
        support: "24/7 premium support",
        integrations: "Custom integrations",
        analytics: true,
        api: true
      }
    }
  ];

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit components, including Visa, MasterCard, American Express, and Discover. We also support PayPal for your convenience."
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer:
        "Yes, you can cancel your subscription at any time. If you cancel, you'll continue to have access to the platform until the end of your current billing period."
    },
    {
      question: "Is there a limit to how many courses I can take?",
      answer:
        "No, there's no limit. With our Premium Plan, you have unlimited access to all courses on our platform. You can take as many courses as you like, at your own pace."
    },
    {
      question: "Do you offer a free trial?",
      answer:
        "We offer a 7-day free trial for new users. This allows you to explore our platform and content before committing to a subscription. No credit card is required for the trial."
    },
    {
      question: "Are the courses downloadable for offline viewing?",
      answer:
        "Yes, our mobile app allows you to download courses for offline viewing. This feature is available for both iOS and Android devices."
    }
  ];

  const formatPrice = (price: number) => `$${price.toFixed(2)}`;

  const calculateYearlySavings = (monthlyPrice: number, yearlyPrice: number) => {
    const yearlyCost = monthlyPrice * 12;
    const savings = yearlyCost - yearlyPrice;
    const savingsPercentage = (savings / yearlyCost) * 100;
    return savingsPercentage.toFixed(0);
  };

  return (
    <div className="mx-auto max-w-(--breakpoint-lg) lg:py-16">
      <div className="mb-6 flex flex-col items-start justify-between space-y-2 lg:flex-row lg:items-center">
        <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">Choose Your Plan</h1>
        <div className="flex items-start justify-center space-x-4 lg:items-center">
          <span className={`text-sm ${!isYearly ? "font-bold" : ""}`}>Monthly</span>
          <Switch
            checked={isYearly}
            onCheckedChange={setIsYearly}
            aria-label="Toggle yearly pricing"
          />
          <span className={`text-sm ${isYearly ? "font-bold" : ""}`}>Yearly</span>
        </div>
      </div>

      <Card>
        <CardContent className="p-0 pb-4">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Features</TableHead>
                  {pricingTiers.map((tier, index) => (
                    <TableHead key={index} className="text-center">
                      {tier.name}
                      {isYearly && (
                        <Badge className="absolute ms-2">
                          Save {calculateYearlySavings(tier.monthlyPrice, tier.yearlyPrice)}%
                        </Badge>
                      )}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Price</TableCell>
                  {pricingTiers.map((tier, index) => (
                    <TableCell key={index} className="text-center">
                      <div className="text-xl font-bold">
                        {isYearly ? formatPrice(tier.yearlyPrice) : formatPrice(tier.monthlyPrice)}
                        <span className="text-sm font-normal">/{isYearly ? "year" : "month"}</span>
                      </div>
                    </TableCell>
                  ))}
                </TableRow>
                {(
                  Object.keys(pricingTiers[0].features) as Array<
                    keyof (typeof pricingTiers)[0]["features"]
                  >
                ).map((feature) => (
                  <TableRow key={feature}>
                    <TableCell className="font-medium capitalize">{feature}</TableCell>
                    {pricingTiers.map((tier, index) => (
                      <TableCell key={index} className="text-center">
                        {typeof tier.features[feature] === "boolean" ? (
                          tier.features[feature] ? (
                            <Check className="mx-auto text-green-500" />
                          ) : (
                            <X className="mx-auto text-red-500" />
                          )
                        ) : (
                          tier.features[feature]
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell></TableCell>
                  {pricingTiers.map((tier, index) => (
                    <TableCell key={index} className="text-center">
                      <Button>Choose {tier.name}</Button>
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 grid grid-cols-2 gap-4 lg:mt-12">
        <div>
          <h2 className="mb-4 text-xl font-semibold">Why Choose Our Platform?</h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-2 text-xl font-medium">Comprehensive Library</h3>
                <p className="text-muted-foreground">
                  Access thousands of courses across various disciplines
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-2 text-xl font-medium">Expert Instructors</h3>
                <p className="text-muted-foreground">
                  Learn from industry professionals and thought leaders
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-2 text-xl font-medium">Flexible Learning</h3>
                <p className="text-muted-foreground">
                  Study at your own pace, anytime and anywhere
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-xl font-semibold">Frequently Asked Questions</h2>
          <Card>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
