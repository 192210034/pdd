import { 
  ArrowLeft, 
  Heart, 
  MessageCircle, 
  Share2, 
  Bookmark,
  Play,
  TrendingUp,
  Filter,
  Search,
  MoreVertical,
  BookmarkCheck,
  Send
} from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface MotivationalFeedProps {
  onNavigate: (screen: string, data?: any) => void;
}

interface Post {
  id: number;
  achiever: {
    name: string;
    initials: string;
    exam: string;
    year: string;
    rank: string;
  };
  type: 'image' | 'video';
  mediaUrl: string;
  caption: string;
  tags: string[];
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
  isLiked: boolean;
  isSaved: boolean;
}

export function MotivationalFeed({ onNavigate }: MotivationalFeedProps) {
  const [selectedTab, setSelectedTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      achiever: {
        name: 'Priya Sharma',
        initials: 'PS',
        exam: 'SSC CGL',
        year: '2023',
        rank: '45'
      },
      type: 'video',
      mediaUrl: 'motivation study',
      caption: '🎯 From 3 failed attempts to finally cracking SSC CGL! Here\'s what changed in my approach. Never give up on your dreams! The journey teaches you more than the destination. #Motivation #SSC #NeverGiveUp',
      tags: ['Study Tips', 'Motivation', 'SSC CGL'],
      likes: 2456,
      comments: 189,
      shares: 342,
      timestamp: '2 hours ago',
      isLiked: false,
      isSaved: false
    },
    {
      id: 2,
      achiever: {
        name: 'Vikram Reddy',
        initials: 'VR',
        exam: 'IBPS PO',
        year: '2023',
        rank: '67'
      },
      type: 'image',
      mediaUrl: 'study desk books',
      caption: '📚 My study corner that witnessed countless sleepless nights. Every book, every note was a step closer to my goal. Setting up the right environment is half the battle won! What does your study space look like?',
      tags: ['Study Space', 'IBPS', 'Banking'],
      likes: 1823,
      comments: 145,
      shares: 267,
      timestamp: '5 hours ago',
      isLiked: true,
      isSaved: true
    },
    {
      id: 3,
      achiever: {
        name: 'Neha Kapoor',
        initials: 'NK',
        exam: 'RRB NTPC',
        year: '2023',
        rank: '234'
      },
      type: 'image',
      mediaUrl: 'success celebration',
      caption: '🏆 The moment I saw my name on the final list! All those early mornings, late nights, and sacrifices were worth it. To everyone preparing: Your time will come. Keep pushing! 💪',
      tags: ['Success Story', 'Railways', 'Inspiration'],
      likes: 3421,
      comments: 278,
      shares: 512,
      timestamp: '1 day ago',
      isLiked: true,
      isSaved: false
    },
    {
      id: 4,
      achiever: {
        name: 'Amit Kumar',
        initials: 'AK',
        exam: 'UPSC CSE',
        year: '2023',
        rank: '456'
      },
      type: 'video',
      mediaUrl: 'upsc preparation tips',
      caption: '📖 My daily routine during UPSC preparation. Consistency beats intensity! Here are 5 habits that helped me crack the exam. Swipe to know more ➡️ #UPSC #DailyRoutine #CivilServices',
      tags: ['UPSC', 'Daily Routine', 'Tips'],
      likes: 4567,
      comments: 432,
      shares: 789,
      timestamp: '2 days ago',
      isLiked: false,
      isSaved: true
    },
    {
      id: 5,
      achiever: {
        name: 'Sneha Patel',
        initials: 'SP',
        exam: 'SSC CHSL',
        year: '2023',
        rank: '123'
      },
      type: 'image',
      mediaUrl: 'time management planner',
      caption: '⏰ Time management was my biggest challenge. This is the timetable that helped me balance everything. Remember: It\'s not about studying for 12 hours, it\'s about studying smart! Download the template in comments 👇',
      tags: ['Time Management', 'SSC', 'Study Plan'],
      likes: 2890,
      comments: 356,
      shares: 445,
      timestamp: '3 days ago',
      isLiked: false,
      isSaved: false
    }
  ]);

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 }
        : post
    ));
  };

  const handleSave = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, isSaved: !post.isSaved }
        : post
    ));
  };

  const filteredPosts = posts.filter(post => {
    if (selectedTab === 'all') return true;
    if (selectedTab === 'videos') return post.type === 'video';
    if (selectedTab === 'images') return post.type === 'image';
    return post.achiever.exam.toLowerCase().includes(selectedTab.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => onNavigate('aspirant-home')}
              className="p-2 hover:bg-[#F3F4F6] rounded-lg"
            >
              <ArrowLeft className="w-6 h-6 text-[#111827]" />
            </button>
            <div className="flex-1">
              <h1 className="text-[#111827] text-2xl">Achiever Stories</h1>
              <p className="text-[#6B7280]">Get inspired by success stories</p>
            </div>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4" />
            </Button>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
            <Input
              placeholder="Search posts, achievers, or exams..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Category Tabs */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mb-6">
          <TabsList className="w-full justify-start overflow-x-auto">
            <TabsTrigger value="all">All Posts</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="images">Photos</TabsTrigger>
            <TabsTrigger value="ssc">SSC</TabsTrigger>
            <TabsTrigger value="banking">Banking</TabsTrigger>
            <TabsTrigger value="railways">Railways</TabsTrigger>
            <TabsTrigger value="upsc">UPSC</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Trending Topics */}
        <div className="bg-gradient-to-r from-[#2B59FF] to-[#1E40AF] rounded-3xl p-6 mb-6 text-white">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-5 h-5" />
            <p className="text-lg">Trending Topics</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {['#Motivation', '#StudyTips', '#SuccessStory', '#TimeManagement', '#FirstAttempt'].map((tag) => (
              <span key={tag} className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Posts Feed */}
        <div className="space-y-6">
          {filteredPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-3xl shadow-lg overflow-hidden">
              {/* Post Header */}
              <div className="p-4 flex items-center justify-between">
                <div 
                  className="flex items-center gap-3 cursor-pointer"
                  onClick={() => onNavigate('achiever-profile', { achiever: post.achiever })}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2B59FF] to-[#1E40AF] rounded-full flex items-center justify-center text-white">
                    {post.achiever.initials}
                  </div>
                  <div>
                    <p className="text-[#111827]">{post.achiever.name}</p>
                    <p className="text-[#6B7280]">
                      {post.achiever.exam} {post.achiever.year} • Rank {post.achiever.rank}
                    </p>
                  </div>
                </div>
                <button className="p-2 hover:bg-[#F3F4F6] rounded-lg">
                  <MoreVertical className="w-5 h-5 text-[#6B7280]" />
                </button>
              </div>

              {/* Post Media */}
              <div className="relative bg-gray-200 aspect-[4/3]">
                <ImageWithFallback
                  src={`https://source.unsplash.com/800x600/?${post.mediaUrl}`}
                  alt={post.caption}
                  className="w-full h-full object-cover"
                />
                {post.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-[#2B59FF] ml-1" />
                    </div>
                  </div>
                )}
              </div>

              {/* Post Actions */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => handleLike(post.id)}
                      className="flex items-center gap-2 group"
                    >
                      <Heart 
                        className={`w-6 h-6 transition-all ${
                          post.isLiked 
                            ? 'fill-red-500 text-red-500' 
                            : 'text-[#6B7280] group-hover:text-red-500'
                        }`}
                      />
                      <span className="text-[#6B7280]">{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 group">
                      <MessageCircle className="w-6 h-6 text-[#6B7280] group-hover:text-[#2B59FF]" />
                      <span className="text-[#6B7280]">{post.comments}</span>
                    </button>
                    <button className="flex items-center gap-2 group">
                      <Share2 className="w-6 h-6 text-[#6B7280] group-hover:text-[#2B59FF]" />
                      <span className="text-[#6B7280]">{post.shares}</span>
                    </button>
                  </div>
                  <button onClick={() => handleSave(post.id)}>
                    {post.isSaved ? (
                      <BookmarkCheck className="w-6 h-6 fill-[#2B59FF] text-[#2B59FF]" />
                    ) : (
                      <Bookmark className="w-6 h-6 text-[#6B7280] hover:text-[#2B59FF]" />
                    )}
                  </button>
                </div>

                {/* Post Caption */}
                <div className="mb-3">
                  <p className="text-[#111827] leading-relaxed">{post.caption}</p>
                </div>

                {/* Post Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="text-[#2B59FF] border-[#2B59FF]">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Timestamp */}
                <p className="text-[#6B7280]">{post.timestamp}</p>

                {/* Comment Input */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center text-white">
                      A
                    </div>
                    <Input 
                      placeholder="Add a comment..." 
                      className="flex-1"
                    />
                    <Button size="sm" className="bg-[#2B59FF] hover:bg-[#1E40AF]">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <Button variant="outline" className="w-full">
            Load More Stories
          </Button>
        </div>
      </div>
    </div>
  );
}
