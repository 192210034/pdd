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

export const centralGovernmentJobs: Department[] = [
  {
    id: "upsc",
    name: "UPSC - Civil Services",
    color: "from-red-600 to-red-700",
    icon: "🏛️",
    subDepartments: [
      {
        id: "upsc-group-a",
        name: "Group A Services",
        jobs: [
          {
            id: "ias",
            title: "IAS (Indian Administrative Service)",
            responsibilities: [
              "District administration and law and order",
              "Policy formulation and implementation",
              "Revenue collection and public welfare",
              "Disaster management and coordination"
            ],
            eligibility: "Degree, Age 21-32 years",
            salaryRange: "₹56,100 - ₹2,50,000",
            exams: ["UPSC CSE Prelims", "UPSC CSE Mains", "Interview"]
          },
          {
            id: "ips",
            title: "IPS (Indian Police Service)",
            responsibilities: [
              "Maintain law and order",
              "Crime investigation and prevention",
              "Intelligence and security operations",
              "Police force management"
            ],
            eligibility: "Degree, Age 21-32 years, Physical standards",
            salaryRange: "₹56,100 - ₹2,50,000",
            exams: ["UPSC CSE Prelims", "UPSC CSE Mains", "Interview", "Physical Test"]
          },
          {
            id: "ifs",
            title: "IFS (Indian Foreign Service)",
            responsibilities: [
              "Diplomatic representation abroad",
              "Foreign policy implementation",
              "Bilateral relations management",
              "Consular services"
            ],
            eligibility: "Degree, Age 21-32 years",
            salaryRange: "₹56,100 - ₹2,50,000",
            exams: ["UPSC CSE Prelims", "UPSC CSE Mains", "Interview"]
          },
          {
            id: "irs",
            title: "IRS (Indian Revenue Service)",
            responsibilities: [
              "Tax assessment and collection",
              "Revenue policy implementation",
              "Tax evasion investigation",
              "Taxpayer services"
            ],
            eligibility: "Degree, Age 21-32 years",
            salaryRange: "₹56,100 - ₹2,00,000",
            exams: ["UPSC CSE Prelims", "UPSC CSE Mains", "Interview"]
          },
          {
            id: "iaas",
            title: "IAAS (Indian Audit & Accounts Service)",
            responsibilities: [
              "Government accounts audit",
              "Financial compliance checking",
              "Expenditure monitoring",
              "Financial reporting"
            ],
            eligibility: "Degree with Commerce/Economics",
            salaryRange: "₹56,100 - ₹2,00,000",
            exams: ["UPSC CSE Prelims", "UPSC CSE Mains", "Interview"]
          },
          {
            id: "idas",
            title: "IDAS (Indian Defence Accounts Service)",
            responsibilities: [
              "Defence budget management",
              "Military accounts and audit",
              "Pension disbursement",
              "Defence expenditure control"
            ],
            eligibility: "Degree with Commerce/Economics",
            salaryRange: "₹56,100 - ₹2,00,000",
            exams: ["UPSC CSE Prelims", "UPSC CSE Mains", "Interview"]
          },
          {
            id: "ipos",
            title: "IPoS (Indian Postal Service)",
            responsibilities: [
              "Postal operations management",
              "Mail and parcel services",
              "Savings schemes administration",
              "Postal network expansion"
            ],
            eligibility: "Degree, Age 21-30 years",
            salaryRange: "₹44,900 - ₹1,42,400",
            exams: ["UPSC CSE Prelims", "UPSC CSE Mains", "Interview"]
          },
          {
            id: "irts",
            title: "IRTS (Indian Railway Traffic Service)",
            responsibilities: [
              "Railway commercial operations",
              "Passenger and freight management",
              "Revenue optimization",
              "Service quality improvement"
            ],
            eligibility: "Degree in any discipline",
            salaryRange: "₹56,100 - ₹2,00,000",
            exams: ["UPSC CSE Prelims", "UPSC CSE Mains", "Interview"]
          },
          {
            id: "iras",
            title: "IRAS (Indian Railway Accounts Service)",
            responsibilities: [
              "Railway financial management",
              "Budget preparation and control",
              "Accounts and audit",
              "Cost analysis"
            ],
            eligibility: "Degree with Commerce/Economics",
            salaryRange: "₹56,100 - ₹2,00,000",
            exams: ["UPSC CSE Prelims", "UPSC CSE Mains", "Interview"]
          },
          {
            id: "irps",
            title: "IRPS (Indian Railway Personnel Service)",
            responsibilities: [
              "Railway HR management",
              "Recruitment and training",
              "Employee welfare",
              "Industrial relations"
            ],
            eligibility: "Degree in any discipline",
            salaryRange: "₹56,100 - ₹2,00,000",
            exams: ["UPSC CSE Prelims", "UPSC CSE Mains", "Interview"]
          }
        ]
      }
    ]
  },
  {
    id: "central-secretariat",
    name: "Central Secretariat",
    color: "from-indigo-600 to-indigo-700",
    icon: "🏢",
    subDepartments: [
      {
        id: "cs-officers",
        name: "Officers & Staff",
        jobs: [
          {
            id: "section-officer",
            title: "Section Officer",
            responsibilities: [
              "File processing and noting",
              "Supervise clerical staff",
              "Policy implementation",
              "Correspondence handling"
            ],
            eligibility: "Degree, Age 18-30 years",
            salaryRange: "₹44,900 - ₹1,42,400",
            exams: ["SSC CHSL", "Departmental Exam"]
          },
          {
            id: "aso",
            title: "ASO (Assistant Section Officer)",
            responsibilities: [
              "Assist Section Officer",
              "Draft notes and letters",
              "File maintenance",
              "Administrative support"
            ],
            eligibility: "Degree",
            salaryRange: "₹35,400 - ₹1,12,400",
            exams: ["SSC CHSL"]
          },
          {
            id: "stenographer",
            title: "Stenographer Grade C/D",
            responsibilities: [
              "Take dictation in shorthand",
              "Type correspondence",
              "Maintain confidential files",
              "Secretarial assistance"
            ],
            eligibility: "12th pass, Stenography skills",
            salaryRange: "₹25,500 - ₹81,100",
            exams: ["SSC Stenographer"]
          },
          {
            id: "ssa",
            title: "SSA (Senior Secretariat Assistant)",
            responsibilities: [
              "Record maintenance",
              "Data entry and filing",
              "Correspondence typing",
              "Office support"
            ],
            eligibility: "12th pass",
            salaryRange: "₹29,200 - ₹92,300",
            exams: ["SSC CHSL"]
          },
          {
            id: "jsa",
            title: "JSA (Junior Secretariat Assistant)",
            responsibilities: [
              "Basic clerical work",
              "File sorting and indexing",
              "Data compilation",
              "Office assistance"
            ],
            eligibility: "12th pass",
            salaryRange: "₹25,500 - ₹81,100",
            exams: ["SSC CHSL"]
          },
          {
            id: "mts-cs",
            title: "MTS (Multi Tasking Staff)",
            responsibilities: [
              "Deliver files and documents",
              "Photocopying and scanning",
              "Office maintenance",
              "Assistance to staff"
            ],
            eligibility: "10th pass",
            salaryRange: "₹18,000 - ₹56,900",
            exams: ["SSC MTS"]
          }
        ]
      }
    ]
  },
  {
    id: "ssc",
    name: "SSC - Staff Selection Commission",
    color: "from-blue-600 to-blue-700",
    icon: "📝",
    subDepartments: [
      {
        id: "ssc-cgl",
        name: "SSC CGL Posts",
        jobs: [
          {
            id: "income-tax-inspector",
            title: "Income Tax Inspector",
            responsibilities: [
              "Tax assessment and verification",
              "Tax evasion investigation",
              "Taxpayer assistance",
              "Revenue collection"
            ],
            eligibility: "Degree",
            salaryRange: "₹44,900 - ₹1,42,400",
            exams: ["SSC CGL Tier 1", "Tier 2", "Tier 3"]
          },
          {
            id: "central-excise-inspector",
            title: "Central Excise Inspector",
            responsibilities: [
              "Excise duty assessment",
              "Factory inspections",
              "Duty evasion investigation",
              "Compliance monitoring"
            ],
            eligibility: "Degree",
            salaryRange: "₹44,900 - ₹1,42,400",
            exams: ["SSC CGL Tier 1", "Tier 2", "Tier 3"]
          },
          {
            id: "assistant-audit-officer",
            title: "Assistant Audit Officer",
            responsibilities: [
              "Government accounts audit",
              "Financial record verification",
              "Audit report preparation",
              "Compliance checking"
            ],
            eligibility: "Degree with Commerce",
            salaryRange: "₹44,900 - ₹1,42,400",
            exams: ["SSC CGL Tier 1", "Tier 2", "Tier 3"]
          },
          {
            id: "assistant",
            title: "Assistant (CSS, MEA, etc.)",
            responsibilities: [
              "Administrative work",
              "File management",
              "Correspondence handling",
              "Data compilation"
            ],
            eligibility: "Degree",
            salaryRange: "₹29,200 - ₹92,300",
            exams: ["SSC CGL Tier 1", "Tier 2"]
          },
          {
            id: "auditor",
            title: "Auditor",
            responsibilities: [
              "Financial audit",
              "Account verification",
              "Report preparation",
              "Compliance monitoring"
            ],
            eligibility: "Degree with Commerce",
            salaryRange: "₹29,200 - ₹92,300",
            exams: ["SSC CGL Tier 1", "Tier 2"]
          },
          {
            id: "accountant",
            title: "Accountant / Junior Accountant",
            responsibilities: [
              "Maintain accounts",
              "Financial record keeping",
              "Budget preparation",
              "Voucher verification"
            ],
            eligibility: "Degree with Commerce",
            salaryRange: "₹29,200 - ₹92,300",
            exams: ["SSC CGL Tier 1", "Tier 2"]
          },
          {
            id: "tax-assistant",
            title: "Tax Assistant",
            responsibilities: [
              "Tax record maintenance",
              "Return processing",
              "Taxpayer assistance",
              "Data entry"
            ],
            eligibility: "Degree",
            salaryRange: "₹29,200 - ₹92,300",
            exams: ["SSC CGL Tier 1", "Tier 2"]
          },
          {
            id: "statistical-investigator",
            title: "Statistical Investigator",
            responsibilities: [
              "Statistical data collection",
              "Survey conduct",
              "Data analysis",
              "Report compilation"
            ],
            eligibility: "Degree with Statistics/Maths",
            salaryRange: "₹29,200 - ₹92,300",
            exams: ["SSC CGL Tier 1", "Tier 2"]
          }
        ]
      },
      {
        id: "ssc-chsl",
        name: "SSC CHSL Posts",
        jobs: [
          {
            id: "ldc",
            title: "LDC (Lower Division Clerk)",
            responsibilities: [
              "Typing and data entry",
              "File maintenance",
              "Record keeping",
              "Office assistance"
            ],
            eligibility: "12th pass",
            salaryRange: "₹19,900 - ₹63,200",
            exams: ["SSC CHSL Tier 1", "Tier 2", "Typing Test"]
          },
          {
            id: "deo",
            title: "DEO (Data Entry Operator)",
            responsibilities: [
              "Computer data entry",
              "Database management",
              "Record digitization",
              "Data verification"
            ],
            eligibility: "12th pass with Computer knowledge",
            salaryRange: "₹25,500 - ₹81,100",
            exams: ["SSC CHSL Tier 1", "Tier 2", "Skill Test"]
          },
          {
            id: "pa-sa",
            title: "PA/SA (Postal/Sorting Assistant)",
            responsibilities: [
              "Mail sorting and delivery",
              "Counter operations",
              "Postal savings schemes",
              "Customer service"
            ],
            eligibility: "12th pass",
            salaryRange: "₹25,500 - ₹81,100",
            exams: ["SSC CHSL Tier 1", "Tier 2"]
          },
          {
            id: "court-clerk",
            title: "Court Clerk",
            responsibilities: [
              "Court record maintenance",
              "Case file management",
              "Order typing",
              "Judicial assistance"
            ],
            eligibility: "12th pass",
            salaryRange: "₹19,900 - ₹63,200",
            exams: ["SSC CHSL Tier 1", "Tier 2"]
          }
        ]
      },
      {
        id: "ssc-mts",
        name: "SSC MTS Posts",
        jobs: [
          {
            id: "mts",
            title: "Multi Tasking Staff",
            responsibilities: [
              "File delivery and dispatch",
              "Photocopying and scanning",
              "Office cleaning",
              "General assistance"
            ],
            eligibility: "10th pass",
            salaryRange: "₹18,000 - ₹56,900",
            exams: ["SSC MTS"]
          },
          {
            id: "havaldar",
            title: "Havaldar (CBIC & CBN)",
            responsibilities: [
              "Security duties",
              "Document delivery",
              "Office assistance",
              "Guard duty"
            ],
            eligibility: "10th pass",
            salaryRange: "₹18,000 - ₹56,900",
            exams: ["SSC MTS", "Physical Test"]
          }
        ]
      }
    ]
  },
  {
    id: "railways",
    name: "Indian Railways",
    color: "from-orange-600 to-orange-700",
    icon: "🚂",
    subDepartments: [
      {
        id: "railways-group-a-b",
        name: "Group A & B - Technical",
        jobs: [
          {
            id: "je-railways",
            title: "JE (Junior Engineer)",
            responsibilities: [
              "Maintenance of railway infrastructure",
              "Supervise technical staff",
              "Quality control",
              "Project execution"
            ],
            eligibility: "Diploma/BE in Engineering",
            salaryRange: "₹35,400 - ₹1,12,400",
            exams: ["RRB JE CBT 1", "CBT 2"]
          },
          {
            id: "sse",
            title: "SSE (Senior Section Engineer)",
            responsibilities: [
              "Section maintenance oversight",
              "Technical problem solving",
              "Safety compliance",
              "Staff management"
            ],
            eligibility: "BE/BTech",
            salaryRange: "₹44,900 - ₹1,42,400",
            exams: ["Direct Recruitment", "Departmental Exam"]
          }
        ]
      },
      {
        id: "railways-group-c",
        name: "Group C - Technical & Non-Technical",
        jobs: [
          {
            id: "technician",
            title: "Technician (Various trades)",
            responsibilities: [
              "Equipment maintenance",
              "Repair work",
              "Technical support",
              "Safety checks"
            ],
            eligibility: "ITI in relevant trade",
            salaryRange: "₹21,700 - ₹69,100",
            exams: ["RRB NTPC/Technician"]
          },
          {
            id: "tc",
            title: "TC (Ticket Collector)",
            responsibilities: [
              "Ticket checking",
              "Passenger assistance",
              "Revenue protection",
              "Train operations support"
            ],
            eligibility: "Degree",
            salaryRange: "₹21,700 - ₹69,100",
            exams: ["RRB NTPC"]
          },
          {
            id: "commercial-clerk",
            title: "Commercial Clerk",
            responsibilities: [
              "Ticket booking",
              "Reservation handling",
              "Revenue accounting",
              "Customer service"
            ],
            eligibility: "12th pass",
            salaryRange: "₹19,900 - ₹63,200",
            exams: ["RRB NTPC"]
          },
          {
            id: "station-master",
            title: "Station Master",
            responsibilities: [
              "Station operations management",
              "Train regulation",
              "Safety supervision",
              "Staff coordination"
            ],
            eligibility: "Degree",
            salaryRange: "₹29,200 - ₹92,300",
            exams: ["RRB NTPC"]
          }
        ]
      },
      {
        id: "railways-group-d",
        name: "Group D",
        jobs: [
          {
            id: "track-maintainer",
            title: "Track Maintainer",
            responsibilities: [
              "Railway track inspection",
              "Track repair and maintenance",
              "Safety monitoring",
              "Defect reporting"
            ],
            eligibility: "10th pass",
            salaryRange: "₹18,000 - ₹56,900",
            exams: ["RRB Group D"]
          },
          {
            id: "helper",
            title: "Helper (Various departments)",
            responsibilities: [
              "Assist technicians",
              "Material handling",
              "Cleaning and maintenance",
              "General support"
            ],
            eligibility: "10th pass",
            salaryRange: "₹18,000 - ₹56,900",
            exams: ["RRB Group D"]
          },
          {
            id: "porter",
            title: "Porter",
            responsibilities: [
              "Assist passengers with luggage",
              "Platform maintenance",
              "Crowd management",
              "General station duties"
            ],
            eligibility: "10th pass",
            salaryRange: "₹18,000 - ₹56,900",
            exams: ["RRB Group D"]
          },
          {
            id: "pointsman",
            title: "Pointsman",
            responsibilities: [
              "Operate railway points/signals",
              "Train movement coordination",
              "Safety checks",
              "Communication with control"
            ],
            eligibility: "10th pass",
            salaryRange: "₹18,000 - ₹56,900",
            exams: ["RRB Group D"]
          }
        ]
      }
    ]
  },
  {
    id: "defence",
    name: "Defence Services",
    color: "from-green-700 to-green-800",
    icon: "🎖️",
    subDepartments: [
      {
        id: "commissioned",
        name: "Commissioned Officers",
        jobs: [
          {
            id: "army-officer",
            title: "Army Officer (Various Arms)",
            responsibilities: [
              "Lead military operations",
              "Command troops",
              "Strategic planning",
              "National security"
            ],
            eligibility: "Degree, Age 19-24 years",
            salaryRange: "₹56,100 - ₹1,77,500",
            exams: ["NDA", "CDS", "AFCAT", "SSB Interview"]
          },
          {
            id: "navy-officer",
            title: "Navy Officer",
            responsibilities: [
              "Naval operations",
              "Ship/submarine command",
              "Maritime security",
              "Technical operations"
            ],
            eligibility: "BE/BTech or BSc with Physics & Maths",
            salaryRange: "₹56,100 - ₹1,77,500",
            exams: ["NDA", "CDS", "SSB Interview"]
          },
          {
            id: "air-force-officer",
            title: "Air Force Officer",
            responsibilities: [
              "Air operations",
              "Aircraft operations",
              "Air defence",
              "Technical management"
            ],
            eligibility: "BE/BTech or BSc with Physics & Maths",
            salaryRange: "₹56,100 - ₹1,77,500",
            exams: ["NDA", "AFCAT", "SSB Interview"]
          }
        ]
      },
      {
        id: "non-commissioned",
        name: "Non-Commissioned & Enlisted",
        jobs: [
          {
            id: "soldier",
            title: "Soldier (Various categories)",
            responsibilities: [
              "Combat operations",
              "Guard duty",
              "Equipment maintenance",
              "Follow orders and protocols"
            ],
            eligibility: "10th/12th pass, Physical standards",
            salaryRange: "₹21,700 - ₹69,100",
            exams: ["Physical Test", "Medical", "Written Test"]
          },
          {
            id: "sailor",
            title: "Sailor",
            responsibilities: [
              "Naval operations support",
              "Ship maintenance",
              "Technical duties",
              "Maritime operations"
            ],
            eligibility: "10th/12th pass",
            salaryRange: "₹21,700 - ₹69,100",
            exams: ["Written Test", "Physical Test", "Medical"]
          },
          {
            id: "airman",
            title: "Airman",
            responsibilities: [
              "Aircraft maintenance",
              "Technical support",
              "Ground operations",
              "Security duties"
            ],
            eligibility: "10th/12th pass with Science",
            salaryRange: "₹21,700 - ₹69,100",
            exams: ["Written Test", "Physical Test", "Medical"]
          }
        ]
      },
      {
        id: "defence-civilian",
        name: "Civilian Posts",
        jobs: [
          {
            id: "defence-clerk",
            title: "Clerk (Army/Navy/Air Force)",
            responsibilities: [
              "Administrative work",
              "Record keeping",
              "Data entry",
              "Office support"
            ],
            eligibility: "12th pass",
            salaryRange: "₹19,900 - ₹63,200",
            exams: ["Written Test", "Typing Test"]
          },
          {
            id: "mts-defence",
            title: "MTS (Defence)",
            responsibilities: [
              "Office assistance",
              "File delivery",
              "Cleaning and maintenance",
              "General support"
            ],
            eligibility: "10th pass",
            salaryRange: "₹18,000 - ₹56,900",
            exams: ["Written Test"]
          }
        ]
      }
    ]
  },
  {
    id: "capf",
    name: "CAPF - Central Armed Police Forces",
    color: "from-red-700 to-red-800",
    icon: "👮‍♂️",
    subDepartments: [
      {
        id: "capf-constables",
        name: "Constabulary",
        jobs: [
          {
            id: "capf-constable",
            title: "Constable (BSF, CRPF, CISF, SSB, ITBP)",
            responsibilities: [
              "Border security",
              "Internal security",
              "Counter-insurgency",
              "VIP protection"
            ],
            eligibility: "10th/12th pass, Physical standards",
            salaryRange: "₹21,700 - ₹69,100",
            exams: ["Written Test", "Physical Test", "Medical"]
          },
          {
            id: "head-constable",
            title: "Head Constable",
            responsibilities: [
              "Lead constable team",
              "Operational duties",
              "Training juniors",
              "Security operations"
            ],
            eligibility: "12th pass, Experience",
            salaryRange: "₹25,500 - ₹81,100",
            exams: ["Promotion/Direct Recruitment"]
          }
        ]
      },
      {
        id: "capf-officers",
        name: "Officers",
        jobs: [
          {
            id: "asi-capf",
            title: "ASI (Assistant Sub-Inspector)",
            responsibilities: [
              "Supervise constables",
              "Operational planning",
              "Security management",
              "Report preparation"
            ],
            eligibility: "12th pass",
            salaryRange: "₹29,200 - ₹92,300",
            exams: ["SSC CPO", "Physical Test"]
          },
          {
            id: "si-capf",
            title: "SI (Sub-Inspector)",
            responsibilities: [
              "Lead operations",
              "Team management",
              "Intelligence gathering",
              "Security coordination"
            ],
            eligibility: "Degree",
            salaryRange: "₹35,400 - ₹1,12,400",
            exams: ["SSC CPO", "Physical Test", "Medical"]
          }
        ]
      },
      {
        id: "capf-tradesmen",
        name: "Tradesmen",
        jobs: [
          {
            id: "tradesman",
            title: "Tradesman (Various trades)",
            responsibilities: [
              "Technical maintenance",
              "Equipment repair",
              "Support services",
              "Workshop operations"
            ],
            eligibility: "10th pass + ITI",
            salaryRange: "₹18,000 - ₹56,900",
            exams: ["Trade Test", "Physical Test"]
          }
        ]
      }
    ]
  },
  {
    id: "banking",
    name: "Banking Sector",
    color: "from-green-600 to-green-700",
    icon: "🏦",
    subDepartments: [
      {
        id: "sbi",
        name: "SBI - State Bank of India",
        jobs: [
          {
            id: "sbi-po",
            title: "PO (Probationary Officer)",
            responsibilities: [
              "Branch banking operations",
              "Loan processing",
              "Customer service",
              "Team management"
            ],
            eligibility: "Degree, Age 21-30 years",
            salaryRange: "₹36,000 - ₹70,000",
            exams: ["SBI PO Prelims", "Mains", "Interview"]
          },
          {
            id: "sbi-clerk",
            title: "Clerk",
            responsibilities: [
              "Customer transactions",
              "Account maintenance",
              "Cash handling",
              "Data entry"
            ],
            eligibility: "Degree, Age 20-28 years",
            salaryRange: "₹17,900 - ₹47,920",
            exams: ["SBI Clerk Prelims", "Mains"]
          },
          {
            id: "sbi-so",
            title: "SO (Specialist Officer)",
            responsibilities: [
              "Specialized banking services",
              "IT/HR/Legal/Marketing",
              "Technical support",
              "Policy implementation"
            ],
            eligibility: "Relevant degree/certification",
            salaryRange: "₹23,700 - ₹42,020",
            exams: ["SBI SO Exam", "Interview"]
          }
        ]
      },
      {
        id: "ibps",
        name: "IBPS - Public Sector Banks",
        jobs: [
          {
            id: "ibps-po",
            title: "PO (Probationary Officer)",
            responsibilities: [
              "Banking operations",
              "Loan processing and recovery",
              "Customer relationship",
              "Branch management"
            ],
            eligibility: "Degree",
            salaryRange: "₹36,000 - ₹70,000",
            exams: ["IBPS PO Prelims", "Mains", "Interview"]
          },
          {
            id: "ibps-clerk",
            title: "Clerk",
            responsibilities: [
              "Counter operations",
              "Account handling",
              "Customer support",
              "Data processing"
            ],
            eligibility: "Degree",
            salaryRange: "₹19,900 - ₹46,600",
            exams: ["IBPS Clerk Prelims", "Mains"]
          },
          {
            id: "ibps-so",
            title: "Specialist Officer",
            responsibilities: [
              "IT/Agriculture/Legal/HR support",
              "Specialized services",
              "Technical assistance",
              "Consultancy"
            ],
            eligibility: "Relevant specialization degree",
            salaryRange: "₹23,700 - ₹52,020",
            exams: ["IBPS SO Exam", "Interview"]
          },
          {
            id: "ibps-rrb-po",
            title: "RRB - PO (Officer Scale I, II, III)",
            responsibilities: [
              "Rural banking operations",
              "Agricultural loans",
              "Rural development schemes",
              "Branch operations"
            ],
            eligibility: "Degree",
            salaryRange: "₹30,000 - ₹65,000",
            exams: ["IBPS RRB PO Prelims", "Mains", "Interview"]
          },
          {
            id: "ibps-rrb-clerk",
            title: "RRB - Office Assistant",
            responsibilities: [
              "Rural branch support",
              "Customer service",
              "Account maintenance",
              "Cash handling"
            ],
            eligibility: "Degree",
            salaryRange: "₹15,000 - ₹35,000",
            exams: ["IBPS RRB Clerk Prelims", "Mains"]
          }
        ]
      },
      {
        id: "rbi",
        name: "RBI - Reserve Bank of India",
        jobs: [
          {
            id: "rbi-grade-b",
            title: "RBI Grade B Officer",
            responsibilities: [
              "Monetary policy implementation",
              "Banking supervision",
              "Economic research",
              "Currency management"
            ],
            eligibility: "Degree with 50%+",
            salaryRange: "₹67,390 - ₹2,20,000",
            exams: ["RBI Grade B Phase 1", "Phase 2", "Interview"]
          },
          {
            id: "rbi-assistant",
            title: "RBI Assistant",
            responsibilities: [
              "Administrative support",
              "Record keeping",
              "Data management",
              "Office operations"
            ],
            eligibility: "Degree",
            salaryRange: "₹30,560 - ₹47,920",
            exams: ["RBI Assistant Prelims", "Mains"]
          }
        ]
      },
      {
        id: "nabard",
        name: "NABARD",
        jobs: [
          {
            id: "nabard-grade-a",
            title: "Grade A Officer",
            responsibilities: [
              "Rural development financing",
              "Agricultural credit",
              "Project appraisal",
              "Policy formulation"
            ],
            eligibility: "Degree in Agriculture/Engineering/Finance",
            salaryRange: "₹42,020 - ₹1,51,280",
            exams: ["NABARD Grade A Prelims", "Mains", "Interview"]
          },
          {
            id: "nabard-grade-b",
            title: "Grade B Officer",
            responsibilities: [
              "Field operations",
              "Loan processing",
              "Farmer assistance",
              "Scheme implementation"
            ],
            eligibility: "Degree",
            salaryRange: "₹30,000 - ₹90,000",
            exams: ["NABARD Grade B Exam", "Interview"]
          }
        ]
      }
    ]
  },
  {
    id: "psu",
    name: "PSUs - Public Sector Undertakings",
    color: "from-purple-600 to-purple-700",
    icon: "🏭",
    subDepartments: [
      {
        id: "oil-gas",
        name: "Oil & Gas PSUs",
        jobs: [
          {
            id: "psu-engineer",
            title: "Engineer (ONGC, IOCL, GAIL, BPCL, HPCL)",
            responsibilities: [
              "Project planning and execution",
              "Operations management",
              "Quality control",
              "Technical supervision"
            ],
            eligibility: "BE/BTech in relevant discipline",
            salaryRange: "₹50,000 - ₹1,80,000",
            exams: ["GATE", "Company Exam", "Interview"]
          },
          {
            id: "psu-technician",
            title: "Technician",
            responsibilities: [
              "Equipment operation",
              "Maintenance work",
              "Technical support",
              "Safety compliance"
            ],
            eligibility: "Diploma/ITI",
            salaryRange: "₹20,000 - ₹50,000",
            exams: ["Company Exam", "Trade Test"]
          },
          {
            id: "psu-operator",
            title: "Operator",
            responsibilities: [
              "Machine operation",
              "Process monitoring",
              "Safety checks",
              "Production support"
            ],
            eligibility: "ITI/Diploma",
            salaryRange: "₹18,000 - ₹40,000",
            exams: ["Written Test", "Skill Test"]
          }
        ]
      },
      {
        id: "power-psu",
        name: "Power Sector PSUs",
        jobs: [
          {
            id: "ntpc-engineer",
            title: "Engineer (NTPC, NHPC, PGCIL)",
            responsibilities: [
              "Power plant operations",
              "Maintenance management",
              "Project execution",
              "Technical supervision"
            ],
            eligibility: "BE/BTech in Electrical/Mechanical",
            salaryRange: "₹60,000 - ₹2,00,000",
            exams: ["GATE", "Company Exam", "Interview"]
          },
          {
            id: "ntpc-technician",
            title: "Technician",
            responsibilities: [
              "Equipment maintenance",
              "Operations support",
              "Technical assistance",
              "Safety protocols"
            ],
            eligibility: "Diploma in Engineering",
            salaryRange: "₹25,000 - ₹60,000",
            exams: ["Company Exam", "Trade Test"]
          }
        ]
      },
      {
        id: "manufacturing-psu",
        name: "Manufacturing PSUs",
        jobs: [
          {
            id: "bhel-engineer",
            title: "Engineer (BHEL, HAL, BEL)",
            responsibilities: [
              "Manufacturing operations",
              "Quality assurance",
              "Project management",
              "R&D activities"
            ],
            eligibility: "BE/BTech",
            salaryRange: "₹50,000 - ₹1,60,000",
            exams: ["GATE", "Company Exam", "Interview"]
          },
          {
            id: "psu-supervisor",
            title: "Supervisor",
            responsibilities: [
              "Shop floor supervision",
              "Production monitoring",
              "Quality control",
              "Worker coordination"
            ],
            eligibility: "Diploma in Engineering",
            salaryRange: "₹30,000 - ₹80,000",
            exams: ["Company Exam"]
          }
        ]
      },
      {
        id: "psu-support",
        name: "Administrative & Support Staff",
        jobs: [
          {
            id: "psu-clerk",
            title: "Clerk/Cashier",
            responsibilities: [
              "Office administration",
              "Account maintenance",
              "Record keeping",
              "Customer service"
            ],
            eligibility: "12th/Degree",
            salaryRange: "₹20,000 - ₹50,000",
            exams: ["Company Exam"]
          },
          {
            id: "psu-driver",
            title: "Driver",
            responsibilities: [
              "Vehicle operation",
              "Official transport",
              "Vehicle maintenance",
              "Log book maintenance"
            ],
            eligibility: "10th pass, Valid DL",
            salaryRange: "₹18,000 - ₹35,000",
            exams: ["Driving Test", "Written Test"]
          },
          {
            id: "psu-helper",
            title: "Helper/Attendant",
            responsibilities: [
              "General assistance",
              "Material handling",
              "Cleaning and maintenance",
              "Support services"
            ],
            eligibility: "8th/10th pass",
            salaryRange: "₹15,000 - ₹25,000",
            exams: ["Written Test"]
          }
        ]
      }
    ]
  },
  {
    id: "india-post",
    name: "India Post",
    color: "from-yellow-600 to-yellow-700",
    icon: "📮",
    subDepartments: [
      {
        id: "postal-officers",
        name: "Officers",
        jobs: [
          {
            id: "postal-assistant",
            title: "PA (Postal Assistant)",
            responsibilities: [
              "Counter operations",
              "Mail sorting",
              "Savings schemes",
              "Customer service"
            ],
            eligibility: "12th pass",
            salaryRange: "₹25,500 - ₹81,100",
            exams: ["India Post PA/SA Exam"]
          },
          {
            id: "sorting-assistant",
            title: "SA (Sorting Assistant)",
            responsibilities: [
              "Mail sorting and dispatch",
              "Speed post operations",
              "Record maintenance",
              "Logistics coordination"
            ],
            eligibility: "12th pass",
            salaryRange: "₹25,500 - ₹81,100",
            exams: ["India Post PA/SA Exam"]
          }
        ]
      },
      {
        id: "postal-staff",
        name: "Staff & GDS",
        jobs: [
          {
            id: "postman",
            title: "Postman/Mail Guard",
            responsibilities: [
              "Mail delivery",
              "Money order delivery",
              "Route management",
              "Customer interaction"
            ],
            eligibility: "10th pass",
            salaryRange: "₹18,000 - ₹56,900",
            exams: ["India Post GDS Exam"]
          },
          {
            id: "mts-post",
            title: "MTS (Multi Tasking Staff)",
            responsibilities: [
              "Office support",
              "Mail handling",
              "Cleaning",
              "General assistance"
            ],
            eligibility: "10th pass",
            salaryRange: "₹18,000 - ₹56,900",
            exams: ["India Post MTS Exam"]
          },
          {
            id: "gds",
            title: "GDS (Gramin Dak Sevak)",
            responsibilities: [
              "Rural postal services",
              "Branch post office operations",
              "Savings schemes",
              "Mail delivery"
            ],
            eligibility: "10th pass",
            salaryRange: "₹12,000 - ₹25,000",
            exams: ["State-wise GDS Exam"]
          }
        ]
      }
    ]
  },
  {
    id: "intelligence",
    name: "Intelligence & Investigation",
    color: "from-gray-700 to-gray-800",
    icon: "🕵️",
    subDepartments: [
      {
        id: "ib-raw",
        name: "IB & RAW",
        jobs: [
          {
            id: "ib-acio",
            title: "ACIO (IB)",
            responsibilities: [
              "Intelligence gathering",
              "Counter-terrorism operations",
              "Surveillance",
              "Security analysis"
            ],
            eligibility: "Degree",
            salaryRange: "₹44,900 - ₹1,42,400",
            exams: ["IB ACIO Tier 1", "Tier 2", "Interview"]
          },
          {
            id: "ib-sa",
            title: "Security Assistant (IB)",
            responsibilities: [
              "Field operations",
              "Information collection",
              "Report preparation",
              "Surveillance support"
            ],
            eligibility: "12th pass",
            salaryRange: "₹29,200 - ₹92,300",
            exams: ["IB SA Exam"]
          }
        ]
      },
      {
        id: "cbi",
        name: "CBI",
        jobs: [
          {
            id: "cbi-inspector",
            title: "Inspector",
            responsibilities: [
              "Criminal investigations",
              "Corruption cases",
              "Evidence collection",
              "Case file preparation"
            ],
            eligibility: "Degree",
            salaryRange: "₹44,900 - ₹1,42,400",
            exams: ["SSC CGL", "Departmental Selection"]
          }
        ]
      }
    ]
  },
  {
    id: "education",
    name: "Central Universities & Institutes",
    color: "from-blue-500 to-blue-600",
    icon: "🎓",
    subDepartments: [
      {
        id: "faculty",
        name: "Teaching Staff",
        jobs: [
          {
            id: "professor",
            title: "Professor/Associate Professor",
            responsibilities: [
              "Teaching and research",
              "Curriculum development",
              "Student mentoring",
              "Academic administration"
            ],
            eligibility: "PhD + NET/SLET",
            salaryRange: "₹1,44,200 - ₹2,18,200",
            exams: ["UGC NET", "University Interview"]
          },
          {
            id: "assistant-professor",
            title: "Assistant Professor",
            responsibilities: [
              "Classroom teaching",
              "Research work",
              "Exam conduct",
              "Student guidance"
            ],
            eligibility: "PG + NET/PhD",
            salaryRange: "₹57,700 - ₹1,82,400",
            exams: ["UGC NET", "University Exam"]
          }
        ]
      },
      {
        id: "university-non-teaching",
        name: "Non-Teaching Staff",
        jobs: [
          {
            id: "university-clerk",
            title: "Clerk",
            responsibilities: [
              "Administrative work",
              "Student records",
              "Correspondence",
              "Data management"
            ],
            eligibility: "12th/Degree",
            salaryRange: "₹19,900 - ₹63,200",
            exams: ["University Exam"]
          },
          {
            id: "lab-attendant",
            title: "Lab Attendant",
            responsibilities: [
              "Lab equipment maintenance",
              "Assist in experiments",
              "Stock management",
              "Cleaning and safety"
            ],
            eligibility: "10th/12th pass",
            salaryRange: "₹18,000 - ₹56,900",
            exams: ["University Exam"]
          },
          {
            id: "library-attendant",
            title: "Library Attendant",
            responsibilities: [
              "Book issue and return",
              "Shelf arrangement",
              "Record maintenance",
              "Student assistance"
            ],
            eligibility: "12th pass",
            salaryRange: "₹18,000 - ₹56,900",
            exams: ["University Exam"]
          },
          {
            id: "university-peon",
            title: "Peon/Attendant",
            responsibilities: [
              "File delivery",
              "Office cleaning",
              "Tea/water service",
              "General assistance"
            ],
            eligibility: "8th/10th pass",
            salaryRange: "₹15,000 - ₹47,600",
            exams: ["University Exam"]
          }
        ]
      }
    ]
  },
  {
    id: "autonomous",
    name: "Autonomous Bodies",
    color: "from-teal-600 to-teal-700",
    icon: "🔬",
    subDepartments: [
      {
        id: "aiims",
        name: "AIIMS",
        jobs: [
          {
            id: "aiims-faculty",
            title: "Faculty (Professor, Associate, Assistant)",
            responsibilities: [
              "Medical teaching",
              "Patient treatment",
              "Research",
              "Academic administration"
            ],
            eligibility: "MBBS + MD/MS",
            salaryRange: "₹1,00,000 - ₹2,50,000",
            exams: ["AIIMS Faculty Exam", "Interview"]
          },
          {
            id: "aiims-nursing",
            title: "Nursing Officer",
            responsibilities: [
              "Patient care",
              "Medical assistance",
              "Ward management",
              "Health monitoring"
            ],
            eligibility: "BSc Nursing",
            salaryRange: "₹44,900 - ₹1,42,400",
            exams: ["AIIMS Nursing Exam"]
          },
          {
            id: "aiims-group-c",
            title: "Group C (Technician, Clerk, etc.)",
            responsibilities: [
              "Technical/Administrative support",
              "Record keeping",
              "Equipment handling",
              "Office work"
            ],
            eligibility: "12th/Diploma",
            salaryRange: "₹19,900 - ₹63,200",
            exams: ["AIIMS Group C Exam"]
          }
        ]
      },
      {
        id: "isro",
        name: "ISRO",
        jobs: [
          {
            id: "isro-scientist",
            title: "Scientist/Engineer",
            responsibilities: [
              "Space research",
              "Satellite development",
              "Launch vehicle design",
              "Mission operations"
            ],
            eligibility: "BE/BTech + GATE",
            salaryRange: "₹56,100 - ₹1,77,500",
            exams: ["ISRO Centralized Exam", "Interview"]
          },
          {
            id: "isro-technician",
            title: "Technician",
            responsibilities: [
              "Equipment maintenance",
              "Technical support",
              "Lab operations",
              "Assembly work"
            ],
            eligibility: "Diploma/ITI",
            salaryRange: "₹21,700 - ₹69,100",
            exams: ["ISRO Technical Exam"]
          }
        ]
      },
      {
        id: "drdo",
        name: "DRDO",
        jobs: [
          {
            id: "drdo-scientist",
            title: "Scientist",
            responsibilities: [
              "Defence R&D",
              "Weapon systems development",
              "Technology research",
              "Project management"
            ],
            eligibility: "BE/BTech + GATE",
            salaryRange: "₹56,100 - ₹1,77,500",
            exams: ["DRDO Exam", "Interview"]
          },
          {
            id: "drdo-tech-a",
            title: "Technical Assistant",
            responsibilities: [
              "Lab assistance",
              "Equipment operation",
              "Data collection",
              "Technical support"
            ],
            eligibility: "Diploma/BSc",
            salaryRange: "₹25,500 - ₹81,100",
            exams: ["DRDO Exam"]
          }
        ]
      },
      {
        id: "csir",
        name: "CSIR",
        jobs: [
          {
            id: "csir-scientist",
            title: "Scientist",
            responsibilities: [
              "Scientific research",
              "Lab experiments",
              "Publications",
              "Project leadership"
            ],
            eligibility: "MSc/PhD + NET",
            salaryRange: "₹56,100 - ₹1,77,500",
            exams: ["CSIR NET", "Interview"]
          },
          {
            id: "csir-tech",
            title: "Technical Officer",
            responsibilities: [
              "Lab management",
              "Equipment maintenance",
              "Research support",
              "Data analysis"
            ],
            eligibility: "BSc/MSc",
            salaryRange: "₹35,400 - ₹1,12,400",
            exams: ["CSIR Exam"]
          }
        ]
      }
    ]
  },
  {
    id: "group-d-central",
    name: "Central Government Group D",
    color: "from-gray-600 to-gray-700",
    icon: "👷",
    subDepartments: [
      {
        id: "central-group-d",
        name: "Support Staff",
        jobs: [
          {
            id: "peon",
            title: "Peon",
            responsibilities: [
              "File and document delivery",
              "Office maintenance",
              "Assistance to staff",
              "General office support"
            ],
            eligibility: "8th/10th pass",
            salaryRange: "₹18,000 - ₹56,900",
            exams: ["SSC MTS", "Departmental Exam"]
          },
          {
            id: "daftary",
            title: "Daftary",
            responsibilities: [
              "Record room management",
              "File tracking",
              "Document organization",
              "Archive maintenance"
            ],
            eligibility: "10th pass",
            salaryRange: "₹18,000 - ₹56,900",
            exams: ["Departmental Exam"]
          },
          {
            id: "chowkidar",
            title: "Chowkidar/Watchman",
            responsibilities: [
              "Security and vigilance",
              "Premises patrol",
              "Entry/exit monitoring",
              "Property protection"
            ],
            eligibility: "8th/10th pass",
            salaryRange: "₹18,000 - ₹56,900",
            exams: ["Written Test"]
          },
          {
            id: "safaiwala",
            title: "Safaiwala/Sweeper",
            responsibilities: [
              "Office cleaning",
              "Sanitation maintenance",
              "Garbage disposal",
              "Hygiene upkeep"
            ],
            eligibility: "5th/8th pass",
            salaryRange: "₹15,000 - ₹47,600",
            exams: ["Written Test"]
          },
          {
            id: "mali",
            title: "Mali/Gardener",
            responsibilities: [
              "Garden maintenance",
              "Plant care",
              "Landscaping",
              "Grounds upkeep"
            ],
            eligibility: "8th pass",
            salaryRange: "₹15,000 - ₹47,600",
            exams: ["Skill Test"]
          },
          {
            id: "farash",
            title: "Farash",
            responsibilities: [
              "Dusting and cleaning",
              "Furniture arrangement",
              "Meeting hall setup",
              "Office upkeep"
            ],
            eligibility: "8th/10th pass",
            salaryRange: "₹15,000 - ₹47,600",
            exams: ["Written Test"]
          }
        ]
      }
    ]
  }
];
