import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { jobsHierarchy } from "./jobsData";

interface JobsTreeDiagramProps {
  onJobClick: (jobId: string, departmentId: string, subDepartmentId: string) => void;
}

export function JobsTreeDiagram({ onJobClick }: JobsTreeDiagramProps) {
  const [expandedDepts, setExpandedDepts] = useState<Set<string>>(new Set());
  const [expandedSubDepts, setExpandedSubDepts] = useState<Set<string>>(new Set());

  const toggleDepartment = (deptId: string) => {
    const newExpanded = new Set(expandedDepts);
    if (newExpanded.has(deptId)) {
      newExpanded.delete(deptId);
    } else {
      newExpanded.add(deptId);
    }
    setExpandedDepts(newExpanded);
  };

  const toggleSubDepartment = (subDeptId: string) => {
    const newExpanded = new Set(expandedSubDepts);
    if (newExpanded.has(subDeptId)) {
      newExpanded.delete(subDeptId);
    } else {
      newExpanded.add(subDeptId);
    }
    setExpandedSubDepts(newExpanded);
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">
      <div className="mb-6">
        <h2 className="text-[#111827] text-2xl mb-2">Complete Job Hierarchy Map</h2>
        <p className="text-[#6B7280]">
          Explore all state government departments, sub-departments, and job roles
        </p>
      </div>

      <div className="space-y-4">
        {jobsHierarchy.map((dept, deptIdx) => {
          const isExpanded = expandedDepts.has(dept.id);
          
          return (
            <div key={dept.id} className="border-l-4 border-gray-200 pl-4">
              {/* Department Node */}
              <button
                onClick={() => toggleDepartment(dept.id)}
                className={`w-full text-left bg-gradient-to-r ${dept.color} text-white rounded-2xl p-4 hover:shadow-lg transition-all group`}
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
                  {isExpanded ? (
                    <ChevronDown className="group-hover:scale-110 transition-transform" size={24} />
                  ) : (
                    <ChevronRight className="group-hover:scale-110 transition-transform" size={24} />
                  )}
                </div>
              </button>

              {/* Sub-Departments */}
              {isExpanded && (
                <div className="mt-4 ml-6 space-y-3 border-l-2 border-gray-300 pl-4">
                  {dept.subDepartments.map((subDept) => {
                    const isSubExpanded = expandedSubDepts.has(subDept.id);
                    
                    return (
                      <div key={subDept.id}>
                        {/* Sub-Department Node */}
                        <button
                          onClick={() => toggleSubDepartment(subDept.id)}
                          className="w-full text-left bg-gray-100 hover:bg-gray-200 rounded-xl p-3 transition-all group"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-[#111827]">{subDept.name}</h4>
                              <p className="text-sm text-[#6B7280]">
                                {subDept.jobs.length} job roles
                              </p>
                            </div>
                            {isSubExpanded ? (
                              <ChevronDown className="text-[#6B7280] group-hover:scale-110 transition-transform" size={20} />
                            ) : (
                              <ChevronRight className="text-[#6B7280] group-hover:scale-110 transition-transform" size={20} />
                            )}
                          </div>
                        </button>

                        {/* Job Roles */}
                        {isSubExpanded && (
                          <div className="mt-3 ml-6 space-y-2 border-l-2 border-gray-200 pl-4">
                            {subDept.jobs.map((job) => (
                              <button
                                key={job.id}
                                onClick={() => onJobClick(job.id, dept.id, subDept.id)}
                                className="w-full text-left bg-white hover:bg-blue-50 border border-gray-200 hover:border-[#2B59FF] rounded-lg p-3 transition-all group"
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex-1">
                                    <h5 className="text-[#111827] group-hover:text-[#2B59FF]">
                                      {job.title}
                                    </h5>
                                    <p className="text-sm text-[#6B7280] mt-1">
                                      {job.salaryRange}
                                    </p>
                                  </div>
                                  <ChevronRight className="text-[#6B7280] group-hover:text-[#2B59FF] opacity-0 group-hover:opacity-100 transition-all" size={18} />
                                </div>
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

      {/* Legend */}
      <div className="mt-8 bg-gray-50 rounded-2xl p-6">
        <h3 className="text-[#111827] mb-4">How to Navigate</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex-shrink-0"></div>
            <div>
              <p className="text-[#111827]">Department</p>
              <p className="text-sm text-[#6B7280]">Main category</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex-shrink-0"></div>
            <div>
              <p className="text-[#111827]">Sub-Department</p>
              <p className="text-sm text-[#6B7280]">Specific division</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-white border-2 border-gray-200 rounded-lg flex-shrink-0"></div>
            <div>
              <p className="text-[#111827]">Job Role</p>
              <p className="text-sm text-[#6B7280]">Click to view details</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
