import { ChevronRight, ChevronLeft } from "lucide-react";

interface SubExam {
  id: string;
  title: string;
}

interface SubExamCardProps {
  title: string;
  onClick: () => void;
}

function SubExamCard({ title, onClick }: SubExamCardProps) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-between border border-gray-100 hover:border-[#2B59FF]/20 group"
    >
      <span className="text-[#111827]">{title}</span>
      <ChevronRight className="text-[#6B7280] group-hover:text-[#2B59FF] transition-colors" size={20} />
    </button>
  );
}

interface AchieverOnboardingSubExamProps {
  category: string;
  onSelectSubExam: (subExam: string) => void;
  onBack: () => void;
}

export function AchieverOnboardingSubExam({ category, onSelectSubExam, onBack }: AchieverOnboardingSubExamProps) {
  const subExams: Record<string, SubExam[]> = {
    ssc: [
      { id: "ssc-gd", title: "SSC GD" },
      { id: "ssc-mts", title: "SSC MTS" },
      { id: "ssc-chsl", title: "SSC CHSL" },
      { id: "ssc-cgl", title: "SSC CGL" },
      { id: "ssc-je", title: "SSC JE" },
      { id: "ssc-stenographer", title: "SSC Stenographer" },
    ],
    railway: [
      { id: "rrb-ntpc", title: "RRB NTPC" },
      { id: "rrb-group-d", title: "RRB Group D" },
      { id: "rrb-rpf", title: "Railway Police (RPF)" },
      { id: "rrb-alp", title: "ALP (Assistant Loco Pilot)" },
      { id: "rrb-je", title: "RRB JE" },
      { id: "rrb-technician", title: "RRB Technician" },
    ],
    banking: [
      { id: "ibps-po", title: "IBPS PO" },
      { id: "ibps-clerk", title: "IBPS Clerk" },
      { id: "sbi-po", title: "SBI PO" },
      { id: "sbi-clerk", title: "SBI Clerk" },
      { id: "rbi-assistant", title: "RBI Assistant" },
      { id: "rrb-po", title: "RRB PO" },
      { id: "rrb-clerk", title: "RRB Clerk" },
    ],
    "state-psc": [
      { id: "uppsc", title: "UPPSC" },
      { id: "bpsc", title: "BPSC" },
      { id: "mpsc", title: "MPSC" },
      { id: "tnpsc", title: "TNPSC" },
      { id: "kpsc", title: "KPSC" },
      { id: "rpsc", title: "RPSC" },
    ],
    defence: [
      { id: "cds", title: "CDS" },
      { id: "nda", title: "NDA" },
      { id: "afcat", title: "AFCAT" },
      { id: "capf", title: "CAPF" },
      { id: "territorial-army", title: "Territorial Army" },
    ],
    upsc: [
      { id: "upsc-civil-services", title: "UPSC Civil Services (IAS/IPS/IRS)" },
      { id: "upsc-engineering", title: "UPSC Engineering Services" },
      { id: "upsc-combined-defence", title: "UPSC Combined Defence Services" },
      { id: "upsc-nda", title: "UPSC NDA & NA" },
    ],
  };

  const currentSubExams = subExams[category] || [];
  const categoryTitles: Record<string, string> = {
    ssc: "SSC",
    railway: "Railway",
    banking: "Banking",
    "state-psc": "State PSC",
    defence: "Defence",
    upsc: "UPSC",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F3F4F6] to-white">
      <div className="max-w-md mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#6B7280] hover:text-[#2B59FF] transition-colors mb-4"
          >
            <ChevronLeft size={20} />
            <span>Back</span>
          </button>
          <h1 className="text-[#111827] mb-2">Select {categoryTitles[category]} Exam</h1>
          <p className="text-[#6B7280]">Choose the specific exam you cleared</p>
        </div>

        {/* Sub-Exam List */}
        <div className="space-y-3">
          {currentSubExams.map((subExam) => (
            <SubExamCard
              key={subExam.id}
              title={subExam.title}
              onClick={() => onSelectSubExam(subExam.title)}
            />
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-[#6B7280]">
            Can't find your exam? We'll add more options soon
          </p>
        </div>
      </div>
    </div>
  );
}
