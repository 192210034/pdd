import { useState } from "react";
import { ArrowLeft, Map, Grid, X } from "lucide-react";
import { JobsTreeDiagram } from "./JobsTreeDiagram";
import { JobsExplorer } from "./JobsExplorer";
import { JobDetailCard } from "./JobDetailCard";
import { jobsHierarchy } from "./jobsData";

interface StateJobsExplorerProps {
  onNavigate?: (screen: string) => void;
}

type ViewMode = "tree" | "grid";

export function StateJobsExplorer({ onNavigate }: StateJobsExplorerProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [selectedJob, setSelectedJob] = useState<{
    jobId: string;
    departmentId: string;
    subDepartmentId: string;
  } | null>(null);

  const handleJobClick = (jobId: string, departmentId: string, subDepartmentId: string) => {
    setSelectedJob({ jobId, departmentId, subDepartmentId });
  };

  const closeJobDetail = () => {
    setSelectedJob(null);
  };

  // Get selected job data
  const getSelectedJobData = () => {
    if (!selectedJob) return null;

    const department = jobsHierarchy.find((d) => d.id === selectedJob.departmentId);
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F3F4F6] to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2B59FF] to-[#1E40AF] text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            {onNavigate && (
              <button
                onClick={() => onNavigate("aspirant-home")}
                className="flex items-center gap-2 hover:bg-white/20 px-4 py-2 rounded-xl transition-colors"
              >
                <ArrowLeft size={20} />
                <span>Back</span>
              </button>
            )}
            <div className="flex-1"></div>
          </div>

          <div className="text-center">
            <h1 className="text-4xl mb-3">State Government Jobs Explorer</h1>
            <p className="text-blue-100 text-lg mb-4">
              Complete hierarchical directory of all government departments and job roles
            </p>

            {onNavigate && (
              <button
                onClick={() => onNavigate("jobs-documentation")}
                className="text-sm text-blue-100 hover:text-white underline mb-6 inline-flex items-center gap-2"
              >
                📊 View Complete System Documentation & Wireframes
              </button>
            )}

            {/* View Mode Toggle */}
            <div className="inline-flex bg-white/10 backdrop-blur-sm rounded-2xl p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                  viewMode === "grid"
                    ? "bg-white text-[#2B59FF]"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <Grid size={20} />
                <span>Grid View</span>
              </button>
              <button
                onClick={() => setViewMode("tree")}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                  viewMode === "tree"
                    ? "bg-white text-[#2B59FF]"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <Map size={20} />
                <span>Tree Map</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {viewMode === "grid" ? (
          <JobsExplorer onJobClick={handleJobClick} />
        ) : (
          <JobsTreeDiagram onJobClick={handleJobClick} />
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

      {/* Info Footer */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h3 className="text-[#111827] text-xl mb-4">
            How to Use This Jobs Explorer
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#2B59FF] rounded-xl flex items-center justify-center flex-shrink-0 text-white">
                1
              </div>
              <div>
                <h4 className="text-[#111827] mb-1">Browse or Search</h4>
                <p className="text-[#6B7280] text-sm">
                  Use the search bar to find specific jobs or browse by department
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#2B59FF] rounded-xl flex items-center justify-center flex-shrink-0 text-white">
                2
              </div>
              <div>
                <h4 className="text-[#111827] mb-1">View Details</h4>
                <p className="text-[#6B7280] text-sm">
                  Click on any job to see full details including eligibility and exams
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#2B59FF] rounded-xl flex items-center justify-center flex-shrink-0 text-white">
                3
              </div>
              <div>
                <h4 className="text-[#111827] mb-1">Find Mentors</h4>
                <p className="text-[#6B7280] text-sm">
                  Connect with achievers who have cleared the exam for that job
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#2B59FF] rounded-xl flex items-center justify-center flex-shrink-0 text-white">
                4
              </div>
              <div>
                <h4 className="text-[#111827] mb-1">Switch Views</h4>
                <p className="text-[#6B7280] text-sm">
                  Toggle between Grid View and Tree Map to explore different ways
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
