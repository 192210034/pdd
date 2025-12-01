import { ArrowLeft, Send, Paperclip, Smile, MoreVertical } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface ChatScreenProps {
  onNavigate: (screen: string) => void;
}

const conversations = [
  { id: 1, name: 'Priya Sharma', lastMessage: 'See you in the session!', time: '10:30 AM', unread: 0, online: true },
  { id: 2, name: 'Rahul Verma', lastMessage: 'Thanks for the tips', time: 'Yesterday', unread: 2, online: false },
  { id: 3, name: 'Anjali Patel', lastMessage: 'Can we reschedule?', time: '2 days ago', unread: 0, online: false },
];

const messages = [
  { id: 1, sender: 'them', text: 'Hi! Looking forward to our session tomorrow', time: '10:15 AM' },
  { id: 2, sender: 'me', text: 'Hello! Yes, me too. Do you have any specific topics you want to focus on?', time: '10:18 AM' },
  { id: 3, sender: 'them', text: 'Yes, I want to work on quantitative aptitude, especially time and distance problems', time: '10:20 AM' },
  { id: 4, sender: 'me', text: 'Perfect! I\'ll prepare some practice questions on that. Make sure you have a notebook ready.', time: '10:25 AM' },
  { id: 5, sender: 'them', text: 'Great! Will do. See you in the session!', time: '10:30 AM' },
];

export function ChatScreen({ onNavigate }: ChatScreenProps) {
  const [message, setMessage] = useState('');
  const [selectedChat, setSelectedChat] = useState(conversations[0]);

  return (
    <div className="min-h-screen bg-[#F3F4F6] flex">
      {/* Conversations List */}
      <div className="hidden md:block w-96 bg-white border-r border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-[#111827] text-xl">Messages</h2>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-80px)]">
          {conversations.map((conv) => (
            <button
              key={conv.id}
              onClick={() => setSelectedChat(conv)}
              className={`w-full p-4 flex gap-3 hover:bg-[#F3F4F6] transition-colors ${
                selectedChat.id === conv.id ? 'bg-blue-50' : ''
              }`}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2B59FF] to-[#1E40AF] rounded-full flex items-center justify-center text-white">
                  {conv.name.split(' ').map(n => n[0]).join('')}
                </div>
                {conv.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div className="flex-1 text-left">
                <div className="flex justify-between mb-1">
                  <h3 className="text-[#111827]">{conv.name}</h3>
                  <span className="text-[#6B7280]">{conv.time}</span>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#6B7280] truncate">{conv.lastMessage}</p>
                  {conv.unread > 0 && (
                    <span className="bg-[#2B59FF] text-white rounded-full px-2 py-0.5 text-xs">
                      {conv.unread}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center justify-between max-w-5xl mx-auto">
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('aspirant-dashboard')}
                className="md:hidden p-2 hover:bg-[#F3F4F6] rounded-lg"
              >
                <ArrowLeft className="w-6 h-6 text-[#111827]" />
              </button>
              <div className="w-10 h-10 bg-gradient-to-br from-[#2B59FF] to-[#1E40AF] rounded-full flex items-center justify-center text-white">
                {selectedChat.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="text-[#111827]">{selectedChat.name}</h3>
                <p className="text-[#6B7280]">{selectedChat.online ? 'Online' : 'Offline'}</p>
              </div>
            </div>
            <button className="p-2 hover:bg-[#F3F4F6] rounded-lg">
              <MoreVertical className="w-6 h-6 text-[#111827]" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-[#F3F4F6]">
          <div className="max-w-5xl mx-auto space-y-4">
            <div className="text-center">
              <span className="px-4 py-2 bg-white rounded-full text-[#6B7280] inline-block shadow-sm">
                Today
              </span>
            </div>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-md px-4 py-3 rounded-2xl ${
                    msg.sender === 'me'
                      ? 'bg-[#2B59FF] text-white rounded-br-none'
                      : 'bg-white text-[#111827] rounded-bl-none shadow-sm'
                  }`}
                >
                  <p className="mb-1">{msg.text}</p>
                  <p className={`text-xs ${msg.sender === 'me' ? 'text-blue-100' : 'text-[#6B7280]'}`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <div className="bg-white border-t border-gray-200 p-4">
          <div className="max-w-5xl mx-auto flex items-center gap-3">
            <button className="p-2 hover:bg-[#F3F4F6] rounded-lg">
              <Paperclip className="w-6 h-6 text-[#6B7280]" />
            </button>
            <div className="flex-1 flex items-center gap-2 bg-[#F3F4F6] rounded-full px-4 py-2">
              <Input
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 bg-transparent border-0 focus:ring-0 px-0"
              />
              <button className="p-1">
                <Smile className="w-6 h-6 text-[#6B7280]" />
              </button>
            </div>
            <Button
              className="bg-[#2B59FF] hover:bg-[#1E40AF] text-white rounded-full w-12 h-12 p-0"
              disabled={!message.trim()}
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
