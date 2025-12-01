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

export const jobsHierarchy: Department[] = [
  {
    id: "secretariat",
    name: "Secretariat / Sachivalayam",
    color: "from-blue-500 to-blue-600",
    icon: "🏛️",
    subDepartments: [
      {
        id: "village-secretariat",
        name: "Village Secretariat",
        jobs: [
          {
            id: "vro",
            title: "VRO (Village Revenue Officer)",
            responsibilities: [
              "Maintain land records and revenue documents",
              "Issue certificates (income, caste, residence)",
              "Collect taxes and fees",
              "Supervise village administrative work"
            ],
            eligibility: "Degree, Computer knowledge",
            salaryRange: "₹25,000 - ₹45,000",
            exams: ["State PSC", "Departmental Exam"]
          },
          {
            id: "village-surveyor",
            title: "Village Surveyor",
            responsibilities: [
              "Conduct land surveys and measurements",
              "Prepare cadastral maps",
              "Assist in land dispute resolution",
              "Maintain survey records"
            ],
            eligibility: "Diploma in Civil Engineering / Surveying",
            salaryRange: "₹20,000 - ₹35,000",
            exams: ["State PSC", "Technical Exam"]
          },
          {
            id: "village-agri-assistant",
            title: "Village Agriculture Assistant",
            responsibilities: [
              "Promote modern farming techniques",
              "Distribute seeds and fertilizers",
              "Conduct soil testing programs",
              "Assist farmers with crop planning"
            ],
            eligibility: "Diploma in Agriculture",
            salaryRange: "₹18,000 - ₹30,000",
            exams: ["Agriculture Department Exam"]
          },
          {
            id: "panchayat-secretary",
            title: "Panchayat Secretary Grade-V",
            responsibilities: [
              "Maintain panchayat records",
              "Prepare meeting minutes",
              "Handle correspondence",
              "Implement government schemes"
            ],
            eligibility: "Intermediate, Computer knowledge",
            salaryRange: "₹20,000 - ₹32,000",
            exams: ["Panchayat Raj Exam"]
          },
          {
            id: "digital-assistant",
            title: "Digital Assistant",
            responsibilities: [
              "Manage digital records and databases",
              "Provide computer support",
              "Handle online applications",
              "Maintain IT infrastructure"
            ],
            eligibility: "Degree with Computer knowledge",
            salaryRange: "₹18,000 - ₹28,000",
            exams: ["State Level Computer Test"]
          },
          {
            id: "anm",
            title: "ANM (Auxiliary Nurse Midwife)",
            responsibilities: [
              "Provide basic healthcare services",
              "Conduct immunization programs",
              "Assist in childbirth and maternal care",
              "Health awareness campaigns"
            ],
            eligibility: "ANM Certification",
            salaryRange: "₹22,000 - ₹38,000",
            exams: ["Health Department Recruitment"]
          }
        ]
      },
      {
        id: "ward-secretariat",
        name: "Ward Secretariat",
        jobs: [
          {
            id: "ward-admin-secretary",
            title: "Ward Administrative Secretary",
            responsibilities: [
              "Overall ward administration",
              "Coordinate with other secretaries",
              "Public grievance redressal",
              "Report to higher authorities"
            ],
            eligibility: "Degree",
            salaryRange: "₹25,000 - ₹42,000",
            exams: ["Municipal Services Exam"]
          },
          {
            id: "ward-revenue-secretary",
            title: "Ward Revenue Secretary",
            responsibilities: [
              "Property tax collection",
              "Issue revenue certificates",
              "Maintain revenue records",
              "Handle property disputes"
            ],
            eligibility: "Degree, Revenue knowledge",
            salaryRange: "₹22,000 - ₹38,000",
            exams: ["Revenue Department Test"]
          },
          {
            id: "ward-welfare-secretary",
            title: "Ward Welfare Secretary",
            responsibilities: [
              "Implement welfare schemes",
              "Distribute pensions and benefits",
              "Identify beneficiaries",
              "Monitor scheme effectiveness"
            ],
            eligibility: "Degree, Social work knowledge",
            salaryRange: "₹20,000 - ₹35,000",
            exams: ["Welfare Department Exam"]
          }
        ]
      }
    ]
  },
  {
    id: "courts",
    name: "Courts & Judiciary",
    color: "from-purple-500 to-purple-600",
    icon: "⚖️",
    subDepartments: [
      {
        id: "high-court",
        name: "High Court",
        jobs: [
          {
            id: "hc-assistant",
            title: "Assistant",
            responsibilities: [
              "Maintain court records and files",
              "Assist judges in case management",
              "Prepare court documents",
              "Handle administrative tasks"
            ],
            eligibility: "Degree",
            salaryRange: "₹30,000 - ₹50,000",
            exams: ["High Court Recruitment Exam"]
          },
          {
            id: "hc-stenographer",
            title: "Stenographer",
            responsibilities: [
              "Take dictation in court",
              "Transcribe proceedings",
              "Maintain confidential records",
              "Prepare typed judgments"
            ],
            eligibility: "Intermediate, Stenography certificate",
            salaryRange: "₹28,000 - ₹45,000",
            exams: ["Stenographer Skill Test"]
          },
          {
            id: "hc-deo",
            title: "DEO (Data Entry Operator)",
            responsibilities: [
              "Enter case data into systems",
              "Maintain digital records",
              "Generate reports",
              "Database management"
            ],
            eligibility: "Intermediate, Computer proficiency",
            salaryRange: "₹20,000 - ₹35,000",
            exams: ["Computer Typing Test"]
          }
        ]
      },
      {
        id: "district-court",
        name: "District Court",
        jobs: [
          {
            id: "dc-typist",
            title: "Typist",
            responsibilities: [
              "Type court orders and notices",
              "Prepare legal documents",
              "Maintain typing records",
              "Support judicial officers"
            ],
            eligibility: "Intermediate, Typing speed 40 wpm",
            salaryRange: "₹18,000 - ₹30,000",
            exams: ["Typing Test"]
          },
          {
            id: "dc-process-server",
            title: "Process Server",
            responsibilities: [
              "Deliver court summons and notices",
              "Serve legal documents",
              "Maintain delivery records",
              "Report service completion"
            ],
            eligibility: "10th pass",
            salaryRange: "₹15,000 - ₹25,000",
            exams: ["Written Test"]
          },
          {
            id: "dc-record-assistant",
            title: "Record Assistant",
            responsibilities: [
              "Organize and maintain case files",
              "Archive old records",
              "Retrieve documents as needed",
              "Ensure record security"
            ],
            eligibility: "Intermediate",
            salaryRange: "₹16,000 - ₹28,000",
            exams: ["Clerical Exam"]
          }
        ]
      },
      {
        id: "court-technical",
        name: "Technical Staff",
        jobs: [
          {
            id: "system-assistant",
            title: "System Assistant",
            responsibilities: [
              "Maintain court IT systems",
              "Troubleshoot technical issues",
              "Support e-filing systems",
              "Network administration"
            ],
            eligibility: "Degree/Diploma in IT",
            salaryRange: "₹25,000 - ₹40,000",
            exams: ["IT Technical Test"]
          }
        ]
      }
    ]
  },
  {
    id: "police",
    name: "Police Department",
    color: "from-red-500 to-red-600",
    icon: "👮",
    subDepartments: [
      {
        id: "uniformed",
        name: "Uniformed Police",
        jobs: [
          {
            id: "home-guard",
            title: "Home Guard",
            responsibilities: [
              "Assist in maintaining law and order",
              "Support police during events",
              "Traffic management",
              "Disaster response support"
            ],
            eligibility: "10th pass, Physical fitness",
            salaryRange: "₹12,000 - ₹20,000",
            exams: ["Physical Test", "Written Exam"]
          },
          {
            id: "constable",
            title: "Constable",
            responsibilities: [
              "Patrol assigned areas",
              "Maintain law and order",
              "Respond to emergencies",
              "Prepare case reports"
            ],
            eligibility: "Intermediate, Physical standards",
            salaryRange: "₹25,000 - ₹40,000",
            exams: ["Police Recruitment Exam", "Physical Test"]
          },
          {
            id: "si",
            title: "Sub Inspector (SI)",
            responsibilities: [
              "Lead investigation teams",
              "Supervise constables",
              "Manage police station operations",
              "Prepare detailed reports"
            ],
            eligibility: "Degree",
            salaryRange: "₹45,000 - ₹70,000",
            exams: ["SI Exam", "Physical Test", "Interview"]
          },
          {
            id: "ci",
            title: "Circle Inspector (CI)",
            responsibilities: [
              "Supervise multiple stations",
              "Handle major investigations",
              "Administrative oversight",
              "Coordinate with higher officials"
            ],
            eligibility: "Degree, Experience",
            salaryRange: "₹55,000 - ₹85,000",
            exams: ["Promotion Exam / Direct Recruitment"]
          }
        ]
      },
      {
        id: "police-technical",
        name: "Technical Staff",
        jobs: [
          {
            id: "police-driver",
            title: "Driver",
            responsibilities: [
              "Drive official vehicles",
              "Maintain vehicle logs",
              "Basic vehicle maintenance",
              "Emergency response driving"
            ],
            eligibility: "10th pass, Valid driving license",
            salaryRange: "₹18,000 - ₹30,000",
            exams: ["Driving Test", "Written Test"]
          },
          {
            id: "forensic-assistant",
            title: "Forensic Assistant",
            responsibilities: [
              "Collect crime scene evidence",
              "Assist in forensic analysis",
              "Maintain lab equipment",
              "Prepare forensic reports"
            ],
            eligibility: "BSc in Forensic Science",
            salaryRange: "₹28,000 - ₹45,000",
            exams: ["Technical Exam"]
          },
          {
            id: "cyber-analyst",
            title: "Cyber Crime Analyst",
            responsibilities: [
              "Investigate cybercrimes",
              "Digital forensics",
              "Track online criminals",
              "Prepare technical reports"
            ],
            eligibility: "BE/BTech in CS/IT or Cyber Security",
            salaryRange: "₹35,000 - ₹60,000",
            exams: ["Technical Test", "Interview"]
          }
        ]
      }
    ]
  },
  {
    id: "health",
    name: "Health & Medical",
    color: "from-green-500 to-green-600",
    icon: "🏥",
    subDepartments: [
      {
        id: "doctors",
        name: "Medical Officers",
        jobs: [
          {
            id: "cas",
            title: "CAS (Civil Assistant Surgeon)",
            responsibilities: [
              "Provide medical treatment",
              "Conduct surgeries",
              "Supervise hospital staff",
              "Emergency medical care"
            ],
            eligibility: "MBBS, Medical registration",
            salaryRange: "₹60,000 - ₹1,00,000",
            exams: ["Medical Services Exam"]
          },
          {
            id: "specialist",
            title: "Specialist Doctor",
            responsibilities: [
              "Specialized medical treatment",
              "Patient diagnosis and care",
              "Medical research",
              "Teaching medical students"
            ],
            eligibility: "MBBS + MD/MS in specialty",
            salaryRange: "₹80,000 - ₹1,50,000",
            exams: ["Specialist Recruitment"]
          }
        ]
      },
      {
        id: "nurses",
        name: "Nursing Staff",
        jobs: [
          {
            id: "staff-nurse",
            title: "Staff Nurse",
            responsibilities: [
              "Patient care and monitoring",
              "Administer medications",
              "Assist doctors in procedures",
              "Maintain patient records"
            ],
            eligibility: "BSc Nursing / GNM",
            salaryRange: "₹25,000 - ₹45,000",
            exams: ["Nursing Recruitment Exam"]
          },
          {
            id: "gnm",
            title: "GNM Nurse",
            responsibilities: [
              "Basic patient care",
              "Wound dressing",
              "Vital signs monitoring",
              "Support senior nurses"
            ],
            eligibility: "GNM Diploma",
            salaryRange: "₹20,000 - ₹35,000",
            exams: ["GNM Recruitment"]
          }
        ]
      },
      {
        id: "health-technical",
        name: "Technical Staff",
        jobs: [
          {
            id: "lab-technician",
            title: "Lab Technician",
            responsibilities: [
              "Conduct medical tests",
              "Operate lab equipment",
              "Prepare test reports",
              "Maintain lab hygiene"
            ],
            eligibility: "Diploma in Medical Lab Technology",
            salaryRange: "₹18,000 - ₹32,000",
            exams: ["Technical Test"]
          },
          {
            id: "pharmacist",
            title: "Pharmacist",
            responsibilities: [
              "Dispense medications",
              "Maintain drug inventory",
              "Counsel patients on medicines",
              "Check prescriptions"
            ],
            eligibility: "D.Pharm / B.Pharm",
            salaryRange: "₹22,000 - ₹38,000",
            exams: ["Pharmacist License Exam"]
          },
          {
            id: "radiographer",
            title: "Radiographer",
            responsibilities: [
              "Operate X-ray and imaging equipment",
              "Prepare patients for scans",
              "Maintain imaging records",
              "Ensure radiation safety"
            ],
            eligibility: "Diploma in Radiology",
            salaryRange: "₹20,000 - ₹35,000",
            exams: ["Radiology Technical Test"]
          }
        ]
      },
      {
        id: "health-support",
        name: "Support Staff",
        jobs: [
          {
            id: "ward-boy",
            title: "Ward Boy",
            responsibilities: [
              "Patient assistance and transport",
              "Maintain ward cleanliness",
              "Shift patients between wards",
              "Support nursing staff"
            ],
            eligibility: "8th pass",
            salaryRange: "₹12,000 - ₹20,000",
            exams: ["Written Test"]
          }
        ]
      }
    ]
  },
  {
    id: "education",
    name: "Education Department",
    color: "from-yellow-500 to-yellow-600",
    icon: "📚",
    subDepartments: [
      {
        id: "teaching",
        name: "Teaching Staff",
        jobs: [
          {
            id: "teacher",
            title: "School Teacher",
            responsibilities: [
              "Teach assigned subjects",
              "Prepare lesson plans",
              "Evaluate student performance",
              "Parent-teacher communication"
            ],
            eligibility: "B.Ed + Degree",
            salaryRange: "₹35,000 - ₹60,000",
            exams: ["TET", "DSC"]
          },
          {
            id: "pet",
            title: "PET (Physical Education Teacher)",
            responsibilities: [
              "Conduct physical education classes",
              "Organize sports events",
              "Train students in games",
              "Maintain sports equipment"
            ],
            eligibility: "B.P.Ed",
            salaryRange: "₹30,000 - ₹50,000",
            exams: ["PET Exam"]
          },
          {
            id: "junior-lecturer",
            title: "Junior Lecturer",
            responsibilities: [
              "Teach intermediate students",
              "Prepare study materials",
              "Conduct practical sessions",
              "Assessment and evaluation"
            ],
            eligibility: "PG in subject",
            salaryRange: "₹40,000 - ₹65,000",
            exams: ["JL Exam"]
          },
          {
            id: "degree-lecturer",
            title: "Degree Lecturer",
            responsibilities: [
              "Teach degree college students",
              "Research and publications",
              "Curriculum development",
              "Student mentoring"
            ],
            eligibility: "PG + NET/SLET",
            salaryRange: "₹50,000 - ₹80,000",
            exams: ["Assistant Professor Exam"]
          }
        ]
      },
      {
        id: "non-teaching",
        name: "Non-Teaching Staff",
        jobs: [
          {
            id: "edu-clerk",
            title: "Clerk",
            responsibilities: [
              "Maintain student records",
              "Handle correspondence",
              "Process admissions",
              "Administrative support"
            ],
            eligibility: "Intermediate, Computer knowledge",
            salaryRange: "₹18,000 - ₹30,000",
            exams: ["Clerical Exam"]
          },
          {
            id: "lab-assistant",
            title: "Lab Assistant",
            responsibilities: [
              "Prepare lab equipment",
              "Assist in experiments",
              "Maintain lab inventory",
              "Ensure lab safety"
            ],
            eligibility: "Intermediate with Science",
            salaryRange: "₹16,000 - ₹28,000",
            exams: ["Technical Test"]
          },
          {
            id: "librarian",
            title: "Librarian",
            responsibilities: [
              "Manage library resources",
              "Catalog books and materials",
              "Assist students and staff",
              "Maintain library database"
            ],
            eligibility: "B.Lib.Sc",
            salaryRange: "₹25,000 - ₹40,000",
            exams: ["Librarian Exam"]
          }
        ]
      }
    ]
  },
  {
    id: "municipal",
    name: "Municipal Administration",
    color: "from-indigo-500 to-indigo-600",
    icon: "🏙️",
    subDepartments: [
      {
        id: "urban-services",
        name: "Urban Services",
        jobs: [
          {
            id: "sanitation-worker",
            title: "Sanitation Worker",
            responsibilities: [
              "Street and public area cleaning",
              "Waste collection",
              "Drain maintenance",
              "Public toilet cleaning"
            ],
            eligibility: "8th pass",
            salaryRange: "₹12,000 - ₹22,000",
            exams: ["Written Test"]
          },
          {
            id: "waterworks-helper",
            title: "Waterworks Helper",
            responsibilities: [
              "Assist in water supply operations",
              "Pipeline maintenance",
              "Water meter reading",
              "Repair work support"
            ],
            eligibility: "10th pass",
            salaryRange: "₹14,000 - ₹24,000",
            exams: ["Technical Test"]
          }
        ]
      },
      {
        id: "municipal-technical",
        name: "Technical Staff",
        jobs: [
          {
            id: "civil-engineer",
            title: "Civil Engineer",
            responsibilities: [
              "Plan municipal infrastructure",
              "Supervise construction projects",
              "Prepare technical estimates",
              "Quality control"
            ],
            eligibility: "BE/BTech Civil",
            salaryRange: "₹45,000 - ₹75,000",
            exams: ["Engineering Services Exam"]
          },
          {
            id: "electrical-engineer",
            title: "Electrical Engineer",
            responsibilities: [
              "Maintain electrical infrastructure",
              "Street lighting management",
              "Electrical project supervision",
              "Safety compliance"
            ],
            eligibility: "BE/BTech Electrical",
            salaryRange: "₹45,000 - ₹75,000",
            exams: ["Engineering Services Exam"]
          }
        ]
      },
      {
        id: "municipal-admin",
        name: "Administrative Staff",
        jobs: [
          {
            id: "bill-collector",
            title: "Bill Collector",
            responsibilities: [
              "Collect property taxes",
              "Issue receipts",
              "Maintain collection records",
              "Follow up on pending payments"
            ],
            eligibility: "10th pass",
            salaryRange: "₹15,000 - ₹25,000",
            exams: ["Written Test"]
          },
          {
            id: "fireman",
            title: "Fireman",
            responsibilities: [
              "Respond to fire emergencies",
              "Conduct fire safety inspections",
              "Maintain firefighting equipment",
              "Public awareness on fire safety"
            ],
            eligibility: "10th pass, Physical fitness",
            salaryRange: "₹22,000 - ₹38,000",
            exams: ["Physical Test", "Written Test"]
          }
        ]
      }
    ]
  },
  {
    id: "electricity",
    name: "Electricity Department",
    color: "from-amber-500 to-amber-600",
    icon: "⚡",
    subDepartments: [
      {
        id: "electrical-engineers",
        name: "Engineers",
        jobs: [
          {
            id: "ae-electrical",
            title: "AE (Electrical)",
            responsibilities: [
              "Supervise electrical operations",
              "Plan power distribution",
              "Manage substations",
              "Troubleshoot major faults"
            ],
            eligibility: "BE/BTech Electrical",
            salaryRange: "₹50,000 - ₹85,000",
            exams: ["AE Exam"]
          },
          {
            id: "ae-civil",
            title: "AE (Civil)",
            responsibilities: [
              "Civil works for electrical projects",
              "Substation construction supervision",
              "Infrastructure planning",
              "Quality assurance"
            ],
            eligibility: "BE/BTech Civil",
            salaryRange: "₹50,000 - ₹85,000",
            exams: ["AE Exam"]
          }
        ]
      },
      {
        id: "electrical-technicians",
        name: "Technicians",
        jobs: [
          {
            id: "lineman",
            title: "Lineman",
            responsibilities: [
              "Install and maintain power lines",
              "Repair electrical faults",
              "Emergency restoration work",
              "Safety compliance"
            ],
            eligibility: "ITI Electrician",
            salaryRange: "₹20,000 - ₹35,000",
            exams: ["Trade Test"]
          },
          {
            id: "meter-reader",
            title: "Meter Reader",
            responsibilities: [
              "Read electricity meters",
              "Record consumption data",
              "Report meter defects",
              "Customer interaction"
            ],
            eligibility: "10th pass",
            salaryRange: "₹15,000 - ₹25,000",
            exams: ["Written Test"]
          },
          {
            id: "substation-operator",
            title: "Substation Operator",
            responsibilities: [
              "Monitor substation operations",
              "Control power distribution",
              "Maintain equipment",
              "Emergency response"
            ],
            eligibility: "ITI + Technical diploma",
            salaryRange: "₹25,000 - ₹40,000",
            exams: ["Technical Test"]
          }
        ]
      }
    ]
  },
  {
    id: "transport",
    name: "Transport (RTC + RTA)",
    color: "from-pink-500 to-pink-600",
    icon: "🚌",
    subDepartments: [
      {
        id: "rtc",
        name: "RTC (Road Transport Corporation)",
        jobs: [
          {
            id: "rtc-driver",
            title: "Driver",
            responsibilities: [
              "Drive public transport buses",
              "Ensure passenger safety",
              "Follow schedules",
              "Maintain vehicle cleanliness"
            ],
            eligibility: "10th pass, PSV badge",
            salaryRange: "₹25,000 - ₹40,000",
            exams: ["Driving Test", "Written Test"]
          },
          {
            id: "conductor",
            title: "Conductor",
            responsibilities: [
              "Issue tickets to passengers",
              "Manage ticket revenue",
              "Assist passengers",
              "Coordinate with driver"
            ],
            eligibility: "10th pass",
            salaryRange: "₹18,000 - ₹30,000",
            exams: ["Written Test"]
          },
          {
            id: "mechanic",
            title: "Mechanic",
            responsibilities: [
              "Vehicle maintenance and repair",
              "Troubleshoot mechanical issues",
              "Preventive maintenance",
              "Maintain service records"
            ],
            eligibility: "ITI Mechanic",
            salaryRange: "₹22,000 - ₹38,000",
            exams: ["Trade Test"]
          }
        ]
      },
      {
        id: "rta",
        name: "RTA (Regional Transport Authority)",
        jobs: [
          {
            id: "mvi",
            title: "MVI (Motor Vehicle Inspector)",
            responsibilities: [
              "Vehicle fitness inspections",
              "Issue fitness certificates",
              "Check driving licenses",
              "Traffic rule enforcement"
            ],
            eligibility: "Degree, Automobile knowledge",
            salaryRange: "₹35,000 - ₹55,000",
            exams: ["MVI Exam"]
          },
          {
            id: "rta-clerk",
            title: "Clerk",
            responsibilities: [
              "Process license applications",
              "Vehicle registration",
              "Maintain RTA records",
              "Customer service"
            ],
            eligibility: "Intermediate, Computer knowledge",
            salaryRange: "₹18,000 - ₹30,000",
            exams: ["Clerical Exam"]
          }
        ]
      }
    ]
  },
  {
    id: "revenue",
    name: "Revenue Department",
    color: "from-cyan-500 to-cyan-600",
    icon: "📋",
    subDepartments: [
      {
        id: "revenue-field",
        name: "Field Staff",
        jobs: [
          {
            id: "vra",
            title: "VRA (Village Revenue Assistant)",
            responsibilities: [
              "Assist VRO in revenue work",
              "Field verification",
              "Document collection",
              "Public service"
            ],
            eligibility: "Intermediate",
            salaryRange: "₹18,000 - ₹28,000",
            exams: ["Revenue Exam"]
          },
          {
            id: "survey-assistant",
            title: "Survey Assistant",
            responsibilities: [
              "Conduct land surveys",
              "Prepare field notes",
              "Assist in boundary marking",
              "Survey data collection"
            ],
            eligibility: "Diploma in Surveying",
            salaryRange: "₹20,000 - ₹32,000",
            exams: ["Survey Test"]
          }
        ]
      },
      {
        id: "tahsildar-office",
        name: "Tahsildar Office",
        jobs: [
          {
            id: "revenue-clerk",
            title: "Clerk",
            responsibilities: [
              "Maintain revenue records",
              "Process applications",
              "Issue certificates",
              "File management"
            ],
            eligibility: "Intermediate",
            salaryRange: "₹18,000 - ₹30,000",
            exams: ["Clerical Exam"]
          },
          {
            id: "record-assistant",
            title: "Record Assistant",
            responsibilities: [
              "Organize land records",
              "Digitize old documents",
              "Retrieve records",
              "Record preservation"
            ],
            eligibility: "Intermediate",
            salaryRange: "₹16,000 - ₹28,000",
            exams: ["Written Test"]
          }
        ]
      }
    ]
  }
];
