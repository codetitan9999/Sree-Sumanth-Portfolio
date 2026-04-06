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
      'Software Engineer with experience building scalable export workflows, enterprise integrations, and backend-driven configuration platforms across Oracle ecosystems.',
    longBio:
      'I worked as a Software Engineer at Oracle, where I optimized high-volume export systems, stabilized cross-system shipment workflows, and built self-serve mapping experiences for NetSuite and Salesforce integrations. My work spans JavaScript, React, Python, Angular, SQL, and API-led backend orchestration, with a strong focus on performance, reliability, and simplifying complex enterprise workflows.'
  },
  experience: [
    {
      company: 'Oracle',
      role: 'Software Engineer I',
      location: 'Hyderabad, India',
      duration: 'July 2024 - Apr. 2026',
      highlights: [
        'Served as the primary developer in optimizing and migrating a legacy high-volume data export solution to a scalable application framework with parallelized execution, reducing execution time by about 60 to 80 percent and improving reliability under concurrent workloads.',
        'Improved reliability of an Amazon to NetSuite inbound-shipment integration by implementing the purchase-order sync workflow and resolving critical issues in Python- and Angular-based services.',
        'Built a self-serve mapping experience in a React-based NetSuite single-page application, enabling non-technical users to configure mappings across NetSuite and Salesforce integrations.',
        'Eliminated dependency on Oracle Integration Cloud for mapping configuration by reverse-engineering workflows and recreating them through APIs with support for direct, transformed, and conditional mappings.',
        'Streamlined mapping setup through a backend-driven workflow abstraction, reducing configuration time from roughly 20 minutes to about 1 to 2 minutes per mapping.'
      ],
      technologies: [
        'JavaScript',
        'React',
        'Python',
        'Angular',
        'SQL',
        'NetSuite',
        'Salesforce',
        'Oracle Integration Cloud'
      ]
    }
  ],
  projects: [
    {
      title: 'AI Resume Optimizer',
      subtitle: 'Next.js 14 | TypeScript | Tailwind | AI UX',
      description:
        'Frontend-first resume optimization platform with resume analysis, ATS-focused builder flows, and job-description-aware improvement paths.',
      impact: 'Turns resume review and optimization into a guided product experience with clear paths for analysis, rewriting, and builder-based editing.',
      highlights: [
        'Includes analysis, optimize, builder, billing, login, and signup flows.',
        'Structured for future AI, authentication, and payment integrations.'
      ],
      repoUrl: 'https://github.com/codetitan9999/AI-Resume-Optimizer',
      liveUrl: 'https://ai-resume-optimizer-for-top-companies.vercel.app/'
    },
    {
      title: 'JobHunt Control Room',
      subtitle: 'JavaScript | Node.js | Scheduler | Serverless',
      description:
        'A resume-aware job search control room for configuring company targets, filters, portal access, and scheduled search runs through a single interface.',
      impact: 'Brings profile setup, execution control, and job-search workflow management into one product surface with both local and deployable modes.',
      highlights: [
        'Supports config save and load, run-now actions, recent run history, and live payload previews.',
        'Designed for both free manual Vercel deployments and persistent scheduler-friendly deployments.'
      ],
      repoUrl: 'https://github.com/codetitan9999/Job-Search-Platform',
      liveUrl: 'https://job-search-platform-three.vercel.app/'
    },
    {
      title: 'Algorithm Visualizer',
      subtitle: 'TypeScript | Algorithms | Pathfinding | Sorting',
      description:
        'Interactive browser-based algorithm visualizer for sorting and pathfinding, designed around deterministic timelines, step playback, and interview-friendly explanations.',
      impact: 'Makes core algorithm behavior easier to understand through live visual state transitions, metrics, and synchronized explanations.',
      highlights: [
        'Includes sorting studio, pathfinding lab, playback controls, and multi-language code references.',
        'Separates algorithm engines from rendering logic for easier testing and extension.'
      ],
      repoUrl: 'https://github.com/codetitan9999/Algorithm_Visualizer',
      liveUrl: 'https://algorithm-visualizer-xi-ten.vercel.app'
    },
    {
      title: 'Smart Farm',
      subtitle: 'Flask | ML | IoT | Arduino | Dashboard',
      description:
        'Agriculture-focused dashboard for seed checks, soil analysis, crop recommendation, and yield-oriented decisions using lightweight predictive workflows.',
      impact: 'Connects farm inputs and model-driven insights in a simple deployable dashboard for faster decision support.',
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
    databases: ['Oracle', 'MySQL', 'MongoDB'],
    tools: ['Git', 'Docker', 'Postman', 'NetSuite', 'Salesforce', 'Oracle Integration Cloud'],
    core: ['DSA', 'CS Fundamentals', 'System Design']
  },
  education: {
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    institution: 'VNR Vignana Jyothi Institute of Engineering and Technology',
    duration: 'Nov. 2020 - Apr. 2024',
    cgpa: '8.6/10.0'
  },
  certifications: [
    'Smart Coder (DSA) Program | Diamond Certificate, Smart Interviews',
    'Goldman Sachs Engineering Virtual Program | Goldman Sachs'
  ],
  achievements: [
    '3rd place in a VNR VJIET nationwide coding contest among 600 teams.',
    '4th place in Megathon 2022 among 500 teams.'
  ]
};
