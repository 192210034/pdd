import { Calendar, Clock, Star, TrendingUp, CreditCard, Settings, LogOut, Video, Home, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface AspirantDashboardProps {
  onNavigate: (screen: string) => void;
}

const upcomingSessions = [
  { id: 1, mentor: 'Priya Sharma', exam: 'SSC CGL', date: 'Nov 25, 2024', time: '03:00 PM', status: 'confirmed' },
  { id: 2, mentor: 'Rahul Verma', exam: 'IBPS PO', date: 'Nov 27, 2024', time: '05:00 PM', status: 'confirmed' },
];

const pastSessions = [
  { id: 3, mentor: 'Anjali Patel', exam: 'SSC CHSL', date: 'Nov 20, 2024', time: '04:00 PM', rated: false },
  { id: 4, mentor: 'Vikram Singh', exam: 'RRB NTPC', date: 'Nov 18, 2024', time: '02:00 PM', rated: true },
  { id: 5, mentor: 'Sneha Reddy', exam: 'SBI Clerk', date: 'Nov 15, 2024', time: '06:00 PM', rated: true },
];

const followedAchievers = [
  { id: 1, name: 'Priya Sharma', exam: 'SSC CGL 2023', rating: 4.9 },
  { id: 2, name: 'Rahul Verma', exam: 'IBPS PO 2023', rating: 4.8 },
  { id: 3, name: 'Anjali Patel', exam: 'SSC CHSL 2024', rating: 4.7 },
];

export function AspirantDashboard({ onNavigate }: AspirantDashboardProps) {
  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2B59FF] to-[#1E40AF] text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl mb-2">Welcome back, Rohit!</h1>
              <p className="text-blue-100">Keep learning and growing</p>
            </div>
            <button
              onClick={() => onNavigate('login')}
              className="p-2 hover:bg-white/10 rounded-lg"
            >
              <Settings className="w-6 h-6" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-blue-100 mb-1">Total Sessions</p>
              <p className="text-3xl">12</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-blue-100 mb-1">This Month</p>
              <p className="text-3xl">5</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-blue-100 mb-1">Hours Learned</p>
              <p className="text-3xl">18</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-blue-100 mb-1">Following</p>
              <p className="text-3xl">8</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="upcoming">Upcoming Sessions</TabsTrigger>
            <TabsTrigger value="past">Past Sessions</TabsTrigger>
            <TabsTrigger value="following">Following</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming">
            {upcomingSessions.length > 0 ? (
              <div className="space-y-4">
                {upcomingSessions.map((session) => (
                  <div key={session.id} className="bg-white rounded-2xl p-6 shadow-md">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#2B59FF] to-[#1E40AF] rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">
                          {session.mentor.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h3 className="text-[#111827] text-lg mb-1">{session.mentor}</h3>
                          <p className="text-[#6B7280] mb-2">{session.exam}</p>
                          <div className="flex items-center gap-4 text-[#6B7280]">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{session.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{session.time}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          onClick={() => onNavigate('session-details')}
                          className="bg-[#2B59FF] hover:bg-[#1E40AF] text-white"
                        >
                          <Video className="w-4 h-4 mr-2" />
                          Join Session
                        </Button>
                        <Button
                          onClick={() => onNavigate('chat')}
                          variant="outline"
                        >
                          <MessageCircle className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-12 text-center">
                <Calendar className="w-16 h-16 text-[#6B7280] mx-auto mb-4" />
                <h3 className="text-[#111827] text-xl mb-2">No Upcoming Sessions</h3>
                <p className="text-[#6B7280] mb-6">Browse achievers and book your next session</p>
                <Button
                  onClick={() => onNavigate('aspirant-home')}
                  className="bg-[#2B59FF] hover:bg-[#1E40AF] text-white"
                >
                  Browse Achievers
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="past">
            <div className="space-y-4">
              {pastSessions.map((session) => (
                <div key={session.id} className="bg-white rounded-2xl p-6 shadow-md">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex gap-4">
                      <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">
                        {session.mentor.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="text-[#111827] text-lg mb-1">{session.mentor}</h3>
                        <p className="text-[#6B7280] mb-2">{session.exam}</p>
                        <div className="flex items-center gap-4 text-[#6B7280]">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{session.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{session.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      {!session.rated ? (
                        <Button
                          onClick={() => onNavigate('rating-review')}
                          className="bg-yellow-500 hover:bg-yellow-600 text-white"
                        >
                          <Star className="w-4 h-4 mr-2" />
                          Rate Session
                        </Button>
                      ) : (
                        <div className="px-4 py-2 bg-green-100 rounded-lg">
                          <span className="text-green-700">✓ Rated</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="following">
            <div className="grid md:grid-cols-3 gap-6">
              {followedAchievers.map((achiever) => (
                <div key={achiever.id} className="bg-white rounded-2xl p-6 shadow-md">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#2B59FF] to-[#1E40AF] rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                    {achiever.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-[#111827] text-center mb-1">{achiever.name}</h3>
                  <p className="text-[#6B7280] text-center mb-3">{achiever.exam}</p>
                  <div className="flex items-center justify-center gap-1 mb-4">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-[#111827]">{achiever.rating}</span>
                  </div>
                  <Button
                    onClick={() => onNavigate('achiever-profile', { achiever })}
                    className="w-full bg-[#2B59FF] hover:bg-[#1E40AF] text-white"
                  >
                    View Profile
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="payments">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[#111827] text-xl">Payment History</h3>
                <Button variant="outline" size="sm">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Manage Cards
                </Button>
              </div>
              <div className="space-y-3">
                {[
                  { id: 1, date: 'Nov 24, 2024', mentor: 'Priya Sharma', amount: 549, status: 'Completed' },
                  { id: 2, date: 'Nov 20, 2024', mentor: 'Anjali Patel', amount: 449, status: 'Completed' },
                  { id: 3, date: 'Nov 18, 2024', mentor: 'Vikram Singh', amount: 399, status: 'Completed' },
                ].map((payment) => (
                  <div key={payment.id} className="flex items-center justify-between p-4 bg-[#F3F4F6] rounded-lg">
                    <div>
                      <p className="text-[#111827] mb-1">Session with {payment.mentor}</p>
                      <p className="text-[#6B7280]">{payment.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[#111827] mb-1">₹{payment.amount}</p>
                      <p className="text-green-600">{payment.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Bottom Navigation (Mobile) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3">
        <div className="flex justify-around">
          <button
            onClick={() => onNavigate('aspirant-home')}
            className="flex flex-col items-center gap-1 text-[#6B7280]"
          >
            <Home className="w-6 h-6" />
            <span className="text-xs">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-[#2B59FF]">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs">Dashboard</span>
          </button>
          <button
            onClick={() => onNavigate('chat')}
            className="flex flex-col items-center gap-1 text-[#6B7280]"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="text-xs">Messages</span>
          </button>
        </div>
      </div>
    </div>
  );
}
