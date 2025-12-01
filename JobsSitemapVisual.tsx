import { jobsHierarchy } from "./jobsData";

export function JobsSitemapVisual() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-[#111827] text-4xl mb-4">
          State Government Jobs - Complete Hierarchical Sitemap
        </h1>
        <p className="text-[#6B7280] text-lg">
          Visual representation of all departments → sub-departments → job roles
        </p>
        <div className="mt-6 inline-flex items-center gap-4 bg-blue-50 px-6 py-3 rounded-2xl">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gradient-to-r from-blue-500 to-blue-600"></div>
            <span className="text-sm text-[#6B7280]">Department</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gray-200"></div>
            <span className="text-sm text-[#6B7280]">Sub-Department</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded border-2 border-gray-400"></div>
            <span className="text-sm text-[#6B7280]">Job Role</span>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        {jobsHierarchy.map((dept, deptIdx) => (
          <div key={dept.id} className="relative">
            {/* Department Header */}
            <div className={`bg-gradient-to-r ${dept.color} text-white rounded-3xl p-6 mb-6 shadow-lg`}>
              <div className="flex items-center gap-4">
                <div className="text-5xl">{dept.icon}</div>
                <div>
                  <h2 className="text-3xl mb-1">{dept.name}</h2>
                  <p className="text-white/80">
                    {dept.subDepartments.length} Sub-Departments • {" "}
                    {dept.subDepartments.reduce((sum, sd) => sum + sd.jobs.length, 0)} Job Roles
                  </p>
                </div>
              </div>
            </div>

            {/* Connection Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-6 bg-gray-300"></div>

            {/* Sub-Departments Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
              {dept.subDepartments.map((subDept, subIdx) => (
                <div key={subDept.id} className="relative">
                  {/* Connector to parent */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-gray-300"></div>
                  
                  {/* Sub-Department Card */}
                  <div className="bg-gray-50 rounded-2xl p-5 border-2 border-gray-200 shadow-sm">
                    <h3 className="text-[#111827] text-lg mb-1">{subDept.name}</h3>
                    <p className="text-sm text-[#6B7280] mb-4">
                      {subDept.jobs.length} Job{subDept.jobs.length > 1 ? "s" : ""}
                    </p>

                    {/* Connection to jobs */}
                    <div className="border-l-2 border-gray-300 pl-4 space-y-2">
                      {subDept.jobs.map((job, jobIdx) => (
                        <div key={job.id} className="relative">
                          {/* Horizontal connector */}
                          <div className="absolute left-0 top-3 w-4 h-0.5 bg-gray-300"></div>
                          
                          {/* Job Card */}
                          <div className="bg-white border border-gray-200 rounded-lg p-3 hover:border-[#2B59FF] hover:shadow-md transition-all cursor-pointer ml-4">
                            <h4 className="text-[#111827] text-sm mb-1">{job.title}</h4>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">
                                {job.salaryRange.split("-")[0].trim()}
                              </span>
                              <span className="text-xs text-[#6B7280]">
                                {job.exams.length} exam{job.exams.length > 1 ? "s" : ""}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Department Separator */}
            {deptIdx < jobsHierarchy.length - 1 && (
              <div className="mt-12 border-t-2 border-dashed border-gray-300"></div>
            )}
          </div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 text-center">
          <p className="text-4xl text-blue-600 mb-2">{jobsHierarchy.length}</p>
          <p className="text-[#6B7280]">Departments</p>
        </div>
        <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6 text-center">
          <p className="text-4xl text-purple-600 mb-2">
            {jobsHierarchy.reduce((sum, d) => sum + d.subDepartments.length, 0)}
          </p>
          <p className="text-[#6B7280]">Sub-Departments</p>
        </div>
        <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 text-center">
          <p className="text-4xl text-green-600 mb-2">
            {jobsHierarchy.reduce(
              (sum, d) => sum + d.subDepartments.reduce((s, sd) => s + sd.jobs.length, 0),
              0
            )}
          </p>
          <p className="text-[#6B7280]">Job Roles</p>
        </div>
        <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 text-center">
          <p className="text-4xl text-amber-600 mb-2">100%</p>
          <p className="text-[#6B7280]">Coverage</p>
        </div>
      </div>
    </div>
  );
}
