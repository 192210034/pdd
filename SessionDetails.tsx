import { ArrowLeft, Video, Calendar, Clock, User, Copy, CheckCircle, MessageCircle, AlertCircle, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';

interface SessionDetailsProps {
  onNavigate: (screen: string) => void;
}

export function SessionDetails({ onNavigate }: SessionDetailsProps) {
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 30 });
  const meetLink = 'https://meet.google.com/abc-defg-hij';

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const copyLink = () => {
    // Try modern clipboard API first, with fallback
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(meetLink)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch(() => {
          // Fallback: create temporary textarea
          fallbackCopy();
        });
    } else {
      // Use fallback method
      fallbackCopy();
    }
  };

  const fallbackCopy = () => {
    const textArea = document.createElement('textarea');
    textArea.value = meetLink;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.log('Copy failed');
    }
    document.body.removeChild(textArea);
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('aspirant-dashboard')}
              className="p-2 hover:bg-[#F3F4F6] rounded-lg"
            >
              <ArrowLeft className="w-6 h-6 text-[#111827]" />
            </button>
            <h1 className="text-[#111827] text-2xl">Session Details</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Countdown Timer */}
        <div className="bg-gradient-to-r from-[#2B59FF] to-[#1E40AF] rounded-3xl p-8 mb-6 text-white text-center">
          <h2 className="text-xl mb-4">Session starts in</h2>
          <div className="flex justify-center gap-4 mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 min-w-[80px]">
              <p className="text-4xl mb-1">{String(timeLeft.hours).padStart(2, '0')}</p>
              <p className="text-blue-100">Hours</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 min-w-[80px]">
              <p className="text-4xl mb-1">{String(timeLeft.minutes).padStart(2, '0')}</p>
              <p className="text-blue-100">Minutes</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 min-w-[80px]">
              <p className="text-4xl mb-1">{String(timeLeft.seconds).padStart(2, '0')}</p>
              <p className="text-blue-100">Seconds</p>
            </div>
          </div>
          <Button
            onClick={() => window.open(meetLink, '_blank')}
            className="bg-white text-[#2B59FF] hover:bg-gray-100"
            disabled
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Join Meeting (Locked)
          </Button>
          <p className="text-blue-100 mt-2">Check-in required to unlock</p>
        </div>

        {/* Check-In CTA */}
        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-3xl p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-[#111827] text-xl mb-2">⚠️ Check-In Required</h3>
              <p className="text-[#6B7280] mb-4">
                You must verify your attendance 5 minutes before the session starts. 
                This unlocks the meeting link and ensures both parties are ready.
              </p>
              <Button
                onClick={() => onNavigate('session-checkin-required')}
                className="bg-[#2B59FF] hover:bg-[#1E40AF] text-white"
              >
                Complete Check-In Now →
              </Button>
            </div>
          </div>
        </div>

        {/* Session Info */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-6">
          <h3 className="text-[#111827] text-xl mb-6">Session Information</h3>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-[#F3F4F6] rounded-lg">
              <User className="w-6 h-6 text-[#2B59FF]" />
              <div className="flex-1">
                <p className="text-[#6B7280] mb-1">Mentor</p>
                <p className="text-[#111827]">Priya Sharma</p>
                <p className="text-[#6B7280]">SSC CGL 2023 • 1st Attempt</p>
              </div>
              <Button
                onClick={() => onNavigate('chat')}
                variant="outline"
                size="sm"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Message
              </Button>
            </div>

            <div className="flex items-center gap-4 p-4 bg-[#F3F4F6] rounded-lg">
              <Calendar className="w-6 h-6 text-[#2B59FF]" />
              <div>
                <p className="text-[#6B7280] mb-1">Date</p>
                <p className="text-[#111827]">Monday, November 25, 2024</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-[#F3F4F6] rounded-lg">
              <Clock className="w-6 h-6 text-[#2B59FF]" />
              <div>
                <p className="text-[#6B7280] mb-1">Time</p>
                <p className="text-[#111827]">03:00 PM - 04:00 PM (60 minutes)</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-[#F3F4F6] rounded-lg">
              <Video className="w-6 h-6 text-[#2B59FF]" />
              <div className="flex-1">
                <p className="text-[#6B7280] mb-1">Meeting Link</p>
                <p className="text-[#2B59FF] break-all">{meetLink}</p>
              </div>
              <Button
                onClick={copyLink}
                variant="outline"
                size="sm"
              >
                {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-6">
          <h3 className="text-[#111827] text-xl mb-4">Before the Session</h3>
          <div className="space-y-3">
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-[#6B7280]">Test your camera and microphone beforehand</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-[#6B7280]">Keep a notebook and pen ready for taking notes</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-[#6B7280]">Prepare your questions in advance</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-[#6B7280]">Find a quiet place with good internet connection</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-[#6B7280]">Join 5 minutes early to avoid technical issues</p>
            </div>
          </div>
        </div>

        {/* Need Help */}
        <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
          <div className="flex gap-3">
            <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
            <div>
              <h4 className="text-[#111827] mb-2">Need to reschedule?</h4>
              <p className="text-[#6B7280] mb-4">
                You can reschedule up to 24 hours before the session. Contact the mentor for alternate slots.
              </p>
              <div className="flex gap-2">
                <Button
                  onClick={() => onNavigate('chat')}
                  variant="outline"
                  size="sm"
                >
                  Contact Mentor
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-red-600 border-red-300 hover:bg-red-50"
                >
                  Cancel Session
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Add to Calendar */}
        <div className="mt-6 flex gap-3">
          <Button variant="outline" className="flex-1">
            Add to Google Calendar
          </Button>
          <Button variant="outline" className="flex-1">
            Add to Apple Calendar
          </Button>
        </div>
      </div>
    </div>
  );
}