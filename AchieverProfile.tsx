import { ArrowLeft, Star, Award, Calendar, MessageCircle, Share2, BookOpen, Trophy, Target } from 'lucide-react';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface AchieverProfileProps {
  achiever: any;
  onNavigate: (screen: string, data?: any) => void;
}

const reviews = [
  { id: 1, name: 'Rohit Kumar', rating: 5, comment: 'Amazing mentor! Helped me clear doubts and motivated me throughout my preparation.', date: '2 days ago' },
  { id: 2, name: 'Meera Shah', rating: 5, comment: 'Very knowledgeable and patient. Shared great strategies for time management.', date: '1 week ago' },
  { id: 3, name: 'Amit Patel', rating: 4, comment: 'Good session. Would have liked more focus on advanced topics.', date: '2 weeks ago' },
];

export function AchieverProfile({ achiever, onNavigate }: AchieverProfileProps) {
  if (!achiever) {
    achiever = {
      name: 'Priya Sharma',
      exam: 'SSC CGL 2023',
      attempt: 1,
      rating: 4.9,
      sessions: 127,
      fee: 499,
      verified: true,
    };
  }

  return (
    <div className="min-h-screen bg-[#F3F4F6] pb-24">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => onNavigate('exam-category', { category: 'SSC' })}
              className="p-2 hover:bg-[#F3F4F6] rounded-lg"
            >
              <ArrowLeft className="w-6 h-6 text-[#111827]" />
            </button>
            <button className="p-2 hover:bg-[#F3F4F6] rounded-lg">
              <Share2 className="w-6 h-6 text-[#111827]" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Profile Card */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col items-center md:items-start">
              <div className="w-32 h-32 bg-gradient-to-br from-[#2B59FF] to-[#1E40AF] rounded-3xl flex items-center justify-center text-white text-4xl mb-4">
                {achiever.name.split(' ').map((n: string) => n[0]).join('')}
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-4">
                <Award className="w-5 h-5 text-green-700" />
                <span className="text-green-700">Verified</span>
              </div>
            </div>

            <div className="flex-1">
              <h1 className="text-[#111827] text-3xl mb-2">{achiever.name}</h1>
              <p className="text-[#6B7280] text-lg mb-4">{achiever.exam}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-3 bg-[#F3F4F6] rounded-lg">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="text-[#111827] text-xl">{achiever.rating}</span>
                  </div>
                  <p className="text-[#6B7280]">Rating</p>
                </div>

                <div className="text-center p-3 bg-[#F3F4F6] rounded-lg">
                  <p className="text-[#111827] text-xl mb-1">{achiever.sessions}</p>
                  <p className="text-[#6B7280]">Sessions</p>
                </div>

                <div className="text-center p-3 bg-[#F3F4F6] rounded-lg">
                  <p className="text-[#111827] text-xl mb-1">{achiever.attempt === 1 ? '1st' : achiever.attempt === 2 ? '2nd' : '3rd'}</p>
                  <p className="text-[#6B7280]">Attempt</p>
                </div>

                <div className="text-center p-3 bg-[#F3F4F6] rounded-lg">
                  <p className="text-[#111827] text-xl mb-1">98%</p>
                  <p className="text-[#6B7280]">Response</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={() => onNavigate('slot-booking', { achiever })}
                  className="flex-1 bg-[#2B59FF] hover:bg-[#1E40AF] text-white h-12"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Session - ₹{achiever.fee}
                </Button>
                <Button
                  onClick={() => onNavigate('chat')}
                  variant="outline"
                  className="sm:w-12 h-12"
                >
                  <MessageCircle className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="about" className="bg-white rounded-3xl shadow-lg p-6">
          <TabsList className="w-full grid grid-cols-3 mb-6">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="reviews">Reviews ({reviews.length})</TabsTrigger>
            <TabsTrigger value="availability">Availability</TabsTrigger>
          </TabsList>

          <TabsContent value="about">
            <div className="space-y-6">
              <div>
                <h3 className="text-[#111827] text-lg mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#2B59FF]" />
                  About Me
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  Hello! I'm {achiever.name}, and I successfully cleared {achiever.exam} in my {achiever.attempt === 1 ? 'first' : achiever.attempt === 2 ? 'second' : 'third'} attempt. 
                  I understand the challenges aspirants face during preparation and I'm here to guide you through your journey. 
                  My sessions focus on exam strategy, time management, and building the right mindset to crack government exams.
                </p>
              </div>

              <div>
                <h3 className="text-[#111827] text-lg mb-3 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-[#2B59FF]" />
                  Achievements
                </h3>
                <div className="space-y-3">
                  <div className="p-4 bg-[#F3F4F6] rounded-lg">
                    <p className="text-[#111827] mb-1">{achiever.exam}</p>
                    <p className="text-[#6B7280]">Cleared in {achiever.attempt === 1 ? '1st' : achiever.attempt === 2 ? '2nd' : '3rd'} attempt • 2023</p>
                  </div>
                  <div className="p-4 bg-[#F3F4F6] rounded-lg">
                    <p className="text-[#111827] mb-1">Overall Marks: 550/600</p>
                    <p className="text-[#6B7280]">91.67 percentile</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[#111827] text-lg mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-[#2B59FF]" />
                  What I Can Help With
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Exam Strategy', 'Time Management', 'Mock Test Analysis', 'Doubt Clearing', 'Study Plan', 'Motivation'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-blue-50 text-[#2B59FF] rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reviews">
            <div className="space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="p-4 bg-[#F3F4F6] rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#2B59FF] rounded-full flex items-center justify-center text-white">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-[#111827]">{review.name}</p>
                        <p className="text-[#6B7280]">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-[#6B7280]">{review.comment}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="availability">
            <div className="text-center py-8">
              <Calendar className="w-16 h-16 text-[#2B59FF] mx-auto mb-4" />
              <h3 className="text-[#111827] text-xl mb-2">Check Available Slots</h3>
              <p className="text-[#6B7280] mb-6">View calendar and book your session</p>
              <Button
                onClick={() => onNavigate('slot-booking', { achiever })}
                className="bg-[#2B59FF] hover:bg-[#1E40AF] text-white"
              >
                View Availability
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
