import { useState } from "react";
import { Search, Filter, Briefcase, TrendingUp } from "lucide-react";
import { jobsHierarchy } from "./jobsData";

interface JobsExplorerProps {
  onJobClick: (jobId: string, departmentId: string, subDepartmentId: string) => void;
}

export function JobsExplorer({ onJobClick }: JobsExplorerProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");

  // Get all jobs with metadata
  const allJobs = jobsHierarchy.flatMap((dept) =>
    dept.subDepartments.flatMap((subDept) =>
      subDept.jobs.map((job) => ({
        ...job,
        department: dept.name,
        departmentId: dept.id,
        subDepartment: subDept.name,
        subDepartmentId: subDept.id,
        departmentColor: dept.color,
        departmentIcon: dept.icon,
      }))
    )
  );

  // Filter jobs
  const filteredJobs = allJobs.filter((job) => {
    const matchesSearch =
      searchQuery === "" ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.subDepartment.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDepartment =
      selectedDepartment === "all" || job.departmentId === selectedDepartment;

    return matchesSearch && matchesDepartment;
  });

  // Statistics
  const totalJobs = allJobs.length;
  const totalDepartments = jobsHierarchy.length;
  const totalSubDepartments = jobsHierarchy.reduce(
    (sum, dept) => sum + dept.subDepartments.length,
    0
  );

  return (
    <div className="space-y-6">
      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 mb-1">Total Jobs</p>
              <p className="text-3xl">{totalJobs}</p>
            </div>
            <Briefcase size={40} className="opacity-80" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 mb-1">Departments</p>
              <p className="text-3xl">{totalDepartments}</p>
            </div>
            <TrendingUp size={40} className="opacity-80" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 mb-1">Sub-Departments</p>
              <p className="text-3xl">{totalSubDepartments}</p>
            </div>
            <Filter size={40} className="opacity-80" />
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Search */}
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#6B7280]"
              size={20}
            />
            <input
              type="text"
              placeholder="Search jobs, departments, or roles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:border-[#2B59FF] focus:outline-none focus:ring-2 focus:ring-[#2B59FF]/20 transition-all"
            />
          </div>

          {/* Department Filter */}
          <div className="relative">
            <Filter
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#6B7280]"
              size={20}
            />
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:border-[#2B59FF] focus:outline-none focus:ring-2 focus:ring-[#2B59FF]/20 transition-all appearance-none bg-white"
            >
              <option value="all">All Departments</option>
              {jobsHierarchy.map((dept) => (
                <option key={dept.id} value={dept.id}>
                  {dept.icon} {dept.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-4 text-[#6B7280]">
          Showing {filteredJobs.length} of {totalJobs} jobs
        </div>
      </div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredJobs.map((job) => (
          <button
            key={job.id}
            onClick={() => onJobClick(job.id, job.departmentId, job.subDepartmentId)}
            className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all p-5 text-left border border-gray-100 hover:border-[#2B59FF] group"
          >
            {/* Department Badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">{job.departmentIcon}</span>
              <span className="text-xs text-[#6B7280] bg-gray-100 px-3 py-1 rounded-full">
                {job.department}
              </span>
            </div>

            {/* Job Title */}
            <h3 className="text-[#111827] mb-2 group-hover:text-[#2B59FF] transition-colors">
              {job.title}
            </h3>

            {/* Sub-Department */}
            <p className="text-sm text-[#6B7280] mb-3">{job.subDepartment}</p>

            {/* Salary */}
            <div className="bg-green-50 border border-green-200 rounded-lg px-3 py-2 inline-block">
              <p className="text-sm text-green-700">{job.salaryRange}</p>
            </div>

            {/* Eligibility Preview */}
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-xs text-[#6B7280] truncate">
                <span className="font-medium">Eligibility:</span> {job.eligibility}
              </p>
            </div>

            {/* Exam Count Badge */}
            <div className="mt-3 flex items-center gap-2">
              <div className="bg-amber-100 text-amber-700 text-xs px-3 py-1 rounded-full">
                {job.exams.length} Exam{job.exams.length > 1 ? "s" : ""}
              </div>
              <div className="text-[#2B59FF] text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                View Details →
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* No Results */}
      {filteredJobs.length === 0 && (
        <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="text-[#6B7280]" size={32} />
          </div>
          <h3 className="text-[#111827] text-xl mb-2">No jobs found</h3>
          <p className="text-[#6B7280]">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
}
