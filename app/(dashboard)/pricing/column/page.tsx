"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Check } from "lucide-react";
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
      description: "Essential features for individuals",
      monthlyPrice: 9.99,
      yearlyPrice: 99.99,
      features: ["1 user", "5GB storage", "Basic support", "Limited integrations"]
    },
    {
      name: "Pro",
      description: "Advanced features for professionals",
      monthlyPrice: 19.99,
      yearlyPrice: 199.99,
      features: [
        "5 users",
        "50GB storage",
        "Priority support",
        "Advanced integrations",
        "Analytics"
      ]
    },
    {
      name: "Enterprise",
      description: "Comprehensive solution for teams",
      monthlyPrice: 49.99,
      yearlyPrice: 499.99,
      features: [
        "Unlimited users",
        "500GB storage",
        "24/7 premium support",
        "Custom integrations",
        "Advanced analytics",
        "API access"
      ]
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
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {pricingTiers.map((tier, index) => (
          <Card key={index} className="relative flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl">{tier.name}</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
            </CardHeader>
            <CardContent className="grow">
              <div className="mb-4">
                <p className="text-4xl font-bold">
                  {isYearly ? formatPrice(tier.yearlyPrice) : formatPrice(tier.monthlyPrice)}
                  <span className="text-sm font-normal">/{isYearly ? "year" : "month"}</span>
                </p>
                {isYearly && (
                  <Badge className="absolute end-4 top-4">
                    Save {calculateYearlySavings(tier.monthlyPrice, tier.yearlyPrice)}%
                  </Badge>
                )}
              </div>
              <ul className="space-y-2">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Choose {tier.name}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="mb-4 text-xl font-semibold">Why Choose Our Platform?</h2>
        <div className="grid gap-4 md:grid-cols-3">
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
              <p className="text-muted-foreground">Study at your own pace, anytime and anywhere</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-10 max-w-(--breakpoint-sm) space-y-10">
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
