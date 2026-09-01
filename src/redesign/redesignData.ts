export interface RedesignProject {
  title: string;
  blurb: string;
  stack: string[];
  link: string;
}

export const redesignProjects: RedesignProject[] = [
  {
    title: "QueueFree (Founder)",
    blurb:
      "A multi-tenant, end-to-end queue management platform coordinating customers, kitchen staff, and managers in real time. Concurrent Go services handle queue scheduling, order lifecycle management, and event-driven updates for 10,000+ active users.",
    stack: ["Go", "Next.js", "React Native", "Scalable Systems"],
    link: "https://github.com/ManasMarathe",
  },
  {
    title: "FriendCompute",
    blurb:
      "A self-hosted distributed compute platform that turns friends' spare machines into a personal cloud. Owner-aware scheduling with courtesy caps and trust tiers, at-most-once workload fencing (chaos-tested with SIGKILL/SIGSTOP), explainable placement, and zero port-forwarding via embedded Tailscale. Shipped with Homebrew and Scoop installers.",
    stack: ["Go", "Distributed Systems", "Tailscale/tsnet", "Docker"],
    link: "https://github.com/ManasMarathe/friendCompute",
  },
  {
    title: "CorruptionFix",
    blurb:
      "A civic web app where citizens report corruption at Indian government offices and see reports on an interactive map — with a tamper-evident complaint record and a moderated response path for officers.",
    stack: ["Next.js 15", "TypeScript", "PostgreSQL", "PostGIS", "Drizzle"],
    link: "https://github.com/ManasMarathe/corruption.fix",
  },
  {
    title: "UniqSocial",
    blurb:
      "A social matching app that curates one chat partner per day in a fixed 8 PM–12 AM window. Go (Chi) backend with REST + WebSockets, internal conversation scoring that shapes future matches, and a React Native (Expo) client.",
    stack: ["Go", "React Native", "WebSockets", "PostgreSQL", "Redis"],
    link: "https://github.com/ManasMarathe/UniqSocial",
  },
  {
    title: "Payment Processing System",
    blurb:
      "A multi-provider payment system (Stripe, PayPal) built on the Strategy and Registry patterns — new providers plug in with zero changes to existing code. Validation, refunds, and transaction history behind a clean REST API.",
    stack: ["Java 17", "Spring Boot 3", "Design Patterns", "REST"],
    link: "https://github.com/ManasMarathe/payment-processing-system",
  },
  {
    title: "LinkedIn AI Auto Job Applier",
    blurb:
      "A Selenium bot that automates LinkedIn Easy Apply end-to-end — searches by criteria, auto-answers application questions, attaches the right resume, and submits 100+ applications in under an hour.",
    stack: ["Python", "Selenium", "Automation"],
    link: "https://github.com/ManasMarathe/JobApplier",
  },
  {
    title: "Real-Time Bus Tracking",
    blurb:
      "Live GPS broadcasting for active bus routes over WebSockets, normalized PostgreSQL schemas for routes and time-series location logs, and scheduled jobs for daily delay and off-route metrics.",
    stack: ["Spring Boot", "Java", "PostgreSQL", "WebSockets"],
    link: "https://github.com/ManasMarathe",
  },
  {
    title: "LeetCode Companion",
    blurb:
      "A cross-platform Flutter app for LeetCode stats, problem history, and progress — backed by a Python crawler and real-time submission tracking via LeetCode endpoints.",
    stack: ["Flutter", "Dart", "Python", "REST APIs"],
    link: "https://github.com/ManasMarathe",
  },
  {
    title: "Chain Reaction",
    blurb:
      "A multiplayer strategy game with AI opponents and efficient game-state management — an early open-source project that picked up stars on GitHub.",
    stack: ["Python", "Game Dev", "Algorithms"],
    link: "https://github.com/ManasMarathe/Chain-reaction",
  },
];

export const redesignHighlights: string[] = [
  "B.Tech Computer Engineering, K.J. Somaiya College — 9.16 CGPA",
  "Honours in Data Science & Analytics",
  "Runner Up — CSI (Computer Society of India) Hackathon",
  "Head of Software — The Marine Robotics Team (AUVs)",
];
