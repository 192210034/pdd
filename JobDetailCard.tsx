import { X, Briefcase, GraduationCap, DollarSign, FileText, ChevronRight } from "lucide-react";
import { JobRole } from "./jobsData";

interface JobDetailCardProps {
  job: JobRole;
  department: string;
  subDepartment: string;
  onClose: () => void;
}

export function JobDetailCard({ job, department, subDepartment, onClose }: JobDetailCardProps) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-[#2B59FF] to-[#1E40AF] text-white p-6 rounded-t-3xl">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h2 className="text-2xl mb-2">{job.title}</h2>
              {/* Department Lineage */}
              <div className="flex items-center gap-2 text-blue-100 flex-wrap">
                <span className="text-sm">{department}</span>
                <ChevronRight size={14} />
                <span className="text-sm">{subDepartment}</span>
                <ChevronRight size={14} />
                <span className="text-sm">{job.title}</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Salary Range */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                <DollarSign className="text-white" size={20} />
              </div>
              <h3 className="text-[#111827]">Salary Range</h3>
            </div>
            <p className="text-2xl text-green-600 ml-13">{job.salaryRange}</p>
            <p className="text-sm text-[#6B7280] mt-1 ml-13">Per month (approximate)</p>
          </div>

          {/* Job Responsibilities */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#2B59FF] rounded-xl flex items-center justify-center">
                <Briefcase className="text-white" size={20} />
              </div>
              <h3 className="text-[#111827]">Job Responsibilities</h3>
            </div>
            <ul className="space-y-3 ml-13">
              {job.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2B59FF] mt-2 flex-shrink-0"></div>
                  <span className="text-[#6B7280]">{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Eligibility */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center">
                <GraduationCap className="text-white" size={20} />
              </div>
              <h3 className="text-[#111827]">Eligibility Criteria</h3>
            </div>
            <div className="ml-13 bg-purple-50 border border-purple-200 rounded-2xl p-4">
              <p className="text-[#111827]">{job.eligibility}</p>
            </div>
          </div>

          {/* Required Exams */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center">
                <FileText className="text-white" size={20} />
              </div>
              <h3 className="text-[#111827]">Required Exams</h3>
            </div>
            <div className="ml-13 space-y-2">
              {job.exams.map((exam, idx) => (
                <div
                  key={idx}
                  className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 flex items-center gap-2"
                >
                  <div className="w-6 h-6 bg-amber-500 text-white rounded-lg flex items-center justify-center text-sm">
                    {idx + 1}
                  </div>
                  <span className="text-[#111827]">{exam}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button className="flex-1 bg-gradient-to-r from-[#2B59FF] to-[#1E40AF] text-white py-4 rounded-2xl hover:shadow-lg transition-all">
              Find Mentor for This Job
            </button>
            <button className="px-6 py-4 border-2 border-[#2B59FF] text-[#2B59FF] rounded-2xl hover:bg-[#2B59FF] hover:text-white transition-all">
              Save Job
            </button>
          </div>

          {/* Info Note */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
            <p className="text-sm text-[#6B7280]">
              <span className="text-[#2B59FF]">💡 Tip: </span>
              Connect with achievers who have cleared this exam on our platform for personalized guidance and preparation strategies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
