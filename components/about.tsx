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
        I am a <span className="font-semibold">React Full Stack Developer</span>{" "}
        with a strong foundation in
        <span className="font-medium">
          {" "}
          React.js, Next.js, TypeScript, JavaScript, Node.js, MongoDB,
          PostgreSQL, and AWS.
        </span>
        With a degree in Computer Science, I have successfully contributed to
        projects at
        <span className="font-medium">
          {" "}
          Accenture (Sydney Transport), Samsung, and industries spanning Retail,
          Healthcare, and Education.
        </span>
      </p>

      <p className="mb-4 text-lg">
        <span className="italic">Passionate about building</span>{" "}
        high-performance, scalable
        <span className="underline"> web applications</span>, I thrive on
        solving complex challenges and delivering impactful digital solutions.
        My expertise spans front-end and back-end development, ensuring seamless
        user experiences.
      </p>

      <p className="text-lg">
        I am highly adaptable and continuously upskill to stay ahead of emerging
        technologies. Currently, I am seeking a{" "}
        <span className="font-semibold">React Developer role</span> where I can
        <span className="font-bold">
          {" "}
          apply my expertise, drive innovation, and contribute to meaningful
          projects.
        </span>
      </p>
    </motion.section>
  );
}
