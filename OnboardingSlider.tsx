import { useState } from 'react';
import { ChevronRight, Award, Calendar, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';

const slides = [
  {
    icon: Award,
    title: 'Learn from Achievers',
    description: 'Connect with verified government exam achievers who have cracked SSC, Banking, PSC, Railways & UPSC exams',
    color: 'text-[#2B59FF]',
  },
  {
    icon: Calendar,
    title: 'Book Sessions Easily',
    description: 'Browse achiever profiles, check availability, and book 1-on-1 mentorship sessions at your convenience',
    color: 'text-purple-600',
  },
  {
    icon: TrendingUp,
    title: 'Crack Exams Faster',
    description: 'Get personalized guidance, exam strategies, and motivation from those who have already succeeded',
    color: 'text-green-600',
  },
];

interface OnboardingSliderProps {
  onComplete: () => void;
}

export function OnboardingSlider({ onComplete }: OnboardingSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const skipOnboarding = () => {
    onComplete();
  };

  const slide = slides[currentSlide];
  const Icon = slide.icon;

  return (
    <div className="fixed inset-0 bg-white flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-8 max-w-2xl mx-auto">
        <div className={`w-32 h-32 rounded-full bg-[#F3F4F6] flex items-center justify-center mb-8 ${slide.color}`}>
          <Icon className="w-16 h-16" />
        </div>
        <h2 className="text-[#111827] text-3xl mb-4 text-center">{slide.title}</h2>
        <p className="text-[#6B7280] text-center leading-relaxed">
          {slide.description}
        </p>
      </div>

      <div className="p-8 max-w-2xl mx-auto w-full">
        <div className="flex justify-center gap-2 mb-8">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? 'w-8 bg-[#2B59FF]' : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>

        <div className="flex items-center justify-between gap-4">
          <Button
            variant="ghost"
            onClick={skipOnboarding}
            className="text-[#6B7280]"
          >
            Skip
          </Button>
          <Button
            onClick={nextSlide}
            className="bg-[#2B59FF] hover:bg-[#1E40AF] text-white flex items-center gap-2 px-8"
          >
            {currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
