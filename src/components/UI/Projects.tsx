"use client";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "Framer",
    image: "/images/framer.png",
    link: "https://framer-two-iota.vercel.app/",
    description:
      "A visually engaging and fully responsive landing page featuring sleek UI components and modern design patterns.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    name: "Datawise",
    image: "/images/Datawise.png",
    link: "https://datawiseai.netlify.app/",
    description:
      "A mobile-friendly landing page for an AI-powered platform that delivers advanced data analysis and visualization tools.",
    techStack: ["Vue 3", "JavaScript"],
  },
  {
    name: "Aegis Cards Website",
    image: "/images/Aegis-cards.png",
    link: "https://aegis-cards.netlify.app/",
    description:
      "A clean and informative single-page website built for Aegis Cards, designed to present services and provide an easy contact point for inquiries.",
    techStack: ["Vue 3", "JavaScript"],
  },
  {
    name: "infinitet solutiton old websitet",
    image: "/images/infinite solutions.png",
    link: "https://infinite-solutions-old-site.vercel.app/",
    description: "A modern and responsive website for Infinite Solutions, showcasing their services and expertise in a user-friendly format.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
  }
];

export default function Projects() {
  return (
    <div
      className="w-full h-auto flex flex-wrap items-center justify-center p-5 mt-20"
      id="Projects"
    >
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} index={index} />
      ))}
    </div>
  );
}