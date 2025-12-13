"use client";

import { useCheckoutStore } from "../store";
import { Cart } from "./cart";
import { AddressPage } from "./address-page";
import { PaymentPage } from "./payment-page";
import { ConfirmationPage } from "./confirmation-page";

const pages = {
  1: Cart,
  2: AddressPage,
  3: PaymentPage,
  4: ConfirmationPage
};

const Index = () => {
  const currentStep = useCheckoutStore((state) => state.currentStep);
  const Page = pages[currentStep as keyof typeof pages] || Cart;
  return <Page />;
};

export default Index;
