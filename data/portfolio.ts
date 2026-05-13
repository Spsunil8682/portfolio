export const personal = {
  name: "Sunil Kumar Patidar",
  role: "Associate Software Developer",
  location: "Kota, Rajasthan, India",
  phone: "+91 7062006971",
  email: "sunil.dev9928@gmail.com",
  linkedin: "https://www.linkedin.com/in/sunil-kumar-patidar-71b26b213",
  github: "https://github.com/Spsunil8682",
  taglines: [
    "Frontend Engineer",
    "Next.js Specialist",
    "React Developer",
    "Shopify Storefront Pro",
    "UI Performance Nerd",
  ],
  bio: "I'm a frontend-focused software developer at Primathon, building scalable, high-performance e-commerce experiences with Next.js, React, TypeScript and Tailwind CSS. I love crafting fast, accessible UI and integrating commerce APIs like Shopify Storefront, GoKwik and KwikPass.",
  available: true,
};

export const stats = [
  { label: "Live e-commerce projects", value: "5+" },
  { label: "DSA problems solved", value: "700+" },
  { label: "LeetCode rating", value: "1700+" },
  { label: "Years of coding", value: "5+" },
];

export const skills = {
  Languages: [
    "C", "C++", "Java", "JavaScript", "TypeScript", "HTML", "CSS",
  ],
  Frontend: [
    "React.js", "Next.js", "Redux", "Tailwind CSS", "SSR", "SEO Optimization", "Responsive Design",
  ],
  "Backend & APIs": [
    "REST APIs", "Shopify Storefront API", "API Integration", "Authentication",
  ],
  "Tools & Platforms": [
    "Git", "GitHub", "Bitbucket", "VS Code", "Postman", "Figma", "Jira", "Zira", "Slack", "Sentry", "Vault",
  ],
  Deployment: [
    "Vercel", "Netlify", "AWS",
  ],
  "AI & Productivity": [
    "Claude Code", "GitHub Copilot", "ChatGPT", "Roo Code", "Prompt Engineering",
  ],
};

export const skillProgress = [
  { name: "Next.js / React", level: 92 },
  { name: "TypeScript", level: 88 },
  { name: "Tailwind CSS", level: 95 },
  { name: "JavaScript (ES6+)", level: 92 },
  { name: "Shopify Storefront API", level: 85 },
  { name: "REST API Integration", level: 88 },
  { name: "C++ / DSA", level: 85 },
  { name: "Git / GitHub", level: 90 },
];

export const experience = [
  {
    role: "Associate Software Developer",
    company: "Primathon",
    location: "Indore, India",
    period: "April 2025 – Present",
    bullets: [
      "Built scalable web applications using Next.js, React.js, TypeScript and Tailwind CSS.",
      "Developed and deployed 5+ live e-commerce projects with Shopify Storefront APIs, custom APIs, GoKwik and KwikPass integrations.",
      "Shipped features for Weryze.com, Plix Kids, Kilrr, BBlunt and GetElevate.",
      "Optimized frontend performance and responsive UI — improving Lighthouse scores, SEO and user engagement.",
      "Leveraged Claude Code, GitHub Copilot and AI-assisted workflows for faster delivery.",
      "Collaborated with clients and cross-functional teams in an agile workflow using Git/GitHub.",
    ],
  },
  {
    role: "Software Development Engineer Intern",
    company: "Primathon",
    location: "Indore, India",
    period: "Jan 2025 – March 2025",
    bullets: [
      "Developed responsive frontend applications using React.js, Next.js and TypeScript.",
      "Built reusable UI components and integrated APIs using Tailwind CSS.",
      "Worked on frontend optimization, bug fixing and improving application responsiveness.",
      "Collaborated with senior developers on scalable frontend features and UI enhancements.",
      "Maintained code quality and team collaboration using Git/GitHub.",
    ],
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science",
    school: "Indian Institute of Information Technology, Dharwad",
    period: "2020 – 2024",
    detail: "CPI: 7.5 · Karnataka, India",
  },
  {
    degree: "Intermediate (12th)",
    school: "Swami Vivekanand Vidya Niketan Sr. Sec. School, RBSE",
    period: "2017 – 2018",
    detail: "Percentage: 80%",
  },
  {
    degree: "High School (10th)",
    school: "Swami Vivekanand Vidya Niketan Sr. Sec. School, RBSE",
    period: "2015 – 2016",
    detail: "Percentage: 96%",
  },
];

export type Project = {
  title: string;
  tag: "E-commerce" | "Product" | "Open Source";
  description: string;
  stack: string[];
  link?: string;
  accent: string;
};

export const projects: Project[] = [
  {
    title: "Weryze",
    tag: "E-commerce",
    description:
      "Scalable e-commerce storefront with Shopify Storefront API, custom APIs, KwikPass auth and GoKwik checkout. Owned SEO, performance and reusable component architecture.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Shopify API", "GoKwik", "KwikPass"],
    link: "https://weryze.com",
    accent: "from-fuchsia-500 to-purple-600",
  },
  {
    title: "Plix Kids",
    tag: "E-commerce",
    description:
      "Kids' nutrition storefront built on the Primathon commerce stack. Focused on conversion-optimized PDP, cart and bundling flows.",
    stack: ["Next.js", "React", "Tailwind", "Shopify API"],
    link: "https://plixkids.com",
    accent: "from-cyan-400 to-blue-600",
  },
  {
    title: "Kilrr",
    tag: "E-commerce",
    description:
      "D2C apparel storefront with custom design system, animated PDP and event-tracking integrations for retention.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Analytics"],
    link: "https://store.kilrr.com/",
    accent: "from-rose-500 to-orange-500",
  },
  {
    title: "BBlunt",
    tag: "E-commerce",
    description:
      "Premium haircare storefront — implemented responsive UI, custom Shopify metafields rendering and checkout integrations.",
    stack: ["Next.js", "Shopify", "Tailwind"],
    link: "https://store.bblunt.com/",
    accent: "from-amber-400 to-rose-500",
  },
  {
    title: "GetElevate",
    tag: "E-commerce",
    description:
      "Health & wellness storefront. Built reusable widgets, cart drawer animations and improved Core Web Vitals.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://getelevate.in/",
    accent: "from-emerald-400 to-cyan-500",
  },
  {
    title: "Easy Roadmap",
    tag: "Product",
    description:
      "Developer roadmap platform with curated learning resources and interactive quizzes. Deployed on Netlify with smooth navigation.",
    stack: ["Next.js", "Tailwind", "Netlify"],
    link: "https://easyroadmap.netlify.app/",
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Hand-off in Wireless Network",
    tag: "Open Source",
    description:
      "Interactive visualizer for wireless handoff between base stations. Built to make a tough networks concept easier to grok.",
    stack: ["React", "HTML", "CSS", "JavaScript"],
    link: "https://handoffproject.netlify.app/",
    accent: "from-pink-500 to-purple-500",
  },
];

export const achievements = [
  {
    title: "5+ Projects in 9 Months",
    detail: "Shipped 5+ live D2C storefronts to production in my first 9 months at Primathon.",
    icon: "rocket",
  },
  {
    title: "700+ DSA Problems",
    detail: "Solved across LeetCode, GeeksforGeeks, Codeforces and CodeChef.",
    icon: "code",
  },
  {
    title: "1700+ LeetCode Rating",
    detail: "Consistent contest performance with a 1700+ rating on LeetCode.",
    icon: "trophy",
  },
  {
    title: "3-Star on CodeChef",
    detail: "Earned a 3-Star competitive programming rating on CodeChef.",
    icon: "star",
  },
  {
    title: "Pupil on Codeforces",
    detail: "Achieved the Pupil rank on Codeforces through rated contests.",
    icon: "medal",
  },
];

export const navItems = [
  { id: "home", label: "Home", icon: "home" },
  { id: "about", label: "About", icon: "user" },
  { id: "skills", label: "Skills", icon: "code" },
  { id: "experience", label: "Experience", icon: "briefcase" },
  { id: "projects", label: "Projects", icon: "folder" },
  { id: "achievements", label: "Achievements", icon: "trophy" },
  { id: "contact", label: "Contact", icon: "mail" },
] as const;
