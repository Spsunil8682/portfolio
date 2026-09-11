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
    "JavaScript (ES6+)", "TypeScript", "C++", "C", "Java", "HTML5", "CSS3",
  ],
  Frontend: [
    "React.js", "Next.js (App Router)", "Redux", "Tailwind CSS", "Framer Motion",
    "SSR / SSG / ISR", "Component Architecture", "Design Systems",
    "Responsive Design", "Accessibility (a11y)",
  ],
  "Backend & APIs": [
    "REST APIs", "GraphQL", "Shopify Storefront API", "Shopify Metafields",
    "API Integration", "Authentication", "Webhooks",
  ],
  "E-commerce & Integrations": [
    "Shopify", "GoKwik Checkout", "KwikPass Auth", "Cart & Checkout Flows",
    "PDP Optimization", "Bundles & Combos", "Coupons & Offers", "Order Tracking",
  ],
  "Performance & SEO": [
    "Core Web Vitals", "Lighthouse Audits", "SEO Optimization", "Image Optimization",
    "Code Splitting", "Lazy Loading", "Caching", "GA4 / Event Tracking",
  ],
  "Tools & Platforms": [
    "Git", "GitHub", "Bitbucket", "VS Code", "Chrome DevTools", "Postman",
    "Figma", "Jira", "Zira", "Slack", "Sentry", "Vault", "npm / yarn",
  ],
  Deployment: [
    "Vercel", "Netlify", "AWS", "CI/CD", "Environment Config",
  ],
  "CS Fundamentals": [
    "Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems",
    "Computer Networks", "Problem Solving",
  ],
  "AI & Productivity": [
    "Claude Code", "GitHub Copilot", "ChatGPT", "Roo Code",
    "Prompt Engineering", "AI-assisted Debugging", "Agile / Scrum",
  ],
};

export const skillProgress = [
  { name: "Next.js / React", level: 92 },
  { name: "Tailwind CSS", level: 95 },
  { name: "JavaScript (ES6+)", level: 92 },
  { name: "TypeScript", level: 88 },
  { name: "REST API Integration", level: 88 },
  { name: "Shopify Storefront API", level: 85 },
  { name: "C++ / DSA", level: 85 },
  { name: "Performance & SEO", level: 87 },
  { name: "GraphQL", level: 80 },
  { name: "Framer Motion", level: 82 },
  { name: "Git / GitHub", level: 90 },
];

export const experience = [
  {
    role: "Associate Software Developer",
    company: "Primathon",
    location: "Gurugram, India",
    period: "Jan 2025 – Present",
    bullets: [
      "Built and shipped 5+ pixel-perfect, responsive production storefronts — bBLUNT, Plix Kids, Weryze, Aqualogica and Elevate — using React.js, Next.js, TypeScript and Tailwind CSS, delivering business-critical commerce experiences for high-traffic consumer brands.",
      "Built the complete storefront page suite — Home, PLP, PDP, Cart, Checkout, Thank You, Order History, Order Detail and Profile — as reusable, shared components reused across all 5 D2C brands; engineered shared API functions and reusable flows for the cart flow, add-to-cart API and post-order flow, eliminating duplicate code and ensuring consistent behavior across storefronts.",
      "Built reusable, modular component libraries with clean, scalable code using React functional components, hooks, Redux and Context API for consistent state management across complex UIs.",
      "Developed mobile-first, cross-browser compatible web applications using CSS3, Tailwind CSS and media queries, ensuring consistent behavior across Chrome, Firefox, Safari and mobile devices.",
      "Integrated REST APIs and GraphQL services into frontend applications for real-time product data, cart flows, authentication and order management, ensuring seamless data synchronization and smooth user experiences across production storefronts.",
      "Optimized frontend performance via SSR, lazy loading, code splitting and image optimization, achieving 90+ Lighthouse scores and strong Core Web Vitals (LCP, CLS, FID) across all production apps.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Coding Blocks",
    location: "Remote",
    period: "Aug 2024 – Dec 2025",
    bullets: [
      "Built reusable UI components and dashboards using React.js, Vue.js, Tailwind CSS and Chart.js, improving reporting workflows and operational visibility.",
      "Improved frontend performance through React Hooks, lazy loading, code splitting and component optimization techniques.",
      "Developed and maintained REST APIs using Node.js, Express.js and MongoDB, implementing CRUD operations, authentication and backend integrations for full-stack feature delivery.",
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
    title: "Aqualogica",
    tag: "E-commerce",
    description:
      "Water-based skincare D2C storefront for a high-traffic Shopify brand. Built range-wise collection pages (Glow+, Detan+, Hydrate+), combo/bundle builders, BOGO coupon flows and a ratings-and-reviews layer on the PDP.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shopify Storefront API",
      "GraphQL",
      "REST APIs",
      "SSR / ISR",
      "SEO",
      "Core Web Vitals",
      "Framer Motion",
      "Vercel",
    ],
    link: "https://aqualogica.in/",
    accent: "from-sky-400 to-teal-500",
  },
  {
    title: "Weryze",
    tag: "E-commerce",
    description:
      "Scalable e-commerce storefront with Shopify Storefront API, custom APIs, KwikPass auth and GoKwik checkout. Owned SEO, performance and reusable component architecture.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shopify Storefront API",
      "GraphQL",
      "GoKwik",
      "KwikPass",
      "Redux",
      "SSR / SEO",
      "Sentry",
      "Vercel",
    ],
    link: "https://weryze.com",
    accent: "from-fuchsia-500 to-purple-600",
  },
  {
    title: "Plix Kids",
    tag: "E-commerce",
    description:
      "Kids' nutrition storefront built on the Primathon commerce stack. Focused on conversion-optimized PDP, cart and bundling flows.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shopify Storefront API",
      "GraphQL",
      "Cart & Bundling",
      "Responsive UI",
      "SEO",
      "Vercel",
    ],
    link: "https://plixkids.com",
    accent: "from-cyan-400 to-blue-600",
  },
  {
    title: "Kilrr",
    tag: "E-commerce",
    description:
      "D2C apparel storefront with custom design system, animated PDP and event-tracking integrations for retention.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Design System",
      "Shopify API",
      "GA4 / Analytics",
      "Event Tracking",
      "SEO",
    ],
    link: "https://store.kilrr.com/",
    accent: "from-rose-500 to-orange-500",
  },
  {
    title: "BBlunt",
    tag: "E-commerce",
    description:
      "Premium haircare storefront — implemented responsive UI, custom Shopify metafields rendering and checkout integrations.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shopify Metafields",
      "Storefront API",
      "GraphQL",
      "Checkout Integration",
      "Responsive Design",
      "Accessibility",
    ],
    link: "https://store.bblunt.com/",
    accent: "from-amber-400 to-rose-500",
  },
  {
    title: "GetElevate",
    tag: "E-commerce",
    description:
      "Health & wellness storefront. Built reusable widgets, cart drawer animations and improved Core Web Vitals.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Reusable Components",
      "REST APIs",
      "Core Web Vitals",
      "Lighthouse",
      "Vercel",
    ],
    link: "https://getelevate.in/",
    accent: "from-emerald-400 to-cyan-500",
  },
  {
    title: "Easy Roadmap",
    tag: "Product",
    description:
      "Developer roadmap platform with curated learning resources and interactive quizzes. Deployed on Netlify with smooth navigation.",
    stack: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Client-side Routing",
      "Quiz Engine",
      "Responsive Design",
      "Netlify",
    ],
    link: "https://easyroadmap.netlify.app/",
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Hand-off in Wireless Network",
    tag: "Open Source",
    description:
      "Interactive visualizer for wireless handoff between base stations. Built to make a tough networks concept easier to grok.",
    stack: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Canvas / SVG",
      "Simulation Logic",
      "Data Visualization",
      "Netlify",
    ],
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
