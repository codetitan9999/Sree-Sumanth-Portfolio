export const portfolioData = {
  personalInfo: {
    fullName: 'Sree Sumanth Duddukuri',
    eyebrow: 'Scaling systems, reducing friction, and shipping measurable product impact',
    title: 'Software Engineer I at Oracle | Scalable Systems & Product Engineering',
    shortBio:
      'Software engineer with strong computer science fundamentals and hands-on experience building scalable product workflows across frontend, backend, and enterprise integrations.',
    email: 'sreesumanth199@gmail.com',
    phone: '7095738136',
    location: 'Hyderabad, India',
    resumeUrl: '/Sree_Sumanth_Duddukuri_Resume.pdf',
    socials: {
      github: 'https://github.com/codetitan9999',
      linkedin: 'https://www.linkedin.com/in/sree-sumanth-duddukuri/',
      leetcode: 'https://leetcode.com/u/sreesumanth2002/',
      hackerrank: 'https://www.hackerrank.com/profile/sreesumanth199',
      codechef: 'https://www.codechef.com/users/sumanth9999',
      codeforces: 'https://codeforces.com/profile/sreesumanth99',
      portfolio: 'https://sree-sumanth-portfolio.vercel.app/'
    }
  },
  about: {
    shortBio:
      'Software Engineer with experience building scalable export workflows, self-serve enterprise tooling, and integration-heavy product systems across Oracle ecosystems.',
    longBio:
      'At Oracle, I work on high-volume export systems, integration workflows, and self-serve configuration experiences used across enterprise products. My focus is on turning operational bottlenecks into reliable product flows: improving execution speed, enabling faster onboarding, and simplifying complex mapping and shipment workflows with pragmatic engineering.'
  },
  experience: [
    {
      company: 'Oracle',
      role: 'Software Engineer I',
      location: 'Hyderabad, India',
      duration: 'July 2024 - Present',
      highlights: [
        'Served as the primary developer in migrating a legacy data export system to a parallelized processing model, handling 1M+ records per run (~200 MB payloads); reduced execution time from ~14 minutes to ~2-5 minutes and eliminated timeout failures under strict execution limits.',
        'Built a critical self-serve mapping workflow for a product serving ~2.3K eligible customers, removing the need for PS/TS and support teams to handle mapping setup manually; reduced onboarding mapping turnaround from ~1 week to under 1 hour and supported typical customer configurations involving 100+ mappings with no hard system limit.',
        'As 1 of 2 developers, reverse-engineered external OIC mapping workflows and replicated them via APIs, implementing payload generation, transformation logic, conditional routing, and bidirectional mappings; reduced setup time for a complex mapping from ~20 minutes to ~1-2 minutes and for a simple mapping to ~30-40 seconds.',
        'Improved inbound-shipment processing reliability by implementing a purchase-order sync workflow and fixing backend defects, reducing sync failures by ~80-90% and stabilizing production usage across 1000+ customers.'
      ],
      technologies: ['JavaScript', 'React', 'Angular', 'Flask', 'SQL']
    }
  ],
  projects: [
    {
      title: 'AI Resume Optimizer',
      subtitle: 'Next.js | TypeScript | MongoDB | Tailwind CSS',
      description:
        'Full-stack Next.js application for AI-powered resume analysis, job-description alignment, and ATS-friendly resume building, with authentication, MongoDB-backed user persistence, and subscription-gated workflows.',
      impact: 'Turns resume optimization into a real product flow with analysis, persistence, gated user journeys, and deployment-ready application structure.',
      highlights: [
        'Combines AI-assisted analysis, ATS-oriented resume refinement, and job-description-aware optimization.',
        'Ships with authenticated workflows, persisted user data, and a structure ready for product expansion.'
      ],
      repoUrl: 'https://github.com/codetitan9999/AI-Resume-Optimizer',
      liveUrl: 'https://ai-resume-optimizer-for-top-companies.vercel.app/'
    },
    {
      title: 'Algorithm Visualizer',
      subtitle: 'TypeScript | React | Data Structures & Algorithms',
      description:
        'Interactive TypeScript and React application for sorting and pathfinding visualization, with deterministic execution timelines, step-by-step playback, and live metrics.',
      impact: 'Makes core DSA concepts easier to understand through visual state changes, repeatable execution flow, and learning-focused interaction.',
      highlights: [
        'Supports sorting and pathfinding flows with controlled playback for clearer algorithm tracing.',
        'Pairs live metrics with visual transitions so algorithm behavior feels explorable instead of abstract.'
      ],
      repoUrl: 'https://github.com/codetitan9999/Algorithm_Visualizer',
      liveUrl: 'https://algorithm-visualizer-xi-ten.vercel.app'
    },
    {
      title: 'SignalHire AI',
      subtitle: 'JavaScript | AI Mock Interview | Evaluation Platform',
      description:
        'Lightweight mock interview platform for software engineers with subject-based interview setup, AI-style interview flow, transcript handling, and coding-round evaluation.',
      impact: 'Turns interview preparation into a guided product flow with scheduling, AI-style prompts, coding evaluation, and instant scorecard-based feedback.',
      status: 'Prototype',
      statusNote:
        'Current version is a working prototype focused on end-to-end interview flow, while deeper model-backed intelligence and broader evaluation coverage can be expanded further.',
      highlights: [
        'Supports subject selection across DSA, OOPS, DBMS, OS, CN, and SQL with scheduled interview setup.',
        'Includes interview transcript flow, live coding workspace, automated JavaScript and SQL evaluation, and instant scoring.'
      ],
      repoUrl: 'https://github.com/codetitan9999/AiInterview',
      liveUrl: 'https://signalhire-ai.vercel.app'
    },
    {
      title: 'JobHunt Control Room',
      subtitle: 'JavaScript | Node.js | Scheduler | Serverless',
      description:
        'A resume-aware job search control room for configuring company targets, filters, portal access, and scheduled search runs through a single interface.',
      impact: 'Brings profile setup, execution control, and job-search workflow management into one product surface with both local and deployable modes.',
      status: 'Prototype',
      statusNote:
        'Current deployment demonstrates the control-room workflow and orchestration model, while real company connectors and full automation are still in progress.',
      highlights: [
        'Supports config save and load, run-now actions, recent run history, and live payload previews.',
        'Designed for both free manual Vercel deployments and persistent scheduler-friendly deployments.'
      ],
      repoUrl: 'https://github.com/codetitan9999/Job-Search-Platform',
      liveUrl: 'https://job-search-platform-three.vercel.app/'
    },
    {
      title: 'Smart Farm',
      subtitle: 'Flask | ML | IoT | Arduino | Dashboard',
      description:
        'Agriculture-focused dashboard for seed checks, soil analysis, crop recommendation, and yield-oriented decisions using lightweight predictive workflows.',
      impact: 'Connects farm inputs and model-driven insights in a simple deployable dashboard for faster decision support.',
      status: 'Prototype',
      statusNote:
        'Current version is a lightweight deployable dashboard with optional live sensor input, while deeper production-grade model and hardware integrations remain limited.',
      highlights: [
        'Combines Flask UI flows with heuristics and optional live sensor input.',
        'Designed to stay usable even without a live hardware endpoint.'
      ],
      repoUrl: 'https://github.com/codetitan9999/SMART-FARM',
      liveUrl: 'https://smart-farm-gold-six.vercel.app'
    },
    {
      title: 'Contact Dashboard',
      subtitle: 'JavaScript | Contact Management | Responsive UI',
      description:
        'A polished contact management dashboard with search, editing, favorites, category filters, notes, and local backup support.',
      impact: 'Transforms a simple contact app into a more complete CRUD product experience with stronger usability and local data management.',
      highlights: [
        'Supports add, edit, delete, search, favorite filtering, sorting, and JSON import/export.',
        'Uses responsive dashboard styling and improved local storage handling.'
      ],
      repoUrl: 'https://github.com/codetitan9999/contactApp',
      liveUrl: 'https://contact-app-ivory-pi.vercel.app'
    }
  ],
  skills: {
    languages: ['C++', 'JavaScript', 'Python'],
    frameworks: ['React', 'Angular', 'Node.js', 'Express.js', 'Flask'],
    toolsPlatforms: ['Git', 'Docker', 'Postman', 'NetSuite', 'Salesforce', 'Oracle Integration Cloud'],
    databases: ['Oracle', 'MySQL', 'MongoDB'],
    core: ['Data Structures and Algorithms', 'Computer Science Fundamentals', 'System Design Fundamentals']
  },
  education: {
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    institution: 'VNR Vignana Jyothi Institute of Engineering and Technology',
    location: 'Hyderabad, India',
    duration: 'Nov. 2020 - Apr. 2024',
    cgpa: '8.6/10.0'
  },
  certifications: [
    {
      label: 'Smart Coder (DSA) Program | Diamond Certificate, Smart Interviews',
      url: 'https://smartinterviews.in/certificate/fc1f7648'
    }
  ],
  achievements: [
    {
      label: '3rd place in VNR VJIET nationwide coding contest | Among 600 teams',
      url: 'https://drive.google.com/file/d/1QflX7DbUU1t2mQOtQM7eBkL1Yzp8vPGr/view?usp=sharing'
    },
    {
      label: '4th place in Megathon 2022 | IIIT Hyderabad nationwide hackathon, 500 teams',
      url: 'https://drive.google.com/file/d/1dTIaOF0wvbhiXrq18hR7oInmjweQPpzZ/view?usp=sharing'
    },
    {
      label: '6-Star in HackerRank Problem Solving',
      url: 'https://www.hackerrank.com/profile/sreesumanth199'
    }
  ]
};
