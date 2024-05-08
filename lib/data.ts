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
    title: "INTERNSHIP",
    location: "TCIL-IT, Chandigarh",
    description:
      "After graduated, I found an internship for 6 months then learned all web development concepts in depth.",
    icon: React.createElement(LuGraduationCap),
    date: "2015",
  },
  {
    title: "Front-End Developer",
    location: "ARC EDUCATION",
    description:
      "I worked as a front-end developer for 1 years 5 months. I also upskilled to the full stack knowledge based on client requirments.",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2017",
  },
  {
    title: "Front-end Developer",
    location: "OSPMC",
    description:
      "I worked as a Front-end developer in the medical Industry. My stack includes React, JavaScript, TypeScript, Tailwind, MongoDB and MySQL",
    icon: React.createElement(FaReact),
    date: "2017 - 2018",
  },
  {
    title: "React Full-Stack Developer",
    location: "Reesby - Melbourne",
    description:
      "I worked as a React full-stack developer.I have to monitor, test application performance and collaborate with developers on solution implementation.",
    icon: React.createElement(FaReact),
    date: "2020-2021",
  },
  {
    title: "React Full-Stack developer",
    location: "Accenture - Melbourne",
    description:
      "I worked as a React Full-stack developer in Accenture for 2 years. My stack includes React, JavaScript, TypeScript, Node.js Tailwind, Prisma Next Js and MongoDB, MySQL, Docker",
    icon: React.createElement(FaReact),
    date: "2021-2023",
  },
] as const;

export const projectsData = [
  {
    title: "SAMSUNG",
    description:
      "I worked as a React full-stack developer on this project for 1 year. I have used Redux Toolkit to make better code in Samsung ECommerce Project.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind", "Redux Toolkit"],
    // imageUrl: corpcommentImg,
    imageUrl:
      "https://images.unsplash.com/photo-1583573636246-18cb2246697f?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "SCATS",
    description:
      "I worked as a React full-stack developer in this project. It has features like Client/Server Side Rendering, authenitication, Restful API and pagination etc.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "ASP.Net Core",
      "Tailwind CSS",
      "MongoDB",
      "GraphQL",
    ],

    imageUrl:
      "https://images.unsplash.com/photo-1473042904451-00171c69419d?q=80&w=1799&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "ANZK",
    description:
      "I worked as a React full-stack developer on this Accenture Internal project also . I have fixed myriad bugs in this project related to client side and Server side",
    tags: ["React", "Node.js", "SQL", "Tailwind", "Context API"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "CRM",
    description:
      "I worked as a full-stack devloper on CRM Live Project AI / Machine and monitored application performance to identify potential bottlenecks, develop solutions.",
    tags: ["React", "Node.js", "MongoDB", "Prisma", "TypeScript"],
    imageUrl: corpcommentImg,
  },
  {
    title: "OSPMC",
    description:
      "I worked as a React developer on this project more than 1 years. I have built a medical website for clients.",
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
  "ASP.Net Core (C#)",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Docker",
  "Framer Motion",
] as const;
