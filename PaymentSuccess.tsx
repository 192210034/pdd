import { CheckCircle, Download, Calendar, Video, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

interface PaymentSuccessProps {
  onNavigate: (screen: string) => void;
}

export function PaymentSuccess({ onNavigate }: PaymentSuccessProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-8 text-center relative overflow-hidden">
          {/* Success animation */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${2 + Math.random() * 2}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              >
                {i % 2 === 0 ? (
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                ) : (
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                )}
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="w-28 h-28 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in shadow-2xl">
              <CheckCircle className="w-20 h-20 text-white" />
            </div>

            <h1 className="text-[#111827] text-3xl mb-2">Payment Successful!</h1>
            <p className="text-[#6B7280] mb-8">
              Your session has been confirmed
            </p>

            <div className="bg-[#F3F4F6] rounded-2xl p-6 mb-6 text-left">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#6B7280]">Transaction ID</span>
                <span className="text-[#111827]">TXN123456789</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#6B7280]">Amount Paid</span>
                <span className="text-[#111827] text-xl">₹549</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#6B7280]">Payment Method</span>
                <span className="text-[#111827]">UPI</span>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-4 mb-6 border border-green-200">
              <p className="text-green-800">
                <strong>✓ Meeting link sent!</strong> Check your email and notifications for the Google Meet link.
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <Button
                onClick={() => onNavigate('invoice')}
                variant="outline"
                className="w-full h-12"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Invoice
              </Button>
              <Button
                onClick={() => onNavigate('session-details')}
                className="w-full bg-[#2B59FF] hover:bg-[#1E40AF] text-white h-12"
              >
                <Video className="w-5 h-5 mr-2" />
                View Session Details
              </Button>
            </div>

            <Button
              onClick={() => onNavigate('aspirant-home')}
              variant="ghost"
              className="text-[#2B59FF]"
            >
              Back to Home
            </Button>
          </div>
        </div>

        {/* Session reminder */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mt-4">
          <div className="flex items-center gap-3 mb-3">
            <Calendar className="w-6 h-6 text-[#2B59FF]" />
            <h3 className="text-[#111827]">Add to Calendar</h3>
          </div>
          <p className="text-[#6B7280] mb-4">
            Don't forget your session on Nov 25, 2024 at 3:00 PM
          </p>
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1">
              Google Calendar
            </Button>
            <Button variant="outline" className="flex-1">
              Apple Calendar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
