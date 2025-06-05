export interface Project {
  id: number;
  title: string;
  description: string;
  features: string[];
  tech: string[];
  image: string;
  github: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Book Management Application",
    description: "Full-stack app with a Spring Boot backend for CRUD operations, file uploads, and JWT authentication, paired with a responsive React frontend.",
    features: [
      "Pagination and sorting",
      "Advanced search functionality",
      "Form handling with validation",
      "Image previews for book covers"
    ],
    tech: ["Java", "Spring Boot", "React", "TypeScript", "Tailwind CSS", "MySQL"],
    image: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg",
    github: "https://github.com/Chetnaserene/Book-Management-Application-UI"
  },
  {
    id: 2,
    title: "AI Writing Assistant",
    description: "AI-powered tool for grammar correction and rephrasing, built with React, Express, and OpenAI's API, featuring secure Ethereum wallet authentication via Privy.",
    features: [
      "Real-time text processing",
      "Secure authentication",
      "Multiple writing modes",
      "Content saving functionality"
    ],
    tech: ["React", "Privy", "OpenAI API", "Express", "Node.js"],
    image: "https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg",
    github: "https://github.com/Chetnaserene/AI-Writing-Assistant"
  },
  {
    id: 3,
    title: "Women Wellness Finance",
    description: "Web platform empowering women's financial literacy with an interactive dashboard, learning hub, and wellness tools, using React and Chart.js.",
    features: [
      "Responsive UI across devices",
      "Financial education resources",
      "Data visualization with Chart.js",
      "GDPR-compliant data handling"
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    image: "https://images.pexels.com/photos/6289065/pexels-photo-6289065.jpeg",
    github: "https://github.com/Chetnaserene/women-wellness-finance"
  },
  {
    id: 4,
    title: "Inventory Management System",
    description: "Backend-driven app for managing inventory with Spring Boot, featuring CRUD operations and dynamic reporting, integrated with MySQL.",
    features: [
      "Stock tracking and alerts",
      "Report generation",
      "User role management",
      "Batch operations for inventory"
    ],
    tech: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
    image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg",
    github: "https://github.com/Chetnaserene/Inventory-Management-System"
  },
  {
    id: 5,
    title: "E-Commerce Product Recommendation",
    description: "Full-stack app recommending products based on user preferences, using Node.js, MongoDB, and React for a dynamic frontend.",
    features: [
      "Personalized recommendations",
      "User preference tracking",
      "Cart functionality",
      "Product filtering"
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "React"],
    image: "https://images.pexels.com/photos/7620697/pexels-photo-7620697.jpeg",
    github: "https://github.com/Chetnaserene/E-Commerce-Product-Recommendation"
  },
  {
    id: 6,
    title: "Task Scheduler App",
    description: "Web app for task management with real-time updates, built with React, TypeScript, and Firebase for authentication and data storage.",
    features: [
      "Task prioritization",
      "Real-time sync across devices",
      "User authentication",
      "Reminder notifications"
    ],
    tech: ["React", "TypeScript", "Firebase"],
    image: "https://images.pexels.com/photos/6408282/pexels-photo-6408282.jpeg",
    github: "https://github.com/Chetnaserene/Task-Scheduler-App"
  },
  {
    id: 7,
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and a clean, professional design.",
    features: [
      "Responsive design",
      "Interactive UI components",
      "Smooth scroll animations",
      "Contact form integration"
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    image: "https://images.pexels.com/photos/18833779/pexels-photo-18833779.jpeg?cs=srgb&dl=pexels-ann-h-45017-18833779.jpg&fm=jpg",
    github: "https://github.com/Chetnaserene/Portfolio"
  }
];