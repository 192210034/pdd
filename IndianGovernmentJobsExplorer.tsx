import { useState } from "react";
import { ArrowLeft, Search, Filter, Briefcase, Building2, Map, Grid } from "lucide-react";
import { indianGovernmentJobs, getAllJobs, getStatistics } from "./unifiedJobsData";
import { JobDetailCard } from "./JobDetailCard";

interface IndianGovernmentJobsExplorerProps {
  onNavigate?: (screen: string) => void;
}

type ViewMode = "category" | "all";

export function IndianGovernmentJobsExplorer({ onNavigate }: IndianGovernmentJobsExplorerProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("category");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedDepartments, setExpandedDepartments] = useState<Set<string>>(new Set());
  const [expandedSubDepartments, setExpandedSubDepartments] = useState<Set<string>>(new Set());
  
  const [selectedJob, setSelectedJob] = useState<{
    jobId: string;
    departmentId: string;
    subDepartmentId: string;
    categoryId: string;
  } | null>(null);

  const stats = getStatistics();
  const allJobs = getAllJobs();

  // Filter jobs
  const filteredJobs = allJobs.filter((item) => {
    const matchesSearch =
      searchQuery === "" ||
      item.job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subDepartment.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || item.categoryId === selectedCategory;

    const matchesDepartment =
      selectedDepartment === "all" || item.departmentId === selectedDepartment;

    return matchesSearch && matchesCategory && matchesDepartment;
  });

  const handleJobClick = (jobId: string, departmentId: string, subDepartmentId: string, categoryId: string) => {
    setSelectedJob({ jobId, departmentId, subDepartmentId, categoryId });
  };

  const closeJobDetail = () => {
    setSelectedJob(null);
  };

  // Get selected job data
  const getSelectedJobData = () => {
    if (!selectedJob) return null;

    const category = indianGovernmentJobs.find((c) => c.id === selectedJob.categoryId);
    if (!category) return null;

    const department = category.departments.find((d) => d.id === selectedJob.departmentId);
    if (!department) return null;

    const subDepartment = department.subDepartments.find(
      (sd) => sd.id === selectedJob.subDepartmentId
    );
    if (!subDepartment) return null;

    const job = subDepartment.jobs.find((j) => j.id === selectedJob.jobId);
    if (!job) return null;

    return {
      job,
      department: department.name,
      subDepartment: subDepartment.name,
    };
  };

  const selectedJobData = getSelectedJobData();

  const toggleDepartment = (deptId: string) => {
    const newExpanded = new Set(expandedDepartments);
    if (newExpanded.has(deptId)) {
      newExpanded.delete(deptId);
    } else {
      newExpanded.add(deptId);
    }
    setExpandedDepartments(newExpanded);
  };

  const toggleSubDepartment = (subDeptId: string) => {
    const newExpanded = new Set(expandedSubDepartments);
    if (newExpanded.has(subDeptId)) {
      newExpanded.delete(subDeptId);
    } else {
      newExpanded.add(subDeptId);
    }
    setExpandedSubDepartments(newExpanded);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F3F4F6] to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 via-white to-green-500 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {onNavigate && (
            <button
              onClick={() => onNavigate("aspirant-home")}
              className="flex items-center gap-2 hover:bg-white/20 px-4 py-2 rounded-xl transition-colors mb-6 text-[#111827]"
            >
              <ArrowLeft size={20} />
              <span>Back</span>
            </button>
          )}

          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-6xl">🇮🇳</span>
            </div>
            <h1 className="text-5xl text-[#111827] mb-4">
              Indian Government Jobs Explorer
            </h1>
            <p className="text-[#6B7280] text-xl mb-4">
              Complete directory of Central & State Government jobs - From IAS to Peon
            </p>

            {onNavigate && (
              <button
                onClick={() => onNavigate("indian-jobs-docs")}
                className="text-sm text-[#6B7280] hover:text-[#111827] underline mb-6 inline-flex items-center gap-2"
              >
                📊 View Complete Documentation, Sitemap & UI Wireframes
              </button>
            )}

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto mb-6">
              <div className="bg-white/90 backdrop-blur rounded-2xl p-4 shadow-lg">
                <p className="text-3xl text-orange-600 mb-1">{stats.totalJobs}</p>
                <p className="text-sm text-[#6B7280]">Total Jobs</p>
              </div>
              <div className="bg-white/90 backdrop-blur rounded-2xl p-4 shadow-lg">
                <p className="text-3xl text-blue-600 mb-1">{stats.centralJobsCount}</p>
                <p className="text-sm text-[#6B7280]">Central Govt</p>
              </div>
              <div className="bg-white/90 backdrop-blur rounded-2xl p-4 shadow-lg">
                <p className="text-3xl text-green-600 mb-1">{stats.stateJobsCount}</p>
                <p className="text-sm text-[#6B7280]">State Govt</p>
              </div>
              <div className="bg-white/90 backdrop-blur rounded-2xl p-4 shadow-lg">
                <p className="text-3xl text-purple-600 mb-1">{stats.totalDepartments}</p>
                <p className="text-sm text-[#6B7280]">Departments</p>
              </div>
              <div className="bg-white/90 backdrop-blur rounded-2xl p-4 shadow-lg">
                <p className="text-3xl text-pink-600 mb-1">{stats.totalSubDepartments}</p>
                <p className="text-sm text-[#6B7280]">Sub-Depts</p>
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="inline-flex bg-white/90 backdrop-blur rounded-2xl p-1 shadow-lg">
              <button
                onClick={() => setViewMode("category")}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                  viewMode === "category"
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                    : "text-[#6B7280] hover:bg-gray-100"
                }`}
              >
                <Map size={20} />
                <span>Hierarchical View</span>
              </button>
              <button
                onClick={() => setViewMode("all")}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                  viewMode === "all"
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                    : "text-[#6B7280] hover:bg-gray-100"
                }`}
              >
                <Grid size={20} />
                <span>All Jobs Grid</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {viewMode === "all" ? (
          // All Jobs Grid View
          <div className="space-y-6">
            {/* Search and Filters */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Search */}
                <div className="relative">
                  <Search
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#6B7280]"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="Search jobs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                  />
                </div>

                {/* Category Filter */}
                <div className="relative">
                  <Building2
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#6B7280]"
                    size={20}
                  />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all appearance-none bg-white"
                  >
                    <option value="all">All Categories</option>
                    {indianGovernmentJobs.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.icon} {cat.name}
                      </option>
                    ))}
                  </select>
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
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all appearance-none bg-white"
                  >
                    <option value="all">All Departments</option>
                    {indianGovernmentJobs.flatMap((cat) =>
                      cat.departments.map((dept) => (
                        <option key={dept.id} value={dept.id}>
                          {dept.icon} {dept.name}
                        </option>
                      ))
                    )}
                  </select>
                </div>
              </div>

              <div className="mt-4 text-[#6B7280]">
                Showing {filteredJobs.length} of {stats.totalJobs} jobs
              </div>
            </div>

            {/* Jobs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredJobs.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() =>
                    handleJobClick(
                      item.job.id,
                      item.departmentId,
                      item.subDepartmentId,
                      item.categoryId
                    )
                  }
                  className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all p-5 text-left border border-gray-100 hover:border-orange-500 group"
                >
                  {/* Category Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>

                  {/* Department */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{item.departmentIcon}</span>
                    <span className="text-xs text-[#6B7280]">{item.department}</span>
                  </div>

                  {/* Job Title */}
                  <h3 className="text-[#111827] mb-2 group-hover:text-orange-600 transition-colors">
                    {item.job.title}
                  </h3>

                  {/* Sub-Department */}
                  <p className="text-sm text-[#6B7280] mb-3">{item.subDepartment}</p>

                  {/* Salary */}
                  <div className="bg-green-50 border border-green-200 rounded-lg px-3 py-2 inline-block mb-3">
                    <p className="text-sm text-green-700">{item.job.salaryRange}</p>
                  </div>

                  {/* Exam Count */}
                  <div className="flex items-center gap-2">
                    <div className="bg-amber-100 text-amber-700 text-xs px-3 py-1 rounded-full">
                      {item.job.exams.length} Exam{item.job.exams.length > 1 ? "s" : ""}
                    </div>
                    <div className="text-orange-600 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      View Details →
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <Briefcase className="mx-auto text-[#6B7280] mb-4" size={48} />
                <h3 className="text-[#111827] text-xl mb-2">No jobs found</h3>
                <p className="text-[#6B7280]">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        ) : (
          // Hierarchical Category View
          <div className="space-y-8">
            {indianGovernmentJobs.map((category) => (
              <div key={category.id} className="bg-white rounded-3xl shadow-lg p-8">
                {/* Category Header */}
                <div className={`bg-gradient-to-r ${category.color} text-white rounded-2xl p-6 mb-6`}>
                  <div className="flex items-center gap-4">
                    <span className="text-5xl">{category.icon}</span>
                    <div className="flex-1">
                      <h2 className="text-3xl mb-2">{category.name}</h2>
                      <p className="text-white/90">{category.description}</p>
                      <p className="text-white/80 text-sm mt-2">
                        {category.departments.length} Departments •{" "}
                        {category.departments.reduce(
                          (sum, d) => sum + d.subDepartments.reduce((s, sd) => s + sd.jobs.length, 0),
                          0
                        )}{" "}
                        Jobs
                      </p>
                    </div>
                  </div>
                </div>

                {/* Departments */}
                <div className="space-y-4">
                  {category.departments.map((dept) => {
                    const isExpanded = expandedDepartments.has(dept.id);
                    return (
                      <div key={dept.id} className="border-l-4 border-gray-200 pl-4">
                        <button
                          onClick={() => toggleDepartment(dept.id)}
                          className={`w-full text-left bg-gradient-to-r ${dept.color} text-white rounded-2xl p-4 hover:shadow-lg transition-all`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">{dept.icon}</span>
                              <div>
                                <h3 className="text-lg">{dept.name}</h3>
                                <p className="text-sm text-white/80">
                                  {dept.subDepartments.length} sub-departments
                                </p>
                              </div>
                            </div>
                            <span className="text-2xl">{isExpanded ? "−" : "+"}</span>
                          </div>
                        </button>

                        {isExpanded && (
                          <div className="mt-4 ml-6 space-y-3 border-l-2 border-gray-300 pl-4">
                            {dept.subDepartments.map((subDept) => {
                              const isSubExpanded = expandedSubDepartments.has(subDept.id);
                              return (
                                <div key={subDept.id}>
                                  <button
                                    onClick={() => toggleSubDepartment(subDept.id)}
                                    className="w-full text-left bg-gray-100 hover:bg-gray-200 rounded-xl p-3 transition-all"
                                  >
                                    <div className="flex items-center justify-between">
                                      <div>
                                        <h4 className="text-[#111827]">{subDept.name}</h4>
                                        <p className="text-sm text-[#6B7280]">
                                          {subDept.jobs.length} job{subDept.jobs.length > 1 ? "s" : ""}
                                        </p>
                                      </div>
                                      <span className="text-[#6B7280]">{isSubExpanded ? "−" : "+"}</span>
                                    </div>
                                  </button>

                                  {isSubExpanded && (
                                    <div className="mt-3 ml-6 space-y-2 border-l-2 border-gray-200 pl-4">
                                      {subDept.jobs.map((job) => (
                                        <button
                                          key={job.id}
                                          onClick={() =>
                                            handleJobClick(job.id, dept.id, subDept.id, category.id)
                                          }
                                          className="w-full text-left bg-white hover:bg-orange-50 border border-gray-200 hover:border-orange-500 rounded-lg p-3 transition-all group"
                                        >
                                          <h5 className="text-[#111827] group-hover:text-orange-600">
                                            {job.title}
                                          </h5>
                                          <p className="text-sm text-green-600 mt-1">{job.salaryRange}</p>
                                        </button>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Job Detail Modal */}
      {selectedJobData && (
        <JobDetailCard
          job={selectedJobData.job}
          department={selectedJobData.department}
          subDepartment={selectedJobData.subDepartment}
          onClose={closeJobDetail}
        />
      )}
    </div>
  );
}
