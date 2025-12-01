import { CheckCircle, Clock, ExternalLink, User, AlertCircle, Video } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface AttendanceRecordedProps {
  onNavigate: (screen: string, data?: any) => void;
}

export function AttendanceRecorded({ onNavigate }: AttendanceRecordedProps) {
  const meetLink = 'https://meet.google.com/abc-defg-hij';
  
  const handleContinueToMeet = () => {
    window.open(meetLink, '_blank');
    // Show session in progress screen
    setTimeout(() => {
      onNavigate('session-in-progress');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Success Animation */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 mb-6 text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <CheckCircle className="w-14 h-14 text-white" />
          </div>
          <h1 className="text-[#111827] text-3xl mb-3">Attendance Recorded!</h1>
          <p className="text-[#6B7280] text-lg mb-8">
            Your session attendance has been logged successfully
          </p>

          {/* Attendance Details */}
          <div className="bg-[#F3F4F6] rounded-2xl p-6 mb-8">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-[#6B7280] mb-2">You Joined At</p>
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-5 h-5 text-[#2B59FF]" />
                  <p className="text-[#111827] text-xl">03:00:12 PM</p>
                </div>
              </div>
              <div>
                <p className="text-[#6B7280] mb-2">Mentor Joined At</p>
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-5 h-5 text-[#2B59FF]" />
                  <p className="text-[#111827] text-xl">03:00:08 PM</p>
                </div>
              </div>
            </div>
          </div>

          <Button
            onClick={handleContinueToMeet}
            className="bg-[#2B59FF] hover:bg-[#1E40AF] text-white h-16 px-8 text-lg"
          >
            <ExternalLink className="w-6 h-6 mr-2" />
            Continue to Google Meet
          </Button>
        </div>

        {/* Attendance Status Ring */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-6">
          <div className="flex items-center justify-center mb-6">
            <h3 className="text-[#111827] text-xl">Session Status</h3>
          </div>

          {/* Status Indicators */}
          <div className="flex items-center justify-center gap-8 mb-8">
            {/* Aspirant Status */}
            <div className="text-center">
              <div className="relative mb-3">
                <div className="w-24 h-24 rounded-full border-4 border-green-500 flex items-center justify-center mx-auto">
                  <User className="w-10 h-10 text-green-600" />
                </div>
                <div className="absolute -top-1 -right-1 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
              </div>
              <p className="text-[#111827] mb-1">You</p>
              <Badge className="bg-green-100 text-green-700">Joined</Badge>
            </div>

            {/* Connection Line */}
            <div className="w-16 h-1 bg-green-500"></div>

            {/* Achiever Status */}
            <div className="text-center">
              <div className="relative mb-3">
                <div className="w-24 h-24 rounded-full border-4 border-green-500 flex items-center justify-center mx-auto bg-gradient-to-br from-[#2B59FF] to-[#1E40AF]">
                  <span className="text-white text-2xl">PS</span>
                </div>
                <div className="absolute -top-1 -right-1 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
              </div>
              <p className="text-[#111827] mb-1">Priya Sharma</p>
              <Badge className="bg-green-100 text-green-700">Joined</Badge>
            </div>
          </div>

          <div className="bg-green-50 rounded-2xl p-6 border-2 border-green-200">
            <div className="flex items-center justify-center gap-3 text-green-700">
              <CheckCircle className="w-6 h-6" />
              <p className="text-lg">Both parties have joined the session</p>
            </div>
          </div>
        </div>

        {/* Important Information */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-6">
          <h3 className="text-[#111827] text-xl mb-4">Attendance Logged</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-4 bg-[#F3F4F6] rounded-xl">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[#111827] mb-1">Your attendance timestamp: 03:00:12 PM</p>
                <p className="text-[#6B7280]">This proves you joined the session on time</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#F3F4F6] rounded-xl">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[#111827] mb-1">Mentor attendance timestamp: 03:00:08 PM</p>
                <p className="text-[#6B7280]">Both parties joined within the scheduled time</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dispute Prevention Note */}
        <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
          <div className="flex gap-3">
            <AlertCircle className="w-6 h-6 text-[#2B59FF] flex-shrink-0" />
            <div>
              <h4 className="text-[#111827] mb-2">Automatic Dispute Prevention</h4>
              <p className="text-[#6B7280] mb-3">
                These timestamps are stored securely and used only if there's a dispute. 
                Since both parties joined on time, no action is needed.
              </p>
              <div className="space-y-1">
                <p className="text-[#6B7280] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#2B59FF] rounded-full"></span>
                  If mentor didn't join → Automatic full refund
                </p>
                <p className="text-[#6B7280] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#2B59FF] rounded-full"></span>
                  If you didn't join → Session fee retained by mentor
                </p>
                <p className="text-[#6B7280] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#2B59FF] rounded-full"></span>
                  Both joined → Session proceeds normally ✓
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Meeting Link */}
        <div className="mt-6 text-center">
          <p className="text-[#6B7280] mb-2">Meeting Link</p>
          <div className="bg-white rounded-xl p-4 border border-gray-200 mb-4">
            <p className="text-[#2B59FF] break-all">{meetLink}</p>
          </div>
          <Button
            onClick={handleContinueToMeet}
            variant="outline"
            className="w-full"
          >
            Open in New Tab
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
