import { useState } from "react";
import { Map, Monitor, ArrowLeft, Book } from "lucide-react";
import { CompleteJobsSitemap } from "./CompleteJobsSitemap";
import { JobsWireframeMockup } from "./JobsWireframeMockup";
import { getStatistics } from "./unifiedJobsData";

interface IndianJobsDocumentationProps {
  onNavigate?: (screen: string) => void;
}

type ViewType = "sitemap" | "wireframe" | "guide";

export function IndianJobsDocumentation({ onNavigate }: IndianJobsDocumentationProps) {
  const [view, setView] = useState<ViewType>("sitemap");
  const stats = getStatistics();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F3F4F6] to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 via-white to-green-500 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {onNavigate && (
            <button
              onClick={() => onNavigate("indian-govt-jobs")}
              className="flex items-center gap-2 hover:bg-white/20 px-4 py-2 rounded-xl transition-colors mb-6 text-[#111827]"
            >
              <ArrowLeft size={20} />
              <span>Back to Jobs Explorer</span>
            </button>
          )}

          <div className="text-center">
            <div className="text-6xl mb-4">🇮🇳</div>
            <h1 className="text-[#111827] text-4xl mb-3">
              Indian Government Jobs - Complete Documentation
            </h1>
            <p className="text-[#6B7280] text-lg mb-6">
              System architecture, hierarchical sitemap, UI wireframes, and user guide
            </p>

            {/* View Toggle */}
            <div className="inline-flex bg-white/90 backdrop-blur rounded-2xl p-1 shadow-lg">
              <button
                onClick={() => setView("sitemap")}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all text-sm ${
                  view === "sitemap"
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                    : "text-[#6B7280] hover:bg-gray-100"
                }`}
              >
                <Map size={18} />
                <span>Hierarchical Sitemap</span>
              </button>
              <button
                onClick={() => setView("wireframe")}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all text-sm ${
                  view === "wireframe"
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                    : "text-[#6B7280] hover:bg-gray-100"
                }`}
              >
                <Monitor size={18} />
                <span>UI Wireframe</span>
              </button>
              <button
                onClick={() => setView("guide")}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all text-sm ${
                  view === "guide"
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                    : "text-[#6B7280] hover:bg-gray-100"
                }`}
              >
                <Book size={18} />
                <span>User Guide</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {view === "sitemap" && <CompleteJobsSitemap />}
        {view === "wireframe" && <JobsWireframeMockup />}
        {view === "guide" && (
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-[#111827] text-3xl mb-8 text-center">
              Complete User Guide
            </h2>

            {/* System Overview */}
            <div className="mb-12">
              <h3 className="text-[#111827] text-2xl mb-6">📊 System Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
                  <h4 className="text-[#111827] text-lg mb-3">🇮🇳 Central Government Jobs</h4>
                  <ul className="space-y-2 text-[#6B7280]">
                    <li>• UPSC Civil Services (IAS, IPS, IFS, IRS, etc.)</li>
                    <li>• SSC (CGL, CHSL, MTS, Stenographer)</li>
                    <li>• Railways (All Groups A, B, C, D)</li>
                    <li>• Defence (Commissioned, Non-Commissioned, Civilian)</li>
                    <li>• CAPF (BSF, CRPF, CISF, etc.)</li>
                    <li>• Banking (SBI, IBPS, RBI, NABARD)</li>
                    <li>• PSUs (ONGC, NTPC, BHEL, etc.)</li>
                    <li>• India Post, Intelligence Agencies</li>
                    <li>• Autonomous Bodies (AIIMS, ISRO, DRDO, CSIR)</li>
                    <li>• Group D (Peon, Daftary, Chowkidar, Safaiwala, Mali)</li>
                  </ul>
                </div>

                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                  <h4 className="text-[#111827] text-lg mb-3">🏛️ State Government Jobs</h4>
                  <ul className="space-y-2 text-[#6B7280]">
                    <li>• Secretariat (Village & Ward)</li>
                    <li>• Courts & Judiciary (HC, District Courts)</li>
                    <li>• Police Department</li>
                    <li>• Health & Medical Services</li>
                    <li>• Education Department</li>
                    <li>• Panchayat Raj & Rural Development</li>
                    <li>• Municipal Administration</li>
                    <li>• Electricity Department</li>
                    <li>• Transport (RTC + RTA)</li>
                    <li>• Revenue, Agriculture, Forest, etc.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Navigation Guide */}
            <div className="mb-12">
              <h3 className="text-[#111827] text-2xl mb-6">🧭 How to Navigate</h3>
              <div className="space-y-6">
                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-500 text-white rounded-xl flex items-center justify-center flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[#111827] text-lg mb-2">Choose View Mode</h4>
                      <p className="text-[#6B7280] mb-3">
                        Toggle between "Hierarchical View" to see the complete tree structure, or "All Jobs Grid" to browse all jobs with search and filters.
                      </p>
                      <div className="bg-white rounded-lg p-3 text-sm text-[#6B7280]">
                        💡 Tip: Use Hierarchical View to understand the complete structure, then switch to Grid View for targeted searching.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple-500 text-white rounded-xl flex items-center justify-center flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[#111827] text-lg mb-2">Browse or Search</h4>
                      <p className="text-[#6B7280] mb-3">
                        In Grid View, use the search bar to find jobs by title, department, or category. Apply filters for Central/State and specific departments.
                      </p>
                      <div className="bg-white rounded-lg p-3 text-sm text-[#6B7280]">
                        💡 Tip: Search terms like "clerk", "engineer", "constable", or department names like "Railways", "Police", etc.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-500 text-white rounded-xl flex items-center justify-center flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[#111827] text-lg mb-2">Explore Hierarchically</h4>
                      <p className="text-[#6B7280] mb-3">
                        In Hierarchical View, expand categories (Central/State), then departments, then sub-departments to see all job roles at each level.
                      </p>
                      <div className="bg-white rounded-lg p-3 text-sm text-[#6B7280]">
                        💡 Tip: Click the + button to expand levels. Each level shows the number of sub-items inside.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-500 text-white rounded-xl flex items-center justify-center flex-shrink-0">
                      4
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[#111827] text-lg mb-2">View Job Details</h4>
                      <p className="text-[#6B7280] mb-3">
                        Click on any job card to see complete details including job responsibilities, eligibility criteria, salary range, and required exams.
                      </p>
                      <div className="bg-white rounded-lg p-3 text-sm text-[#6B7280]">
                        💡 Tip: The detail card also shows the complete department lineage path from category to job.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-pink-50 border-2 border-pink-200 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-pink-500 text-white rounded-xl flex items-center justify-center flex-shrink-0">
                      5
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[#111827] text-lg mb-2">Find Mentors</h4>
                      <p className="text-[#6B7280] mb-3">
                        From the job detail card, click "Find Mentor for This Job" to connect with achievers who have cleared that specific exam.
                      </p>
                      <div className="bg-white rounded-lg p-3 text-sm text-[#6B7280]">
                        💡 Tip: Mentors provide personalized guidance, preparation strategies, and exam insights.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="mb-12">
              <h3 className="text-[#111827] text-2xl mb-6">✨ Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
                  <div className="text-3xl mb-3">🔍</div>
                  <h4 className="text-[#111827] mb-2">Smart Search</h4>
                  <p className="text-sm text-[#6B7280]">
                    Search across 150+ jobs by title, department, or keywords
                  </p>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5">
                  <div className="text-3xl mb-3">🗂️</div>
                  <h4 className="text-[#111827] mb-2">Hierarchical Structure</h4>
                  <p className="text-sm text-[#6B7280]">
                    Clear path from category → department → sub-dept → job
                  </p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
                  <div className="text-3xl mb-3">📊</div>
                  <h4 className="text-[#111827] mb-2">Complete Details</h4>
                  <p className="text-sm text-[#6B7280]">
                    Responsibilities, eligibility, salary, and exam info for each job
                  </p>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                  <div className="text-3xl mb-3">🎯</div>
                  <h4 className="text-[#111827] mb-2">Dual View Modes</h4>
                  <p className="text-sm text-[#6B7280]">
                    Switch between tree view and grid view as needed
                  </p>
                </div>

                <div className="bg-pink-50 border border-pink-200 rounded-2xl p-5">
                  <div className="text-3xl mb-3">💼</div>
                  <h4 className="text-[#111827] mb-2">All Levels Covered</h4>
                  <p className="text-sm text-[#6B7280]">
                    From IAS officers to peons - every position included
                  </p>
                </div>

                <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-5">
                  <div className="text-3xl mb-3">🔗</div>
                  <h4 className="text-[#111827] mb-2">Mentor Integration</h4>
                  <p className="text-sm text-[#6B7280]">
                    Direct link to find mentors for each job's exam
                  </p>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="bg-gradient-to-r from-orange-500 to-green-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl mb-6 text-center">Complete Coverage Statistics</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                <div className="text-center">
                  <p className="text-4xl mb-2">{stats.totalJobs}</p>
                  <p className="text-white/90">Total Jobs</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl mb-2">{stats.centralJobsCount}</p>
                  <p className="text-white/90">Central Jobs</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl mb-2">{stats.stateJobsCount}</p>
                  <p className="text-white/90">State Jobs</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl mb-2">{stats.totalDepartments}</p>
                  <p className="text-white/90">Departments</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl mb-2">100%</p>
                  <p className="text-white/90">Coverage</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
