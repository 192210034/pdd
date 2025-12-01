import { Clock, CheckCircle, X } from 'lucide-react';
import { Button } from './ui/button';

interface WaitingApprovalProps {
  onNavigate: (screen: string) => void;
}

export function WaitingApproval({ onNavigate }: WaitingApprovalProps) {
  return (
    <div className="min-h-screen bg-[#F3F4F6] flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
          <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 relative">
            <Clock className="w-12 h-12 text-yellow-600" />
            <div className="absolute inset-0 rounded-full border-4 border-yellow-200 border-t-yellow-600 animate-spin"></div>
          </div>

          <h2 className="text-[#111827] text-2xl mb-4">Waiting for Approval</h2>
          <p className="text-[#6B7280] mb-8">
            Your session request has been sent to the mentor. They typically respond within 2-4 hours.
          </p>

          <div className="bg-[#F3F4F6] rounded-xl p-6 mb-8 text-left">
            <h3 className="text-[#111827] mb-4">What happens next?</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-6 h-6 bg-[#2B59FF] rounded-full flex items-center justify-center flex-shrink-0 text-white mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[#111827] mb-1">Request Sent</p>
                  <p className="text-[#6B7280]">Mentor has been notified</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 border-2 border-[#2B59FF] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-[#2B59FF] rounded-full animate-pulse"></div>
                </div>
                <div>
                  <p className="text-[#111827] mb-1">Mentor Review</p>
                  <p className="text-[#6B7280]">They'll accept or suggest alternate time</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 border-2 border-gray-300 rounded-full flex-shrink-0 mt-0.5"></div>
                <div>
                  <p className="text-[#6B7280] mb-1">Payment & Confirmation</p>
                  <p className="text-[#6B7280]">You'll receive meeting link after payment</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              onClick={() => onNavigate('aspirant-home')}
              variant="outline"
              className="flex-1"
            >
              Go Home
            </Button>
            <Button
              onClick={() => onNavigate('chat')}
              className="flex-1 bg-[#2B59FF] hover:bg-[#1E40AF] text-white"
            >
              Message Mentor
            </Button>
          </div>

          <button
            onClick={() => onNavigate('payment-success')}
            className="text-red-600 hover:underline mt-6"
          >
            Cancel Request
          </button>
        </div>
      </div>
    </div>
  );
}
