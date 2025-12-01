import { useState } from 'react';
import { ArrowLeft, Calendar as CalendarIcon, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Calendar } from './ui/calendar';

interface SlotBookingProps {
  achiever: any;
  onNavigate: (screen: string, data?: any) => void;
}

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
  '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM',
];

export function SlotBooking({ achiever, onNavigate }: SlotBookingProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');

  const handleContinue = () => {
    onNavigate('session-summary', {
      booking: {
        achiever,
        date: selectedDate,
        time: selectedTime,
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] pb-24">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('achiever-profile', { achiever })}
              className="p-2 hover:bg-[#F3F4F6] rounded-lg"
            >
              <ArrowLeft className="w-6 h-6 text-[#111827]" />
            </button>
            <div>
              <h1 className="text-[#111827] text-2xl">Book Session</h1>
              <p className="text-[#6B7280]">with {achiever?.name || 'Achiever'}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Calendar */}
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <div className="flex items-center gap-2 mb-6">
              <CalendarIcon className="w-5 h-5 text-[#2B59FF]" />
              <h2 className="text-[#111827] text-xl">Select Date</h2>
            </div>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border-0"
              disabled={(date) => date < new Date() || date > new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)}
            />
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-[#2B59FF]">
                <strong>Selected:</strong> {selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>
          </div>

          {/* Time Slots */}
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <div className="flex items-center gap-2 mb-6">
              <Clock className="w-5 h-5 text-[#2B59FF]" />
              <h2 className="text-[#111827] text-xl">Select Time</h2>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {timeSlots.map((slot) => {
                const isBooked = Math.random() > 0.7; // Simulate some slots being booked
                return (
                  <button
                    key={slot}
                    onClick={() => !isBooked && setSelectedTime(slot)}
                    disabled={isBooked}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      isBooked
                        ? 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
                        : selectedTime === slot
                        ? 'border-[#2B59FF] bg-blue-50 text-[#2B59FF]'
                        : 'border-gray-200 hover:border-[#2B59FF] text-[#111827]'
                    }`}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#6B7280]">
                <div className="w-4 h-4 bg-blue-50 border-2 border-[#2B59FF] rounded"></div>
                <span>Selected</span>
              </div>
              <div className="flex items-center gap-2 text-[#6B7280]">
                <div className="w-4 h-4 bg-gray-100 border-2 border-gray-200 rounded"></div>
                <span>Booked</span>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        {selectedDate && selectedTime && (
          <div className="bg-white rounded-3xl shadow-lg p-6 mt-6">
            <h3 className="text-[#111827] text-xl mb-4">Session Summary</h3>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-[#6B7280]">Mentor</span>
                <span className="text-[#111827]">{achiever?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7280]">Date</span>
                <span className="text-[#111827]">{selectedDate?.toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7280]">Time</span>
                <span className="text-[#111827]">{selectedTime}</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-gray-200">
                <span className="text-[#111827]">Session Fee</span>
                <span className="text-[#111827] text-xl">₹{achiever?.fee || 499}</span>
              </div>
            </div>
            <Button
              onClick={handleContinue}
              className="w-full bg-[#2B59FF] hover:bg-[#1E40AF] text-white h-12"
            >
              Send Request
            </Button>
            <p className="text-[#6B7280] text-center mt-3">
              The achiever will review and confirm your request
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
