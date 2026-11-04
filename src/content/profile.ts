/**
 * All of the site's copy lives in this one file.
 * To update the portfolio, edit the values below — the page re-renders from them.
 */

export const profile = {
  name: { first: "Akshata", last: "Nalawade" },
  role: "Electronics & Computer Science engineer",
  location: "Mumbai, India",
  school: "Vidyalankar Institute of Technology",
  classOf: "2027",

  // Her own words, from her GitHub profile.
  thesis:
    "I like turning messy real-world workflows into systems that run on their own.",

  // Small uppercase line under the big headline.
  intro:
    "An engineering student who turns messy real-world workflows into systems that run on their own ✨",

  // Path to a 3D avatar image in /public (e.g. "/avatar.png").
  // Leave empty to show the gradient orb instead.
  avatar: "",

  about: [
    "I'm an Electronics & Computer Science engineering student at Vidyalankar Institute of Technology who builds across full-stack web, applied machine learning, and conversational AI.",
    "Most recently I built House Muse, an AI interior design platform that redesigns a room from a single photo, and shipped a lead-handling chatbot on Zoho SalesIQ during my internship at Trinetrini Quantum. I'm comfortable with Python, JavaScript, SQL, REST APIs, computer vision, and Linux and cloud fundamentals.",
  ],

  links: {
    email: "akshata.nalawade@vit.edu.in",
    github: "https://github.com/nalawadeakshata29",
    linkedin: "https://www.linkedin.com/in/akshata-nalawade-b2297436b/",
    // To update the resume, replace this file in /public with the same name.
    resume: "/Akshata_Nalawade_Resume.pdf",
  },

  // Shown above the email address in the Contact section.
  contactNote:
    "I'm looking for internships in full-stack development and applied AI. If you're hiring, building something interesting, or just want to talk shop, my inbox is open.",
};

export type Project = {
  slug: string;
  title: string;
  kicker: string; // short "cover line" used in the hero
  summary: string;
  points: string[];
  tech: string[];
  repo?: string;
  live?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "house-muse",
    title: "House Muse",
    kicker: "A room photo in, a photorealistic redesign out",
    summary:
      "An AI interior design platform that redesigns a room from one photo while keeping its walls, windows, and layout intact.",
    points: [
      "Generates redesigns with SDXL, Depth ControlNet, and style LoRAs, so the room's structure survives the restyle.",
      "Three services: a React + TypeScript frontend, a Django REST backend with token auth and Google OAuth, and a Flask ML microservice.",
      "Vision pipeline (YOLOv8, SAM, CLIP, K-Means) for object detection, room-type classification, lighting analysis, and colour palette extraction.",
      "Catalog-based budget breakdowns in ₹ across 7 categories with an interactive donut chart, plus chat-driven refinement using img2img.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Django REST Framework",
      "Flask",
      "PostgreSQL",
      "PyTorch",
      "OpenCV",
      "Hugging Face",
    ],
    repo: "https://github.com/nalawadeakshata29/House-Muse",
    featured: true,
  },
  {
    slug: "salesiq-chatbot",
    title: "Lead-handling chatbot",
    kicker: "A chatbot that answers visitors and captures leads",
    summary:
      "A conversion-focused chatbot for Trinetrini Quantum's website, built on Zoho SalesIQ to automate lead handling.",
    points: [
      "Mapped user intents and designed decision-tree conversation flows that guide visitors through common queries.",
      "Handled the Zoho integration, workflow automation, testing, and deployment.",
      "Structured interaction handling to cut repetitive manual responses.",
    ],
    tech: [
      "Zoho SalesIQ",
      "Conversational AI",
      "Workflow automation",
      "Decision trees",
      "JavaScript",
    ],
  },
  {
    slug: "ishaara-speak",
    title: "IshaaraSpeak",
    kicker: "Speech in, 3D sign language out",
    summary:
      "An accessibility system that converts speech to text and renders it as 3D sign language.",
    points: [
      "Real-time audio processing and gesture mapping.",
      "Built with CNNs, OpenCV, and MediaPipe.",
    ],
    tech: ["Python", "JavaScript", "CNN", "OpenCV", "MediaPipe", "3D animation"],
    repo: "https://github.com/nalawadeakshata29/ishaara_speak",
  },
  {
    slug: "creamy-bliss",
    title: "Creamy Bliss",
    kicker: "The day-to-day of an ice cream parlour, online",
    summary:
      "A responsive full-stack web application for an ice cream parlour.",
    points: [
      "Node.js backend and PostgreSQL database supporting day-to-day operations.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "PostgreSQL"],
  },
];

// Smaller builds from GitHub that aren't on the resume.
export const otherWork: Pick<Project, "title" | "summary" | "tech" | "repo">[] =
  [
    {
      title: "Weather Classification",
      summary:
        "Classifies weather from sky images, comparing MobileNetV2, ResNet18, and a custom CNN, with Grad-CAM explanations and a Flask web app.",
      tech: ["PyTorch", "CNN", "Grad-CAM", "Flask"],
      repo: "https://github.com/nalawadeakshata29/Weather-Classification",
    },
    {
      title: "NetLab",
      summary:
        "A virtual network lab that animates Stop-and-Wait, Go-Back-N, and Selective Repeat ARQ protocols in the browser.",
      tech: ["JavaScript", "Canvas", "Networking"],
      repo: "https://github.com/nalawadeakshata29/Net-lab",
    },
  ];

export const experience = [
  {
    title: "AI Chatbot Development Intern",
    org: "Trinetrini Quantum",
    when: "1 Dec – 15 Jan",
    points: [
      "Hands-on work in conversational AI, chatbot flow design, and workflow automation on Zoho SalesIQ.",
      "Built and shipped the company's lead-handling website chatbot.",
    ],
  },
  {
    title: "Certificate Course in Cloud Computing",
    org: "C-DAC ACTS, Pune",
    when: "5 June – 15 June",
    points: [
      "60 hours of training in cloud computing, basic and advanced Linux, and deployment.",
      "Practical exposure to cloud-based solutions, Linux environments, and DevOps fundamentals.",
    ],
  },
  {
    title: "Fundamentals of Machine Learning",
    org: "Infosys Springboard",
    when: "Completed",
    points: [],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "SQL", "HTML5", "CSS3"],
  },
  {
    group: "Frontend",
    items: ["React", "Vite", "Tailwind CSS", "Responsive UI", "Figma"],
  },
  {
    group: "Backend & APIs",
    items: [
      "Node.js",
      "Django",
      "Django REST Framework",
      "Flask",
      "REST APIs",
      "Token auth",
      "Google OAuth",
    ],
  },
  { group: "Databases", items: ["PostgreSQL", "SQLite"] },
  {
    group: "AI / ML & vision",
    items: [
      "CNN",
      "KNN",
      "YOLOv8",
      "OpenCV",
      "MediaPipe",
      "Stable Diffusion (SDXL, ControlNet)",
      "K-Means",
      "Pandas",
      "NumPy",
    ],
  },
  {
    group: "Cloud & tools",
    items: [
      "Linux",
      "Cloud computing",
      "Hugging Face Spaces",
      "Git & GitHub",
      "Jupyter",
      "Google Colab",
      "Zoho SalesIQ",
    ],
  },
];

export const education = [
  {
    school: "Vidyalankar Institute of Technology",
    detail: "B.Tech, Electronics & Computer Science",
    when: "2023 – 2027",
    score: "GPA 7.61 (through Sem V)",
  },
];

// From her GitHub profile.
export const beyondCode =
  "From styling outfits and exploring new flavours to embracing spirituality and mindful living, I find happiness in the things that let me express myself, stay grounded, and enjoy life beyond the digital world.";
