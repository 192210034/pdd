import { useState } from "react";
import { AchieverOnboardingCategory } from "./AchieverOnboardingCategory";
import { AchieverOnboardingSubExam } from "./AchieverOnboardingSubExam";
import { AchieverOnboardingForm, AchieverFormData } from "./AchieverOnboardingForm";
import { AchieverOnboardingPending } from "./AchieverOnboardingPending";

type Step = "category" | "subExam" | "form" | "pending";

export function AchieverOnboardingFlow() {
  const [currentStep, setCurrentStep] = useState<Step>("category");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubExam, setSelectedSubExam] = useState("");
  const [submittedFormData, setSubmittedFormData] = useState<AchieverFormData | null>(null);

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    setCurrentStep("subExam");
  };

  const handleSelectSubExam = (subExam: string) => {
    setSelectedSubExam(subExam);
    setCurrentStep("form");
  };

  const handleFormSubmit = (data: AchieverFormData) => {
    setSubmittedFormData(data);
    setCurrentStep("pending");
  };

  const handleContinue = () => {
    // Navigate to dashboard or complete onboarding
    console.log("Navigating to dashboard with limited access");
    alert("Onboarding flow complete! In a real app, you would navigate to the dashboard.");
  };

  return (
    <>
      {currentStep === "category" && (
        <AchieverOnboardingCategory onSelectCategory={handleSelectCategory} />
      )}

      {currentStep === "subExam" && (
        <AchieverOnboardingSubExam
          category={selectedCategory}
          onSelectSubExam={handleSelectSubExam}
          onBack={() => setCurrentStep("category")}
        />
      )}

      {currentStep === "form" && (
        <AchieverOnboardingForm
          selectedExam={selectedSubExam}
          onSubmit={handleFormSubmit}
          onBack={() => setCurrentStep("subExam")}
        />
      )}

      {currentStep === "pending" && submittedFormData && (
        <AchieverOnboardingPending
          formData={submittedFormData}
          onContinue={handleContinue}
        />
      )}
    </>
  );
}
