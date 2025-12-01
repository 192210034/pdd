import { ArrowLeft, Mail, Smartphone, RefreshCw, ShieldCheck } from 'lucide-react';
import { Button } from './ui/button';
import { InputOTP, InputOTPGroup, InputOTPSlot } from './ui/input-otp';
import { useState, useEffect } from 'react';

interface OTPCheckInProps {
  onNavigate: (screen: string, data?: any) => void;
  method?: 'email' | 'inapp';
}

export function OTPCheckIn({ onNavigate, method = 'inapp' }: OTPCheckInProps) {
  const [otp, setOtp] = useState('');
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [canResend, setCanResend] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(prev => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [resendTimer]);

  const handleVerify = () => {
    if (otp.length === 6) {
      onNavigate('checkin-status');
    }
  };

  const handleResend = () => {
    if (canResend) {
      setCanResend(false);
      setResendTimer(30);
      // Trigger resend logic
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('session-checkin-required')}
              className="p-2 hover:bg-[#F3F4F6] rounded-lg"
            >
              <ArrowLeft className="w-6 h-6 text-[#111827]" />
            </button>
            <h1 className="text-[#111827] text-2xl">Verify Check-In</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Time Warning */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl p-6 mb-8 text-white text-center">
          <p className="mb-2">Check-In Window Closes In</p>
          <p className="text-4xl">{formatTime(timeLeft)}</p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-6">
          {/* Icon */}
          <div className="w-20 h-20 bg-gradient-to-br from-[#2B59FF] to-[#1E40AF] rounded-3xl flex items-center justify-center mx-auto mb-6">
            {method === 'email' ? (
              <Mail className="w-10 h-10 text-white" />
            ) : (
              <Smartphone className="w-10 h-10 text-white" />
            )}
          </div>

          {/* Title & Description */}
          <h2 className="text-[#111827] text-2xl text-center mb-3">
            {method === 'email' ? 'Check Your Email' : 'Enter Verification Code'}
          </h2>
          <p className="text-[#6B7280] text-center mb-8">
            {method === 'email' 
              ? 'We sent a 6-digit code to rahul.kumar@email.com'
              : 'Enter the 6-digit code displayed in your app notification'
            }
          </p>

          {/* OTP Input */}
          <div className="flex justify-center mb-8">
            <InputOTP
              maxLength={6}
              value={otp}
              onChange={(value) => setOtp(value)}
            >
              <InputOTPGroup className="gap-3">
                <InputOTPSlot index={0} className="w-14 h-14 text-xl border-2" />
                <InputOTPSlot index={1} className="w-14 h-14 text-xl border-2" />
                <InputOTPSlot index={2} className="w-14 h-14 text-xl border-2" />
                <InputOTPSlot index={3} className="w-14 h-14 text-xl border-2" />
                <InputOTPSlot index={4} className="w-14 h-14 text-xl border-2" />
                <InputOTPSlot index={5} className="w-14 h-14 text-xl border-2" />
              </InputOTPGroup>
            </InputOTP>
          </div>

          {/* Verify Button */}
          <Button
            onClick={handleVerify}
            disabled={otp.length !== 6}
            className="w-full bg-[#2B59FF] hover:bg-[#1E40AF] text-white h-14 mb-4"
          >
            <ShieldCheck className="w-5 h-5 mr-2" />
            Verify & Check-In
          </Button>

          {/* Resend */}
          <div className="text-center">
            {canResend ? (
              <button
                onClick={handleResend}
                className="text-[#2B59FF] hover:underline flex items-center gap-2 mx-auto"
              >
                <RefreshCw className="w-4 h-4" />
                Resend Code
              </button>
            ) : (
              <p className="text-[#6B7280]">
                Resend code in {resendTimer}s
              </p>
            )}
          </div>
        </div>

        {/* Security Note */}
        <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
          <div className="flex gap-3">
            <ShieldCheck className="w-6 h-6 text-[#2B59FF] flex-shrink-0" />
            <div>
              <h4 className="text-[#111827] mb-2">Secure Check-In</h4>
              <p className="text-[#6B7280]">
                This OTP is valid only for this session and expires in {formatTime(timeLeft)}. 
                Never share your OTP with anyone.
              </p>
            </div>
          </div>
        </div>

        {/* Help */}
        <div className="mt-6 text-center">
          <p className="text-[#6B7280] mb-2">Didn't receive the code?</p>
          <button className="text-[#2B59FF] hover:underline">
            Try a different method
          </button>
        </div>
      </div>
    </div>
  );
}
