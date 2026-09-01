export interface PersonalInfo {
  name: string;
  tagline: string;
  profileImage: string;
  subtitle: string;
  education: string;
  socialLinks: {
    github: string;
    linkedin: string;
    leetcode: string;
    twitter: string;
    email: string;
    whatsapp: string;
    resume: string;
  };
  about: string[];
  technologies: string;
}

export interface ResumeItem {
  text: string;
  link: string;
  title: string;
}

export interface Project {
  title: string;
  img: string;
  description: string[];
  techStack: string[];
  link: string;
}

export interface Experience {
  companyName: string;
  position: string;
  techStack: string[];
  duration: string;
  workDone: string[];
}

export interface AchievementNote {
  id: string;
  title: string;
  preview: string;
  image: string;
  achievementTitle: string;
  content: string[];
  date: string;
  link?: string;
}

const personalInfo: PersonalInfo = {
  name: "Manas Marathe",
  tagline:
    "Building scalable backend systems and solving complex problems 🚀💻",
  profileImage: "/images/profilePic.png",
  subtitle: "Senior Software Developer",
  education:
    "B.Tech Computer Engineering with Honours in Data Science Analytics",
  socialLinks: {
    github: "https://github.com/ManasMarathe",
    linkedin: "https://www.linkedin.com/in/manas-marathe-129942123/",
    leetcode: "https://leetcode.com/u/ManasMarathe/",
    twitter: "https://x.com/mauux0",
    email: "mailto:manasvmarathe@gmail.com",
    whatsapp: "https://wa.me/919869031752",
    resume: "/manasResume.pdf",
  },
  about: [
    "I'm a passionate Software Development Engineer with expertise in building scalable backend systems, microservices architecture, and distributed systems.",
    "Currently a Senior Software Developer at XBE, building the system of action for heavy materials, logistics, and construction. Before that, at Gupshup, I owned the Partner Platform end-to-end as its sole engineer — architecture, features, production operations, and partner integrations — across systems processing 500M+ messages daily with 99.99% uptime. I have a strong foundation in Java, Go, Python, Spring Boot, and cloud-native technologies.",
    "I graduated from K.J. Somaiya College of Engineering with a 9.16 CGPA and love tackling challenging technical problems, optimizing system performance, and building robust, production-grade applications.",
  ],
  technologies:
    "I work with a diverse tech stack including Java, Python, Go, Spring Boot, Node.js, React, and various databases (PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch). I'm experienced in cloud platforms (AWS, Azure), containerization (Docker, Kubernetes), message queues (RabbitMQ, Kafka), and building event-driven architectures, REST APIs, and real-time WebSocket applications.",
};

const projects: Project[] = [
  {
    title: "Real-Time Bus Tracking Application",
    img: "bus-tracking.png",
    description: [
      "Built a real-time bus tracking system using REST APIs and WebSockets to broadcast GPS updates for active routes with minimal latency.",
      "Designed and normalized PostgreSQL schemas for buses, routes, drivers, and time-series location logs to ensure consistency and efficient queries.",
      "Implemented scheduled tasks using Spring Scheduler to purge stale data and generate daily metrics such as average delays and off-route alerts.",
      "💡 Demonstrates expertise in real-time data processing, database design, and backend architecture.",
    ],
    techStack: [
      "Spring Boot",
      "Java",
      "PostgreSQL",
      "WebSockets",
      "REST APIs",
      "Spring Scheduler",
    ],
    link: "https://github.com/ManasMarathe",
  },
  {
    title: "LeetCode Companion Mobile App",
    img: "leetcode-app.png",
    description: [
      "Built a cross-platform Flutter app to fetch user stats, problem history, and progress from LeetCode.",
      "Developed a Python web crawler to collect user data (solved problems, tags, accuracy) and integrated real-time execution and submission tracking via LeetCode endpoints.",
      "🎯 Provides comprehensive problem-solving analytics and progress tracking for competitive programmers.",
      "📱 Available on mobile with smooth UI/UX and real-time data synchronization.",
    ],
    techStack: [
      "Flutter",
      "Python",
      "Web Scraping",
      "REST APIs",
      "Dart",
      "Mobile Development",
    ],
    link: "https://github.com/ManasMarathe",
  },
  {
    title: "Chain Reaction Game",
    img: "chain-reaction.png",
    description: [
      "Multiplayer game implementation with strategic gameplay mechanics and AI opponents.",
      "Built with Python featuring clean code architecture and efficient game state management.",
      "⭐ Open source project with 2 stars on GitHub.",
    ],
    techStack: ["Python", "Game Development", "Algorithm Design"],
    link: "https://github.com/ManasMarathe/Chain-reaction",
  },
  {
    title: "Loan Analysis Dashboard",
    img: "loan-analysis.png",
    description: [
      "Data analysis project for loan approval patterns and risk assessment.",
      "Implemented statistical models and visualization techniques using Python and Jupyter Notebooks.",
      "📊 Features comprehensive data preprocessing, exploratory data analysis, and predictive modeling.",
    ],
    techStack: [
      "Python",
      "Jupyter Notebook",
      "Pandas",
      "NumPy",
      "Data Analysis",
      "Machine Learning",
    ],
    link: "https://github.com/ManasMarathe/Loan_analysis",
  },
  {
    title: "Birth Rates Analysis",
    img: "birthrates-analysis.png",
    description: [
      "Statistical analysis of global birth rate trends and demographic patterns.",
      "Implemented data visualization and trend analysis using Python data science libraries.",
      "🌍 Explores correlations between various socio-economic factors and birth rates.",
    ],
    techStack: [
      "Python",
      "Data Visualization",
      "Statistical Analysis",
      "Matplotlib",
      "Seaborn",
    ],
    link: "https://github.com/ManasMarathe/Birthrates_Analysis",
  },
];

const experience: Experience[] = [
  {
    companyName: "XBE",
    position: "Senior Software Developer",
    techStack: ["Backend Engineering", "Distributed Systems", "AI Agents"],
    duration: "Sep 2026 - Present",
    workDone: [
      "Building XBE's operations platform for heavy materials, logistics, and construction — unifying planning, dispatch, production, fleet, and financial systems, with AI-powered workflow automation via Agent XBE",
    ],
  },
  {
    companyName: "Gupshup",
    position: "Software Development Engineer II",
    techStack: [
      "Java",
      "Go",
      "Python",
      "Spring Boot",
      "Kafka",
      "PostgreSQL",
      "MySQL",
      "Elasticsearch",
      "AWS",
      "Kubernetes",
      "Helm",
      "RabbitMQ",
      "Docker",
    ],
    duration: "Jul 2024 - Aug 2026",
    workDone: [
      "Promoted to SDE II after taking end-to-end ownership of the Partner Platform as the sole engineer — architecture, feature development, production operations, and partner integrations — using an AI-first development approach to cut engineering turnaround time by 50%+",
      "Built an AI-powered developer workflow combining knowledge graphs, planner agents, code generation, and automated test creation to execute end-to-end development tasks while reducing LLM token consumption",
      "Architected the backend powering partner onboarding, real-time campaign analytics, delivery tracking, and performance reporting across systems processing 500M+ messages daily",
      "Engineered scalable backend systems in Java and Go for high-throughput message transformation and delivery across distributed services, maintaining 99.99% uptime",
      "Designed a modular transformer architecture supporting 10+ payload formats and protocols, enabling seamless enterprise partner integrations",
      "Implemented resilient event-driven workflows using Kafka, pub/sub, retries, and DLQs, improving delivery success rates by 30% under peak load",
      "Led production deployments on AWS & Kubernetes with Helm, health probes, dynamic logging, and observability integrations (Coralogix/Splunk), accelerating release cycles by 4x",
      "Resolved critical undocumented production issues through reverse engineering and log analysis, restoring reporting accuracy within 24 hours and reducing developer onboarding time by 4x",
    ],
  },
  {
    companyName: "Utopia Tech",
    position: "Backend Developer",
    techStack: [
      "Python",
      "Django",
      "PostgreSQL",
      "REST APIs",
      "IoT",
      "WebSockets",
    ],
    duration: "Jan 2024 - May 2024",
    workDone: [
      "Developed backend systems, REST APIs, and database schemas for an IoT platform, enabling real-time monitoring and health tracking for 1000+ connected devices through operational dashboards",
      "Optimized database queries and API performance for handling high-frequency IoT sensor data",
    ],
  },
  {
    companyName: "Mehery SocCom",
    position: "Software Developer Intern",
    techStack: ["Node.js", "JavaScript", "MERN Stack", "Messaging APIs"],
    duration: "Jun 2022 - Dec 2022",
    workDone: [
      "Implemented and researched different messaging channels including iMessage and RCS (Rich Communication Services)",
      "Developed messaging integrations that led to customer adoption and platform expansion",
      "Built scalable solutions using MERN stack for real-time communication features",
    ],
  },
  {
    companyName: "Caarya",
    position: "Backend Developer",
    techStack: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Discord API"],
    duration: "May 2022 - Nov 2022",
    workDone: [
      "Developed and deployed Discord bots and RESTful APIs for multiple startup websites and mobile applications",
      "Improved automation and user engagement through bot integrations and webhook implementations",
      "Built scalable API endpoints handling user authentication, data management, and third-party integrations",
    ],
  },
  {
    companyName: "The Marine Robotics Team",
    position: "Head Of Software",
    techStack: [
      "Robot Operating System (ROS)",
      "Image Processing",
      "Python",
      "C++",
    ],
    duration: "Sep 2020 - Mar 2022",
    workDone: [
      "Led the software development team for underwater autonomous underwater vehicle (AUV) projects",
      "Developed image processing algorithms for underwater object detection and navigation",
      "Participated in robotics competitions, implementing autonomous control systems and sensor integration",
      "Coordinated software development efforts across multiple subsystems including computer vision, control systems, and communications",
    ],
  },
];

const achievementNotes: AchievementNote[] = [
  {
    id: "achievement-1",
    title: "CSI Hackathon - Runner Up",
    preview:
      "Secured Runner Up position at CSI (Computer Society of India) Hackathon showcasing innovative problem-solving and technical excellence.",
    image: "",
    achievementTitle: "CSI Hackathon Runner Up 🥈",
    content: [
      "Secured Runner Up position at the prestigious Computer Society of India (CSI) Hackathon",
      "Developed an innovative solution demonstrating strong technical skills and creative problem-solving",
      "Collaborated effectively in a team environment under tight deadlines",
      "Presented the solution to industry experts and received recognition for technical excellence",
      "Competed against numerous talented teams from various institutions",
    ],
    date: "2023",
  },
];

export { personalInfo, projects, experience, achievementNotes };
