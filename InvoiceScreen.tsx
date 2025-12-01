import { Download, Share2, Printer, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';

interface InvoiceScreenProps {
  onNavigate: (screen: string) => void;
}

export function InvoiceScreen({ onNavigate }: InvoiceScreenProps) {
  return (
    <div className="min-h-screen bg-[#F3F4F6] p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => onNavigate('payment-success')}
            className="flex items-center gap-2 text-[#6B7280] hover:text-[#111827]"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Printer className="w-4 h-4 mr-2" />
              Print
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button size="sm" className="bg-[#2B59FF] hover:bg-[#1E40AF] text-white">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Header */}
          <div className="flex justify-between items-start mb-8 pb-8 border-b border-gray-200">
            <div>
              <h1 className="text-[#111827] text-3xl mb-2">INVOICE</h1>
              <p className="text-[#6B7280]">INV-2024-001234</p>
              <p className="text-[#6B7280]">Date: November 24, 2024</p>
            </div>
            <div className="text-right">
              <h2 className="text-[#2B59FF] text-2xl mb-1">MentorGov</h2>
              <p className="text-[#6B7280]">mentorgov.in</p>
              <p className="text-[#6B7280]">support@mentorgov.in</p>
            </div>
          </div>

          {/* Bill To / From */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-[#111827] mb-2">Bill To:</h3>
              <p className="text-[#6B7280]">Rohit Kumar</p>
              <p className="text-[#6B7280]">rohit.kumar@email.com</p>
              <p className="text-[#6B7280]">+91 98765 43210</p>
            </div>
            <div>
              <h3 className="text-[#111827] mb-2">Payment Details:</h3>
              <p className="text-[#6B7280]">Transaction ID: TXN123456789</p>
              <p className="text-[#6B7280]">Payment Method: UPI</p>
              <p className="text-[#6B7280]">Status: <span className="text-green-600">Paid</span></p>
            </div>
          </div>

          {/* Session Details */}
          <div className="mb-8">
            <h3 className="text-[#111827] mb-4">Session Details:</h3>
            <div className="bg-[#F3F4F6] rounded-lg p-4">
              <p className="text-[#111827] mb-2">1-on-1 Mentorship Session</p>
              <p className="text-[#6B7280]">Mentor: Priya Sharma (SSC CGL 2023 Achiever)</p>
              <p className="text-[#6B7280]">Date: Monday, November 25, 2024</p>
              <p className="text-[#6B7280]">Time: 03:00 PM - 04:00 PM (60 minutes)</p>
            </div>
          </div>

          {/* Itemized Bill */}
          <div className="mb-8">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-3 text-[#111827]">Description</th>
                  <th className="text-right py-3 text-[#111827]">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-4 text-[#6B7280]">Session Fee</td>
                  <td className="py-4 text-right text-[#111827]">₹499.00</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 text-[#6B7280]">Platform Fee</td>
                  <td className="py-4 text-right text-[#111827]">₹50.00</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 text-[#6B7280]">Discount (FIRST50)</td>
                  <td className="py-4 text-right text-green-600">-₹50.00</td>
                </tr>
                <tr className="border-b-2 border-gray-300">
                  <td className="py-4 text-[#111827]">Subtotal</td>
                  <td className="py-4 text-right text-[#111827]">₹499.00</td>
                </tr>
                <tr className="border-b-2 border-gray-300">
                  <td className="py-4 text-[#111827]">GST (18%)</td>
                  <td className="py-4 text-right text-[#111827]">₹89.82</td>
                </tr>
                <tr>
                  <td className="py-4 text-[#111827] text-lg">Total Amount</td>
                  <td className="py-4 text-right text-[#111827] text-2xl">₹588.82</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
            <h4 className="text-[#111827] mb-2">Terms & Conditions:</h4>
            <ul className="text-[#6B7280] space-y-1 list-disc list-inside">
              <li>Refund available only if mentor cancels the session</li>
              <li>Rescheduling must be done 24 hours in advance</li>
              <li>Recording of sessions is not permitted without consent</li>
              <li>For support, contact support@mentorgov.in</li>
            </ul>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-gray-200">
            <p className="text-[#6B7280]">Thank you for using MentorGov!</p>
            <p className="text-[#6B7280]">
              This is a computer-generated invoice and does not require a signature.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
