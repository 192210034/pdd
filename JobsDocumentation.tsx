import { useState } from "react";
import { Map, Monitor, ArrowLeft } from "lucide-react";
import { JobsSitemapVisual } from "./JobsSitemapVisual";
import { JobsWireframeMockup } from "./JobsWireframeMockup";

interface JobsDocumentationProps {
  onNavigate?: (screen: string) => void;
}

type ViewType = "sitemap" | "wireframe";

export function JobsDocumentation({ onNavigate }: JobsDocumentationProps) {
  const [view, setView] = useState<ViewType>("sitemap");

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F3F4F6] to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2B59FF] to-[#1E40AF] text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {onNavigate && (
            <button
              onClick={() => onNavigate("state-jobs-explorer")}
              className="flex items-center gap-2 hover:bg-white/20 px-4 py-2 rounded-xl transition-colors mb-6"
            >
              <ArrowLeft size={20} />
              <span>Back to Jobs Explorer</span>
            </button>
          )}

          <div className="text-center">
            <h1 className="text-4xl mb-3">Jobs Explorer - Documentation</h1>
            <p className="text-blue-100 text-lg mb-6">
              Complete system design, architecture, and user interface wireframes
            </p>

            {/* View Toggle */}
            <div className="inline-flex bg-white/10 backdrop-blur-sm rounded-2xl p-1">
              <button
                onClick={() => setView("sitemap")}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                  view === "sitemap"
                    ? "bg-white text-[#2B59FF]"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <Map size={20} />
                <span>Hierarchical Sitemap</span>
              </button>
              <button
                onClick={() => setView("wireframe")}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                  view === "wireframe"
                    ? "bg-white text-[#2B59FF]"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <Monitor size={20} />
                <span>UI Wireframe</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {view === "sitemap" ? <JobsSitemapVisual /> : <JobsWireframeMockup />}
      </div>

      {/* Footer Info */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h3 className="text-[#111827] text-2xl mb-6">System Features</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <div className="text-3xl mb-3">🗂️</div>
              <h4 className="text-[#111827] mb-2">Hierarchical Structure</h4>
              <p className="text-[#6B7280] text-sm">
                Department → Sub-Department → Job Role → Job Details with clear navigation
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
              <div className="text-3xl mb-3">🔍</div>
              <h4 className="text-[#111827] mb-2">Advanced Search</h4>
              <p className="text-[#6B7280] text-sm">
                Search by job title, department, salary range, or eligibility criteria
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="text-[#111827] mb-2">Comprehensive Data</h4>
              <p className="text-[#6B7280] text-sm">
                Complete information including responsibilities, eligibility, salary, and exams
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="text-[#111827] mb-2">Mentor Integration</h4>
              <p className="text-[#6B7280] text-sm">
                Direct link to find mentors who have cleared specific exams for each job
              </p>
            </div>

            <div className="bg-pink-50 border border-pink-200 rounded-2xl p-6">
              <div className="text-3xl mb-3">📱</div>
              <h4 className="text-[#111827] mb-2">Responsive Design</h4>
              <p className="text-[#6B7280] text-sm">
                Mobile-first design that works seamlessly on all devices
              </p>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6">
              <div className="text-3xl mb-3">🌳</div>
              <h4 className="text-[#111827] mb-2">Dual View Modes</h4>
              <p className="text-[#6B7280] text-sm">
                Switch between Grid View for browsing and Tree Map for visualization
              </p>
            </div>
          </div>

          {/* Coverage Stats */}
          <div className="mt-8 bg-gradient-to-r from-[#2B59FF] to-[#1E40AF] text-white rounded-2xl p-8">
            <h4 className="text-2xl mb-6 text-center">Complete Coverage</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-4xl mb-2">10+</p>
                <p className="text-blue-100">Departments</p>
              </div>
              <div className="text-center">
                <p className="text-4xl mb-2">25+</p>
                <p className="text-blue-100">Sub-Departments</p>
              </div>
              <div className="text-center">
                <p className="text-4xl mb-2">80+</p>
                <p className="text-blue-100">Job Roles</p>
              </div>
              <div className="text-center">
                <p className="text-4xl mb-2">100%</p>
                <p className="text-blue-100">State Coverage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
