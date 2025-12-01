import { Clock, Mail, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

interface VerificationPendingScreenProps {
  onNavigate: (screen: string) => void;
}

export function VerificationPendingScreen({ onNavigate }: VerificationPendingScreenProps) {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
          <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Clock className="w-12 h-12 text-yellow-600" />
          </div>

          <h1 className="text-[#111827] text-3xl mb-4">Verification Pending</h1>
          <p className="text-[#6B7280] text-lg mb-8">
            Your application is under review. Our team will verify your details and get back to you within 24-48 hours.
          </p>

          <div className="bg-[#F3F4F6] rounded-xl p-6 mb-8 text-left">
            <h3 className="text-[#111827] mb-4">What happens next?</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-[#2B59FF] rounded-full flex items-center justify-center flex-shrink-0 text-white">
                  1
                </div>
                <div>
                  <h4 className="text-[#111827] mb-1">Manual Review</h4>
                  <p className="text-[#6B7280]">
                    Our verification team will review your scorecard and details
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-[#2B59FF] rounded-full flex items-center justify-center flex-shrink-0 text-white">
                  2
                </div>
                <div>
                  <h4 className="text-[#111827] mb-1">Notification</h4>
                  <p className="text-[#6B7280]">
                    You'll receive an email and in-app notification once verified
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-[#2B59FF] rounded-full flex items-center justify-center flex-shrink-0 text-white">
                  3
                </div>
                <div>
                  <h4 className="text-[#111827] mb-1">Start Mentoring</h4>
                  <p className="text-[#6B7280]">
                    Once approved, set your availability and start accepting sessions
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => onNavigate('verified-badge')}
              className="flex-1 bg-[#2B59FF] hover:bg-[#1E40AF] text-white"
            >
              <CheckCircle className="w-5 h-5 mr-2" />
              See Preview (Demo)
            </Button>
            <Button
              onClick={() => onNavigate('login')}
              variant="outline"
              className="flex-1"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
