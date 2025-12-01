import { DollarSign, Calendar, TrendingUp, Clock, Bell, Settings, Users, Star, Download, CreditCard } from 'lucide-react';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface AchieverDashboardProps {
  onNavigate: (screen: string) => void;
}

const pendingRequests = [
  { id: 1, aspirant: 'Rohit Kumar', date: 'Nov 25', time: '03:00 PM', message: 'Want to discuss quant strategies' },
  { id: 2, aspirant: 'Meera Shah', date: 'Nov 26', time: '05:00 PM', message: 'Mock test analysis help needed' },
];

const upcomingSessions = [
  { id: 1, aspirant: 'Amit Patel', date: 'Nov 27', time: '02:00 PM', paid: true },
];

const earnings = [
  { month: 'November', amount: 4500, sessions: 10 },
  { month: 'October', amount: 3800, sessions: 8 },
  { month: 'September', amount: 5200, sessions: 12 },
];

export function AchieverDashboard({ onNavigate }: AchieverDashboardProps) {
  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl">Priya Sharma</h1>
                <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full flex items-center gap-1">
                  <span>✓</span>
                  <span>Verified</span>
                </div>
              </div>
              <p className="text-green-100">SSC CGL 2023 • 1st Attempt</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => onNavigate('notifications')}
                className="p-2 hover:bg-white/10 rounded-lg relative"
              >
                <Bell className="w-6 h-6" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button
                onClick={() => onNavigate('login')}
                className="p-2 hover:bg-white/10 rounded-lg"
              >
                <Settings className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <DollarSign className="w-5 h-5" />
                <p className="text-green-100">Total Earnings</p>
              </div>
              <p className="text-3xl">₹13,500</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <Users className="w-5 h-5" />
                <p className="text-green-100">Sessions</p>
              </div>
              <p className="text-3xl">30</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <Star className="w-5 h-5" />
                <p className="text-green-100">Rating</p>
              </div>
              <p className="text-3xl">4.9</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-5 h-5" />
                <p className="text-green-100">This Month</p>
              </div>
              <p className="text-3xl">10</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Pending Requests Alert */}
        {pendingRequests.length > 0 && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-[#111827] mb-1">You have {pendingRequests.length} pending request{pendingRequests.length > 1 ? 's' : ''}</h3>
                <p className="text-[#6B7280]">Review and respond to aspirant booking requests</p>
              </div>
              <Button
                onClick={() => onNavigate('incoming-request')}
                className="bg-[#2B59FF] hover:bg-[#1E40AF] text-white"
              >
                Review Requests
              </Button>
            </div>
          </div>
        )}

        <Tabs defaultValue="sessions" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="sessions">Sessions</TabsTrigger>
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
            <TabsTrigger value="availability">Availability</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="sessions">
            <div className="space-y-6">
              <div>
                <h3 className="text-[#111827] text-xl mb-4">Upcoming Sessions</h3>
                {upcomingSessions.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingSessions.map((session) => (
                      <div key={session.id} className="bg-white rounded-2xl p-6 shadow-md">
                        <div className="flex items-center justify-between">
                          <div className="flex gap-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl">
                              {session.aspirant.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <h4 className="text-[#111827] text-lg mb-1">{session.aspirant}</h4>
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
                              {session.paid && (
                                <div className="mt-2 inline-flex items-center gap-1 px-3 py-1 bg-green-100 rounded-full">
                                  <span className="text-green-700">✓ Payment received</span>
                                </div>
                              )}
                            </div>
                          </div>
                          <Button
                            onClick={() => onNavigate('session-details')}
                            className="bg-[#2B59FF] hover:bg-[#1E40AF] text-white"
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-2xl p-12 text-center">
                    <Calendar className="w-16 h-16 text-[#6B7280] mx-auto mb-4" />
                    <h3 className="text-[#111827] text-xl mb-2">No Upcoming Sessions</h3>
                    <p className="text-[#6B7280]">New requests will appear here</p>
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-[#111827] text-xl mb-4">Session History</h3>
                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-4 bg-[#F3F4F6] rounded-lg">
                      <p className="text-2xl text-[#111827] mb-1">30</p>
                      <p className="text-[#6B7280]">Completed</p>
                    </div>
                    <div className="p-4 bg-[#F3F4F6] rounded-lg">
                      <p className="text-2xl text-[#111827] mb-1">2</p>
                      <p className="text-[#6B7280]">Cancelled</p>
                    </div>
                    <div className="p-4 bg-[#F3F4F6] rounded-lg">
                      <p className="text-2xl text-[#111827] mb-1">48h</p>
                      <p className="text-[#6B7280]">Total Hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="earnings">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-[#111827] text-xl mb-1">Total Balance</h3>
                    <p className="text-4xl text-[#111827]">₹5,200</p>
                    <p className="text-[#6B7280] mt-1">Available for withdrawal</p>
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    <Download className="w-5 h-5 mr-2" />
                    Withdraw
                  </Button>
                </div>
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-[#6B7280] mb-2">Withdrawal History</p>
                  <div className="space-y-2">
                    <div className="flex justify-between p-3 bg-[#F3F4F6] rounded-lg">
                      <span className="text-[#111827]">Oct 15, 2024</span>
                      <span className="text-green-600">+₹3,800</span>
                    </div>
                    <div className="flex justify-between p-3 bg-[#F3F4F6] rounded-lg">
                      <span className="text-[#111827]">Sep 20, 2024</span>
                      <span className="text-green-600">+₹5,200</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="text-[#111827] text-xl mb-4">Monthly Earnings</h3>
                <div className="space-y-3">
                  {earnings.map((item) => (
                    <div key={item.month} className="flex items-center justify-between p-4 bg-[#F3F4F6] rounded-lg">
                      <div>
                        <p className="text-[#111827] mb-1">{item.month}</p>
                        <p className="text-[#6B7280]">{item.sessions} sessions</p>
                      </div>
                      <p className="text-[#111827] text-xl">₹{item.amount}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="availability">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-[#111827] text-xl mb-4">Manage Your Availability</h3>
              <p className="text-[#6B7280] mb-6">Set your available time slots for mentorship sessions</p>

              <div className="space-y-4 mb-6">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                  <div key={day} className="flex items-center justify-between p-4 bg-[#F3F4F6] rounded-lg">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" defaultChecked={day !== 'Sunday'} className="w-5 h-5 text-[#2B59FF] rounded" />
                      <span className="text-[#111827]">{day}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <select className="px-3 py-2 border border-gray-300 rounded-lg">
                        <option>09:00 AM</option>
                        <option>10:00 AM</option>
                        <option>11:00 AM</option>
                      </select>
                      <span className="text-[#6B7280]">to</span>
                      <select className="px-3 py-2 border border-gray-300 rounded-lg">
                        <option>05:00 PM</option>
                        <option>06:00 PM</option>
                        <option>09:00 PM</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="bg-[#2B59FF] hover:bg-[#1E40AF] text-white">
                Save Availability
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="profile">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-[#111827] text-xl mb-6">Profile Settings</h3>

              <div className="space-y-6">
                <div>
                  <label className="text-[#111827] mb-2 block">Session Fee (₹)</label>
                  <input
                    type="number"
                    defaultValue="499"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  />
                </div>

                <div>
                  <label className="text-[#111827] mb-2 block">About Me</label>
                  <textarea
                    rows={4}
                    defaultValue="Hello! I successfully cleared SSC CGL 2023 in my first attempt..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  />
                </div>

                <div>
                  <label className="text-[#111827] mb-2 block">Expertise Areas</label>
                  <div className="flex flex-wrap gap-2">
                    {['Exam Strategy', 'Time Management', 'Mock Test Analysis', 'Doubt Clearing'].map((skill) => (
                      <span key={skill} className="px-4 py-2 bg-blue-50 text-[#2B59FF] rounded-full">
                        {skill} ✕
                      </span>
                    ))}
                    <button className="px-4 py-2 border-2 border-dashed border-[#2B59FF] text-[#2B59FF] rounded-full">
                      + Add Skill
                    </button>
                  </div>
                </div>

                <Button className="bg-[#2B59FF] hover:bg-[#1E40AF] text-white">
                  Update Profile
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
