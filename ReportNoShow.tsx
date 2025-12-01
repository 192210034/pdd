import { ArrowLeft, AlertTriangle, CheckCircle, Clock, XCircle, FileText } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { useState } from 'react';

interface ReportNoShowProps {
  onNavigate: (screen: string, data?: any) => void;
}

export function ReportNoShow({ onNavigate }: ReportNoShowProps) {
  const [issueType, setIssueType] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      onNavigate('automatic-decision');
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#F3F4F6] flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-10 h-10 text-[#2B59FF]" />
          </div>
          <h2 className="text-[#111827] text-2xl mb-3">Report Submitted</h2>
          <p className="text-[#6B7280] mb-6">
            We're reviewing your case. Our system will automatically verify attendance records 
            and make a decision within 24 hours.
          </p>
          <div className="animate-pulse">
            <p className="text-[#2B59FF]">Analyzing attendance data...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('session-complete-verify')}
              className="p-2 hover:bg-[#F3F4F6] rounded-lg"
            >
              <ArrowLeft className="w-6 h-6 text-[#111827]" />
            </button>
            <h1 className="text-[#111827] text-2xl">Report Issue</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Alert Banner */}
        <div className="bg-red-50 border-2 border-red-300 rounded-3xl p-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-7 h-7 text-red-600" />
            </div>
            <div>
              <h2 className="text-[#111827] text-xl mb-1">Session Issue Detected</h2>
              <p className="text-[#6B7280]">
                Please describe what happened so we can resolve this fairly
              </p>
            </div>
          </div>
        </div>

        {/* Session Details */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-6">
          <h3 className="text-[#111827] text-xl mb-4">Session Details</h3>
          
          <div className="space-y-3 mb-6">
            <div className="flex justify-between p-4 bg-[#F3F4F6] rounded-xl">
              <span className="text-[#6B7280]">Mentor</span>
              <span className="text-[#111827]">Priya Sharma</span>
            </div>
            <div className="flex justify-between p-4 bg-[#F3F4F6] rounded-xl">
              <span className="text-[#6B7280]">Session Date</span>
              <span className="text-[#111827]">Nov 25, 2024</span>
            </div>
            <div className="flex justify-between p-4 bg-[#F3F4F6] rounded-xl">
              <span className="text-[#6B7280]">Scheduled Time</span>
              <span className="text-[#111827]">03:00 PM - 04:00 PM</span>
            </div>
            <div className="flex justify-between p-4 bg-[#F3F4F6] rounded-xl">
              <span className="text-[#6B7280]">Amount Paid</span>
              <span className="text-[#111827]">₹499</span>
            </div>
          </div>

          {/* Issue Type */}
          <div className="mb-6">
            <Label className="text-[#111827] mb-3 block">What was the issue?</Label>
            <RadioGroup value={issueType} onValueChange={setIssueType}>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-xl hover:border-[#2B59FF] cursor-pointer">
                  <RadioGroupItem value="no-join" id="no-join" />
                  <Label htmlFor="no-join" className="flex-1 cursor-pointer">
                    <p className="text-[#111827] mb-1">Mentor didn't join at all</p>
                    <p className="text-[#6B7280]">They never appeared in the meeting</p>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-xl hover:border-[#2B59FF] cursor-pointer">
                  <RadioGroupItem value="late-join" id="late-join" />
                  <Label htmlFor="late-join" className="flex-1 cursor-pointer">
                    <p className="text-[#111827] mb-1">Mentor joined very late</p>
                    <p className="text-[#6B7280]">More than 15 minutes after scheduled time</p>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-xl hover:border-[#2B59FF] cursor-pointer">
                  <RadioGroupItem value="early-leave" id="early-leave" />
                  <Label htmlFor="early-leave" className="flex-1 cursor-pointer">
                    <p className="text-[#111827] mb-1">Mentor left early</p>
                    <p className="text-[#6B7280]">Session was much shorter than expected</p>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-xl hover:border-[#2B59FF] cursor-pointer">
                  <RadioGroupItem value="technical" id="technical" />
                  <Label htmlFor="technical" className="flex-1 cursor-pointer">
                    <p className="text-[#111827] mb-1">Technical issues</p>
                    <p className="text-[#6B7280]">Connection problems prevented the session</p>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-xl hover:border-[#2B59FF] cursor-pointer">
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other" className="flex-1 cursor-pointer">
                    <p className="text-[#111827] mb-1">Other issue</p>
                    <p className="text-[#6B7280]">Describe in detail below</p>
                  </Label>
                </div>
              </div>
            </RadioGroup>
          </div>

          {/* Description */}
          <div className="mb-6">
            <Label className="text-[#111827] mb-2 block">
              Describe what happened (Required)
            </Label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Please provide specific details about what happened during the session. Include times, specific events, and any other relevant information."
              className="min-h-[150px]"
            />
            <p className="text-[#6B7280] mt-2">{description.length}/1000 characters</p>
          </div>

          {/* Submit Button */}
          <Button
            onClick={handleSubmit}
            disabled={!issueType || description.length < 50}
            className="w-full bg-red-600 hover:bg-red-700 text-white h-14"
          >
            Submit Report
          </Button>
        </div>

        {/* How Resolution Works */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-6">
          <h3 className="text-[#111827] text-xl mb-4">How We Resolve This</h3>
          
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-[#2B59FF] text-white rounded-full flex items-center justify-center flex-shrink-0">
                1
              </div>
              <div>
                <p className="text-[#111827] mb-1">Automatic Verification</p>
                <p className="text-[#6B7280]">
                  System checks check-in and join timestamps for both parties
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-[#2B59FF] text-white rounded-full flex items-center justify-center flex-shrink-0">
                2
              </div>
              <div>
                <p className="text-[#111827] mb-1">Data Analysis</p>
                <p className="text-[#6B7280]">
                  If mentor didn't check-in or join → Immediate full refund
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-[#2B59FF] text-white rounded-full flex items-center justify-center flex-shrink-0">
                3
              </div>
              <div>
                <p className="text-[#111827] mb-1">Admin Review (if needed)</p>
                <p className="text-[#6B7280]">
                  Complex cases are reviewed by our team within 24 hours
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-[#2B59FF] text-white rounded-full flex items-center justify-center flex-shrink-0">
                4
              </div>
              <div>
                <p className="text-[#111827] mb-1">Decision & Refund</p>
                <p className="text-[#6B7280]">
                  You'll be notified of the decision. Refunds are processed within 3-5 days
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Attendance Evidence */}
        <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
          <h4 className="text-[#111827] mb-3">Attendance Records (Evidence)</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <span className="text-[#6B7280]">Your Check-In OTP</span>
              <span className="text-green-600 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" /> Verified at 02:56 PM
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <span className="text-[#6B7280]">Your Join Button</span>
              <span className="text-green-600 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" /> Clicked at 03:00:12 PM
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <span className="text-[#6B7280]">Mentor Check-In</span>
              <span className="text-green-600 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" /> Verified at 02:57 PM
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <span className="text-[#6B7280]">Mentor Join Button</span>
              <span className="text-green-600 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" /> Clicked at 03:00:08 PM
              </span>
            </div>
          </div>
          <p className="text-[#6B7280] mt-4">
            ℹ️ Based on this data, both parties completed check-in and joined on time. 
            Your report will help us investigate if there were other issues during the session.
          </p>
        </div>
      </div>
    </div>
  );
}
