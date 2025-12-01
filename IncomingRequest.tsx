import { Calendar, Clock, User, MessageCircle, Check, X } from 'lucide-react';
import { Button } from './ui/button';

interface IncomingRequestProps {
  onNavigate: (screen: string) => void;
}

export function IncomingRequest({ onNavigate }: IncomingRequestProps) {
  return (
    <div className="min-h-screen bg-[#F3F4F6] p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <h1 className="text-[#111827] text-3xl mb-2">Session Requests</h1>
          <p className="text-[#6B7280]">Review and respond to booking requests</p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6 mb-4">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">
              RK
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-[#111827] text-lg">Rohit Kumar</h3>
                <span className="px-2 py-1 bg-blue-100 text-[#2B59FF] rounded-full text-xs">New</span>
              </div>
              <p className="text-[#6B7280]">Preparing for SSC CGL 2025</p>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 p-3 bg-[#F3F4F6] rounded-lg">
              <Calendar className="w-5 h-5 text-[#2B59FF]" />
              <div>
                <p className="text-[#6B7280]">Date</p>
                <p className="text-[#111827]">Monday, November 25, 2024</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-[#F3F4F6] rounded-lg">
              <Clock className="w-5 h-5 text-[#2B59FF]" />
              <div>
                <p className="text-[#6B7280]">Time</p>
                <p className="text-[#111827]">03:00 PM - 04:00 PM</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg mb-6">
            <p className="text-[#6B7280] mb-1">Message from aspirant:</p>
            <p className="text-[#111827]">
              "Hi! I'm struggling with quantitative aptitude. Would love to discuss strategies for solving questions faster."
            </p>
          </div>

          <div className="flex gap-3 mb-4">
            <Button
              onClick={() => onNavigate('approval-confirmation')}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white h-12"
            >
              <Check className="w-5 h-5 mr-2" />
              Accept
            </Button>
            <Button
              variant="outline"
              className="flex-1 h-12 border-red-300 text-red-600 hover:bg-red-50"
            >
              <X className="w-5 h-5 mr-2" />
              Decline
            </Button>
          </div>

          <Button
            onClick={() => onNavigate('chat')}
            variant="outline"
            className="w-full"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Message Aspirant
          </Button>
        </div>

        {/* More requests */}
        <div className="bg-white rounded-3xl shadow-lg p-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">
              MS
            </div>
            <div className="flex-1">
              <h3 className="text-[#111827] text-lg mb-1">Meera Shah</h3>
              <p className="text-[#6B7280] mb-3">Wants session on Nov 26, 2024 at 5:00 PM</p>
              <div className="flex gap-2">
                <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                  <Check className="w-4 h-4 mr-1" />
                  Accept
                </Button>
                <Button size="sm" variant="outline">
                  <X className="w-4 h-4 mr-1" />
                  Decline
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button
            onClick={() => onNavigate('achiever-dashboard')}
            variant="outline"
          >
            Back to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}
