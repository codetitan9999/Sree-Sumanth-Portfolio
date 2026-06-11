export const portfolioData = {
  personalInfo: {
    fullName: 'Sree Sumanth Duddukuri',
    eyebrow: 'Building reliable backend systems and scalable APIs',
    title: 'Software Engineer | Ex-Oracle | Backend Systems, APIs, Workflow Automation',
    shortBio:
      'Backend-oriented software engineer with experience building scalable data-processing systems, self-serve integration workflows, and reliable production software. I enjoy solving high-impact engineering problems involving performance, debugging, asynchronous processing, and system reliability.',
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
      'I’m a backend-oriented software engineer who enjoys turning ambiguous, high-pressure problems into reliable systems and measurable outcomes. I’m most energized by debugging complex issues, improving performance, and simplifying messy workflows into something scalable and easy to use.',
    longBio:
      'I’m adaptable and quick to learn, which has helped me pick up new technologies, understand complex systems, and contribute effectively in fast-paced environments. Outside of work, I spend a lot of time strengthening my understanding of systems, problem solving, and software engineering fundamentals. Competitive programming and continuous upskilling are a big part of that for me.'
  },
  experienceIntro:
    'At Oracle, I worked on large-scale backend systems and enterprise integrations across NetSuite and Salesforce products, with a focus on performance, reliability, and self-serve workflow automation.',
  experience: [
    {
      company: 'Oracle',
      role: 'Software Engineer I',
      location: 'Hyderabad, India',
      duration: 'Jul 2024 - May 2026',
      highlights: [
        'Migrated a legacy export pipeline to a queue-based parallel processing model with batching, retries, and failure isolation, reducing processing time for 1M+ record workloads (~200MB/run) from ~14 min to ~2-5 min and eliminating timeout failures.',
        'Delivered a self-serve mapping workflow for a product serving ~2.3K customers, reducing end-to-end mapping setup turnaround from 1-2 weeks to under 1 hour by replacing manual setup with productized configuration.',
        'Reverse-engineered legacy cross-system mapping behavior and built backend APIs for payload generation, transformation, conditional routing, and bidirectional mappings, reducing setup time by ~90-95% from ~20 minutes to ~1-2 minutes.',
        'Improved reliability of the inbound-shipment sync feature for 1000+ customers by adding purchase-order synchronization, retries, validation, and failure handling, reducing recurring production sync failures by ~80-90% based on pre/post-release error trends.',
        'Fixed a release-critical sync issue during rollout by correcting transformation logic and adding invalid-mapping validation, unblocking deployment in 2 hours and avoiding a 1-week delay.'
      ],
      technologies: ['JavaScript', 'TypeScript', 'Node.js', 'Flask', 'REST APIs', 'SQL', 'React']
    }
  ],
  projects: [
    {
      title: 'DurableFlow',
      subtitle: 'Go | PostgreSQL | Redis Streams | React | TypeScript | Docker | OpenTelemetry | Prometheus | Grafana',
      description:
        'Go-based workflow engine for multi-step background jobs using PostgreSQL for durable state and Redis Streams for asynchronous dispatch.',
      impact: 'Turns multi-step background execution into a durable, observable system with crash-safe dispatch, throughput gains, and strong recovery guarantees.',
      highlights: [
        'Built DurableFlow, a Go-based workflow engine for multi-step background jobs using PostgreSQL for durable state and Redis Streams for asynchronous dispatch.',
        'Implemented a transactional outbox, retries with backoff, dead-letter replay, consumer-group recovery, and handler-level idempotency for crash-safe execution under at-least-once delivery.',
        'Increased throughput by ~19x, from ~5 to ~99 executions/sec at 200 concurrent executions, by tuning outbox polling from 2s to 100ms; sustained ~98 executions/sec after partial worker failure.',
        'Added a React/TypeScript operations dashboard, Prometheus/Grafana/OpenTelemetry instrumentation, and 24 focused tests for retry, replay, and recovery paths.'
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
    languages: ['C++', 'Python', 'Go', 'JavaScript'],
    backendApis: ['Node.js', 'Flask', 'REST APIs', 'Redis'],
    databases: ['PostgreSQL', 'MySQL', 'Oracle', 'MongoDB'],
    systems: ['Workflow Orchestration', 'Asynchronous Processing', 'Event-Driven Systems', 'Idempotency and Retry Handling'],
    toolsPlatforms: ['Git', 'Docker', 'OpenTelemetry', 'Prometheus', 'Grafana', 'Postman'],
    frontend: ['React', 'HTML/CSS'],
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
      label: '3-Star Coder on CodeChef (Competitive Programming) | DSA Rating 2000+, Best Global Rank 3',
      url: 'https://www.codechef.com/users/sumanth9999'
    },
    {
      label: 'Knight Badge on LeetCode | Max Contest Rating 1900+, Top 3%',
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
