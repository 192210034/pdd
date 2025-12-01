import { CheckCircle, Sparkles, Award } from 'lucide-react';
import { Button } from './ui/button';

interface VerifiedBadgeScreenProps {
  onNavigate: (screen: string) => void;
}

export function VerifiedBadgeScreen({ onNavigate }: VerifiedBadgeScreenProps) {
  return (
    <div className="min-h-screen p-4 md:p-8 bg-gradient-to-br from-[#2B59FF] to-[#1E40AF]">
      <div className="max-w-2xl mx-auto pt-20">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center relative overflow-hidden">
          {/* Confetti effect */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>

          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl relative">
              <CheckCircle className="w-20 h-20 text-white" />
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <Award className="w-7 h-7 text-white" />
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-yellow-500" />
              <h1 className="text-[#111827] text-4xl">Congratulations!</h1>
              <Sparkles className="w-6 h-6 text-yellow-500" />
            </div>

            <h2 className="text-[#2B59FF] text-2xl mb-4">You're Verified!</h2>

            <p className="text-[#6B7280] text-lg mb-8">
              Your profile has been verified successfully. You can now start accepting mentorship sessions and help aspirants achieve their dreams.
            </p>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-left">
                  <p className="text-[#111827]">Rajesh Kumar</p>
                  <p className="text-[#6B7280]">SSC CGL 2023 • 1st Attempt</p>
                </div>
                <div className="ml-auto px-4 py-2 bg-green-100 rounded-full">
                  <span className="text-green-700">✓ Verified</span>
                </div>
              </div>
              <p className="text-[#6B7280]">
                This is how your verified badge will appear on your profile
              </p>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-left p-4 bg-[#F3F4F6] rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-[#111827]">Build trust with aspirants</span>
              </div>
              <div className="flex items-center gap-3 text-left p-4 bg-[#F3F4F6] rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-[#111827]">Higher profile visibility</span>
              </div>
              <div className="flex items-center gap-3 text-left p-4 bg-[#F3F4F6] rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-[#111827]">Start earning from sessions</span>
              </div>
            </div>

            <Button
              onClick={() => onNavigate('achiever-dashboard')}
              className="w-full bg-[#2B59FF] hover:bg-[#1E40AF] text-white h-12 text-lg"
            >
              Go to Dashboard
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
