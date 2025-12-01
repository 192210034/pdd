import { useState } from 'react';
import { Mail, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface ForgotPasswordScreenProps {
  onNavigate: (screen: string) => void;
}

export function ForgotPasswordScreen({ onNavigate }: ForgotPasswordScreenProps) {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    setSent(true);
    setTimeout(() => {
      onNavigate('login');
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-white">
      <div className="w-full max-w-md">
        <button
          onClick={() => onNavigate('login')}
          className="flex items-center gap-2 text-[#6B7280] hover:text-[#111827] mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to login
        </button>

        {!sent ? (
          <>
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-[#F3F4F6] rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-10 h-10 text-[#2B59FF]" />
              </div>
              <h2 className="text-[#111827] text-3xl mb-2">Forgot Password?</h2>
              <p className="text-[#6B7280]">
                No worries, we'll send you reset instructions
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-[#111827]">Email</Label>
                <div className="relative mt-2">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <Button
                onClick={handleSubmit}
                className="w-full bg-[#2B59FF] hover:bg-[#1E40AF] text-white h-12"
              >
                Send Reset Link
              </Button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-[#111827] text-3xl mb-2">Check Your Email</h2>
            <p className="text-[#6B7280] mb-4">
              We've sent a password reset link to
              <br />
              <span className="text-[#111827]">{email}</span>
            </p>
            <p className="text-[#6B7280]">Redirecting to login...</p>
          </div>
        )}
      </div>
    </div>
  );
}
