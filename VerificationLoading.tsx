import { useEffect } from 'react';
import { Loader2, CheckCircle2 } from 'lucide-react';

interface VerificationLoadingProps {
  onNavigate: (screen: string) => void;
}

export function VerificationLoading({ onNavigate }: VerificationLoadingProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onNavigate('verification-pending');
    }, 3000);
    return () => clearTimeout(timer);
  }, [onNavigate]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-white">
      <div className="text-center max-w-md">
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0 bg-[#2B59FF]/10 rounded-full animate-ping"></div>
          <div className="relative w-32 h-32 bg-[#2B59FF] rounded-full flex items-center justify-center">
            <Loader2 className="w-16 h-16 text-white animate-spin" />
          </div>
        </div>

        <h2 className="text-[#111827] text-3xl mb-4">Verifying Your Details</h2>
        <p className="text-[#6B7280] mb-8">
          Our AI system is analyzing your scorecard and cross-checking the details you provided...
        </p>

        <div className="space-y-4 text-left bg-[#F3F4F6] rounded-xl p-6">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span className="text-[#111827]">Scorecard uploaded</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span className="text-[#111827]">Details extracted</span>
          </div>
          <div className="flex items-center gap-3">
            <Loader2 className="w-5 h-5 text-[#2B59FF] animate-spin" />
            <span className="text-[#111827]">Verifying with official records...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
