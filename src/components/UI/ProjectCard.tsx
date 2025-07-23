"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";

type Project = {
  name: string;
  image: string;
  link: string;
  description: string;
  techStack: string[];
  index: number;
};

export default function ProjectCard({
  name,
  image,
  link,
  description,
  techStack,
  index,
}: Project) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.5, delay: index * 0.2 }}
      className="w-full sm:w-1/2 lg:w-1/3 p-4"
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={800}
          height={400}
          className="w-full h-48 object-cover"
        />
        <div className="p-6 bg-[var(--gray-7)] text-white lg:text-black lg:bg-white">
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <p className="text-white lg:text-[var(--gray-1)] hover:text-black mb-4">
            {description}
          </p>
          <div className="flex flex-row items-center gap-1 text-blue-500">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Project
            </a>
            <FaLongArrowAltRight />
          </div>
          <div className="mt-4">
            {techStack.map((tech, idx) => (
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
}