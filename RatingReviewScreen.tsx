import { ArrowLeft, Star, Send, CheckCircle, User } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { useState } from 'react';

interface RatingReviewScreenProps {
  onNavigate: (screen: string) => void;
}

export function RatingReviewScreen({ onNavigate }: RatingReviewScreenProps) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [review, setReview] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const tags = [
    'Very Helpful',
    'Good Communication',
    'Knowledgeable',
    'Punctual',
    'Well Prepared',
    'Motivating',
    'Practical Tips',
    'Patient'
  ];

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = () => {
    if (rating > 0) {
      setSubmitted(true);
      setTimeout(() => {
        onNavigate('aspirant-dashboard');
      }, 2000);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#F3F4F6] flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-[#111827] text-2xl mb-3">Thank You!</h2>
          <p className="text-[#6B7280]">
            Your feedback has been submitted successfully. It helps us improve the platform.
          </p>
        </div>
      </div>
    );
  }

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
            <h1 className="text-[#111827] text-2xl">Rate Your Session</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Mentor Info */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-[#2B59FF] to-[#1E40AF] rounded-full flex items-center justify-center text-white text-xl">
              PS
            </div>
            <div>
              <h2 className="text-[#111827] text-xl">Priya Sharma</h2>
              <p className="text-[#6B7280]">SSC CGL 2023 • 1st Attempt</p>
            </div>
          </div>

          {/* Rating Stars */}
          <div className="text-center mb-8">
            <p className="text-[#6B7280] mb-4">How was your session with Priya?</p>
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-12 h-12 ${
                      star <= (hoveredRating || rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>
            {rating > 0 && (
              <p className="text-[#2B59FF] mt-3">
                {rating === 5 && 'Excellent!'}
                {rating === 4 && 'Very Good!'}
                {rating === 3 && 'Good'}
                {rating === 2 && 'Fair'}
                {rating === 1 && 'Poor'}
              </p>
            )}
          </div>

          {/* Tags */}
          <div className="mb-6">
            <p className="text-[#111827] mb-3">What did you like most?</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-4 py-2 rounded-full border-2 transition-all ${
                    selectedTags.includes(tag)
                      ? 'bg-[#2B59FF] border-[#2B59FF] text-white'
                      : 'border-gray-200 text-[#6B7280] hover:border-[#2B59FF]'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Written Review */}
          <div>
            <label className="text-[#111827] mb-2 block">
              Share your experience (Optional)
            </label>
            <Textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Tell us more about your session with Priya. Your feedback helps other aspirants make informed decisions."
              className="min-h-[120px] resize-none"
            />
            <p className="text-[#6B7280] mt-2">{review.length}/500 characters</p>
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="bg-blue-50 rounded-2xl p-6 mb-6 border border-blue-200">
          <div className="flex gap-3">
            <User className="w-6 h-6 text-[#2B59FF] flex-shrink-0" />
            <div>
              <h4 className="text-[#111827] mb-2">Your review will be public</h4>
              <p className="text-[#6B7280]">
                Your rating and review will be visible to other aspirants on Priya's profile. 
                This helps the community make informed decisions.
              </p>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          onClick={handleSubmit}
          disabled={rating === 0}
          className="w-full bg-[#2B59FF] hover:bg-[#1E40AF] text-white h-14"
        >
          <Send className="w-5 h-5 mr-2" />
          Submit Review
        </Button>

        <button
          onClick={() => onNavigate('aspirant-dashboard')}
          className="w-full text-[#6B7280] py-4 hover:text-[#111827]"
        >
          Skip for now
        </button>
      </div>
    </div>
  );
}
