import { ArrowLeft, CheckCircle, Clock, Video, User, RefreshCw, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';

interface CheckInStatusProps {
  onNavigate: (screen: string, data?: any) => void;
}

export function CheckInStatus({ onNavigate }: CheckInStatusProps) {
  const [aspirantCheckedIn, setAspirantCheckedIn] = useState(true);
  const [achieverCheckedIn, setAchieverCheckedIn] = useState(false);
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes until session starts

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulate achiever checking in after 5 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAchieverCheckedIn(true);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const bothCheckedIn = aspirantCheckedIn && achieverCheckedIn;

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
            <h1 className="text-[#111827] text-2xl">Check-In Status</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Success Banner - Show only when you check in */}
        {aspirantCheckedIn && !achieverCheckedIn && (
          <div className="bg-green-50 border-2 border-green-300 rounded-3xl p-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-[#111827] text-xl mb-1">You're Checked In!</h2>
                <p className="text-[#6B7280]">Waiting for mentor to check-in...</p>
              </div>
            </div>
          </div>
        )}

        {/* Both Checked In Success */}
        {bothCheckedIn && (
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 mb-6 text-white text-center">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl mb-2">Both Parties Checked In!</h2>
            <p className="text-green-100 mb-6">
              Meeting link is now unlocked. Session starts in {formatTime(timeLeft)}
            </p>
            <Button
              onClick={() => onNavigate('join-session')}
              className="bg-white text-green-600 hover:bg-gray-100 h-14 px-8"
            >
              <Video className="w-5 h-5 mr-2" />
              Proceed to Join Session
            </Button>
          </div>
        )}

        {/* Check-In Status Card */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[#111827] text-xl">Attendance Status</h3>
            <div className="flex items-center gap-2 text-[#6B7280]">
              <Clock className="w-5 h-5" />
              <span>Session in {formatTime(timeLeft)}</span>
            </div>
          </div>

          <div className="space-y-4">
            {/* Aspirant Status */}
            <div className={`p-6 rounded-2xl border-2 ${
              aspirantCheckedIn 
                ? 'bg-green-50 border-green-300' 
                : 'bg-gray-50 border-gray-200'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center ${
                    aspirantCheckedIn 
                      ? 'bg-green-100' 
                      : 'bg-gray-200'
                  }`}>
                    <User className={`w-7 h-7 ${
                      aspirantCheckedIn ? 'text-green-600' : 'text-gray-400'
                    }`} />
                  </div>
                  <div>
                    <p className="text-[#111827]">You (Aspirant)</p>
                    <p className="text-[#6B7280]">Rahul Kumar</p>
                  </div>
                </div>
                {aspirantCheckedIn ? (
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="w-6 h-6" />
                    <span>Checked In</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock className="w-6 h-6" />
                    <span>Not Checked In</span>
                  </div>
                )}
              </div>
              {aspirantCheckedIn && (
                <div className="mt-3 pt-3 border-t border-green-200">
                  <p className="text-[#6B7280]">
                    Checked in at 02:56 PM
                  </p>
                </div>
              )}
            </div>

            {/* Achiever Status */}
            <div className={`p-6 rounded-2xl border-2 ${
              achieverCheckedIn 
                ? 'bg-green-50 border-green-300' 
                : 'bg-yellow-50 border-yellow-300'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center ${
                    achieverCheckedIn 
                      ? 'bg-green-100' 
                      : 'bg-yellow-100'
                  }`}>
                    <div className={`w-14 h-14 bg-gradient-to-br from-[#2B59FF] to-[#1E40AF] rounded-full flex items-center justify-center text-white`}>
                      PS
                    </div>
                  </div>
                  <div>
                    <p className="text-[#111827]">Mentor</p>
                    <p className="text-[#6B7280]">Priya Sharma</p>
                  </div>
                </div>
                {achieverCheckedIn ? (
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="w-6 h-6" />
                    <span>Checked In</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-yellow-600 animate-pulse">
                    <RefreshCw className="w-6 h-6 animate-spin" />
                    <span>Waiting...</span>
                  </div>
                )}
              </div>
              {achieverCheckedIn && (
                <div className="mt-3 pt-3 border-t border-green-200">
                  <p className="text-[#6B7280]">
                    Checked in at 02:57 PM
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Meeting Link Status */}
        <div className={`rounded-3xl p-8 mb-6 ${
          bothCheckedIn 
            ? 'bg-gradient-to-r from-[#2B59FF] to-[#1E40AF] text-white' 
            : 'bg-white border-2 border-gray-200'
        }`}>
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
              bothCheckedIn 
                ? 'bg-white/20 backdrop-blur-sm' 
                : 'bg-gray-100'
            }`}>
              <Video className={`w-7 h-7 ${
                bothCheckedIn ? 'text-white' : 'text-gray-400'
              }`} />
            </div>
            <div>
              <h3 className={`text-xl mb-1 ${
                bothCheckedIn ? 'text-white' : 'text-[#111827]'
              }`}>
                Google Meet Link
              </h3>
              <p className={bothCheckedIn ? 'text-blue-100' : 'text-[#6B7280]'}>
                {bothCheckedIn 
                  ? 'Unlocked - Ready to join' 
                  : 'Locked - Waiting for both check-ins'
                }
              </p>
            </div>
          </div>

          {!bothCheckedIn && (
            <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-xl border border-yellow-200">
              <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <p className="text-[#6B7280]">
                The meeting link will be unlocked once both parties complete check-in. 
                This prevents no-shows and ensures accountability.
              </p>
            </div>
          )}
        </div>

        {/* Info Card */}
        <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
          <h4 className="text-[#111827] mb-3">What happens next?</h4>
          <div className="space-y-2">
            <div className="flex gap-2">
              <span className="text-[#2B59FF]">•</span>
              <p className="text-[#6B7280]">
                Once both check-in, you'll see a "Join Session" button
              </p>
            </div>
            <div className="flex gap-2">
              <span className="text-[#2B59FF]">•</span>
              <p className="text-[#6B7280]">
                Clicking "Join" will record your attendance timestamp
              </p>
            </div>
            <div className="flex gap-2">
              <span className="text-[#2B59FF]">•</span>
              <p className="text-[#6B7280]">
                You'll then be redirected to Google Meet
              </p>
            </div>
            <div className="flex gap-2">
              <span className="text-[#2B59FF]">•</span>
              <p className="text-[#6B7280]">
                If one person doesn't check-in by session time, they'll be marked absent
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
