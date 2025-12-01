import { CheckCircle, XCircle, AlertTriangle, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

interface SessionCompleteVerifyProps {
  onNavigate: (screen: string, data?: any) => void;
}

export function SessionCompleteVerify({ onNavigate }: SessionCompleteVerifyProps) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleResponse = (response: 'yes' | 'no') => {
    if (response === 'yes') {
      onNavigate('rating-review');
    } else {
      setShowConfirmation(true);
    }
  };

  const handleReportIssue = () => {
    onNavigate('report-no-show');
  };

  if (showConfirmation) {
    return (
      <div className="min-h-screen bg-[#F3F4F6] flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
          
          <h2 className="text-[#111827] text-2xl text-center mb-4">
            Report Issue?
          </h2>
          
          <p className="text-[#6B7280] text-center mb-6">
            You indicated the mentor did not join the session. Would you like to file a report?
          </p>

          <div className="space-y-3">
            <Button
              onClick={handleReportIssue}
              className="w-full bg-red-600 hover:bg-red-700 text-white h-14"
            >
              Yes, Report Issue
            </Button>
            <Button
              onClick={() => setShowConfirmation(false)}
              variant="outline"
              className="w-full h-14"
            >
              Go Back
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header Card */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-6 text-center">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Clock className="w-10 h-10 text-[#2B59FF]" />
          </div>
          
          <h1 className="text-[#111827] text-3xl mb-3">Session Time Completed</h1>
          <p className="text-[#6B7280] text-lg mb-2">
            Your scheduled session with Priya Sharma has ended
          </p>
          <p className="text-[#6B7280]">
            Session Duration: 03:00 PM - 04:00 PM (60 minutes)
          </p>
        </div>

        {/* Main Question */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-6">
          <h2 className="text-[#111827] text-2xl text-center mb-6">
            Did the mentor join the session?
          </h2>
          
          <p className="text-[#6B7280] text-center mb-8">
            This helps us maintain quality and resolve any disputes automatically
          </p>

          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => handleResponse('yes')}
              className="group p-8 border-2 border-gray-200 rounded-2xl hover:border-green-500 hover:bg-green-50 transition-all"
            >
              <div className="w-16 h-16 bg-green-100 group-hover:bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                <CheckCircle className="w-8 h-8 text-green-600 group-hover:text-white" />
              </div>
              <p className="text-[#111827] text-xl mb-2">Yes</p>
              <p className="text-[#6B7280]">Session went well</p>
            </button>

            <button
              onClick={() => handleResponse('no')}
              className="group p-8 border-2 border-gray-200 rounded-2xl hover:border-red-500 hover:bg-red-50 transition-all"
            >
              <div className="w-16 h-16 bg-red-100 group-hover:bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                <XCircle className="w-8 h-8 text-red-600 group-hover:text-white" />
              </div>
              <p className="text-[#111827] text-xl mb-2">No</p>
              <p className="text-[#6B7280]">There was an issue</p>
            </button>
          </div>
        </div>

        {/* Attendance Data */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-6">
          <h3 className="text-[#111827] text-xl mb-4">Recorded Attendance</h3>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-200">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-[#111827]">Your Check-In</p>
                  <p className="text-[#6B7280]">02:56 PM</p>
                </div>
              </div>
              <div className="text-green-600">✓ Verified</div>
            </div>

            <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-200">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-[#111827]">Your Join Time</p>
                  <p className="text-[#6B7280]">03:00:12 PM</p>
                </div>
              </div>
              <div className="text-green-600">✓ Verified</div>
            </div>

            <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-200">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-[#111827]">Mentor Check-In</p>
                  <p className="text-[#6B7280]">02:57 PM</p>
                </div>
              </div>
              <div className="text-green-600">✓ Verified</div>
            </div>

            <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-200">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-[#111827]">Mentor Join Time</p>
                  <p className="text-[#6B7280]">03:00:08 PM</p>
                </div>
              </div>
              <div className="text-green-600">✓ Verified</div>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
          <div className="flex gap-3">
            <AlertTriangle className="w-6 h-6 text-[#2B59FF] flex-shrink-0" />
            <div>
              <h4 className="text-[#111827] mb-2">Why we ask this</h4>
              <p className="text-[#6B7280]">
                Your response helps us verify the session quality. If there's a mismatch between 
                attendance records and your feedback, our admin team will review the case and 
                take appropriate action.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
