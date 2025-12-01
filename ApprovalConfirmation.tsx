import { CheckCircle, Calendar, Clock, User, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

interface ApprovalConfirmationProps {
  onNavigate: (screen: string) => void;
}

export function ApprovalConfirmation({ onNavigate }: ApprovalConfirmationProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-8 text-center relative overflow-hidden">
          {/* Success animation */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-green-400 rounded-full animate-ping"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>

          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-16 h-16 text-white" />
            </div>

            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              <h2 className="text-[#111827] text-3xl">Request Accepted!</h2>
              <Sparkles className="w-5 h-5 text-yellow-500" />
            </div>

            <p className="text-[#6B7280] mb-8">
              Great! The aspirant will be notified and can proceed with payment.
            </p>

            <div className="bg-[#F3F4F6] rounded-2xl p-6 mb-8 text-left">
              <h3 className="text-[#111827] mb-4">Session Details</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-[#2B59FF]" />
                  <div>
                    <p className="text-[#6B7280]">Aspirant</p>
                    <p className="text-[#111827]">Rohit Kumar</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#2B59FF]" />
                  <div>
                    <p className="text-[#6B7280]">Date</p>
                    <p className="text-[#111827]">Monday, November 25, 2024</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#2B59FF]" />
                  <div>
                    <p className="text-[#6B7280]">Time</p>
                    <p className="text-[#111827]">03:00 PM - 04:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <p className="text-[#2B59FF]">
                <strong>Next Step:</strong> Once the aspirant completes payment, a Google Meet link will be automatically generated and shared with both of you.
              </p>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => onNavigate('meet-link-generated')}
                className="flex-1 bg-[#2B59FF] hover:bg-[#1E40AF] text-white"
              >
                View Link (Demo)
              </Button>
              <Button
                onClick={() => onNavigate('achiever-dashboard')}
                variant="outline"
                className="flex-1"
              >
                Dashboard
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
