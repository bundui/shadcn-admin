export enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  key: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

export const plans: PlanProps[] = [
  {
    title: "Hobby",
    key: "hobby",
    popular: 0,
    price: 59,
    description: "1 developer, 1 product",
    buttonText: "Buy for $59",
    benefitList: ["1 developer", "1 product"],
  },
  {
    title: "Company",
    key: "company",
    popular: 1,
    price: 129,
    description: "5 developers, unlimited products, perfect for SaaS",
    buttonText: "Buy for $129",
    benefitList: [
      "5 developers",
      "Unlimited products",
      "Priority support",
      "Email support",
    ],
  },
  {
    title: "Enterprise",
    key: "enterprise",
    popular: 0,
    price: 299,
    description: "Unlimited developers, unlimited products, perfect for SaaS",
    buttonText: "Buy for $299",
    benefitList: [
      "Unlimited developers",
      "Unlimited products",
      "Priority support",
      "Email support",
    ],
  },
];
