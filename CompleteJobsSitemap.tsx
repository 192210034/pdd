import { indianGovernmentJobs, getStatistics } from "./unifiedJobsData";

export function CompleteJobsSitemap() {
  const stats = getStatistics();

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">
      <div className="text-center mb-12">
        <h1 className="text-[#111827] text-4xl mb-4">
          Complete Indian Government Jobs Hierarchical Sitemap
        </h1>
        <p className="text-[#6B7280] text-lg mb-6">
          Visual representation: Central & State → Departments → Sub-Departments → Job Roles
        </p>
        
        {/* Legend */}
        <div className="inline-flex flex-wrap items-center justify-center gap-6 bg-gray-50 px-8 py-4 rounded-2xl">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600"></div>
            <span className="text-sm text-[#6B7280]">Category (Central/State)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700"></div>
            <span className="text-sm text-[#6B7280]">Department</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gray-200"></div>
            <span className="text-sm text-[#6B7280]">Sub-Department</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg border-2 border-gray-400 bg-white"></div>
            <span className="text-sm text-[#6B7280]">Job Role</span>
          </div>
        </div>
      </div>

      {/* Root Node */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-orange-500 via-white to-green-500 rounded-3xl p-8 shadow-2xl text-center">
          <div className="text-6xl mb-4">🇮🇳</div>
          <h2 className="text-[#111827] text-3xl mb-2">Indian Government Jobs</h2>
          <p className="text-[#6B7280] text-lg mb-4">Complete Employment Directory</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-white/80 backdrop-blur rounded-xl p-3">
              <p className="text-2xl text-orange-600">{stats.totalJobs}</p>
              <p className="text-xs text-[#6B7280]">Total Jobs</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-3">
              <p className="text-2xl text-blue-600">{stats.totalDepartments}</p>
              <p className="text-xs text-[#6B7280]">Departments</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-3">
              <p className="text-2xl text-purple-600">{stats.totalSubDepartments}</p>
              <p className="text-xs text-[#6B7280]">Sub-Depts</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-3">
              <p className="text-2xl text-green-600">100%</p>
              <p className="text-xs text-[#6B7280]">Coverage</p>
            </div>
          </div>
        </div>

        {/* Connector */}
        <div className="flex justify-center">
          <div className="w-1 h-12 bg-gray-400"></div>
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-16">
        {indianGovernmentJobs.map((category, catIdx) => (
          <div key={category.id} className="relative">
            {/* Category Node */}
            <div className={`bg-gradient-to-r ${category.color} text-white rounded-3xl p-8 shadow-xl mb-8`}>
              <div className="flex items-center gap-6">
                <div className="text-6xl">{category.icon}</div>
                <div className="flex-1">
                  <h2 className="text-3xl mb-2">{category.name}</h2>
                  <p className="text-white/90 text-lg mb-3">{category.description}</p>
                  <div className="flex gap-6 text-sm">
                    <span className="bg-white/20 px-4 py-2 rounded-lg">
                      {category.departments.length} Departments
                    </span>
                    <span className="bg-white/20 px-4 py-2 rounded-lg">
                      {category.departments.reduce(
                        (sum, d) =>
                          sum + d.subDepartments.reduce((s, sd) => s + sd.jobs.length, 0),
                        0
                      )}{" "}
                      Jobs
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Connector to departments */}
            <div className="flex justify-center">
              <div className="w-1 h-8 bg-gray-300"></div>
            </div>

            {/* Departments Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {category.departments.map((dept, deptIdx) => (
                <div key={dept.id} className="relative">
                  {/* Connector from category */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gray-300"></div>

                  {/* Department Card */}
                  <div className={`bg-gradient-to-r ${dept.color} text-white rounded-2xl p-6 shadow-lg mb-6`}>
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">{dept.icon}</span>
                      <div className="flex-1">
                        <h3 className="text-xl mb-1">{dept.name}</h3>
                        <p className="text-white/80 text-sm">
                          {dept.subDepartments.length} Sub-Depts •{" "}
                          {dept.subDepartments.reduce((sum, sd) => sum + sd.jobs.length, 0)} Jobs
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Sub-Departments */}
                  <div className="space-y-4 pl-8 border-l-2 border-gray-300">
                    {dept.subDepartments.map((subDept, subIdx) => (
                      <div key={subDept.id} className="relative">
                        {/* Horizontal connector */}
                        <div className="absolute left-0 top-6 w-8 h-0.5 bg-gray-300"></div>

                        {/* Sub-Department Card */}
                        <div className="bg-gray-100 rounded-xl p-4 ml-8">
                          <h4 className="text-[#111827] mb-2">{subDept.name}</h4>
                          <p className="text-sm text-[#6B7280] mb-3">
                            {subDept.jobs.length} Job Role{subDept.jobs.length > 1 ? "s" : ""}
                          </p>

                          {/* Job Roles - Show first 3, then count */}
                          <div className="space-y-2">
                            {subDept.jobs.slice(0, 3).map((job) => (
                              <div
                                key={job.id}
                                className="bg-white border border-gray-200 rounded-lg p-3 hover:border-orange-500 hover:shadow-md transition-all cursor-pointer group"
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex-1">
                                    <h5 className="text-sm text-[#111827] group-hover:text-orange-600">
                                      {job.title}
                                    </h5>
                                    <p className="text-xs text-green-600 mt-1">
                                      {job.salaryRange.split("-")[0].trim()}
                                    </p>
                                  </div>
                                  <div className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">
                                    {job.exams.length} exam{job.exams.length > 1 ? "s" : ""}
                                  </div>
                                </div>
                              </div>
                            ))}
                            {subDept.jobs.length > 3 && (
                              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
                                <p className="text-sm text-blue-700">
                                  + {subDept.jobs.length - 3} more job role
                                  {subDept.jobs.length - 3 > 1 ? "s" : ""}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Category Separator */}
            {catIdx < indianGovernmentJobs.length - 1 && (
              <div className="mt-16 pt-8 border-t-4 border-dashed border-gray-300"></div>
            )}
          </div>
        ))}
      </div>

      {/* Sample Job Detail Card Template */}
      <div className="mt-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border-2 border-blue-200">
        <h3 className="text-[#111827] text-2xl mb-6 text-center">
          Job Detail Card Structure (Shown on Click)
        </h3>
        <div className="bg-white rounded-2xl shadow-xl max-w-2xl mx-auto overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#2B59FF] to-[#1E40AF] text-white p-6">
            <h4 className="text-xl mb-2">Job Title Example</h4>
            <p className="text-sm text-blue-100">Category → Department → Sub-Department → Job</p>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="text-xs text-[#6B7280] mb-1">💰 Salary Range</p>
                <p className="text-lg text-green-600">₹XX,XXX - ₹XX,XXX</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="text-xs text-[#6B7280] mb-1">🎓 Eligibility</p>
                <p className="text-sm text-[#111827]">Educational Qualification</p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-xs text-[#6B7280] mb-2">💼 Job Responsibilities</p>
              <ul className="space-y-1 text-sm text-[#111827]">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Responsibility 1</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Responsibility 2</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Responsibility 3</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-xs text-[#6B7280] mb-2">📄 Required Exams</p>
              <div className="space-y-2">
                <div className="bg-white border border-amber-300 rounded px-3 py-2 text-sm text-[#111827]">
                  Exam 1
                </div>
                <div className="bg-white border border-amber-300 rounded px-3 py-2 text-sm text-[#111827]">
                  Exam 2
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 bg-gradient-to-r from-[#2B59FF] to-[#1E40AF] text-white py-3 rounded-xl">
                Find Mentor
              </button>
              <button className="px-6 py-3 border-2 border-[#2B59FF] text-[#2B59FF] rounded-xl">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-12 bg-gradient-to-r from-orange-500 via-white to-green-500 rounded-3xl p-8">
        <h3 className="text-[#111827] text-2xl mb-6 text-center">Coverage Summary</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white/90 backdrop-blur rounded-2xl p-6 text-center">
            <div className="text-4xl mb-2">🇮🇳</div>
            <p className="text-[#111827] mb-1">2 Categories</p>
            <p className="text-sm text-[#6B7280]">Central + State</p>
          </div>
          <div className="bg-white/90 backdrop-blur rounded-2xl p-6 text-center">
            <div className="text-4xl mb-2">🏢</div>
            <p className="text-[#111827] mb-1">{stats.totalDepartments} Departments</p>
            <p className="text-sm text-[#6B7280]">Major govt departments</p>
          </div>
          <div className="bg-white/90 backdrop-blur rounded-2xl p-6 text-center">
            <div className="text-4xl mb-2">📊</div>
            <p className="text-[#111827] mb-1">{stats.totalSubDepartments} Sub-Departments</p>
            <p className="text-sm text-[#6B7280]">Specialized divisions</p>
          </div>
          <div className="bg-white/90 backdrop-blur rounded-2xl p-6 text-center">
            <div className="text-4xl mb-2">💼</div>
            <p className="text-[#111827] mb-1">{stats.totalJobs} Job Roles</p>
            <p className="text-sm text-[#6B7280]">From IAS to Peon</p>
          </div>
          <div className="bg-white/90 backdrop-blur rounded-2xl p-6 text-center">
            <div className="text-4xl mb-2">✅</div>
            <p className="text-[#111827] mb-1">100% Coverage</p>
            <p className="text-sm text-[#6B7280]">All levels included</p>
          </div>
          <div className="bg-white/90 backdrop-blur rounded-2xl p-6 text-center">
            <div className="text-4xl mb-2">🎯</div>
            <p className="text-[#111827] mb-1">Complete Details</p>
            <p className="text-sm text-[#6B7280]">Responsibilities, eligibility, salary, exams</p>
          </div>
        </div>
      </div>
    </div>
  );
}
