"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const skills = [
  {
    name: "HTML5",
    icon: "/images/icons8-html-5.svg",
    percent: "90%",
  },
  {
    name: "CSS3",
    icon: "/images/icons8-css-50.png",
    percent: "92%",
  },
  {
    name: "jAVASCRIPT",
    icon: "/images/icons8-javascript.svg",
    percent: "70%",
  },
  {
    name: "vue.js",
    icon: "/images/icons8-vuejs.svg",
    percent: "80%",
  },
  {
    name: "Next.js",
    icon: "/images/nextjs-icon.svg",
    percent: "88%",
  },
  {
    name: "React",
    icon: "/images/icons8-react-24.png",
    percent: "50%",
  },
  {
    name: "TAILWIND CSS",
    icon: "/images/icons8-tailwind-css.svg",
    percent: "73%",
  },
  {
    name: "TYPESCRIPT",
    icon: "/images/icons8-typescript.svg",
    percent: "67%",
  },
  {
    name: "DOCKER",
    icon: "/images/icons8-docker.svg",
    percent: "30%",
  },
  {
    name: "Expo",
    icon: "/images/icons8-expo.svg",
    percent: "73%",
  },
  {
    name: "PHP",
    icon: "/images/icons8-php-logo.svg",
    percent: "40%",
  },
  {
    name: "LARAVEL",
    icon: "/images/laravel.svg",
    percent: "32%",
  },
  {
    name: "MySQL",
    icon: "/images/mysql.svg",
    percent: "20%",
  },
  {
    name: "git",
    icon: "/images/icons8-git.svg",
    percent: "88%",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="w-9/10 flex flex-col items-center justify-center h-auto mt-15 lg:mt-19 bg-[var(--deep-blue)]"
    >
      <h1 className="w-full text-[30px] text-white text-center">My Skills</h1>
      <div className="w-full flex flex-wrap items-center justify-center gap-5 mt-5 lg:w-3/4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.3, delay: index * 0.08 }}
            className="w-1/3 h-[100px] flex flex-col items-center justify-end gap-2 mt-5 shadow-lg rounded-lg group relative overflow-hidden lg:w-1/5 lg:gap-4"
          >
            <div className="flex flex-col items-center justify-center gap-2">
              <Image
                src={skill.icon}
                alt={`${skill.name} icon`}
                width={40}
                height={40}
                className="w-8 h-8"
              />
              <p className="text-white">{skill.name}</p>
            </div>

            {/* Hover overlay */}
            <div
              className="absolute w-full translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-10
                        transition-all duration-500 ease-in-out
                        bg-[rgba(255,0,0,0.5)] backdrop-blur-sm 
                        text-center text-white flex justify-center items-center"
              style={{ height: skill.percent }}
            >
              {skill.percent}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}