import Image from "next/image"
const skills = [
    {
        name: "HTML5",
        icon: "/images/icons8-html-5.svg",
        percent: "90%"
    },
    {
        name: "CSS3",
        icon: "/images/icons8-css-50.png",
        percent: "92%"
    },
    {
        name: "jAVASCRIPT",
        icon: "/images/icons8-javascript.svg",
        percent: "70%"
    },
    {
        name: "vue.js",
        icon: "/images/icons8-vuejs.svg",
        percent: "80%"
    },
    {
        name: "Next.js",
        icon: "/images/nextjs-icon.svg",
        percent: "88%"
    },
    {
        name: "React",
        icon: "/images/icons8-react-24.png",
        percent: "50%"
    },
    {
        name: "TAILWIND CSS",
        icon: "/images/icons8-tailwind-css.svg",
        percent: "73%"
    },
    {
        name: "TYPESCRIPT",
        icon: "/images/icons8-typescript.svg",
        percent: "67%"
    },
    {
        name: "DOCKER",
        icon: "/images/icons8-docker.svg",
        percent: "30%"
    },
    {
        name: "Expo",
        icon: "/images/icons8-expo.svg",
        percent: "73%"
    },
    {
        name: "PHP",
        icon: "/images/icons8-php-logo.svg",
        percent: "40%"
    },
    {
        name: "LARAVEL",
        icon: "/images/laravel.svg",
        percent: "32%"
    },
    {
        name: "MySQL",
        icon: "/images/mysql.svg",
        percent: "20%"
    },
    {
        name: "git",
        icon: "/images/icons8-git.svg",
        percent: "88%"
    },
] 

export default function Skills() {
    return (
        <div className="w-9/10 flex flex-col items-center justify-center h-auto mt-15 lg:mt-19 bg-[var(--deep-blue)]">
            <h1 className="w-full text-[30px] text-[var(--gray-5) text-center text-white">My Skills</h1>
            <div className="w-full flex flex-wrap items-center justify-center gap-5 mt-5 lg:w-3/4">
                {skills.map((skill, index) => (
                <div key={index} className="w-1/3 h-[100px] flex flex-col items-center justify-end gap-2 mt-5 shadow-lg rounded-lg group relative overflow-hidden lg:w-1/5 lg:gap-4">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <Image
                        src={skill.icon}
                        alt={`${skill.name} icon`}
                        width={40}
                        height={40}
                        className="w-8 h-8"
                        />
                        <p className="text-[var(--gray-5)]">{skill.name}</p>
                    </div>

                    {/* Slide-up + Fade-in overlay */}
                    <div className="absolute w-full translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-10
                        transition-all duration-500 ease-in-out
                        bg-[rgba(255,0,0,0.5)] backdrop-blur-sm 
                        text-center text-white flex justify-center items-center"
                        style={{ height: skill.percent }}>
                        {skill.percent}
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}
                    // style={{ boxShadow: `0 4px 10px var(--gray-4)` }}

                // {skills.map((skill, index) => (
                //     <div key={index} className="w-full flex flex-col items-start justify-start gap-2 mt-5">
                //         <div className="flex flex-row items-center justify-between w-full">
                //             <div className="flex flex-row items-center gap-3">
                //                 <img src={skill.icon} alt={`${skill.name} icon`} className="w-8 h-8" />
                //                 <p className="text-[var(--gray-5)]">{skill.name}</p>
                //             </div>
                //             <p className="text-[var(--gray-5)]">{skill.percent}</p>
                //         </div>
                //         <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                //             <div className={`bg-[var(--red-1)] h-2.5 rounded-full`} style={{ width: skill.percent }}></div>
                //         </div>
                //     </div>
                // ))}