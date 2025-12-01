import { BookOpen, Train, Building2, Landmark, Shield, Trophy } from "lucide-react";

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
}

function CategoryCard({ icon, title, onClick }: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center gap-3 border border-gray-100 hover:border-[#2B59FF]/20 group"
    >
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2B59FF]/10 to-[#2B59FF]/5 flex items-center justify-center text-[#2B59FF] group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <span className="text-[#111827] text-center">{title}</span>
      <div className="text-[#6B7280] text-sm">→</div>
    </button>
  );
}

interface AchieverOnboardingCategoryProps {
  onSelectCategory: (category: string) => void;
}

export function AchieverOnboardingCategory({ onSelectCategory }: AchieverOnboardingCategoryProps) {
  const categories = [
    { id: "ssc", title: "SSC", icon: <BookOpen size={28} /> },
    { id: "railway", title: "Railway", icon: <Train size={28} /> },
    { id: "banking", title: "Banking", icon: <Building2 size={28} /> },
    { id: "state-psc", title: "State PSC", icon: <Landmark size={28} /> },
    { id: "defence", title: "Defence", icon: <Shield size={28} /> },
    { id: "upsc", title: "UPSC", icon: <Trophy size={28} /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F3F4F6] to-white">
      <div className="max-w-md mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-[#111827] mb-2">Which exam did you clear?</h1>
          <p className="text-[#6B7280]">Select the exam category to get started</p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 gap-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              icon={category.icon}
              title={category.title}
              onClick={() => onSelectCategory(category.id)}
            />
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-[#6B7280]">
            Don't see your exam? Contact support
          </p>
        </div>
      </div>
    </div>
  );
}
