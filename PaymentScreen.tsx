import { useState } from 'react';
import { CreditCard, Wallet, Building2, ArrowLeft, Lock, Tag } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface PaymentScreenProps {
  bookingData: any;
  onNavigate: (screen: string, data?: any) => void;
}

export function PaymentScreen({ bookingData, onNavigate }: PaymentScreenProps) {
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const sessionFee = bookingData?.achiever?.fee || 499;
  const platformFee = 50;
  const total = sessionFee + platformFee - discount;

  const applyPromo = () => {
    if (promoCode.toUpperCase() === 'FIRST50') {
      setDiscount(50);
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('session-summary', { booking: bookingData })}
              className="p-2 hover:bg-[#F3F4F6] rounded-lg"
            >
              <ArrowLeft className="w-6 h-6 text-[#111827]" />
            </button>
            <h1 className="text-[#111827] text-2xl">Payment</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Payment Methods */}
          <div className="bg-white rounded-3xl shadow-lg p-6 h-fit">
            <h2 className="text-[#111827] text-xl mb-6">Select Payment Method</h2>

            <Tabs defaultValue="upi" className="w-full">
              <TabsList className="w-full grid grid-cols-3">
                <TabsTrigger value="upi">UPI</TabsTrigger>
                <TabsTrigger value="card">Card</TabsTrigger>
                <TabsTrigger value="netbanking">NetBanking</TabsTrigger>
              </TabsList>

              <TabsContent value="upi" className="mt-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-[#111827] mb-2 block">UPI ID</label>
                    <div className="relative">
                      <Wallet className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
                      <Input placeholder="yourname@upi" className="pl-10" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[#6B7280]">Or pay with:</p>
                    <button className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-[#2B59FF] flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white">
                        <Wallet className="w-6 h-6" />
                      </div>
                      <span className="text-[#111827]">PhonePe</span>
                    </button>
                    <button className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-[#2B59FF] flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                        <Wallet className="w-6 h-6" />
                      </div>
                      <span className="text-[#111827]">Google Pay</span>
                    </button>
                    <button className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-[#2B59FF] flex items-center gap-3">
                      <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
                        <Wallet className="w-6 h-6" />
                      </div>
                      <span className="text-[#111827]">Paytm</span>
                    </button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="card" className="mt-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-[#111827] mb-2 block">Card Number</label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
                      <Input placeholder="1234 5678 9012 3456" className="pl-10" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[#111827] mb-2 block">Expiry</label>
                      <Input placeholder="MM/YY" />
                    </div>
                    <div>
                      <label className="text-[#111827] mb-2 block">CVV</label>
                      <Input placeholder="123" type="password" maxLength={3} />
                    </div>
                  </div>
                  <div>
                    <label className="text-[#111827] mb-2 block">Cardholder Name</label>
                    <Input placeholder="Name on card" />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="netbanking" className="mt-6">
                <div className="space-y-2">
                  <button className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-[#2B59FF] flex items-center gap-3">
                    <Building2 className="w-6 h-6 text-[#2B59FF]" />
                    <span className="text-[#111827]">HDFC Bank</span>
                  </button>
                  <button className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-[#2B59FF] flex items-center gap-3">
                    <Building2 className="w-6 h-6 text-[#2B59FF]" />
                    <span className="text-[#111827]">ICICI Bank</span>
                  </button>
                  <button className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-[#2B59FF] flex items-center gap-3">
                    <Building2 className="w-6 h-6 text-[#2B59FF]" />
                    <span className="text-[#111827]">SBI Bank</span>
                  </button>
                  <button className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-[#2B59FF] flex items-center gap-3">
                    <Building2 className="w-6 h-6 text-[#2B59FF]" />
                    <span className="text-[#111827]">Other Banks</span>
                  </button>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-3xl shadow-lg p-6 mb-4">
              <h2 className="text-[#111827] text-xl mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-[#6B7280]">Session with {bookingData?.achiever?.name}</span>
                  <span className="text-[#111827]">₹{sessionFee}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B7280]">Platform Fee</span>
                  <span className="text-[#111827]">₹{platformFee}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount Applied</span>
                    <span>-₹{discount}</span>
                  </div>
                )}
                <div className="flex justify-between pt-4 border-t border-gray-200">
                  <span className="text-[#111827]">Total Amount</span>
                  <span className="text-[#111827] text-2xl">₹{total}</span>
                </div>
              </div>

              <div className="mb-6">
                <label className="text-[#111827] mb-2 block flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  Have a promo code?
                </label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1"
                  />
                  <Button onClick={applyPromo} variant="outline">
                    Apply
                  </Button>
                </div>
                <p className="text-[#6B7280] mt-2">Try: FIRST50 for ₹50 off</p>
              </div>

              <Button
                onClick={() => onNavigate('payment-success')}
                className="w-full bg-[#2B59FF] hover:bg-[#1E40AF] text-white h-12 mb-3"
              >
                <Lock className="w-5 h-5 mr-2" />
                Pay ₹{total}
              </Button>

              <p className="text-[#6B7280] text-center">
                <Lock className="w-4 h-4 inline mr-1" />
                Secure payment powered by Razorpay
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <p className="text-[#2B59FF]">
                <strong>100% Secure:</strong> Your payment information is encrypted and secure. We never store your card details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
