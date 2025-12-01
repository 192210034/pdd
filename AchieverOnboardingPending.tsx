import { CheckCircle2, Clock, ArrowRight } from "lucide-react";
import { AchieverFormData } from "./AchieverOnboardingForm";

interface AchieverOnboardingPendingProps {
  formData: AchieverFormData;
  onContinue: () => void;
}

export function AchieverOnboardingPending({ formData, onContinue }: AchieverOnboardingPendingProps) {
  const maskRollNumber = (rollNumber: string) => {
    if (rollNumber.length <= 3) return rollNumber;
    const lastThree = rollNumber.slice(-3);
    const masked = "*".repeat(rollNumber.length - 3);
    return masked + lastThree;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F3F4F6] to-white">
      <div className="max-w-md mx-auto px-4 py-12">
        {/* Success Illustration */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-[#2B59FF]/20 to-[#2B59FF]/5 rounded-full flex items-center justify-center">
              <CheckCircle2 className="text-[#2B59FF]" size={64} strokeWidth={1.5} />
            </div>
            <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-pulse">
              <Clock className="text-white" size={24} />
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-[#111827] mb-3">We're Verifying Your Achievement</h1>
          <p className="text-[#6B7280]">
            This usually takes a few minutes. You'll be notified once verification is completed.
          </p>
        </div>

        {/* Details Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 mb-6">
          <h2 className="text-[#111827] mb-4">Submitted Details</h2>
          
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <span className="text-[#6B7280]">Name</span>
              <span className="text-[#111827]">{formData.fullName}</span>
            </div>
            
            <div className="h-px bg-gray-100"></div>
            
            <div className="flex justify-between items-start">
              <span className="text-[#6B7280]">Exam</span>
              <span className="text-[#111827] text-right">{formData.examCleared}</span>
            </div>
            
            <div className="h-px bg-gray-100"></div>
            
            <div className="flex justify-between items-start">
              <span className="text-[#6B7280]">Year</span>
              <span className="text-[#111827]">{formData.yearOfPassing}</span>
            </div>
            
            <div className="h-px bg-gray-100"></div>
            
            <div className="flex justify-between items-start">
              <span className="text-[#6B7280]">Roll Number</span>
              <span className="text-[#111827] font-mono">{maskRollNumber(formData.rollNumber)}</span>
            </div>
            
            <div className="h-px bg-gray-100"></div>
            
            <div className="flex justify-between items-start">
              <span className="text-[#6B7280]">Attempts</span>
              <span className="text-[#111827]">{formData.attempts}</span>
            </div>
          </div>

          {/* Status Badge */}
          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-center gap-3">
            <Clock className="text-amber-600" size={20} />
            <div>
              <p className="text-amber-900">Verification in Progress</p>
              <p className="text-sm text-amber-700">Usually takes 5-15 minutes</p>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <button
          onClick={onContinue}
          className="w-full bg-gradient-to-r from-[#2B59FF] to-[#1E40AF] text-white py-4 rounded-2xl hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 mb-4"
        >
          <span>Continue to Dashboard (Limited Access)</span>
          <ArrowRight size={20} />
        </button>

        {/* Info Note */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
          <p className="text-sm text-[#6B7280] text-center">
            <span className="text-[#2B59FF]">ℹ️ Note: </span>
            You can explore the app but cannot accept sessions until verification is completed.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-[#6B7280]">
            Need help? <a href="#" className="text-[#2B59FF] hover:underline">Contact Support</a>
          </p>
        </div>
      </div>
    </div>
  );
}
