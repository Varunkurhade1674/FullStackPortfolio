export const profile = {
  name: "Varun Kurhade",
  title: "Full Stack Developer",
  email: "kurhadevarun3@gmail.com",
  phone: "+91 9356022799",
  linkedin: "https://www.linkedin.com/in/varun-kurhade-b53310281",
  github: "https://github.com/Varunkurhade1674",
  summary:
    "Full Stack Developer with experience across React, Node.js, Express.js, Python, and FastAPI — building REST APIs, database-backed applications, and AI-powered systems using generative and agentic AI.",
};

export const skills = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Bootstrap"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "FastAPI", "Flask", "REST APIs", "SOAP"],
  },
  {
    category: "Programming",
    items: ["JavaScript", "Python", "Java"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "SQL", "Firebase"],
  },
  {
    category: "Architecture",
    items: ["MERN Stack", "MVC", "API Integration", "Authentication", "Authorization"],
  },
  {
    category: "Tools & Cloud",
    items: ["Git", "GitHub", "VS Code", "AWS", "Azure"],
  },
  {
    category: "AI & Agentic Systems",
    items: ["Generative AI", "Agentic AI", "Multi-Agent AI", "AI Agents", "Prompt Engineering"],
  },
  {
    category: "AI Tools & Frameworks",
    items: ["Groq", "ClaudeAI","Anti-gravity","Cursor", "Gemini Vision", "Hugging Face", "Llama 3", "Streamlit"],
  },
];

export const experience = [
  {
    role: "Full Stack Development Intern",
    company: "Spherenex",
    location: "Bangalore",
    period: "02/2026 – 06/2026",
    points: [
      "Built Python full-stack applications with API integration.",
      "Worked on generative and agentic AI workflows.",
    ],
  },
  {
    role: "AI Intern",
    company: "Madhwa Infotech",
    location: null,
    period: "09/2025 – 12/2025",
    points: [
      "Built ReactJS frontends with Firebase authentication and database integration.",
    ],
  },
];

export const projects = [
  {
    name: "Cryptalk",
    category: "Quantum-Safe Encrypted Chat",
    description:
      "A next-generation secure messaging platform featuring post-quantum cryptography. Combines Kyber (lattice-based KEM), AES-256 symmetric encryption, and RSA asymmetric keys to create a layered security model. Zero Knowledge Proof authentication ensures users never expose their credentials — not even to the server.",
    features: [
      "Zero Knowledge Proof authentication",
      "Kyber post-quantum key exchange",
      "AES-256 + RSA hybrid encryption",
      "End-to-end encrypted messaging",
      "Real-time communication",
      "No plaintext credentials stored",
    ],
    stack: ["React", "Node.js", "MongoDB", "Kyber", "AES-256", "RSA", "ZKP"],
    github: null,
    demo: null,
  },
  {
    name: "WanderLust",
    category: "MERN Stack House Listing Platform",
    description:
      "A full-featured Airbnb-inspired house listing platform built on the MERN stack. Supports user authentication, property CRUD, interactive maps, image uploads, and RESTful API integration. Deployed and production-ready.",
    features: [
      "User authentication & sessions",
      "Full CRUD for listings",
      "Image upload & management",
      "Interactive map integration",
      "RESTful API design",
      "Deployed & live",
    ],
    stack: ["MongoDB", "Express.js", "React", "Node.js", "REST API"],
    github: null,
    demo: null,
  },
  {
    name: "SQLMind AI",
    category: "Enterprise Text-to-SQL Platform",
    description:
      "An enterprise text-to-SQL platform that translates natural language into SQL queries, built with a FastAPI/React stack backed by PostgreSQL and Llama 3.",
    stack: ["Python", "FastAPI", "React", "PostgreSQL", "Llama 3"],
    github: null,
    demo: null,
  },
  {
    name: "AuditFlow",
    category: "AI-Powered Multi-Agent Document Auditing System",
    description:
      "A multi-agent document auditing system using Groq-hosted Llama 3.3 to automate document review, with a Streamlit interface.",
    stack: ["Python", "Streamlit", "Groq Llama 3.3"],
    github: null,
    demo: null,
  },
  {
    name: "MediConsensus",
    category: "Collaborative Medical Diagnostics Platform",
    description:
      "Built a multi-agent AI medical diagnostics platform where specialized AI agents collaboratively analyze patient cases and provide complementary diagnostic perspectives. Implemented Cardiologist, Psychologist, and Pulmonologist agents with an Aggregator workflow using OctoChains and Groq Llama 3.3 to combine specialist outputs into a structured diagnostic analysis. Developed an interactive interface for submitting cases and viewing consolidated AI-generated insights.",
    features: [
      "Multi-Agent medical diagnostic workflow",
      "Specialized Cardiologist, Psychologist & Pulmonologist agents",
      "Collaborative AI reasoning and analysis",
      "Aggregated diagnostic insights",
      "Groq Llama 3.3 integration",
      "Interactive medical analysis interface",
    ],
    stack: [
      "OctoChains",
      "Groq Llama 3.3",
      "Multi-Agent AI",
      "Prompt Engineering",
      "Python",
      "Streamlit",
    ],
    github: null,
    demo: null,
  },
  {
    name: "Krishi Mitra",
    category: "AI-Powered Agriculture Assistant",
    description:
      "Built a multimodal AI agriculture assistant that helps users obtain crop and farming-related guidance through text, voice, and image-based interactions. Integrated Groq Llama 3.1 for AI-powered agricultural assistance and image analysis capabilities for identifying potential crop diseases. Developed a Flask-based application with an interactive interface to support practical farming-related queries.",
    features: [
      "AI-powered agricultural assistance",
      "Crop disease analysis using images",
      "Text and voice-based interaction",
      "Multimodal AI processing",
      "Groq Llama 3.1 integration",
      "Practical crop & farming guidance",
    ],
    stack: [
      "Groq Llama 3.1",
      "Gemini Vision",
      "Hugging Face",
      "Prompt Engineering",
      "Python",
      "Flask",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: null,
    demo: null,
  },
  {
    name: "Code Sequence Puzzle",
    category: "Gamified Learning Platform",
    description:
      "An interactive gamified coding puzzle platform designed to teach programming logic through engaging sequence challenges. Players arrange code blocks in the correct order, improving computational thinking in a fun, visual way.",
    features: [
      "Drag & drop code blocks",
      "Multiple difficulty levels",
      "Progress tracking",
      "Gamified scoring system",
      "Responsive UI",
      "Educational feedback",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    github: null,
    demo: null,
  },
  {
    name: "Zerodha Clone",
    category: "Stock Trading Platform",
    description:
      "A full-stack clone of the Zerodha trading platform featuring an intuitive stock dashboard, real-time market data mockups, interactive charts, and user portfolio management.",
    features: [
      "User authentication & authorization",
      "Interactive stock charts",
      "Dashboard & portfolio overview",
      "Order placement mockups",
      "Watchlist management",
    ],
    stack: ["React", "Node.js", "Express.js", "MongoDB"],
    github: null,
    demo: null,
  },
];

export const education = [
  {
    school: "Jain College of Engineering and Research",
    degree: "B.E. Computer Science and Engineering",
    period: "2022 – 2026",
    detail: "CGPA: 8.2/10",
    location: "Belagavi, Karnataka",
  },
  {
    school: "Jain College",
    degree: "Pre-University",
    period: "2021 – 2022",
    detail: "77.8%",
    location: "Athani, Karnataka",
  },
];

export const certifications = [
  {
    name: "Delta – Full Stack Web Development",
    issuer: "Apna College",
  },
  {
    name: "CODEFIESTA",
    issuer: "National Hackathon & State Level Project Competition, BIT Bengaluru",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
