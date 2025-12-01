import { centralGovernmentJobs } from "./centralJobsData";
import { jobsHierarchy as stateGovernmentJobs } from "./jobsData";

export interface JobRole {
  id: string;
  title: string;
  responsibilities: string[];
  eligibility: string;
  salaryRange: string;
  exams: string[];
}

export interface SubDepartment {
  id: string;
  name: string;
  jobs: JobRole[];
}

export interface Department {
  id: string;
  name: string;
  color: string;
  icon: string;
  subDepartments: SubDepartment[];
}

export interface JobCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  departments: Department[];
}

export const indianGovernmentJobs: JobCategory[] = [
  {
    id: "central",
    name: "Central Government Jobs",
    description: "All-India services, ministries, PSUs, and central departments",
    icon: "🇮🇳",
    color: "from-orange-500 to-orange-600",
    departments: centralGovernmentJobs
  },
  {
    id: "state",
    name: "State Government Jobs",
    description: "State departments, secretariat, courts, police, and local bodies",
    icon: "🏛️",
    color: "from-blue-500 to-blue-600",
    departments: stateGovernmentJobs
  }
];

// Helper function to get all jobs across categories
export function getAllJobs() {
  const allJobs: Array<{
    job: JobRole;
    department: string;
    departmentId: string;
    subDepartment: string;
    subDepartmentId: string;
    departmentColor: string;
    departmentIcon: string;
    category: string;
    categoryId: string;
  }> = [];

  indianGovernmentJobs.forEach((category) => {
    category.departments.forEach((dept) => {
      dept.subDepartments.forEach((subDept) => {
        subDept.jobs.forEach((job) => {
          allJobs.push({
            job,
            department: dept.name,
            departmentId: dept.id,
            subDepartment: subDept.name,
            subDepartmentId: subDept.id,
            departmentColor: dept.color,
            departmentIcon: dept.icon,
            category: category.name,
            categoryId: category.id,
          });
        });
      });
    });
  });

  return allJobs;
}

// Get statistics
export function getStatistics() {
  const allJobs = getAllJobs();
  
  const centralJobs = allJobs.filter(j => j.categoryId === "central");
  const stateJobs = allJobs.filter(j => j.categoryId === "state");
  
  const totalDepartments = indianGovernmentJobs.reduce(
    (sum, cat) => sum + cat.departments.length,
    0
  );
  
  const totalSubDepartments = indianGovernmentJobs.reduce(
    (sum, cat) => sum + cat.departments.reduce(
      (s, dept) => s + dept.subDepartments.length,
      0
    ),
    0
  );

  return {
    totalJobs: allJobs.length,
    centralJobsCount: centralJobs.length,
    stateJobsCount: stateJobs.length,
    totalDepartments,
    totalSubDepartments,
    categories: indianGovernmentJobs.length
  };
}
