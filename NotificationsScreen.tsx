import { ArrowLeft, CheckCircle, Clock, X, Calendar, DollarSign, Star, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface NotificationsScreenProps {
  onNavigate: (screen: string) => void;
}

const notifications = [
  {
    id: 1,
    type: 'session_confirmed',
    title: 'Session Confirmed!',
    message: 'Your session with Priya Sharma on Nov 25 at 3:00 PM is confirmed',
    time: '2 hours ago',
    read: false,
    icon: CheckCircle,
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    id: 2,
    type: 'payment_success',
    title: 'Payment Successful',
    message: 'Payment of ₹549 completed. Receipt sent to your email',
    time: '3 hours ago',
    read: false,
    icon: DollarSign,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    id: 3,
    type: 'session_reminder',
    title: 'Session Reminder',
    message: 'Your session with Rahul Verma starts in 24 hours',
    time: '1 day ago',
    read: true,
    icon: Clock,
    color: 'text-yellow-600',
    bg: 'bg-yellow-50',
  },
  {
    id: 4,
    type: 'new_message',
    title: 'New Message',
    message: 'Anjali Patel sent you a message',
    time: '2 days ago',
    read: true,
    icon: MessageCircle,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    id: 5,
    type: 'review_request',
    title: 'Rate Your Session',
    message: 'How was your session with Vikram Singh? Leave a review',
    time: '3 days ago',
    read: true,
    icon: Star,
    color: 'text-yellow-600',
    bg: 'bg-yellow-50',
  },
];

export function NotificationsScreen({ onNavigate }: NotificationsScreenProps) {
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => onNavigate('aspirant-home')}
                className="p-2 hover:bg-[#F3F4F6] rounded-lg"
              >
                <ArrowLeft className="w-6 h-6 text-[#111827]" />
              </button>
              <div>
                <h1 className="text-[#111827] text-2xl">Notifications</h1>
                {unreadCount > 0 && (
                  <p className="text-[#6B7280]">{unreadCount} unread</p>
                )}
              </div>
            </div>
            <Button variant="ghost" className="text-[#2B59FF]">
              Mark all as read
            </Button>
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="unread">Unread ({unreadCount})</TabsTrigger>
            <TabsTrigger value="sessions">Sessions</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="space-y-3">
              {notifications.map((notif) => {
                const Icon = notif.icon;
                return (
                  <div
                    key={notif.id}
                    className={`bg-white rounded-2xl p-4 shadow-sm ${
                      !notif.read ? 'border-l-4 border-[#2B59FF]' : ''
                    }`}
                  >
                    <div className="flex gap-4">
                      <div className={`w-12 h-12 ${notif.bg} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-6 h-6 ${notif.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-1">
                          <h3 className="text-[#111827]">{notif.title}</h3>
                          <button className="p-1 hover:bg-[#F3F4F6] rounded">
                            <X className="w-4 h-4 text-[#6B7280]" />
                          </button>
                        </div>
                        <p className="text-[#6B7280] mb-2">{notif.message}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-[#6B7280]">{notif.time}</span>
                          {notif.type === 'session_confirmed' && (
                            <Button
                              onClick={() => onNavigate('session-details')}
                              size="sm"
                              className="bg-[#2B59FF] hover:bg-[#1E40AF] text-white"
                            >
                              View Details
                            </Button>
                          )}
                          {notif.type === 'review_request' && (
                            <Button
                              onClick={() => onNavigate('rating-review')}
                              size="sm"
                              className="bg-yellow-500 hover:bg-yellow-600 text-white"
                            >
                              Rate Now
                            </Button>
                          )}
                          {notif.type === 'new_message' && (
                            <Button
                              onClick={() => onNavigate('chat')}
                              size="sm"
                              variant="outline"
                            >
                              Reply
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="unread">
            <div className="space-y-3">
              {notifications.filter(n => !n.read).map((notif) => {
                const Icon = notif.icon;
                return (
                  <div
                    key={notif.id}
                    className="bg-white rounded-2xl p-4 shadow-sm border-l-4 border-[#2B59FF]"
                  >
                    <div className="flex gap-4">
                      <div className={`w-12 h-12 ${notif.bg} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-6 h-6 ${notif.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[#111827] mb-1">{notif.title}</h3>
                        <p className="text-[#6B7280] mb-2">{notif.message}</p>
                        <span className="text-[#6B7280]">{notif.time}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="sessions">
            <div className="space-y-3">
              {notifications.filter(n => n.type.includes('session')).map((notif) => {
                const Icon = notif.icon;
                return (
                  <div
                    key={notif.id}
                    className={`bg-white rounded-2xl p-4 shadow-sm ${
                      !notif.read ? 'border-l-4 border-[#2B59FF]' : ''
                    }`}
                  >
                    <div className="flex gap-4">
                      <div className={`w-12 h-12 ${notif.bg} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-6 h-6 ${notif.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[#111827] mb-1">{notif.title}</h3>
                        <p className="text-[#6B7280] mb-2">{notif.message}</p>
                        <span className="text-[#6B7280]">{notif.time}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>

        {/* Empty State */}
        {unreadCount === 0 && (
          <div className="bg-white rounded-2xl p-12 text-center mt-6">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-[#111827] text-xl mb-2">You're all caught up!</h3>
            <p className="text-[#6B7280]">No unread notifications</p>
          </div>
        )}
      </div>
    </div>
  );
}
