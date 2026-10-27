export const projects = [
  {
    id: "meditrack",
    slug: "meditrack",
    title: "MediTrack Health Record Management System",
    shortDescription: "A cross-platform health record management system developed as a capstone project.",
    longDescription: "MediTrack is a comprehensive health record system designed to secure and manage patient data efficiently. It streamlines medical workflows and automates student ID verification.",
    category: "Capstone Project",
    role: "Frontend and Backend Developer",
    status: "In Development",
    technologies: ["React", "Node.js", "Supabase", "PostgreSQL", "Python", "Flask", "Electron", "Capacitor"],
    githubUrl: "https://github.com/Adk-gh/MediTrack.git", // Verify repository URL
    demoUrl: "", // Verify current live URL
    featured: true,
    caseStudy: {
      problem: "Manual student ID verification and fragmented medical recordkeeping for clinic staff.",
      solution: "A multi-service architecture integrating OCR for automation and a relational database for structured record management.",
      features: [
        {
          title: "AI-Powered OCR Pipeline",
          description: "Integrated a Python-based OCR service using PaddleOCR and a Flask API with the Node.js backend to automate student ID validation during registration.",
          tech: ["PaddleOCR", "Flask", "Python", "Node.js"]
        },
        {
          title: "Cross-Platform Architecture",
          description: "Developed a shared React application targeting web, desktop (Electron), and mobile (Capacitor) to ensure accessibility across different clinic hardware.",
          tech: ["React", "Electron", "Capacitor"]
        },
        {
          title: "Medical Workflow Logic",
          description: "Implemented a structured, multi-stage medical examination workflow and appointment scheduling using Zod for validation and Supabase for persistence.",
          tech: ["Zod", "Supabase", "PostgreSQL"]
        }
      ],
      challenges: "Balancing the delivery across three different platforms while maintaining a single codebase for business logic."
    }
  },
  {
    id: "crm",
    slug: "crm",
    title: "Customer Relationship Management System",
    shortDescription: "A completed academic CRM project focused on customer profiles and support tickets.",
    longDescription: "A collaborative system integration project that provides tools for managing customer interactions, tracking support tickets, and visualizing customer activity trends.",
    category: "Academic Project",
    role: "Programmer",
    status: "Completed",
    technologies: ["React", "Tailwind CSS", "Firebase", "Chart.js"],
    githubUrl: "https://github.com/Adk-gh/SM_CRM",
    demoUrl: null,
    featured: true,
    caseStudy: {
      problem: "The need for a centralized system to track customer interactions and visualize activity trends while integrating seamlessly with other organizational components.",
      solution: "A responsive web application using Firebase for real-time data updates, designed as an integration project to simulate cross-departmental data flow and service management.",
      features: [
        {
          title: "System Integration & Collaboration",
          description: "Worked as part of a larger integration effort, coordinating with other groups to ensure the CRM synchronized correctly with external organizational units and data sources.",
          tech: ["System Integration", "Firebase", "React"]
        },
        {
          title: "Real-time Data Synchronization",
          description: "Utilized Firebase Firestore to ensure customer profiles and support tickets are updated in real-time across all integrated clients.",
          tech: ["Firebase", "React"]
        },
        {
          title: "Activity Visualization",
          description: "Integrated Chart.js to create visual dashboards for tracking customer activity and support trends across the integrated ecosystem.",
          tech: ["Chart.js", "Tailwind CSS"]
        }
      ],
      challenges: "Coordinating API contracts and data formats with other integrating groups to ensure a consistent UI/UX and reliable data exchange."
    }
  },
  {
    id: "artisans-lms",
    slug: "artisans-lms",
    title: "Artisans LMS",
    shortDescription: "A full-stack Learning Management System for course creation and student enrollment.",
    longDescription: "Artisans LMS is a comprehensive educational platform that allows administrators to manage courses and learners to enroll and complete certifications through a modern, responsive interface.",
    category: "Full-Stack Project",
    role: "Lead Developer",
    status: "Completed",
    technologies: ["Next.js", "React", "PHP", "MySQL", "XAMPP"],
    githubUrl: "https://github.com/Adk-gh/artisansLMS.git",
    demoUrl: null,
    featured: true,
    caseStudy: {
      problem: "The need for a structured, locally-deployable system to manage educational content, student progress, and automatic grading, while ensuring interoperability between different organizational units.",
      solution: "Developed a hybrid architecture using a custom PHP API for robust data persistence and a Next.js frontend, designed specifically for system integration with external organizational partners.",
      features: [
        {
          title: "Inter-Organizational Integration",
          description: "Collaborated with external teams acting as different organizational units to design and implement standardized integration points, simulating a real-world corporate ecosystem.",
          tech: ["System Integration", "API Design", "PHP"]
        },
        {
          title: "Hybrid Full-Stack Architecture",
          description: "Built a custom PHP-based REST API to handle authentication, course CRUD, and enrollment logic, paired with a Next.js frontend for server-side rendering.",
          tech: ["PHP", "Next.js", "MySQL"]
        },
        {
          title: "Learning Lifecycle Management",
          description: "Implemented a complete student journey including secure role-based access, self-enrollment, progress tracking, and automated quiz grading.",
          tech: ["React", "MySQL"]
        }
      ],
      challenges: "Managing the coordination and data consistency between multiple integrating groups while maintaining a single, cohesive codebase."
    }
  }
];
