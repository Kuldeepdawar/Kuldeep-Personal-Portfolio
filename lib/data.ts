import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "React Full-Stack developer",
    location: "BatteryMate - Sydney",
    description:
      "API Development: Designed and implemented scalable RESTful APIs, using TypeScript, JavaScript (ES6+), and AWS Lambda to handle product data, user management, and order processing.",
    icon: React.createElement(FaReact),
    date: "2023-2025",
  },
  {
    title: "Full Stack Developer",
    location: "Accenture - Australia",
    description:
      "I worked as a React Full Stack Developer at Accenture for 2 years, handling SCATS and Samsung client projects using React, JavaScript, TypeScript, Node.js, Tailwind, Prisma, Next.js, MongoDB, MySQL, and Docker.",
    icon: React.createElement(FaReact),
    date: "2021-2023",
  },
  {
    title: "React Developer",
    location: "Reesby - Melbourne",
    description:
      "Design and implement a dynamic dashboard for the CRM application using HTML5, CSS3, React, JavaScript/TypeScript and Bootstrap.",
    icon: React.createElement(FaReact),
    date: "2020-2021",
  },
  {
    title: "Web Developer",
    location: "OSPMC",
    description:
      "Designed and built applications tailored to meet specific business requirements, ensuring alignment with project goals and client needs.",
    icon: React.createElement(FaReact),
    date: "2017 - 2018",
  },
  {
    title: "Front-End Developer",
    location: "ARC EDUCATION",
    description:
      "Implemented UI/UX designs with precision, ensuring alignment with design specifications and enhancing the visual appeal and usability of applications.",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2017",
  },
  {
    title: "INTERNSHIP",
    location: "TCIL-IT, Chandigarh",
    description:
      "After graduating, I completed a 6-month internship where I gained hands-on experience and deepened my understanding of core web development concepts.",
    icon: React.createElement(LuGraduationCap),
    date: "2015",
  },
] as const;

export const projectsData = [
  {
    title: "SAMSUNG",
    description:
      "Developed user interfaces using React, Redux and TypeScript, creating a responsive and interactive shopping experience. Leveraged JavaScript (ES6+).",
    tags: ["React", "Node.js", "MongoDB", "Tailwind", "Redux Toolkit"],
    // imageUrl: corpcommentImg,
    imageUrl:
      "https://images.unsplash.com/photo-1583573636246-18cb2246697f?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "SCATS",
    description:
      "I worked as a Advanced App developer in this project. It has features like Client/Server Side Rendering, authenitication, Restful API and pagination etc.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"],

    imageUrl:
      "https://images.unsplash.com/photo-1473042904451-00171c69419d?q=80&w=1799&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "ANZK",
    description:
      "I worked as a React developer on this Accenture Internal project also . I have fixed myriad bugs in this project related to client side and Server side",
    tags: ["React", "Node.js", "SQL", "Tailwind", "Context API"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "CRM",
    description:
      "I worked as a React devloper on CRM Live Project AI / Machine and monitored application performance to identify potential bottlenecks, develop solutions.",
    tags: ["React", "Node.js", "MongoDB", "Prisma", "TypeScript"],
    imageUrl: corpcommentImg,
  },
  {
    title: "OSPMC",
    description:
      "Designed and built applications tailored to meet specific business requirements, ensuring alignment with project goals and client needs",
    tags: ["JavaScript", "MySQL", "HTML5/CSS3", "TypeScript"],
    //imageUrl: corpcommentImg,
    imageUrl:
      "https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "GNI",
    description:
      "I worked as a Front-end developer on this project. Monitored and collaborate with developers on solution implementation.",
    tags: ["React", "CSS3", "MongoDB", "TypeScript"],
    //imageUrl: corpcommentImg,
    imageUrl:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
] as const;

export const skillsData = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "CI/CD",
  "PostgreSQL",
  "AWS",
] as const;
