export const company = {
  name: "Amit Web Solution Company",
  shortName: "Amit Web Solution",
  email: "amitwebsolutioncompany@gmail.com",
  phone: "+91 85747 00615",
  whatsapp: "https://wa.me/918574700615",
  city: "India",
  tagline: "Web, APK and business software systems for serious companies",
  description:
    "Founder-led web development company building premium business websites, admin panels, signage systems, payroll tools, payslip software, APK-ready products and SEO-focused digital experiences.",
  githubProof:
    "https://github.com/Amitmaddheshiya/AmitSignageApplication_Nextjs",
};

export const stats = [
  { label: "Completed systems", value: "6+" },
  { label: "Core focus", value: "Web + APK" },
  { label: "Delivery model", value: "Founder-led" },
  { label: "Pricing style", value: "India-friendly" },
];

export const serviceGroups = [
  {
    title: "Corporate Websites",
    description:
      "Premium company websites designed to build trust, rank on search and convert incoming traffic into real enquiries.",
    items: [
      "Company profile websites",
      "Product showcase websites",
      "Landing pages and lead funnels",
      "Website redesign and brand refresh",
    ],
  },
  {
    title: "Custom Web Applications",
    description:
      "Operational software for internal teams, customers and admin staff with clean dashboards, secure auth and scalable architecture.",
    items: [
      "Payroll systems",
      "Payslip and HR tools",
      "Admin panels and CMS",
      "Role-based business workflows",
    ],
  },
  {
    title: "Signage and Device Platforms",
    description:
      "Digital signage products with device registration, activation flows, CMS controls and web panels for content management.",
    items: [
      "Signage player web apps",
      "License key and activation systems",
      "Device management dashboards",
      "Controller-ready business panels",
    ],
  },
  {
    title: "APK and Hybrid Delivery",
    description:
      "Android-ready products for businesses that want the same platform to work on web and packaged mobile or TV environments.",
    items: [
      "APK-ready app packaging",
      "Capacitor-based deployment support",
      "PWA optimisation",
      "Cross-device UI implementation",
    ],
  },
  {
    title: "SEO and Performance",
    description:
      "Technical SEO, content structure and speed work that helps businesses look premium and perform well on Google.",
    items: [
      "Metadata and structured content",
      "Speed optimisation",
      "Search-friendly information architecture",
      "Location and service landing page setup",
    ],
  },
  {
    title: "Support and Iteration",
    description:
      "Direct founder communication, practical delivery cycles and affordable improvements without agency overhead.",
    items: [
      "Direct WhatsApp coordination",
      "Fast iteration rounds",
      "Content and UI updates",
      "Long-term product support",
    ],
  },
];

export const featuredProjects = [
  {
    title: "Signage Player APK and Web CMS Suite",
    type: "Public proof available",
    description:
      "A real signage product that includes player-side activation, device registration, CMS controls, admin users and web-based content management.",
    outcomes: [
      "Device ID generation and activation flow",
      "Admin CMS for per-device customisation",
      "Device and user management dashboard",
      "Android-ready stack with Capacitor dependencies",
    ],
    technologies: ["Next.js", "MongoDB", "JWT Auth", "Capacitor Android"],
    proofLabel: "View GitHub proof",
    proofUrl: company.githubProof,
    image: "/projects/fintech.png",
  },
  {
    title: "Signage License Key and Activation Workflow",
    type: "Built inside real signage platform",
    description:
      "License-style activation logic used to register screens, validate activation keys and control access before content playback starts.",
    outcomes: [
      "Activation key verification",
      "Token generation after activation",
      "Protected device onboarding flow",
      "Production-style API routes for status checks",
    ],
    technologies: ["Next.js API", "JWT", "Device Workflow", "Admin Tools"],
    proofLabel: "See public repository",
    proofUrl: company.githubProof,
    image: "/projects/productdetails.jpg",
  },
  {
    title: "Payroll and Payslip Management Systems",
    type: "Real delivered business systems",
    description:
      "Operational business software created for payroll handling, structured employee records and payslip-ready workflows.",
    outcomes: [
      "Admin-friendly processing screens",
      "Business workflow driven structure",
      "Ready for secure record handling",
      "Optimised for internal operations",
    ],
    technologies: ["MERN Stack", "Admin Dashboard", "Business Logic"],
    proofLabel: "Founder demonstration on request",
    proofUrl: "",
    image: "/projects/ecommerce.jpg",
  },
  {
    title: "Android Controller and Business Operations Tools",
    type: "Real implementation experience",
    description:
      "Controller-style systems and business panels built to manage devices, operations and internal workflows from a clear interface.",
    outcomes: [
      "Dashboard-led interaction design",
      "Device and process control mindset",
      "Web-to-APK compatible architecture",
      "Custom business logic implementation",
    ],
    technologies: ["React", "Next.js", "Dashboard UI", "Hybrid Delivery"],
    proofLabel: "Discuss similar build",
    proofUrl: company.whatsapp,
    image: "/projects/landing.jpg",
  },
];

export const pricingPlans = [
  {
    name: "Business Launch",
    price: "INR 14,999+",
    description:
      "For business owners who need a premium company website without agency-level pricing.",
    points: [
      "Up to 5 focused pages",
      "Mobile responsive design",
      "Basic technical SEO",
      "WhatsApp and lead contact setup",
    ],
  },
  {
    name: "Growth Website",
    price: "INR 29,999+",
    description:
      "For serious brands that want stronger positioning, better content flow and proof-led conversion sections.",
    points: [
      "Custom sections and animations",
      "Service, about and work pages",
      "Advanced on-page SEO structure",
      "Founder-led revisions",
    ],
    featured: true,
  },
  {
    name: "Web App or APK Suite",
    price: "INR 49,999+",
    description:
      "For custom business products such as dashboards, signage tools, payroll systems or web-plus-APK workflows.",
    points: [
      "Custom admin and user flows",
      "Business logic implementation",
      "Deployment support",
      "Scope-based quotation",
    ],
  },
];

export const processSteps = [
  {
    step: "Business understanding",
    description:
      "We define the audience, product angle, service priorities and the exact conversion goal before design starts.",
  },
  {
    step: "Structure and design",
    description:
      "The site is shaped like a serious company asset with stronger copy, proof, hierarchy and a clean visual system.",
  },
  {
    step: "Development and SEO",
    description:
      "Fast front-end implementation, metadata setup, page structure and technical cleanup happen together.",
  },
  {
    step: "Launch and support",
    description:
      "After review, the project is shipped with direct founder support for updates, iterations and future modules.",
  },
];

export const faqItems = [
  {
    question: "Do you build only websites?",
    answer:
      "No. I build business websites, custom dashboards, payroll or payslip systems, signage software, CMS panels and APK-ready products.",
  },
  {
    question: "Why is the pricing affordable?",
    answer:
      "Because the delivery is founder-led. You work directly with the person who designs and builds the product, without agency overhead.",
  },
  {
    question: "Can you work on SEO too?",
    answer:
      "Yes. Technical SEO, metadata, page structure, service copy and performance optimisation are included in the website process.",
  },
];
