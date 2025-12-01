import { Video, Copy, Calendar, Clock, CheckCircle, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

interface MeetLinkGeneratedProps {
  onNavigate: (screen: string) => void;
}

export function MeetLinkGenerated({ onNavigate }: MeetLinkGeneratedProps) {
  const [copied, setCopied] = useState(false);
  const meetLink = 'https://meet.google.com/abc-defg-hij';

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
    <div className="min-h-screen bg-[#F3F4F6] p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-[#2B59FF] to-[#1E40AF] rounded-full flex items-center justify-center mx-auto mb-4">
              <Video className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-[#111827] text-3xl mb-2">Meeting Link Generated!</h1>
            <p className="text-[#6B7280]">Your session is confirmed. Join using the link below.</p>
          </div>

          <div className="bg-green-50 rounded-2xl p-6 mb-6 border border-green-200">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-green-800">Payment Completed</span>
            </div>
            <p className="text-[#6B7280]">
              Both you and the mentor have received the meeting link via email and in-app notification.
            </p>
          </div>

          <div className="bg-[#F3F4F6] rounded-2xl p-6 mb-6">
            <h3 className="text-[#111827] mb-4">Session Details</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-[#2B59FF]" />
                <div>
                  <p className="text-[#6B7280]">Date</p>
                  <p className="text-[#111827]">Monday, November 25, 2024</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#2B59FF]" />
                <div>
                  <p className="text-[#6B7280]">Time</p>
                  <p className="text-[#111827]">03:00 PM - 04:00 PM (60 min)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="text-[#111827] mb-2 block">Google Meet Link</label>
            <div className="flex gap-2">
              <div className="flex-1 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-[#2B59FF] break-all">{meetLink}</p>
              </div>
              <Button
                onClick={copyLink}
                className="bg-[#2B59FF] hover:bg-[#1E40AF] text-white px-6"
              >
                {copied ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          <div className="space-y-3 mb-8">
            <Button
              onClick={() => window.open(meetLink, '_blank')}
              className="w-full bg-green-600 hover:bg-green-700 text-white h-12"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Join Meeting Now
            </Button>
            <Button
              onClick={() => onNavigate('session-details')}
              variant="outline"
              className="w-full h-12"
            >
              View Full Session Details
            </Button>
          </div>

          <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
            <h4 className="text-yellow-900 mb-2">Important Tips:</h4>
            <ul className="text-yellow-800 space-y-1 text-sm list-disc list-inside">
              <li>Join 5 minutes early to check your audio/video</li>
              <li>Keep your questions and topics ready</li>
              <li>Make notes during the session</li>
              <li>Be respectful of the mentor's time</li>
            </ul>
          </div>

          <div className="text-center mt-6">
            <Button
              onClick={() => onNavigate('aspirant-dashboard')}
              variant="ghost"
              className="text-[#2B59FF]"
            >
              Back to Dashboard
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}