import { ArrowLeft, Video, Clock, CheckCircle, ExternalLink, User, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

interface JoinSessionProps {
  onNavigate: (screen: string, data?: any) => void;
}

export function JoinSession({ onNavigate }: JoinSessionProps) {
  const [isJoining, setIsJoining] = useState(false);

  const handleJoinSession = () => {
    setIsJoining(true);
    // Simulate attendance recording
    setTimeout(() => {
      onNavigate('attendance-recorded');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('checkin-status')}
              className="p-2 hover:bg-[#F3F4F6] rounded-lg"
            >
              <ArrowLeft className="w-6 h-6 text-[#111827]" />
            </button>
            <h1 className="text-[#111827] text-2xl">Ready to Join</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Success Status */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 mb-6 text-white text-center">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl mb-2">Both Parties Checked In ✓</h2>
          <p className="text-green-100">
            Session is ready to start. Click below to record attendance and join.
          </p>
        </div>

        {/* Session Details Card */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-6">
          <h3 className="text-[#111827] text-xl mb-6">Session Information</h3>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-4 p-4 bg-[#F3F4F6] rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-br from-[#2B59FF] to-[#1E40AF] rounded-full flex items-center justify-center text-white">
                PS
              </div>
              <div>
                <p className="text-[#111827]">Priya Sharma</p>
                <p className="text-[#6B7280]">SSC CGL 2023 • Rank 45</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-[#F3F4F6] rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-[#2B59FF]" />
                  <p className="text-[#6B7280]">Date</p>
                </div>
                <p className="text-[#111827]">Nov 25, 2024</p>
              </div>
              <div className="p-4 bg-[#F3F4F6] rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-[#2B59FF]" />
                  <p className="text-[#6B7280]">Time</p>
                </div>
                <p className="text-[#111827]">03:00 PM</p>
              </div>
            </div>
          </div>

          {/* Check-in Status */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-200">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-[#111827]">Rahul Kumar (You)</p>
                  <p className="text-[#6B7280]">Checked in at 02:56 PM</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-200">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-[#111827]">Priya Sharma</p>
                  <p className="text-[#6B7280]">Checked in at 02:57 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Note */}
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 mb-6">
            <div className="flex gap-3">
              <Video className="w-5 h-5 text-[#2B59FF] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[#111827] mb-1">Important: Record Attendance</p>
                <p className="text-[#6B7280]">
                  Clicking "Join Session" will automatically record your attendance timestamp. 
                  This is used for dispute resolution if needed.
                </p>
              </div>
            </div>
          </div>

          {/* Join Button */}
          <Button
            onClick={handleJoinSession}
            disabled={isJoining}
            className="w-full bg-[#2B59FF] hover:bg-[#1E40AF] text-white h-16 text-lg"
          >
            {isJoining ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Recording Attendance...
              </>
            ) : (
              <>
                <Video className="w-6 h-6 mr-2" />
                Join Session & Record Attendance
              </>
            )}
          </Button>
        </div>

        {/* How it Works */}
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h3 className="text-[#111827] text-xl mb-4">What Happens When You Join?</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-[#2B59FF] text-white rounded-full flex items-center justify-center flex-shrink-0">
                1
              </div>
              <div>
                <p className="text-[#111827] mb-1">Attendance Recorded</p>
                <p className="text-[#6B7280]">
                  System logs your joining timestamp (e.g., "03:00:45 PM")
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-[#2B59FF] text-white rounded-full flex items-center justify-center flex-shrink-0">
                2
              </div>
              <div>
                <p className="text-[#111827] mb-1">Redirect to Google Meet</p>
                <p className="text-[#6B7280]">
                  You'll be automatically redirected to the Google Meet link
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-[#2B59FF] text-white rounded-full flex items-center justify-center flex-shrink-0">
                3
              </div>
              <div>
                <p className="text-[#111827] mb-1">Dispute Prevention</p>
                <p className="text-[#6B7280]">
                  If mentor doesn't join within 10 minutes, automatic refund is triggered
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-[#2B59FF] text-white rounded-full flex items-center justify-center flex-shrink-0">
                4
              </div>
              <div>
                <p className="text-[#111827] mb-1">Session Tracking</p>
                <p className="text-[#6B7280]">
                  Both join times are recorded for quality assurance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
