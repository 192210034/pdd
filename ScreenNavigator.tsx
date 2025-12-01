import { Button } from './ui/button';
import { Card } from './ui/card';
import { 
  Smartphone, 
  UserPlus, 
  Home, 
  User, 
  Calendar,
  CreditCard,
  MessageSquare,
  Bell,
  Star,
  Shield,
  LayoutDashboard
} from 'lucide-react';

interface ScreenNavigatorProps {
  onNavigate: (screen: string, data?: any) => void;
}

export function ScreenNavigator({ onNavigate }: ScreenNavigatorProps) {
  const screenCategories = [
    {
      title: 'Authentication Flow',
      icon: UserPlus,
      color: 'from-blue-500 to-blue-600',
      screens: [
        { name: 'Onboarding', route: 'onboarding', desc: 'App intro slides' },
        { name: 'Login', route: 'login', desc: 'User login screen' },
        { name: 'Signup', route: 'signup', desc: 'New user registration' },
        { name: 'OTP', route: 'otp', desc: 'OTP verification' },
        { name: 'Forgot Password', route: 'forgot-password', desc: 'Password recovery' }
      ]
    },
    {
      title: 'Achiever Verification',
      icon: Shield,
      color: 'from-green-500 to-green-600',
      screens: [
        { name: 'Achiever Onboarding Flow', route: 'achiever-onboarding', desc: 'Complete 4-screen flow' },
        { name: 'Upload Scorecard', route: 'upload-scorecard', desc: 'Document upload' },
        { name: 'Verification Form', route: 'verification-form', desc: 'Details form' },
        { name: 'Verification Loading', route: 'verification-loading', desc: 'AI processing' },
        { name: 'Verification Pending', route: 'verification-pending', desc: 'Awaiting approval' },
        { name: 'Verified Badge', route: 'verified-badge', desc: 'Success screen' }
      ]
    },
    {
      title: 'Aspirant Journey',
      icon: Home,
      color: 'from-purple-500 to-purple-600',
      screens: [
        { name: 'Aspirant Home', route: 'aspirant-home', desc: 'Browse mentors' },
        { name: 'Exam Category', route: 'exam-category', desc: 'Filter by exam', data: { category: 'SSC' } },
        { name: 'Achiever Profile', route: 'achiever-profile', desc: 'Mentor details', data: { achiever: { name: 'Priya Sharma' } } },
        { name: 'Slot Booking', route: 'slot-booking', desc: 'Select time slot', data: { achiever: { name: 'Priya Sharma' } } },
        { name: 'Session Summary', route: 'session-summary', desc: 'Booking review' }
      ]
    },
    {
      title: 'Booking & Payment',
      icon: CreditCard,
      color: 'from-emerald-500 to-emerald-600',
      screens: [
        { name: 'Waiting Approval', route: 'waiting-approval', desc: 'Pending confirmation' },
        { name: 'Payment Screen', route: 'payment', desc: 'Make payment' },
        { name: 'Payment Success', route: 'payment-success', desc: 'Confirmation' },
        { name: 'Invoice', route: 'invoice', desc: 'Receipt download' }
      ]
    },
    {
      title: 'Achiever Flow',
      icon: User,
      color: 'from-yellow-500 to-yellow-600',
      screens: [
        { name: 'Incoming Request', route: 'incoming-request', desc: 'New booking alert' },
        { name: 'Approval Confirmation', route: 'approval-confirmation', desc: 'Accept/reject' },
        { name: 'Meet Link Generated', route: 'meet-link-generated', desc: 'Session link' }
      ]
    },
    {
      title: 'Session Management',
      icon: Calendar,
      color: 'from-pink-500 to-pink-600',
      screens: [
        { name: 'Session Details', route: 'session-details', desc: 'Upcoming session' },
        { name: 'Rating & Review', route: 'rating-review', desc: 'Post-session feedback' },
        { name: 'Chat', route: 'chat', desc: 'Direct messaging' }
      ]
    },
    {
      title: 'Dashboards',
      icon: LayoutDashboard,
      color: 'from-indigo-500 to-indigo-600',
      screens: [
        { name: 'Aspirant Dashboard', route: 'aspirant-dashboard', desc: 'Student hub' },
        { name: 'Achiever Dashboard', route: 'achiever-dashboard', desc: 'Mentor hub' },
        { name: 'Admin Dashboard', route: 'admin-dashboard', desc: 'Platform management' }
      ]
    },
    {
      title: 'Utilities',
      icon: Bell,
      color: 'from-red-500 to-red-600',
      screens: [
        { name: 'Notifications', route: 'notifications', desc: 'Activity updates' },
        { name: '🇮🇳 Indian Govt Jobs', route: 'indian-govt-jobs', desc: 'Central + State jobs' },
        { name: 'Indian Jobs Docs', route: 'indian-jobs-docs', desc: 'Complete documentation' },
        { name: 'State Jobs Explorer', route: 'state-jobs-explorer', desc: 'State govt only' },
        { name: 'Jobs Documentation', route: 'jobs-documentation', desc: 'State sitemap' }
      ]
    }
  ];

  const totalScreens = screenCategories.reduce((sum, category) => sum + category.screens.length, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F3F4F6] to-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#2B59FF] to-[#1E40AF] rounded-3xl mb-6 shadow-xl">
            <Smartphone className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-[#111827] text-4xl mb-4">
            Mentorship Platform Screen Navigator
          </h1>
          <p className="text-[#6B7280] text-xl mb-2">
            Comprehensive government exam mentorship platform
          </p>
          <div className="inline-flex items-center gap-2 bg-[#2B59FF] text-white px-6 py-3 rounded-full">
            <Star className="w-5 h-5" />
            <span className="text-lg">{totalScreens} Screens Available</span>
          </div>
        </div>

        {/* Screen Categories */}
        <div className="space-y-8">
          {screenCategories.map((category, idx) => (
            <Card key={idx} className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-[#111827] text-2xl">{category.title}</h2>
                  <p className="text-[#6B7280]">{category.screens.length} screens</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.screens.map((screen, screenIdx) => (
                  <button
                    key={screenIdx}
                    onClick={() => onNavigate(screen.route, screen.data)}
                    className="group p-5 bg-[#F3F4F6] hover:bg-gradient-to-br hover:from-[#2B59FF] hover:to-[#1E40AF] rounded-2xl transition-all hover:shadow-lg text-left"
                  >
                    <p className="text-[#111827] group-hover:text-white mb-1 transition-colors">
                      {screen.name}
                    </p>
                    <p className="text-[#6B7280] group-hover:text-blue-100 transition-colors">
                      {screen.desc}
                    </p>
                  </button>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="mt-12 p-8 bg-gradient-to-r from-[#2B59FF] to-[#1E40AF] text-white rounded-3xl shadow-2xl">
          <h3 className="text-2xl mb-4">Quick Start Guide</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <p className="text-xl mb-2">For Aspirants</p>
              <p className="text-blue-100 mb-4">Browse mentors, book sessions, and get guidance</p>
              <Button
                onClick={() => onNavigate('aspirant-home')}
                className="bg-white text-[#2B59FF] hover:bg-gray-100 w-full"
              >
                Start as Aspirant
              </Button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <p className="text-xl mb-2">For Achievers</p>
              <p className="text-blue-100 mb-4">Verify credentials and start mentoring</p>
              <Button
                onClick={() => onNavigate('upload-scorecard')}
                className="bg-white text-[#2B59FF] hover:bg-gray-100 w-full"
              >
                Get Verified
              </Button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <p className="text-xl mb-2">For Admins</p>
              <p className="text-blue-100 mb-4">Manage platform and monitor performance</p>
              <Button
                onClick={() => onNavigate('admin-dashboard')}
                className="bg-white text-[#2B59FF] hover:bg-gray-100 w-full"
              >
                Admin Panel
              </Button>
            </div>
          </div>
        </Card>

        {/* Footer Info */}
        <div className="mt-12 text-center">
          <p className="text-[#6B7280] mb-2">
            Built with React + TypeScript + Tailwind CSS + shadcn/ui
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <span className="px-4 py-2 bg-white rounded-full text-[#6B7280] shadow-sm">
              Mobile & Web Responsive
            </span>
            <span className="px-4 py-2 bg-white rounded-full text-[#6B7280] shadow-sm">
              Modern UI/UX
            </span>
            <span className="px-4 py-2 bg-white rounded-full text-[#6B7280] shadow-sm">
              Trust-Focused Design
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}