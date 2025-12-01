import { ArrowLeft, Clock, Shield, CheckCircle, Mail, Smartphone, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';
import { Badge } from './ui/badge';

interface SessionCheckInRequiredProps {
  onNavigate: (screen: string, data?: any) => void;
}

export function SessionCheckInRequired({ onNavigate }: SessionCheckInRequiredProps) {
  const [timeLeft, setTimeLeft] = useState({ minutes: 4, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('session-details')}
              className="p-2 hover:bg-[#F3F4F6] rounded-lg"
            >
              <ArrowLeft className="w-6 h-6 text-[#111827]" />
            </button>
            <h1 className="text-[#111827] text-2xl">Session Check-In</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Time Remaining Alert */}
        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-3xl p-6 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
              <Clock className="w-8 h-8 text-yellow-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-[#111827] text-xl mb-1">Check-In Required</h2>
              <p className="text-[#6B7280]">Session starts in {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}</p>
            </div>
          </div>
          <div className="bg-yellow-100 rounded-2xl p-4">
            <p className="text-[#111827] text-center">
              ⚠️ You must check-in within 5 minutes before your session starts
            </p>
          </div>
        </div>

        {/* Session Info Card */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-6">
          <h3 className="text-[#111827] text-xl mb-6">Session Details</h3>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-4 p-4 bg-[#F3F4F6] rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-br from-[#2B59FF] to-[#1E40AF] rounded-full flex items-center justify-center text-white">
                PS
              </div>
              <div>
                <p className="text-[#111827]">Priya Sharma</p>
                <p className="text-[#6B7280]">SSC CGL 2023</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-[#F3F4F6] rounded-xl">
              <div>
                <p className="text-[#6B7280] mb-1">Date & Time</p>
                <p className="text-[#111827]">Monday, Nov 25 • 03:00 PM</p>
              </div>
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                60 Minutes
              </Badge>
            </div>
          </div>

          {/* Check-In Method */}
          <div className="space-y-4">
            <h4 className="text-[#111827]">Choose Check-In Method</h4>
            
            <button
              onClick={() => onNavigate('otp-checkin', { method: 'email' })}
              className="w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-[#2B59FF] hover:bg-blue-50 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#F3F4F6] group-hover:bg-[#2B59FF] rounded-xl flex items-center justify-center transition-colors">
                  <Mail className="w-7 h-7 text-[#6B7280] group-hover:text-white" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-[#111827] mb-1">Email OTP</p>
                  <p className="text-[#6B7280]">We'll send a code to your registered email</p>
                </div>
                <div className="text-[#2B59FF]">→</div>
              </div>
            </button>

            <button
              onClick={() => onNavigate('otp-checkin', { method: 'inapp' })}
              className="w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-[#2B59FF] hover:bg-blue-50 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#F3F4F6] group-hover:bg-[#2B59FF] rounded-xl flex items-center justify-center transition-colors">
                  <Smartphone className="w-7 h-7 text-[#6B7280] group-hover:text-white" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-[#111827] mb-1">In-App OTP</p>
                  <p className="text-[#6B7280]">Receive code directly in the app</p>
                </div>
                <Badge className="bg-green-100 text-green-700">Recommended</Badge>
                <div className="text-[#2B59FF]">→</div>
              </div>
            </button>
          </div>
        </div>

        {/* Why Check-In? */}
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-[#2B59FF]" />
            </div>
            <div>
              <h3 className="text-[#111827] text-xl mb-2">Why is Check-In Required?</h3>
              <p className="text-[#6B7280]">This system ensures accountability and prevents no-shows</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[#111827] mb-1">Prevents fake attendance</p>
                <p className="text-[#6B7280]">Both parties must verify their presence</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[#111827] mb-1">Automatic dispute resolution</p>
                <p className="text-[#6B7280]">System tracks who attended based on check-ins</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[#111827] mb-1">Fair refund policy</p>
                <p className="text-[#6B7280]">If mentor doesn't show up, automatic refund is processed</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[#111827] mb-1">Meeting link access</p>
                <p className="text-[#6B7280]">Google Meet link unlocks only after both check-in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Note */}
        <div className="mt-6 bg-red-50 border-2 border-red-200 rounded-2xl p-6">
          <div className="flex gap-3">
            <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
            <div>
              <h4 className="text-[#111827] mb-2">Important</h4>
              <p className="text-[#6B7280]">
                Check-in window closes when the session starts. Late check-ins will not be accepted and may result in session cancellation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
