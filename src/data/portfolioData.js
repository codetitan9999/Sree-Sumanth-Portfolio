export const portfolioData = {
  personalInfo: {
    fullName: 'Sree Sumanth Duddukuri',
    eyebrow: 'Building and optimising scalable distributed systems',
    title: 'Software Engineer I at Oracle | Full Stack Developer',
    shortBio:
      'Full stack developer with strong CS fundamentals and hands-on experience building scalable systems across frontend, backend, APIs, databases, and enterprise integrations.',
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
      'Full stack developer at Oracle with experience building scalable export workflows, self-serve enterprise tooling, and integration-heavy product systems across frontend, backend, and database layers.',
    longBio:
      'At Oracle, I work across frontend, backend, APIs, and databases to build high-volume export systems, integration workflows, and self-serve configuration experiences used across enterprise products. My focus is on building and optimising scalable distributed systems that reduce operational bottlenecks, improve execution speed, shorten onboarding from weeks to under an hour, and make complex workflows more reliable in production.'
  },
  experience: [
    {
      company: 'Oracle',
      role: 'Software Engineer 1',
      location: 'Hyderabad, India',
      duration: 'Jul 2024 - May 2026',
      highlights: [
        'Built a queue-driven parallel batch processor for a legacy export system with worker-based execution, batching, retries, and failure isolation, enabling concurrent execution of 1M+ record workloads (~200 MB/run) while reducing runtime from ~14 minutes to ~2-5 minutes and eliminating timeout failures.',
        'Built a self-serve mapping workflow for a product serving ~2.3K customers, eliminating manual setup by implementation and support teams and reducing support-dependent turnaround from 1-2 weeks to under 1 hour.',
        'Reverse-engineered existing cross-system mapping workflows and implemented backend APIs for payload generation, transformation logic, conditional routing, and bidirectional mappings, decreasing setup time by ~90-95% from ~20 minutes to ~1-2 minutes.',
        'Improved inbound-shipment sync reliability across 1000+ customers by implementing purchase-order synchronization, validation logic, data-consistency checks, and failure handling, lowering production sync failures by ~80-90%.',
        'Resolved 10+ high-priority release blockers and production issues across integration workflows, including a release-critical sync defect fixed in 2 hours that prevented a 1-week delay for a rollout affecting 1000+ customers.'
      ],
      technologies: ['JavaScript', 'TypeScript', 'Node.js', 'Flask', 'REST APIs', 'SQL', 'React']
    }
  ],
  projects: [
    {
      title: 'Durable Workflow Engine',
      subtitle: 'Go | PostgreSQL | Redis Streams | React',
      description:
        'A durable workflow engine built to make long-running background jobs reliable, using Postgres-backed execution state, Redis Streams task queues, API/worker separation, and outbox-based dispatch for asynchronous orchestration.',
      impact: 'Shows how durable state, queue-backed execution, and worker separation can make long-running job systems reliable and inspectable in practice.',
      highlights: [
        'Built a durable workflow engine to make long-running background jobs reliable, with Postgres-backed execution state, Redis Streams task queues, API/worker separation, and outbox-based dispatch for asynchronous orchestration.',
        'Implemented end-to-end execution tracking, worker processing, task history, and live status visibility across 5 workflow tables and 7 service endpoints.',
        'Designed the system so execution state remains durable and inspectable as work moves across queueing, processing, and completion stages.'
      ],
      repoUrl: 'https://github.com/codetitan9999/DurableWorkFlowEngine'
    },
    {
      title: 'Algorithm Visualizer',
      subtitle: 'TypeScript | React | Data Structures & Algorithms',
      description:
        'Interactive TypeScript and React application for learning sorting, searching, and pathfinding algorithms through deterministic playback and language-switchable code references.',
      impact: 'Makes core DSA concepts easier to understand through visual state changes, repeatable execution flow, and side-by-side implementation references.',
      highlights: [
        'Developed 9 simulations covering sorting, searching, and pathfinding algorithms with deterministic playback for clearer tracing.',
        'Added language-switchable implementation references in 4 languages so users can connect the visual flow to actual code.',
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
    languages: ['C++', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
    frontend: ['React', 'HTML/CSS'],
    backendApis: ['Node.js', 'Flask', 'REST APIs', 'Redis Streams'],
    toolsPlatforms: ['Git', 'Docker', 'Postman'],
    databases: ['PostgreSQL', 'MySQL', 'Oracle', 'MongoDB'],
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
      label: '3-Star Coder on CodeChef | 1800+ DSA Rating, Best Global Rank 16',
      url: 'https://www.codechef.com/users/sumanth9999'
    },
    {
      label: 'Knight Badge on LeetCode | Max Contest Rating 1850+, Top 7%',
      url: 'https://leetcode.com/u/sreesumanth2002/'
    },
    {
      label: '3rd Place in VNR VJIET Nationwide Coding Contest | Among 600 teams',
      url: 'https://drive.google.com/file/d/1QflX7DbUU1t2mQOtQM7eBkL1Yzp8vPGr/view?usp=sharing'
    },
    {
      label: '4th Place in Megathon 2022 at IIIT Hyderabad | Among 500 teams',
      url: 'https://drive.google.com/file/d/1dTIaOF0wvbhiXrq18hR7oInmjweQPpzZ/view?usp=sharing'
    }
  ]
};
