export enum ProService {
  YES = 1,
  NO = 0,
}

interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}

export const serviceList: ServiceProps[] = [
  {
    title: "Consultation Services",
    description:
      "Expert guidance tailored to identify opportunities and strategize effectively.",
    pro: 0,
  },
  {
    title: "Custom Domain Integration",
    description:
      "Seamless integration of your unique domain for a professional online presence.",
    pro: 0,
  },
  {
    title: "Social Media Integrations",
    description:
      "Connect with popular platforms to enhance your online engagement and reach.",
    pro: 0,
  },
  {
    title: "Email Marketing Integrations",
    description:
      "Effortlessly connect email marketing tools to streamline your campaigns.",
    pro: 1,
  },
  {
    title: "SEO Optimization",
    description:
      "Improve your search engine visibility with tailored optimization strategies.",
    pro: 1,
  },
  {
    title: "Ongoing Support",
    description:
      "24/7 customer support to ensure smooth operations and address any issues.",
    pro: 1,
  },
];
