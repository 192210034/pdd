import { Award, GraduationCap } from 'lucide-react';

export function SplashScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#2B59FF] to-[#1E40AF] flex items-center justify-center">
      <div className="text-center animate-fade-in">
        <div className="flex items-center justify-center mb-6">
          <div className="relative">
            <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-2xl">
              <GraduationCap className="w-14 h-14 text-[#2B59FF]" />
            </div>
            <div className="absolute -top-2 -right-2 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
              <Award className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
        <h1 className="text-white text-4xl mb-2">MentorGov</h1>
        <p className="text-blue-100">Learn from Achievers</p>
        <div className="mt-8 flex justify-center gap-2">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}
