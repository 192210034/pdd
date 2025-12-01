import { ArrowLeft, Calendar, Clock, User, DollarSign } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { useState } from 'react';

interface SessionSummaryProps {
  bookingData: any;
  onNavigate: (screen: string, data?: any) => void;
}

export function SessionSummary({ bookingData, onNavigate }: SessionSummaryProps) {
  const [message, setMessage] = useState('');

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('slot-booking', { achiever: bookingData?.achiever })}
              className="p-2 hover:bg-[#F3F4F6] rounded-lg"
            >
              <ArrowLeft className="w-6 h-6 text-[#111827]" />
            </button>
            <h1 className="text-[#111827] text-2xl">Confirm Booking</h1>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-[#111827] text-xl mb-6">Session Details</h2>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-4 p-4 bg-[#F3F4F6] rounded-lg">
              <User className="w-5 h-5 text-[#2B59FF] mt-1" />
              <div className="flex-1">
                <p className="text-[#6B7280] mb-1">Mentor</p>
                <p className="text-[#111827]">{bookingData?.achiever?.name}</p>
                <p className="text-[#6B7280]">{bookingData?.achiever?.exam}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-[#F3F4F6] rounded-lg">
              <Calendar className="w-5 h-5 text-[#2B59FF] mt-1" />
              <div className="flex-1">
                <p className="text-[#6B7280] mb-1">Date</p>
                <p className="text-[#111827]">{bookingData?.date?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-[#F3F4F6] rounded-lg">
              <Clock className="w-5 h-5 text-[#2B59FF] mt-1" />
              <div className="flex-1">
                <p className="text-[#6B7280] mb-1">Time</p>
                <p className="text-[#111827]">{bookingData?.time}</p>
                <p className="text-[#6B7280]">Duration: 60 minutes</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="text-[#111827] mb-2 block">Add a message for the mentor (Optional)</label>
            <Textarea
              placeholder="Let the mentor know what you'd like to discuss..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[100px]"
            />
          </div>

          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[#111827]">Session Fee</span>
              <span className="text-[#111827]">₹{bookingData?.achiever?.fee}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-[#111827]">Platform Fee</span>
              <span className="text-[#111827]">₹50</span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-blue-200">
              <span className="text-[#111827]">Total Amount</span>
              <span className="text-[#111827] text-2xl">₹{(bookingData?.achiever?.fee || 499) + 50}</span>
            </div>
          </div>

          <Button
            onClick={() => onNavigate('payment', { booking: bookingData })}
            className="w-full bg-[#2B59FF] hover:bg-[#1E40AF] text-white h-12 mb-3"
          >
            Proceed to Payment
          </Button>

          <p className="text-[#6B7280] text-center">
            You'll only be charged after the mentor accepts your request
          </p>
        </div>
      </div>
    </div>
  );
}
