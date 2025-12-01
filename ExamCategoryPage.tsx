import { useState } from 'react';
import { ArrowLeft, SlidersHorizontal, Star, TrendingUp, DollarSign, Award } from 'lucide-react';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface ExamCategoryPageProps {
  category: string;
  onNavigate: (screen: string, data?: any) => void;
}

const achievers = [
  { id: 1, name: 'Priya Sharma', exam: 'SSC CGL 2023', attempt: 1, rating: 4.9, sessions: 127, fee: 499, experience: '2 years' },
  { id: 2, name: 'Rahul Verma', exam: 'SSC CHSL 2024', attempt: 2, rating: 4.8, sessions: 98, fee: 399, experience: '1.5 years' },
  { id: 3, name: 'Anjali Patel', exam: 'SSC CGL 2022', attempt: 1, rating: 4.7, sessions: 156, fee: 599, experience: '3 years' },
  { id: 4, name: 'Vikram Singh', exam: 'SSC MTS 2023', attempt: 1, rating: 5.0, sessions: 45, fee: 349, experience: '1 year' },
  { id: 5, name: 'Sneha Reddy', exam: 'SSC CGL 2023', attempt: 3, rating: 4.9, sessions: 89, fee: 449, experience: '2 years' },
  { id: 6, name: 'Arjun Mehta', exam: 'SSC CHSL 2023', attempt: 1, rating: 4.6, sessions: 67, fee: 379, experience: '1 year' },
];

export function ExamCategoryPage({ category, onNavigate }: ExamCategoryPageProps) {
  const [sortBy, setSortBy] = useState('rating');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    minRating: 0,
    maxFee: 1000,
    attempts: [] as number[],
  });

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => onNavigate('aspirant-home')}
              className="p-2 hover:bg-[#F3F4F6] rounded-lg"
            >
              <ArrowLeft className="w-6 h-6 text-[#111827]" />
            </button>
            <div>
              <h1 className="text-[#111827] text-2xl">{category} Achievers</h1>
              <p className="text-[#6B7280]">{achievers.length} mentors available</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex-1">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Highest Rated
                    </div>
                  </SelectItem>
                  <SelectItem value="fee-low">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      Price: Low to High
                    </div>
                  </SelectItem>
                  <SelectItem value="fee-high">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      Price: High to Low
                    </div>
                  </SelectItem>
                  <SelectItem value="experience">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      Most Experienced
                    </div>
                  </SelectItem>
                  <SelectItem value="sessions">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Most Sessions
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              onClick={() => setShowFilters(!showFilters)}
              variant="outline"
              className="px-4"
            >
              <SlidersHorizontal className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 flex gap-6">
        {/* Filters Sidebar */}
        {showFilters && (
          <div className="hidden md:block w-72 flex-shrink-0">
            <div className="bg-white rounded-2xl p-6 shadow-md sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[#111827] text-lg">Filters</h3>
                <button
                  onClick={() => setFilters({ minRating: 0, maxFee: 1000, attempts: [] })}
                  className="text-[#2B59FF]"
                >
                  Reset
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-[#111827] mb-3 block">Minimum Rating</label>
                  <div className="space-y-2">
                    {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                      <label key={rating} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="rating"
                          checked={filters.minRating === rating}
                          onChange={() => setFilters({ ...filters, minRating: rating })}
                          className="w-4 h-4 text-[#2B59FF]"
                        />
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-[#111827]">{rating} & above</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[#111827] mb-3 block">Price Range</label>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="50"
                    value={filters.maxFee}
                    onChange={(e) => setFilters({ ...filters, maxFee: Number(e.target.value) })}
                    className="w-full"
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-[#6B7280]">₹0</span>
                    <span className="text-[#111827]">₹{filters.maxFee}</span>
                  </div>
                </div>

                <div>
                  <label className="text-[#111827] mb-3 block">Attempts</label>
                  <div className="space-y-2">
                    {[1, 2, 3, 4].map((attempt) => (
                      <label key={attempt} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.attempts.includes(attempt)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setFilters({ ...filters, attempts: [...filters.attempts, attempt] });
                            } else {
                              setFilters({ ...filters, attempts: filters.attempts.filter(a => a !== attempt) });
                            }
                          }}
                          className="w-4 h-4 text-[#2B59FF] rounded"
                        />
                        <span className="text-[#111827]">{attempt === 1 ? '1st' : attempt === 2 ? '2nd' : attempt === 3 ? '3rd' : '4th+'} Attempt</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Achievers Grid */}
        <div className="flex-1">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievers.map((achiever) => (
              <button
                key={achiever.id}
                onClick={() => onNavigate('achiever-profile', { achiever })}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all text-left border-2 border-transparent hover:border-[#2B59FF]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2B59FF] to-[#1E40AF] rounded-full flex items-center justify-center text-white text-xl">
                    {achiever.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="px-3 py-1 bg-green-100 rounded-full">
                    <span className="text-green-700">✓</span>
                  </div>
                </div>

                <h3 className="text-[#111827] text-lg mb-1">{achiever.name}</h3>
                <p className="text-[#6B7280] mb-1">{achiever.exam}</p>
                <p className="text-[#6B7280] mb-3">
                  {achiever.attempt === 1 ? '1st' : achiever.attempt === 2 ? '2nd' : achiever.attempt === 3 ? '3rd' : '4th'} Attempt
                </p>

                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-[#111827]">{achiever.rating}</span>
                  </div>
                  <div className="text-[#6B7280]">{achiever.sessions} sessions</div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#111827]">₹{achiever.fee}/session</span>
                  <span className="text-[#2B59FF]">View →</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
