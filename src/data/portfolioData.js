export const portfolioData = {
  personalInfo: {
    fullName: 'Sree Sumanth Duddukuri',
    eyebrow: 'Building software that performs, scales, and lasts',
    title: 'Software Engineer | Scalable Systems & Product Engineering',
    shortBio:
      'Software engineer with strong computer science fundamentals and experience building performant, scalable products across backend, frontend, and distributed systems.',
    email: 'sreesumanth199@gmail.com',
    phone: '7095738136',
    location: 'Hyderabad, India',
    socials: {
      github: 'https://github.com/codetitan9999',
      linkedin: 'https://www.linkedin.com/in/sree-sumanth-duddukuri/',
      leetcode: 'https://leetcode.com/u/sreesumanth2002/',
      hackerrank: 'https://www.hackerrank.com/profile/sreesumanth199',
      codechef: 'https://www.codechef.com/users/sumanth9999'
    }
  },
  about: {
    shortBio:
      'Software Engineer with experience building scalable export workflows, enterprise integrations, and backend-driven configuration platforms across Oracle ecosystems. I work especially well with AI-assisted development workflows to prototype faster, debug efficiently, and move ideas into production with strong engineering judgment.',
    longBio:
      'I worked as a Software Engineer at Oracle, where I optimized high-volume export systems, stabilized cross-system shipment workflows, and built self-serve mapping experiences for NetSuite and Salesforce integrations. My work spans JavaScript, React, Python, Angular, SQL, and API-led backend orchestration, with a strong focus on performance, reliability, and simplifying complex enterprise workflows. I also use AI as a practical engineering accelerator: to break down ambiguous problems, explore solution paths quickly, speed up implementation, and improve debugging and product iteration without losing ownership of system design, correctness, or code quality.'
  },
  experience: [
    {
      company: 'Oracle',
      role: 'Software Engineer I',
      location: 'Hyderabad, India',
      duration: 'July 2024 - Present',
      highlights: [
        'Served as the primary developer in migrating a legacy data export system to a parallelized processing model that handled more than 1 million records per run and payloads of about 200 MB, reducing execution time from roughly 14 minutes to about 2 to 5 minutes and eliminating timeout failures under strict execution limits.',
        'Improved reliability of an Amazon to NetSuite inbound-shipment integration by implementing the purchase-order sync workflow and resolving critical issues in Python- and Angular-based services.',
        'Built a self-serve mapping experience in a React-based NetSuite single-page application, enabling non-technical users to configure mappings across NetSuite and Salesforce integrations.',
        'Eliminated dependency on Oracle Integration Cloud for mapping configuration by reverse-engineering workflows and recreating them through APIs with support for direct, transformed, and conditional mappings.',
        'Streamlined mapping setup through a backend-driven workflow abstraction, reducing configuration time from roughly 20 minutes to about 1 to 2 minutes per mapping.'
      ],
      technologies: [
        'JavaScript',
        'React',
        'Angular',
        'Flask',
        'SQL',
        'Python',
        'NetSuite',
        'Salesforce',
        'Oracle Integration Cloud'
      ]
    }
  ],
  projects: [
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
      title: 'AI Resume Optimizer',
      subtitle: 'Next.js | TypeScript | MongoDB | Tailwind CSS',
      description:
        'Production web app for ATS-style resume analysis and job-description-based optimization, with AI-assisted feedback, live resume editing, and authentication-backed user workflows.',
      impact: 'Combines resume analysis, job-description alignment, live editing, and authenticated user flows into a production-ready career-focused product experience.',
      highlights: [
        'Supports ATS-style analysis, job-description-aware optimization, live resume editing, and signed-in user workflows.',
        'Built with an architecture that supports future AI, persistence, and product expansion cleanly.'
      ],
      repoUrl: 'https://github.com/codetitan9999/AI-Resume-Optimizer',
      liveUrl: 'https://ai-resume-optimizer-for-top-companies.vercel.app/'
    },
    {
      title: 'Algorithm Visualizer',
      subtitle: 'TypeScript | React | Data Structures & Algorithms',
      description:
        'Interactive React application to visualize sorting and pathfinding algorithms with step-by-step playback and live metrics.',
      impact: 'Improves clarity of core DSA concepts through controlled playback, live metrics, and visual algorithm state transitions.',
      highlights: [
        'Includes sorting and pathfinding workflows with step-wise playback for easier conceptual understanding.',
        'Helps translate algorithm behavior into an interactive learning experience instead of static code alone.'
      ],
      repoUrl: 'https://github.com/codetitan9999/Algorithm_Visualizer',
      liveUrl: 'https://algorithm-visualizer-xi-ten.vercel.app'
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
    languages: ['C++', 'JavaScript', 'TypeScript', 'Python', 'SQL'],
    frontend: ['React', 'Next.js', 'Angular', 'Tailwind CSS', 'Responsive UI', 'Interview UI Flows'],
    backend: ['Node.js', 'Express.js', 'Flask', 'REST APIs', 'Serverless APIs', 'Authentication Flows'],
    data: ['MongoDB', 'MySQL', 'Oracle', 'Machine Learning', 'IoT', 'Arduino'],
    platforms: [
      'Git',
      'Docker',
      'Postman',
      'Vercel',
      'NetSuite',
      'Salesforce',
      'Oracle Integration Cloud',
      'Zustand',
      'Zod'
    ],
    core: ['DSA', 'CS Fundamentals', 'System Design', 'Distributed Systems', 'AI-Assisted Development', 'Interview Evaluation Systems']
  },
  education: {
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    institution: 'VNR Vignana Jyothi Institute of Engineering and Technology',
    duration: 'Nov. 2020 - Apr. 2024',
    cgpa: '8.6/10.0'
  },
  certifications: [
    'Smart Coder (DSA) Program | Diamond Certificate, Smart Interviews'
  ],
  achievements: [
    '3rd place in a VNR VJIET nationwide coding contest among 600 teams.',
    '4th place in Megathon 2022, a nationwide hackathon organized by IIIT Hyderabad, among 500 teams.',
    '6-Star in HackerRank Problem Solving.'
  ]
};
