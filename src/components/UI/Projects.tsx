const projects = [
    {
        name: "framer",
        image: "/images/framer.png",
        link: "https://framer-two-iota.vercel.app/",
        description: "A dynamic landing page with responsive designs and impressive ui graphics.",
        techStack: ["Next.js", "Tailwind CSS", "Typescript"],
    },
    {
        name: "Datawise",
        image: "/images/Datawise.png",
        link: "https://datawiseai.netlify.app/",
        description: "A mobile website landing page that provides AI-powered data analysis and visualization.",
        techStack: ["vue 3", "Javascript"],
    },
    {
        name: "Aegis Cards single page website",
        image: "/images/Aegis-cards.png",
        link: "https://aegis-cards.netlify.app/",
        description: "A single page website to read about and contact the management of Agies cards for inquireies.",
        techStack: ["Vue 3", "Javascript"],
    }
]

export default function Projects() {
    return (
        <div className="w-full h-auto flex flex-wrap items-center justify-center p-5 mt-20">

            {projects.map((project, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
                        <div className="p-6 bg-[var(--gray-7)] text-white lg:text-black lg:bg-white">
                            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                            <p className=" text-white lg:text-[var(--gray-1)] hover:text-[var(--gray-2)] mb-4">{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Project</a>
                            <div className="mt-4">
                                {project.techStack.map((tech, idx) => (
                                    <span key={idx} className="inline-block bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded mr-2">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}