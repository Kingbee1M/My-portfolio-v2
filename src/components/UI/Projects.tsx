"use client";
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
];

export default function Projects() {
  return (
    <div className="w-full h-auto flex flex-wrap items-center justify-center p-5 mt-20" id="Projects">
      {projects.map((project, index) => {
        const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

        return (
          <motion.div
            key={index}
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.5, delay: index * 0.2 }}
            className="w-full sm:w-1/2 lg:w-1/3 p-4"
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 bg-[var(--gray-7)] text-white lg:text-black lg:bg-white">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-white lg:text-[var(--gray-1)] hover:text-black mb-4">
                  {project.description}
                </p>
                <div className="flex flex-row items-center gap-1 text-blue-500">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    View Project
                  </a>
                  <FaLongArrowAltRight />
                </div>
                <div className="mt-4">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded mr-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}