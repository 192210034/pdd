import { ArrowLeft, CheckCircle, XCircle, Clock, Eye, Download, Filter, Search } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { useState } from 'react';

interface AdminAttendanceViewProps {
  onNavigate: (screen: string) => void;
}

export function AdminAttendanceView({ onNavigate }: AdminAttendanceViewProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const sessionLogs = [
    {
      id: 1,
      sessionId: 'SES-2024-001',
      aspirant: 'Rahul Kumar',
      achiever: 'Priya Sharma',
      date: '2024-11-25',
      time: '03:00 PM',
      aspirantCheckIn: '02:56 PM',
      achieverCheckIn: '02:57 PM',
      aspirantJoin: '03:00:12 PM',
      achieverJoin: '03:00:08 PM',
      status: 'completed',
      decision: 'Both attended',
      amount: '₹499'
    },
    {
      id: 2,
      sessionId: 'SES-2024-002',
      aspirant: 'Anjali Singh',
      achiever: 'Vikram Reddy',
      date: '2024-11-24',
      time: '02:00 PM',
      aspirantCheckIn: '01:55 PM',
      achieverCheckIn: 'Not checked in',
      aspirantJoin: '02:00:45 PM',
      achieverJoin: 'Not joined',
      status: 'refunded',
      decision: 'Achiever no-show',
      amount: '₹599'
    },
    {
      id: 3,
      sessionId: 'SES-2024-003',
      aspirant: 'Sanjay Yadav',
      achiever: 'Neha Kapoor',
      date: '2024-11-23',
      time: '10:00 AM',
      aspirantCheckIn: '09:56 AM',
      achieverCheckIn: '09:55 AM',
      aspirantJoin: 'Not joined',
      achieverJoin: '10:00:15 AM',
      status: 'no-refund',
      decision: 'Aspirant no-show',
      amount: '₹449'
    },
    {
      id: 4,
      sessionId: 'SES-2024-004',
      aspirant: 'Meera Patel',
      achiever: 'Amit Kumar',
      date: '2024-11-22',
      time: '05:00 PM',
      aspirantCheckIn: '04:56 PM',
      achieverCheckIn: '04:57 PM',
      aspirantJoin: '05:00:23 PM',
      achieverJoin: '05:00:18 PM',
      status: 'completed',
      decision: 'Both attended',
      amount: '₹549'
    },
    {
      id: 5,
      sessionId: 'SES-2024-005',
      aspirant: 'Rohan Verma',
      achiever: 'Sneha Reddy',
      date: '2024-11-21',
      time: '11:00 AM',
      aspirantCheckIn: 'Not checked in',
      achieverCheckIn: '10:56 AM',
      aspirantJoin: 'Not joined',
      achieverJoin: '11:00:12 AM',
      status: 'no-refund',
      decision: 'Aspirant no-show',
      amount: '₹399'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2B59FF] to-[#1E40AF] text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-2">
            <button
              onClick={() => onNavigate('admin-dashboard')}
              className="p-2 hover:bg-white/10 rounded-lg"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-3xl">Attendance Tracking System</h1>
          </div>
          <p className="text-blue-100">Monitor check-ins, join times, and automatic decisions</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <p className="text-[#6B7280] mb-1">Successful Sessions</p>
            <p className="text-[#111827] text-3xl">234</p>
            <p className="text-green-600 mt-2">Both attended</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
            </div>
            <p className="text-[#6B7280] mb-1">Achiever No-Shows</p>
            <p className="text-[#111827] text-3xl">12</p>
            <p className="text-red-600 mt-2">Auto-refunded</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <XCircle className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
            <p className="text-[#6B7280] mb-1">Aspirant No-Shows</p>
            <p className="text-[#111827] text-3xl">8</p>
            <p className="text-yellow-600 mt-2">No refund</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <p className="text-[#6B7280] mb-1">Avg Check-In Time</p>
            <p className="text-[#111827] text-3xl">4:32</p>
            <p className="text-blue-600 mt-2">Minutes before</p>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <div className="flex gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
              <Input
                placeholder="Search by session ID, aspirant, or achiever..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
          </div>
        </div>

        {/* Session Logs Table */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-[#111827] text-xl">Session Attendance Logs</h2>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Session ID</TableHead>
                  <TableHead>Participants</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Check-In Times</TableHead>
                  <TableHead>Join Times</TableHead>
                  <TableHead>Decision</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sessionLogs.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell>
                      <p className="text-[#2B59FF]">{log.sessionId}</p>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="text-[#111827]">{log.aspirant}</p>
                        <p className="text-[#6B7280]">with {log.achiever}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="text-[#111827]">{log.date}</p>
                        <p className="text-[#6B7280]">{log.time}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <p className={`flex items-center gap-2 ${
                          log.aspirantCheckIn.includes('Not') ? 'text-red-600' : 'text-green-600'
                        }`}>
                          {log.aspirantCheckIn.includes('Not') ? (
                            <XCircle className="w-4 h-4" />
                          ) : (
                            <CheckCircle className="w-4 h-4" />
                          )}
                          A: {log.aspirantCheckIn}
                        </p>
                        <p className={`flex items-center gap-2 ${
                          log.achieverCheckIn.includes('Not') ? 'text-red-600' : 'text-green-600'
                        }`}>
                          {log.achieverCheckIn.includes('Not') ? (
                            <XCircle className="w-4 h-4" />
                          ) : (
                            <CheckCircle className="w-4 h-4" />
                          )}
                          M: {log.achieverCheckIn}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <p className={`flex items-center gap-2 ${
                          log.aspirantJoin.includes('Not') ? 'text-red-600' : 'text-green-600'
                        }`}>
                          {log.aspirantJoin.includes('Not') ? (
                            <XCircle className="w-4 h-4" />
                          ) : (
                            <CheckCircle className="w-4 h-4" />
                          )}
                          A: {log.aspirantJoin}
                        </p>
                        <p className={`flex items-center gap-2 ${
                          log.achieverJoin.includes('Not') ? 'text-red-600' : 'text-green-600'
                        }`}>
                          {log.achieverJoin.includes('Not') ? (
                            <XCircle className="w-4 h-4" />
                          ) : (
                            <CheckCircle className="w-4 h-4" />
                          )}
                          M: {log.achieverJoin}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <p className="text-[#111827]">{log.decision}</p>
                    </TableCell>
                    <TableCell>
                      <Badge className={
                        log.status === 'completed'
                          ? 'bg-green-100 text-green-700 hover:bg-green-100'
                          : log.status === 'refunded'
                          ? 'bg-blue-100 text-blue-700 hover:bg-blue-100'
                          : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-100'
                      }>
                        {log.status === 'completed' ? 'Completed' : log.status === 'refunded' ? 'Refunded' : 'No Refund'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* System Explanation */}
        <div className="mt-8 bg-gradient-to-r from-[#2B59FF] to-[#1E40AF] rounded-3xl p-8 text-white">
          <h3 className="text-2xl mb-4">How Attendance Tracking Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h4 className="text-xl mb-3">Step 1: OTP Check-In</h4>
              <ul className="space-y-2 text-blue-100">
                <li>• Both parties receive OTP 5 mins before session</li>
                <li>• Must verify to prove they're ready</li>
                <li>• Timestamp recorded for both</li>
                <li>• Meeting link unlocks after both check-in</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h4 className="text-xl mb-3">Step 2: Join Button</h4>
              <ul className="space-y-2 text-blue-100">
                <li>• "Join Session" button logs attendance</li>
                <li>• Exact timestamp captured</li>
                <li>• Used as proof of joining</li>
                <li>• Redirects to Google Meet after logging</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h4 className="text-xl mb-3">Step 3: Automatic Decision</h4>
              <ul className="space-y-2 text-blue-100">
                <li>• If achiever doesn't check-in → Full refund</li>
                <li>• If achiever doesn't join → Full refund</li>
                <li>• If aspirant doesn't join → No refund</li>
                <li>• If both join → Session completed ✓</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h4 className="text-xl mb-3">Step 4: Dispute Prevention</h4>
              <ul className="space-y-2 text-blue-100">
                <li>• All timestamps stored securely</li>
                <li>• No "he said, she said" disputes</li>
                <li>• Decisions are data-driven</li>
                <li>• 95% fewer manual interventions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
