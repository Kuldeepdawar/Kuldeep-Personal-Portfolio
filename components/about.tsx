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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a Full Stack Developer with expertise in{" "}
        <span className="font-medium">
          React.js, JavaScript/TypeScript, Next.js, Node.js, MongoDB,
          PostgreSQL, AWS, and Azure Cloud
        </span>
        , With a degree in Computer Science and hands-on experience from a
        coding bootcamp, as well as projects with{" "}
        <span className="font-medium">
          Accenture in Sydney Transport and Samsung,
        </span>
        . <span className="italic">I’m passionate about </span> building
        scalable, efficient{" "}
        <span className="underline"> web applications.</span> I enjoy solving
        complex challenges and working across the full stack to deliver
        impactful solutions.{" "}
        <span className="font-medium">
          My adaptability and commitment to staying current with the latest
          technologies enable me to thrive in fast-paced environments.{" "}
        </span>
        I am seeking a <span className="font-medium">React Developer role</span>{" "}
        to apply <span className="font-bold"> my skills and grow further.</span>
      </p>
    </motion.section>
  );
}
