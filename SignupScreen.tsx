import { useState } from 'react';
import { Mail, Lock, User, Eye, EyeOff, GraduationCap, Award } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface SignupScreenProps {
  onNavigate: (screen: string, data?: any) => void;
}

export function SignupScreen({ onNavigate }: SignupScreenProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<'aspirant' | 'achiever' | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });

  const handleSignup = () => {
    onNavigate('otp', { role: selectedRole });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#2B59FF] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-[#111827] text-3xl mb-2">Create Account</h2>
          <p className="text-[#6B7280]">Join thousands of aspirants and achievers</p>
        </div>

        {!selectedRole ? (
          <div className="space-y-4">
            <h3 className="text-[#111827] text-center mb-6">I want to join as:</h3>
            <button
              onClick={() => setSelectedRole('aspirant')}
              className="w-full p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow border-2 border-transparent hover:border-[#2B59FF] group"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-[#2B59FF] transition-colors">
                  <GraduationCap className="w-8 h-8 text-[#2B59FF] group-hover:text-white transition-colors" />
                </div>
                <div className="text-left flex-1">
                  <h4 className="text-[#111827] text-xl mb-1">Aspirant</h4>
                  <p className="text-[#6B7280]">I want to learn from exam achievers</p>
                </div>
              </div>
            </button>

            <button
              onClick={() => setSelectedRole('achiever')}
              className="w-full p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow border-2 border-transparent hover:border-[#2B59FF] group"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center group-hover:bg-[#2B59FF] transition-colors">
                  <Award className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <div className="text-left flex-1">
                  <h4 className="text-[#111827] text-xl mb-1">Achiever</h4>
                  <p className="text-[#6B7280]">I have cleared an exam and want to mentor</p>
                </div>
              </div>
            </button>

            <div className="text-center pt-4">
              <span className="text-[#6B7280]">Already have an account? </span>
              <button
                onClick={() => onNavigate('login')}
                className="text-[#2B59FF] hover:underline"
              >
                Login
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[#111827] text-xl">
                Sign up as {selectedRole === 'aspirant' ? 'Aspirant' : 'Achiever'}
              </h3>
              <button
                onClick={() => setSelectedRole(null)}
                className="text-[#6B7280] hover:text-[#111827]"
              >
                Change
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-[#111827]">Full Name</Label>
                <div className="relative mt-2">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    className="pl-10"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-[#111827]">Email</Label>
                <div className="relative mt-2">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone" className="text-[#111827]">Phone Number</Label>
                <div className="relative mt-2">
                  <Input
                    id="phone"
                    placeholder="+91 XXXXX XXXXX"
                    className="pl-3"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                    placeholder="Create a password"
                    className="pl-10 pr-10"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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

              <div className="pt-2">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 mt-1 text-[#2B59FF] border-gray-300 rounded" />
                  <span className="text-[#6B7280]">
                    I agree to the Terms & Conditions and Privacy Policy
                  </span>
                </label>
              </div>

              <Button
                onClick={handleSignup}
                className="w-full bg-[#2B59FF] hover:bg-[#1E40AF] text-white h-12"
              >
                Continue
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
