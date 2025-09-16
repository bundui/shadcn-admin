interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

export const FAQList: FAQProps[] = [
  {
    question: "How does the free trial work?",
    answer:
      "Our free trial gives you access to all features for a limited time. No credit card is required, and you can cancel anytime.",
    value: "item-1"
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Absolutely! You can upgrade, downgrade, or modify your plan at any time through your account settings.",
    value: "item-2"
  },
  {
    question: "Is customer support available 24/7?",
    answer:
      "Yes, our support team is available around the clock to assist you with any questions or issues.",
    value: "item-3"
  },
  {
    question: "How secure is my data?",
    answer:
      "We prioritize your data privacy with robust security protocols, including end-to-end encryption and GDPR compliance.",
    value: "item-4"
  },
  {
    question: "Do you offer custom plans for businesses?",
    answer:
      "Yes, we offer flexible, custom plans designed to meet the unique needs of businesses of all sizes. Contact us for more details.",
    value: "item-5"
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit components, PayPal, and bank transfers for easy and convenient payment options.",
    value: "item-6"
  }
];
