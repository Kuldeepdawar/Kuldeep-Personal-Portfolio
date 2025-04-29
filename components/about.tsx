"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-4 text-lg">
        I’m a <span className="font-semibold">Senior React Developer</span> with
        over <span className="font-semibold">5 years of experience</span>{" "}
        building secure, scalable, and high-performance web applications. My
        expertise spans{" "}
        <span className="font-medium">
          React.js, Next.js, TypeScript, Node.js, PostgreSQL, GraphQL, and AWS.
        </span>{" "}
        I’ve delivered impactful full-stack solutions across domains like
        eCommerce, transport, healthcare, and education—working with companies
        such as{" "}
        <span className="font-medium">
          BatteryMate, Accenture (SCATS), and Samsung
        </span>
        .
      </p>

      <p className="mb-4 text-lg">
        <span className="italic">
          Driven by performance, accessibility, and clean code
        </span>
        , I specialize in full SDLC execution—from frontend architecture and
        responsive UI design to backend APIs and cloud-native deployments. I
        also integrate CI/CD workflows, serverless architectures, and PWA
        features to optimize user experience and maintainability.
      </p>

      <p className="text-lg">
        I’m an <span className="font-semibold">AWS-certified developer</span>{" "}
        and a proactive problem-solver who thrives in Agile teams. I'm currently
        seeking a{" "}
        <span className="font-bold">Senior React Developer opportunity</span>{" "}
        where I can leverage my skills, collaborate cross-functionally, and
        contribute to delivering user-focused digital products.
      </p>
    </motion.section>
  );
}
