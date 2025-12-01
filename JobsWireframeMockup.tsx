export function JobsWireframeMockup() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white p-8 rounded-3xl">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[#111827] text-3xl mb-6 text-center">
          UI Wireframe: Job Detail Flow
        </h2>
        <p className="text-[#6B7280] text-center mb-12">
          Visual demonstration of the user journey from browsing to viewing job details
        </p>

        <div className="space-y-8">
          {/* Screen 1: Browse Jobs */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-blue-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center">
                1
              </div>
              <h3 className="text-[#111827] text-xl">Browse Jobs Grid</h3>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              {/* Header */}
              <div className="bg-gradient-to-r from-[#2B59FF] to-[#1E40AF] text-white rounded-lg p-4 mb-4">
                <p className="text-sm mb-2">HEADER</p>
                <p className="text-lg">State Government Jobs Explorer</p>
              </div>

              {/* Search and Filter */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-white border-2 border-gray-300 rounded-lg p-3 text-sm text-[#6B7280]">
                  🔍 Search jobs...
                </div>
                <div className="bg-white border-2 border-gray-300 rounded-lg p-3 text-sm text-[#6B7280]">
                  📁 Filter by department
                </div>
              </div>

              {/* Jobs Grid */}
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className={`bg-white border-2 rounded-lg p-3 ${
                      i === 2 ? "border-blue-500 shadow-lg" : "border-gray-200"
                    }`}
                  >
                    <div className="text-xs text-[#6B7280] mb-2">🏛️ Department</div>
                    <div className="text-sm text-[#111827] mb-2">Job Title {i}</div>
                    <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded inline-block">
                      ₹25,000 - ₹40,000
                    </div>
                  </div>
                ))}
              </div>

              {i === 2 && (
                <div className="mt-3 text-center">
                  <div className="inline-flex items-center gap-2 text-blue-500 text-sm">
                    <span>Click on job card</span>
                    <span>→</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Arrow */}
          <div className="text-center">
            <div className="inline-block bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl">
              ↓
            </div>
          </div>

          {/* Screen 2: Job Detail Modal */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-green-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-green-500 text-white rounded-lg flex items-center justify-center">
                2
              </div>
              <h3 className="text-[#111827] text-xl">Job Detail Card (Modal)</h3>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-[#2B59FF] to-[#1E40AF] text-white rounded-t-xl p-4 mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xl mb-2">VRO (Village Revenue Officer)</p>
                    <p className="text-sm text-blue-100">
                      Secretariat → Village Secretariat → VRO
                    </p>
                  </div>
                  <div className="text-2xl cursor-pointer">✕</div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="space-y-4">
                {/* Salary */}
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white">
                      💰
                    </div>
                    <p className="text-[#111827]">Salary Range</p>
                  </div>
                  <p className="text-2xl text-green-600 ml-13">₹25,000 - ₹45,000</p>
                </div>

                {/* Responsibilities */}
                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white">
                      💼
                    </div>
                    <p className="text-[#111827]">Job Responsibilities</p>
                  </div>
                  <div className="ml-13 space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5"></div>
                      <p className="text-sm text-[#6B7280]">Maintain land records and revenue documents</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5"></div>
                      <p className="text-sm text-[#6B7280]">Issue certificates (income, caste, residence)</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5"></div>
                      <p className="text-sm text-[#6B7280]">Collect taxes and fees</p>
                    </div>
                  </div>
                </div>

                {/* Eligibility */}
                <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center text-white">
                      🎓
                    </div>
                    <p className="text-[#111827]">Eligibility Criteria</p>
                  </div>
                  <div className="ml-13">
                    <p className="text-[#111827]">Degree, Computer knowledge</p>
                  </div>
                </div>

                {/* Required Exams */}
                <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center text-white">
                      📄
                    </div>
                    <p className="text-[#111827]">Required Exams</p>
                  </div>
                  <div className="ml-13 space-y-2">
                    <div className="bg-white border border-amber-300 rounded-lg p-2 flex items-center gap-2">
                      <div className="w-6 h-6 bg-amber-500 text-white rounded flex items-center justify-center text-xs">1</div>
                      <span className="text-sm text-[#111827]">State PSC</span>
                    </div>
                    <div className="bg-white border border-amber-300 rounded-lg p-2 flex items-center gap-2">
                      <div className="w-6 h-6 bg-amber-500 text-white rounded flex items-center justify-center text-xs">2</div>
                      <span className="text-sm text-[#111827]">Departmental Exam</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <div className="flex-1 bg-gradient-to-r from-[#2B59FF] to-[#1E40AF] text-white rounded-xl p-3 text-center">
                    Find Mentor for This Job
                  </div>
                  <div className="border-2 border-[#2B59FF] text-[#2B59FF] rounded-xl px-4 py-3">
                    Save
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Flow Indicator */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
            <h4 className="text-[#111827] text-lg mb-4 text-center">Complete Navigation Flow</h4>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="bg-white border-2 border-blue-500 rounded-lg px-4 py-2">
                Browse Jobs
              </div>
              <span className="text-blue-500 text-xl">→</span>
              <div className="bg-white border-2 border-blue-500 rounded-lg px-4 py-2">
                Click Job Card
              </div>
              <span className="text-blue-500 text-xl">→</span>
              <div className="bg-white border-2 border-blue-500 rounded-lg px-4 py-2">
                View Full Details
              </div>
              <span className="text-blue-500 text-xl">→</span>
              <div className="bg-white border-2 border-blue-500 rounded-lg px-4 py-2">
                Find Mentor
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
