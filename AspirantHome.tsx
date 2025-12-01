import { Search, Bell, Star, TrendingUp, Clock, Filter, Menu, Sparkles } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AspirantHomeProps {
  onNavigate: (screen: string, data?: any) => void;
}

const categories = [
  { name: 'SSC', count: 234, color: 'bg-blue-500', icon: '📚' },
  { name: 'Banking', count: 189, color: 'bg-green-500', icon: '🏦' },
  { name: 'PSC', count: 156, color: 'bg-purple-500', icon: '⚖️' },
  { name: 'Railways', count: 142, color: 'bg-orange-500', icon: '🚂' },
  { name: 'UPSC', count: 98, color: 'bg-red-500', icon: '🏛️' },
];

const trendingAchievers = [
  {
    id: 1,
    name: 'Priya Sharma',
    exam: 'SSC CGL 2023',
    attempt: '1st Attempt',
    rating: 4.9,
    sessions: 127,
    fee: 499,
    verified: true,
  },
  {
    id: 2,
    name: 'Rahul Verma',
    exam: 'IBPS PO 2023',
    attempt: '2nd Attempt',
    rating: 4.8,
    sessions: 98,
    fee: 599,
    verified: true,
  },
  {
    id: 3,
    name: 'Anjali Patel',
    exam: 'SSC CHSL 2024',
    attempt: '1st Attempt',
    rating: 4.7,
    sessions: 76,
    fee: 399,
    verified: true,
  },
];

const recentAchievers = [
  {
    id: 4,
    name: 'Vikram Singh',
    exam: 'RRB NTPC 2023',
    attempt: '1st Attempt',
    rating: 5.0,
    sessions: 12,
    fee: 449,
    verified: true,
    badge: 'New',
  },
  {
    id: 5,
    name: 'Sneha Reddy',
    exam: 'SBI Clerk 2024',
    attempt: '3rd Attempt',
    rating: 4.9,
    sessions: 8,
    fee: 349,
    verified: true,
    badge: 'New',
  },
];

export function AspirantHome({ onNavigate }: AspirantHomeProps) {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <button className="md:hidden">
                <Menu className="w-6 h-6 text-[#111827]" />
              </button>
              <h1 className="text-[#111827] text-2xl">MentorGov</h1>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('notifications')}
                className="relative p-2 hover:bg-[#F3F4F6] rounded-lg"
              >
                <Bell className="w-6 h-6 text-[#111827]" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button
                onClick={() => onNavigate('aspirant-dashboard')}
                className="w-10 h-10 bg-[#2B59FF] rounded-full flex items-center justify-center text-white"
              >
                RK
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
            <Input
              placeholder="Search by exam, achiever name, or specialization..."
              className="pl-10 pr-10 h-12"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2">
              <Filter className="w-5 h-5 text-[#6B7280]" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Featured Banner - Indian Jobs Explorer */}
        <div 
          onClick={() => onNavigate('indian-govt-jobs')}
          className="bg-gradient-to-r from-orange-500 via-white to-green-500 rounded-3xl p-8 mb-6 shadow-2xl cursor-pointer hover:shadow-3xl transition-all group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-green-500/10 group-hover:opacity-50 transition-opacity"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-5xl">🇮🇳</span>
              <div className="bg-yellow-400 text-[#111827] px-4 py-1 rounded-full text-sm uppercase tracking-wide animate-pulse">
                🆕 Complete Directory
              </div>
            </div>
            <h2 className="text-[#111827] text-3xl text-center mb-3">
              Indian Government Jobs Explorer
            </h2>
            <p className="text-[#6B7280] text-lg text-center mb-4">
              Browse 150+ Central & State Government jobs - From IAS to Peon, UPSC to SSC
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
              <div className="bg-white/80 backdrop-blur px-4 py-2 rounded-xl shadow-sm">
                <span className="text-orange-600">Central Govt</span>
              </div>
              <div className="bg-white/80 backdrop-blur px-4 py-2 rounded-xl shadow-sm">
                <span className="text-green-600">State Govt</span>
              </div>
              <div className="bg-white/80 backdrop-blur px-4 py-2 rounded-xl shadow-sm">
                <span className="text-blue-600">All Levels</span>
              </div>
              <div className="bg-white/80 backdrop-blur px-4 py-2 rounded-xl shadow-sm">
                <span className="text-purple-600">Complete Details</span>
              </div>
            </div>
            <div className="text-center">
              <Button className="bg-gradient-to-r from-orange-500 to-green-500 text-white hover:shadow-lg group-hover:scale-105 transition-transform">
                🔍 Explore All Government Jobs →
              </Button>
            </div>
          </div>
        </div>

        {/* Secondary Banners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Motivational Feed Banner */}
          <div 
            onClick={() => onNavigate('motivational-feed')}
            className="bg-gradient-to-r from-[#2B59FF] to-[#1E40AF] rounded-3xl p-8 shadow-2xl cursor-pointer hover:shadow-3xl transition-shadow group"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-6 h-6 text-yellow-300" />
                  <span className="text-yellow-300 uppercase tracking-wide text-sm">Feature</span>
                </div>
                <h2 className="text-white text-2xl mb-2">Success Stories</h2>
                <p className="text-blue-100 mb-4">
                  Watch motivational videos from achievers 🎯
                </p>
                <Button className="bg-white text-[#2B59FF] hover:bg-gray-100 group-hover:scale-105 transition-transform text-sm">
                  Explore →
                </Button>
              </div>
              <div className="hidden lg:block text-6xl ml-4">
                🏆
              </div>
            </div>
          </div>

          {/* State Jobs Explorer Banner */}
          <div 
            onClick={() => onNavigate('state-jobs-explorer')}
            className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-3xl p-8 shadow-2xl cursor-pointer hover:shadow-3xl transition-shadow group"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-6 h-6 text-yellow-300" />
                  <span className="text-yellow-300 uppercase tracking-wide text-sm">Directory</span>
                </div>
                <h2 className="text-white text-2xl mb-2">State Jobs Only</h2>
                <p className="text-purple-100 mb-4">
                  Browse state government job roles 🏛️
                </p>
                <Button className="bg-white text-purple-600 hover:bg-gray-100 group-hover:scale-105 transition-transform text-sm">
                  Browse →
                </Button>
              </div>
              <div className="hidden lg:block text-6xl ml-4">
                📋
              </div>
            </div>
          </div>
        </div>

        {/* Exam Categories */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[#111827] text-2xl">Exam Categories</h2>
            <button className="text-[#2B59FF] hover:underline">View All</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => onNavigate('exam-category', { category: category.name })}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow border-2 border-transparent hover:border-[#2B59FF] group"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-[#111827] text-lg mb-1">{category.name}</h3>
                <p className="text-[#6B7280]">{category.count} mentors</p>
              </button>
            ))}
          </div>
        </div>

        {/* Trending Achievers */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-6 h-6 text-[#2B59FF]" />
            <h2 className="text-[#111827] text-2xl">Trending Achievers</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {trendingAchievers.map((achiever) => (
              <button
                key={achiever.id}
                onClick={() => onNavigate('achiever-profile', { achiever })}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all text-left border-2 border-transparent hover:border-[#2B59FF]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2B59FF] to-[#1E40AF] rounded-full flex items-center justify-center text-white text-xl">
                    {achiever.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  {achiever.verified && (
                    <div className="px-3 py-1 bg-green-100 rounded-full flex items-center gap-1">
                      <span className="text-green-700">✓</span>
                      <span className="text-green-700">Verified</span>
                    </div>
                  )}
                </div>
                <h3 className="text-[#111827] text-lg mb-1">{achiever.name}</h3>
                <p className="text-[#6B7280] mb-3">{achiever.exam}</p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-[#111827]">{achiever.rating}</span>
                  </div>
                  <div className="text-[#6B7280]">•</div>
                  <div className="text-[#6B7280]">{achiever.sessions} sessions</div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-[#111827]">₹{achiever.fee}/session</span>
                  <span className="text-[#2B59FF]">View Profile →</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Recently Joined */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Clock className="w-6 h-6 text-[#2B59FF]" />
            <h2 className="text-[#111827] text-2xl">Recently Joined</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {recentAchievers.map((achiever) => (
              <button
                key={achiever.id}
                onClick={() => onNavigate('achiever-profile', { achiever })}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all text-left border-2 border-transparent hover:border-[#2B59FF] relative"
              >
                {achiever.badge && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-[#2B59FF] rounded-full">
                    <span className="text-white">{achiever.badge}</span>
                  </div>
                )}
                <div className="flex gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">
                    {achiever.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-[#111827] text-lg">{achiever.name}</h3>
                      {achiever.verified && (
                        <span className="text-green-600">✓</span>
                      )}
                    </div>
                    <p className="text-[#6B7280] mb-2">{achiever.exam}</p>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-[#111827]">{achiever.rating}</span>
                      </div>
                      <div className="text-[#6B7280]">{achiever.sessions} sessions</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#111827]">₹{achiever.fee}/session</span>
                      <span className="text-[#2B59FF]">Book Now →</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation (Mobile) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3">
        <div className="flex justify-around">
          <button className="flex flex-col items-center gap-1 text-[#2B59FF]">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="text-xs">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-[#6B7280]">
            <Search className="w-6 h-6" />
            <span className="text-xs">Search</span>
          </button>
          <button
            onClick={() => onNavigate('chat')}
            className="flex flex-col items-center gap-1 text-[#6B7280]"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="text-xs">Messages</span>
          </button>
          <button
            onClick={() => onNavigate('aspirant-dashboard')}
            className="flex flex-col items-center gap-1 text-[#6B7280]"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}