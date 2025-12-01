import { 
  Users, 
  CheckCircle, 
  Clock, 
  XCircle, 
  TrendingUp, 
  IndianRupee, 
  Calendar,
  Search,
  Filter,
  Download,
  Eye,
  UserCheck,
  UserX,
  AlertCircle,
  BarChart3,
  PieChart
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

interface AdminDashboardProps {
  onNavigate: (screen: string) => void;
}

export function AdminDashboard({ onNavigate }: AdminDashboardProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTab, setSelectedTab] = useState('overview');

  const stats = [
    {
      title: 'Total Aspirants',
      value: '12,458',
      change: '+12.5%',
      icon: Users,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Total Achievers',
      value: '1,247',
      change: '+8.2%',
      icon: UserCheck,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Pending Verifications',
      value: '87',
      change: '-5.3%',
      icon: Clock,
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      title: 'Total Sessions',
      value: '8,456',
      change: '+18.7%',
      icon: Calendar,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Revenue (This Month)',
      value: '₹4,32,890',
      change: '+23.4%',
      icon: IndianRupee,
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      title: 'Active Sessions',
      value: '124',
      change: '+15.2%',
      icon: TrendingUp,
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const pendingVerifications = [
    {
      id: 1,
      name: 'Amit Kumar',
      email: 'amit.kumar@email.com',
      exam: 'SSC CGL',
      year: '2023',
      rank: '145',
      submittedOn: '2024-11-20',
      status: 'pending'
    },
    {
      id: 2,
      name: 'Sneha Patel',
      email: 'sneha.p@email.com',
      exam: 'IBPS PO',
      year: '2023',
      rank: '67',
      submittedOn: '2024-11-21',
      status: 'pending'
    },
    {
      id: 3,
      name: 'Rajesh Sharma',
      email: 'rajesh.sharma@email.com',
      exam: 'RRB NTPC',
      year: '2023',
      rank: '234',
      submittedOn: '2024-11-22',
      status: 'pending'
    },
    {
      id: 4,
      name: 'Priya Verma',
      email: 'priya.v@email.com',
      exam: 'UPSC CSE',
      year: '2023',
      rank: '456',
      submittedOn: '2024-11-23',
      status: 'pending'
    }
  ];

  const recentSessions = [
    {
      id: 1,
      aspirant: 'Rahul Gupta',
      achiever: 'Priya Sharma',
      exam: 'SSC CGL',
      date: '2024-11-24',
      time: '10:00 AM',
      amount: '₹499',
      status: 'completed'
    },
    {
      id: 2,
      aspirant: 'Anjali Singh',
      achiever: 'Vikram Reddy',
      exam: 'IBPS PO',
      date: '2024-11-24',
      time: '02:00 PM',
      amount: '₹599',
      status: 'ongoing'
    },
    {
      id: 3,
      aspirant: 'Sanjay Yadav',
      achiever: 'Neha Kapoor',
      exam: 'RRB NTPC',
      date: '2024-11-24',
      time: '04:00 PM',
      amount: '₹449',
      status: 'scheduled'
    }
  ];

  const handleVerificationAction = (id: number, action: 'approve' | 'reject') => {
    console.log(`${action} verification for ID: ${id}`);
    // Handle verification logic here
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2B59FF] to-[#1E40AF] text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-3xl">Admin Dashboard</h1>
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>
          <p className="text-blue-100">Manage platform operations and monitor performance</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <span className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change}
                </span>
              </div>
              <p className="text-[#6B7280] mb-1">{stat.title}</p>
              <p className="text-[#111827] text-3xl">{stat.value}</p>
            </Card>
          ))}
        </div>

        {/* Tabs */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="verifications">
              Verifications
              <Badge className="ml-2 bg-yellow-500">87</Badge>
            </TabsTrigger>
            <TabsTrigger value="sessions">Sessions</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Top Performing Achievers */}
              <Card className="p-6 bg-white rounded-2xl shadow-md">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-[#111827] text-xl">Top Performers</h3>
                  <BarChart3 className="w-5 h-5 text-[#2B59FF]" />
                </div>
                <div className="space-y-4">
                  {[
                    { name: 'Priya Sharma', sessions: 156, rating: 4.9, earnings: '₹77,844' },
                    { name: 'Vikram Reddy', sessions: 142, rating: 4.8, earnings: '₹71,258' },
                    { name: 'Neha Kapoor', sessions: 128, rating: 4.7, earnings: '₹57,472' }
                  ].map((achiever, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-[#F3F4F6] rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#2B59FF] to-[#1E40AF] rounded-full flex items-center justify-center text-white">
                          {index + 1}
                        </div>
                        <div>
                          <p className="text-[#111827]">{achiever.name}</p>
                          <p className="text-[#6B7280]">{achiever.sessions} sessions • ⭐ {achiever.rating}</p>
                        </div>
                      </div>
                      <p className="text-[#2B59FF]">{achiever.earnings}</p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Exam Category Distribution */}
              <Card className="p-6 bg-white rounded-2xl shadow-md">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-[#111827] text-xl">Session Distribution</h3>
                  <PieChart className="w-5 h-5 text-[#2B59FF]" />
                </div>
                <div className="space-y-3">
                  {[
                    { exam: 'SSC', count: 3245, percentage: 38, color: 'bg-blue-500' },
                    { exam: 'Banking', count: 2156, percentage: 26, color: 'bg-green-500' },
                    { exam: 'Railways', count: 1687, percentage: 20, color: 'bg-yellow-500' },
                    { exam: 'State PSC', count: 845, percentage: 10, color: 'bg-purple-500' },
                    { exam: 'UPSC', count: 523, percentage: 6, color: 'bg-pink-500' }
                  ].map((category, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[#111827]">{category.exam}</span>
                        <span className="text-[#6B7280]">{category.count} sessions</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${category.color}`}
                          style={{ width: `${category.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="p-6 bg-white rounded-2xl shadow-md">
              <h3 className="text-[#111827] text-xl mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {[
                  { action: 'New achiever verified', user: 'Amit Kumar', time: '5 min ago', icon: UserCheck, color: 'text-green-600' },
                  { action: 'Session completed', user: 'Rahul Gupta & Priya Sharma', time: '12 min ago', icon: CheckCircle, color: 'text-blue-600' },
                  { action: 'Payment received', user: 'Transaction #TXN45678', time: '18 min ago', icon: IndianRupee, color: 'text-emerald-600' },
                  { action: 'Verification rejected', user: 'Invalid scorecard submitted', time: '25 min ago', icon: XCircle, color: 'text-red-600' }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 hover:bg-[#F3F4F6] rounded-lg transition-colors">
                    <activity.icon className={`w-5 h-5 ${activity.color}`} />
                    <div className="flex-1">
                      <p className="text-[#111827]">{activity.action}</p>
                      <p className="text-[#6B7280]">{activity.user}</p>
                    </div>
                    <span className="text-[#6B7280]">{activity.time}</span>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Verifications Tab */}
          <TabsContent value="verifications" className="space-y-6">
            <Card className="p-6 bg-white rounded-2xl shadow-md">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[#111827] text-xl">Pending Verifications</h3>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                    <Input
                      placeholder="Search verifications..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 w-64"
                    />
                  </div>
                  <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Applicant</TableHead>
                      <TableHead>Exam Details</TableHead>
                      <TableHead>Submitted On</TableHead>
                      <TableHead>Documents</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pendingVerifications.map((verification) => (
                      <TableRow key={verification.id}>
                        <TableCell>
                          <div>
                            <p className="text-[#111827]">{verification.name}</p>
                            <p className="text-[#6B7280]">{verification.email}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="text-[#111827]">{verification.exam}</p>
                            <p className="text-[#6B7280]">{verification.year} • Rank {verification.rank}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <p className="text-[#6B7280]">{verification.submittedOn}</p>
                        </TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-2" />
                            View
                          </Button>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              className="bg-green-600 hover:bg-green-700 text-white"
                              onClick={() => handleVerificationAction(verification.id, 'approve')}
                            >
                              <CheckCircle className="w-4 h-4 mr-1" />
                              Approve
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-red-600 border-red-300 hover:bg-red-50"
                              onClick={() => handleVerificationAction(verification.id, 'reject')}
                            >
                              <XCircle className="w-4 h-4 mr-1" />
                              Reject
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>

            {/* Verification Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 bg-white rounded-2xl shadow-md">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-[#6B7280]">Approved This Week</p>
                    <p className="text-[#111827] text-2xl">34</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-white rounded-2xl shadow-md">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                    <XCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <p className="text-[#6B7280]">Rejected This Week</p>
                    <p className="text-[#111827] text-2xl">12</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-white rounded-2xl shadow-md">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-[#6B7280]">Avg. Processing Time</p>
                    <p className="text-[#111827] text-2xl">2.3 days</p>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Sessions Tab */}
          <TabsContent value="sessions" className="space-y-6">
            <Card className="p-6 bg-white rounded-2xl shadow-md">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[#111827] text-xl">All Sessions</h3>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                    <Input
                      placeholder="Search sessions..."
                      className="pl-10 w-64"
                    />
                  </div>
                  <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Aspirant</TableHead>
                      <TableHead>Achiever</TableHead>
                      <TableHead>Exam</TableHead>
                      <TableHead>Date & Time</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentSessions.map((session) => (
                      <TableRow key={session.id}>
                        <TableCell>
                          <p className="text-[#111827]">{session.aspirant}</p>
                        </TableCell>
                        <TableCell>
                          <p className="text-[#111827]">{session.achiever}</p>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{session.exam}</Badge>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="text-[#111827]">{session.date}</p>
                            <p className="text-[#6B7280]">{session.time}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <p className="text-[#111827]">{session.amount}</p>
                        </TableCell>
                        <TableCell>
                          <Badge
                            className={
                              session.status === 'completed'
                                ? 'bg-green-100 text-green-700 hover:bg-green-100'
                                : session.status === 'ongoing'
                                ? 'bg-blue-100 text-blue-700 hover:bg-blue-100'
                                : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-100'
                            }
                          >
                            {session.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>

            {/* Session Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="p-6 bg-white rounded-2xl shadow-md">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-[#6B7280]">Today</p>
                    <p className="text-[#111827] text-2xl">24</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-white rounded-2xl shadow-md">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-[#6B7280]">This Week</p>
                    <p className="text-[#111827] text-2xl">156</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-white rounded-2xl shadow-md">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-[#6B7280]">Completed</p>
                    <p className="text-[#111827] text-2xl">8,234</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-white rounded-2xl shadow-md">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <p className="text-[#6B7280]">Cancelled</p>
                    <p className="text-[#111827] text-2xl">122</p>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
