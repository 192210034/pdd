import { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';

interface OTPScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  userRole: 'aspirant' | 'achiever' | null;
}

export function OTPScreen({ onNavigate, userRole }: OTPScreenProps) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(60);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    if (userRole === 'achiever') {
      onNavigate('upload-scorecard');
    } else {
      onNavigate('aspirant-home');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-white">
      <div className="w-full max-w-md">
        <button
          onClick={() => onNavigate('signup')}
          className="flex items-center gap-2 text-[#6B7280] hover:text-[#111827] mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-[#F3F4F6] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-[#2B59FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-[#111827] text-3xl mb-2">Verify OTP</h2>
          <p className="text-[#6B7280]">
            We've sent a 6-digit code to
            <br />
            <span className="text-[#111827]">your-email@example.com</span>
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-14 text-center border-2 border-gray-300 rounded-lg focus:border-[#2B59FF] focus:outline-none text-xl text-[#111827]"
            />
          ))}
        </div>

        <Button
          onClick={handleVerify}
          disabled={otp.some((digit) => !digit)}
          className="w-full bg-[#2B59FF] hover:bg-[#1E40AF] text-white h-12 mb-4"
        >
          Verify OTP
        </Button>

        <div className="text-center">
          {timer > 0 ? (
            <p className="text-[#6B7280]">
              Resend OTP in <span className="text-[#2B59FF]">{timer}s</span>
            </p>
          ) : (
            <button
              onClick={() => setTimer(60)}
              className="text-[#2B59FF] hover:underline"
            >
              Resend OTP
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
