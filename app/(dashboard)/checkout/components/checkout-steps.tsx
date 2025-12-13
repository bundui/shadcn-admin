"use client";

import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useCheckoutStore } from "../store";

const steps = [
  { number: 1, label: "Cart" },
  { number: 2, label: "Address" },
  { number: 3, label: "Payment" },
  { number: 4, label: "Confirmation" }
];

export function CheckoutSteps() {
  const { currentStep, setStep } = useCheckoutStore();

  return (
    <Card>
      <CardContent>
        <div className="flex items-center justify-between gap-4">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <button onClick={() => setStep(step.number)} className="flex items-center gap-2">
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-full text-sm font-medium ${
                    step.number === currentStep
                      ? "bg-primary text-primary-foreground"
                      : step.number < currentStep
                        ? "bg-green-600 text-green-100"
                        : "bg-muted text-muted-foreground"
                  }`}>
                  {step.number < currentStep ? <Check className="h-4 w-4" /> : step.number}
                </span>
                <span
                  className={`text-sm ${step.number === currentStep ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                  {step.label}
                </span>
              </button>
              {index < steps.length - 1 && <div className="bg-border mx-4 h-px w-24" />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
