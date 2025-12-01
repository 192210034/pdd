import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, GraduationCap } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface LoginScreenProps {
  onNavigate: (screen: string, data?: any) => void;
}

export function LoginScreen({ onNavigate }: LoginScreenProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Mock login - in real app, verify credentials
    if (email.includes('achiever')) {
      onNavigate('achiever-dashboard', { role: 'achiever' });
    } else if (email.includes('admin')) {
      onNavigate('admin-dashboard');
    } else {
      onNavigate('aspirant-home', { role: 'aspirant' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Branding (hidden on mobile) */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-[#2B59FF] to-[#1E40AF] p-12 items-center justify-center">
        <div className="text-white max-w-md">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
            <GraduationCap className="w-12 h-12" />
          </div>
          <h1 className="text-4xl mb-4">Welcome Back!</h1>
          <p className="text-blue-100 text-lg">
            Connect with verified achievers and accelerate your exam preparation journey.
          </p>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="md:hidden mb-8 text-center">
            <div className="w-16 h-16 bg-[#2B59FF] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-[#111827] text-2xl">MentorGov</h2>
          </div>

          <h2 className="text-[#111827] text-3xl mb-2">Login</h2>
          <p className="text-[#6B7280] mb-8">Welcome back! Please enter your details.</p>

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

            <div>
              <Label htmlFor="password" className="text-[#111827]">Password</Label>
              <div className="relative mt-2">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  className="pl-10 pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#111827]"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-[#2B59FF] border-gray-300 rounded" />
                <span className="text-[#6B7280]">Remember me</span>
              </label>
              <button
                onClick={() => onNavigate('forgot-password')}
                className="text-[#2B59FF] hover:underline"
              >
                Forgot password?
              </button>
            </div>

            <Button
              onClick={handleLogin}
              className="w-full bg-[#2B59FF] hover:bg-[#1E40AF] text-white h-12"
            >
              Login
            </Button>

            <div className="text-center">
              <span className="text-[#6B7280]">Don't have an account? </span>
              <button
                onClick={() => onNavigate('signup')}
                className="text-[#2B59FF] hover:underline"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
