import { CheckCircle, XCircle, AlertCircle, Clock, IndianRupee, FileCheck } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface AutomaticDecisionProps {
  onNavigate: (screen: string, data?: any) => void;
  scenario?: 'both-joined' | 'mentor-no-checkin' | 'aspirant-no-join' | 'mentor-no-join';
}

export function AutomaticDecision({ 
  onNavigate, 
  scenario = 'both-joined' 
}: AutomaticDecisionProps) {
  
  const scenarios = {
    'both-joined': {
      title: 'Session Completed Successfully',
      icon: CheckCircle,
      iconColor: 'bg-green-100',
      iconTextColor: 'text-green-600',
      decision: 'No dispute found',
      description: 'Both parties checked in and joined the session on time.',
      action: 'No refund required',
      color: 'green'
    },
    'mentor-no-checkin': {
      title: 'Automatic Refund Approved',
      icon: IndianRupee,
      iconColor: 'bg-blue-100',
      iconTextColor: 'text-blue-600',
      decision: 'Full refund issued',
      description: 'Mentor did not complete OTP check-in. System automatically approved refund.',
      action: 'Refund processed to your account',
      color: 'blue'
    },
    'mentor-no-join': {
      title: 'Automatic Refund Approved',
      icon: IndianRupee,
      iconColor: 'bg-blue-100',
      iconTextColor: 'text-blue-600',
      decision: 'Full refund issued',
      description: 'Mentor checked in but did not click "Join Session" button.',
      action: 'Refund processed to your account',
      color: 'blue'
    },
    'aspirant-no-join': {
      title: 'Session Payment Retained',
      icon: XCircle,
      iconColor: 'bg-red-100',
      iconTextColor: 'text-red-600',
      decision: 'No refund',
      description: 'You checked in but did not click "Join Session" button. Payment goes to mentor.',
      action: 'Session fee retained by mentor',
      color: 'red'
    }
  };

  const currentScenario = scenarios[scenario];

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Decision Header */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-6 text-center">
          <div className={`w-24 h-24 ${currentScenario.iconColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
            <currentScenario.icon className={`w-12 h-12 ${currentScenario.iconTextColor}`} />
          </div>
          
          <h1 className="text-[#111827] text-3xl mb-3">{currentScenario.title}</h1>
          <p className="text-[#6B7280] text-lg mb-6">
            {currentScenario.description}
          </p>
          
          <Badge className={`
            ${currentScenario.color === 'green' ? 'bg-green-100 text-green-700' : ''}
            ${currentScenario.color === 'blue' ? 'bg-blue-100 text-blue-700' : ''}
            ${currentScenario.color === 'red' ? 'bg-red-100 text-red-700' : ''}
            text-lg px-6 py-2
          `}>
            {currentScenario.decision}
          </Badge>
        </div>

        {/* How Decision Was Made */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <FileCheck className="w-6 h-6 text-[#2B59FF]" />
            <h2 className="text-[#111827] text-2xl">How This Decision Was Made</h2>
          </div>

          <p className="text-[#6B7280] mb-6">
            Our system automatically analyzed the attendance records to determine the outcome:
          </p>

          {/* Attendance Verification Steps */}
          <div className="space-y-4">
            {scenario === 'both-joined' && (
              <>
                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border border-green-200">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-[#111827] mb-1">Step 1: Check-In Verification</p>
                    <div className="text-[#6B7280] space-y-1">
                      <p>✓ Aspirant checked in with OTP at 02:56 PM</p>
                      <p>✓ Mentor checked in with OTP at 02:57 PM</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border border-green-200">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-[#111827] mb-1">Step 2: Join Button Verification</p>
                    <div className="text-[#6B7280] space-y-1">
                      <p>✓ Aspirant clicked "Join" at 03:00:12 PM</p>
                      <p>✓ Mentor clicked "Join" at 03:00:08 PM</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border border-green-200">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-[#111827] mb-1">Step 3: Final Decision</p>
                    <p className="text-[#6B7280]">
                      Both parties fulfilled attendance requirements. Session completed successfully.
                    </p>
                  </div>
                </div>
              </>
            )}

            {scenario === 'mentor-no-checkin' && (
              <>
                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border border-green-200">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-[#111827] mb-1">Step 1: Your Check-In</p>
                    <p className="text-[#6B7280]">✓ You checked in with OTP at 02:56 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-red-50 rounded-xl border border-red-200">
                  <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-[#111827] mb-1">Step 2: Mentor Check-In</p>
                    <p className="text-[#6B7280]">✗ Mentor did NOT complete OTP check-in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <IndianRupee className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-[#111827] mb-1">Step 3: Automatic Refund</p>
                    <p className="text-[#6B7280]">
                      Since mentor didn't check in, full refund of ₹499 has been initiated
                    </p>
                  </div>
                </div>
              </>
            )}

            {scenario === 'mentor-no-join' && (
              <>
                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border border-green-200">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-[#111827] mb-1">Step 1: Check-In Verification</p>
                    <div className="text-[#6B7280] space-y-1">
                      <p>✓ You checked in with OTP at 02:56 PM</p>
                      <p>✓ Mentor checked in with OTP at 02:57 PM</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border border-green-200">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-[#111827] mb-1">Step 2: Your Join Action</p>
                    <p className="text-[#6B7280]">✓ You clicked "Join" at 03:00:12 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-red-50 rounded-xl border border-red-200">
                  <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-[#111827] mb-1">Step 3: Mentor Join Action</p>
                    <p className="text-[#6B7280]">✗ Mentor did NOT click "Join Session"</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <IndianRupee className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-[#111827] mb-1">Step 4: Automatic Refund</p>
                    <p className="text-[#6B7280]">
                      Full refund of ₹499 initiated. Mentor will be penalized for no-show.
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Action Required */}
        {(scenario === 'mentor-no-checkin' || scenario === 'mentor-no-join') && (
          <div className="bg-white rounded-3xl shadow-lg p-8 mb-6">
            <h3 className="text-[#111827] text-xl mb-4">Refund Details</h3>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between p-4 bg-[#F3F4F6] rounded-xl">
                <span className="text-[#6B7280]">Session Amount</span>
                <span className="text-[#111827]">₹499</span>
              </div>
              <div className="flex justify-between p-4 bg-[#F3F4F6] rounded-xl">
                <span className="text-[#6B7280]">Platform Fee (Waived)</span>
                <span className="text-green-600">₹0</span>
              </div>
              <div className="flex justify-between p-4 bg-green-50 rounded-xl border-2 border-green-300">
                <span className="text-[#111827]">Total Refund</span>
                <span className="text-green-600 text-xl">₹499</span>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <p className="text-[#6B7280]">
                💳 Refund will be credited to your original payment method within 3-5 business days. 
                You'll receive an email confirmation shortly.
              </p>
            </div>
          </div>
        )}

        {/* Explanation Box */}
        <div className="bg-gradient-to-r from-[#2B59FF] to-[#1E40AF] rounded-3xl p-8 text-white mb-6">
          <div className="flex items-start gap-4 mb-4">
            <AlertCircle className="w-6 h-6 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl mb-2">Why This System Exists</h3>
              <p className="text-blue-100">
                The OTP Check-In + Join Button system creates irrefutable proof of attendance. 
                This protects both aspirants and achievers from disputes and ensures fairness.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="mb-2">OTP Check-In</p>
              <p className="text-blue-100">Proves readiness 5 mins before session</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="mb-2">Join Button</p>
              <p className="text-blue-100">Logs exact attendance timestamp</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="mb-2">Automatic Decision</p>
              <p className="text-blue-100">No manual disputes needed</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          {scenario === 'both-joined' && (
            <Button
              onClick={() => onNavigate('rating-review')}
              className="flex-1 bg-[#2B59FF] hover:bg-[#1E40AF] text-white h-14"
            >
              Rate This Session
            </Button>
          )}
          <Button
            onClick={() => onNavigate('aspirant-dashboard')}
            variant="outline"
            className="flex-1 h-14"
          >
            Back to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}
