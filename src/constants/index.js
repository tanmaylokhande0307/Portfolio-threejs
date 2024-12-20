import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  wipro,
  Zasmlabs,
  CollabBoard,
  ProjectManagement,
  ContractAnalyzer,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Javascript Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Python Developer",
    icon: creator,
  },
  {
    title: "GEN-AI Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Intern",
    company_name: "Wipro",
    icon: wipro,
    iconBg: "#383E56",
    date: "May 2022 - October 2022",
    points: [
      "Completed comprehensive training in API development and related technologies.",
      "Delivered a practice project using Java, showcasing skills in designing and implementing APIs.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "ZasmLabs.Pvt.Ltd",
    icon: Zasmlabs,
    iconBg: "#E6DEDD",
    date: "December 2022 - July 2023",
    points: [
      "Collaborated with a defense research organization to develop a proof of concept for offline avalanche mapping and navigation.",
      "Completed various training on javascript and react.",
    ],
  },
  {
    title: "Software Engineer | Gen-AI Developer",
    company_name: "ZasmLabs.Pvt.Ltd",
    icon: Zasmlabs,
    iconBg: "#383E56",
    date: "July 2023 - Present",
    points: [
      "Utilized PostGIS and PostgreSQL to implement advanced offline geospatial navigation and mapping features.",
      "Enhanced map rendering performance by transitioning from vector to raster layers, significantly reducing layer rendering time and improving overall application efficiency in displaying geospatial data.",
      "Optimized API performance by migrating services from Node.js to Go on a linux based system, achieving a significant improvement in throughput (reducing response time from 35 seconds to 1 second for 1000 requests) on resource-constrained hardware.",
      "Leveraged the UDP communication protocol combined with websockets to implement the SMS functionality.",
      "Technologies used - React,Redux Toolkit,Node,Go lang,Postgres,PostGIS,leaflet,react leaflet,websockets",
    ],
  },
];

const projects = [
  {
    name: "CollabBoard",
    description:
      "Developed a real time collaborative whiteboard and visual workspace where teams manage projects, design products and jot down their ideas.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "NextJs",
        color: "green-text-gradient",
      },
      {
        name: "RadixUI",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "Clerk",
        color: "green-text-gradient",
      },
      {
        name: "Convex",
        color: "pink-text-gradient",
      },
      {
        name: "LiveBlocks",
        color: "blue-text-gradient",
      },
      {
        name: "Zustand",
        color: "green-text-gradient",
      },
    ],
    image: CollabBoard,
    source_code_link: "https://github.com/tanmaylokhande0307/CollabBoard",
    deployed_link: "https://miroclone-xi.vercel.app/",
  },
  {
    name: "Project Management",
    description:
      "Developed a project management web application with a Kanban board and multiple task views featuring drag-and-drop functionality for flexible task and project management .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux toolkit",
        color: "green-text-gradient",
      },
      {
        name: "react-dnd",
        color: "pink-text-gradient",
      },
      {
        name: "recharts",
        color: "blue-text-gradient",
      },
      {
        name: "redux-persist",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "NodeJs",
        color: "blue-text-gradient",
      },
      {
        name: "PostgresQL",
        color: "green-text-gradient",
      },
      {
        name: "Prisma",
        color: "pink-text-gradient",
      },
    ],
    image: ProjectManagement,
    source_code_link:
      "https://github.com/tanmaylokhande0307/project-management",
  },
  {
    name: "Contract Analyser",
    description:
      "Created an AI-powered tool for streamlining the process of contract analysis where users derive useful insights from the contracts. With user authentication and comprehensive dashboard displays.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind css",
        color: "pink-text-gradient",
      },
      {
        name: "TanStack Query",
        color: "blue-text-gradient",
      },
      {
        name: "Zustand",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
      {
        name: "GenAI",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDb",
        color: "green-text-gradient",
      },
      {
        name: "Mongoose",
        color: "pink-text-gradient",
      },
      {
        name: "Stripe",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "Node",
        color: "pink-text-gradient",
      },
      {
        name: "Redis",
        color: "blue-text-gradient",
      },
      {
        name: "Resend",
        color: "green-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "pink-text-gradient",
      },
      {
        name: "LLM (Gemini Pro)",
        color: "blue-text-gradient",
      },
    ],
    image: ContractAnalyzer,
    source_code_link: "https://github.com/tanmaylokhande0307/contract-analysis/",
  },
];

export { services, technologies, experiences, projects };
