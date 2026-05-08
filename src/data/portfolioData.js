export const portfolioData = {
  personalInfo: {
    fullName: 'Sree Sumanth Duddukuri',
    eyebrow: 'Building scalable product workflows, faster onboarding paths, and reliable enterprise systems',
    title: 'Software Engineer I at Oracle | Product Engineering & Workflow Systems',
    shortBio:
      'Software engineer with strong CS fundamentals and hands-on experience building scalable workflows across frontend, backend, APIs, and enterprise integrations.',
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
      'At Oracle, I work on high-volume export systems, integration workflows, and self-serve configuration experiences used across enterprise products. My focus is turning operational bottlenecks into durable product flows: improving execution speed, shortening onboarding setup from days to hours, and simplifying complex mapping and shipment workflows with pragmatic engineering.'
  },
  experience: [
    {
      company: 'Oracle',
      role: 'Software Engineer I',
      location: 'Hyderabad, India',
      duration: 'July 2024 - Present',
      highlights: [
        'Migrated a legacy data export system to a parallelized processing model, handling 1M+ records per run (~200 MB payloads); reduced execution time from ~14 minutes to ~2-5 minutes and eliminated timeout failures under strict execution limits.',
        'Delivered a critical self-serve mapping workflow for a product serving ~2.3K eligible customers, removing the need for implementation and support teams to handle mapping setup manually; reduced onboarding mapping turnaround from ~1 week to under 1 hour and supported typical customer configurations involving 100+ mappings with no hard system limit.',
        'Reverse-engineered external integration workflows and replicated them via APIs, implementing payload generation, transformation logic, conditional routing, and bidirectional mappings; reduced setup time for a complex mapping from ~20 minutes to ~1-2 minutes and for a simple mapping to ~30-40 seconds.',
        'Improved inbound-shipment processing reliability by implementing a purchase-order sync workflow and fixing backend defects, reducing sync failures by ~80-90% and stabilizing production usage across 1000+ customers.'
      ],
      technologies: ['JavaScript', 'Node.js', 'REST APIs', 'SQL', 'React', 'Angular', 'Flask']
    }
  ],
  projects: [
    {
      title: 'Durable Workflow Engine',
      subtitle: 'Go | PostgreSQL | Redis Streams | React',
      description:
        'A durable workflow engine starter built for asynchronous job orchestration, pairing a multi-service backend with live execution visibility and a React-driven operational interface.',
      impact: 'Demonstrates production-style workflow orchestration with durable state transitions, async dispatch, and visibility across execution lifecycles instead of a toy background-job demo.',
      highlights: [
        'Built a durable workflow engine starter with 3 application services, an 8-service local stack, 5 core workflow tables, and 7 backend endpoints for asynchronous job orchestration.',
        'Implemented and verified an end-to-end workflow execution path with 9 durable writes across execution, task, attempt, and outbox state using Postgres-first orchestration and Redis Streams dispatch.',
        'Added live execution and task visibility so workflow progress can be inspected as state moves across the system.'
      ],
      repoUrl: 'https://github.com/codetitan9999/durable-workflow-engine'
    },
    {
      title: 'Algorithm Visualizer',
      subtitle: 'TypeScript | React | Data Structures & Algorithms',
      description:
        'Interactive TypeScript and React application for sorting and pathfinding visualization, with deterministic execution timelines, step-by-step playback, and learning-focused controls.',
      impact: 'Makes core DSA concepts easier to understand through visual state changes, repeatable execution flow, and side-by-side implementation references.',
      highlights: [
        'Developed 7 sorting and pathfinding simulations with deterministic playback for clearer algorithm tracing.',
        'Added 4-language implementation references so users can connect the visual flow to actual code.',
        'Included automated coverage for core logic to keep the interactive behavior stable as features evolve.'
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
    languages: ['C++', 'JavaScript', 'TypeScript', 'Python', 'SQL'],
    frontend: ['React', 'Next.js', 'Angular', 'HTML/CSS'],
    backendApis: ['Node.js', 'Express.js', 'Flask', 'REST APIs'],
    toolsPlatforms: ['Git', 'Docker', 'Postman', 'NetSuite', 'Salesforce'],
    databases: ['Oracle', 'MySQL', 'MongoDB'],
    core: [
      'Data Structures and Algorithms',
      'Object-Oriented Programming',
      'DBMS',
      'Operating Systems',
      'Computer Networks'
    ]
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
      label: 'Diamond Certificate in Smart Coder (DSA) Program | Smart Interviews',
      url: 'https://smartinterviews.in/certificate/fc1f7648'
    }
  ],
  achievements: [
    {
      label: '3rd Place in VNR VJIET Nationwide Coding Contest | Among 600 teams',
      url: 'https://drive.google.com/file/d/1QflX7DbUU1t2mQOtQM7eBkL1Yzp8vPGr/view?usp=sharing'
    },
    {
      label: '4th Place in Megathon 2022 at IIIT Hyderabad | Among 500 teams',
      url: 'https://drive.google.com/file/d/1dTIaOF0wvbhiXrq18hR7oInmjweQPpzZ/view?usp=sharing'
    },
    {
      label: '6-Star Rating in HackerRank Problem Solving',
      url: 'https://www.hackerrank.com/profile/sreesumanth199'
    }
  ]
};
