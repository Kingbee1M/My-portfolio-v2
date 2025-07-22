import Image from "next/image"

const details = [
    {
        title: "From",
        data: "Lagos, Nigeria",
        style: "inline"
    },
    {
        title: "Lives in",
        data: "Lagos, Nigeria",
        style: "inline"
    },
    {
        title: "Age",
        data: "23",
        style: "inline"
    },
    {
        title: "Gender",
        data: "Male",
        style: "hidden"
    },
]

export default function About() {
    return (
        <div className="w-full flex flex-col items-center justify-start h-auto mt-15 lg:mt-19 lg:flex-row">
            <div className="w-full h-[500px] flex justify-center items-start relative lg:w-2/5">
                <div className="border-[var(--red-1)] border-4 h-[420px] w-2/3 absolute right-3 top-2 -z-10 lg:w-1/2 lg:right-10 lg:-translate-x-1/6"></div>
                <Image 
                src="/images/Profile-1.jpg"
                alt="profile Image"
                width={500}
                height={300}
                className="w-2/3 h-[400px] object-cover mt-5 lg:w-1/2 lg:h-[400px] "
            />
            </div>
            <div className="w-9/10 lg:w-1/2 flex flex-col justify-start items-start gap-2 ">
                <h1 className="text-4xl font-extralight">Idris Habeeb</h1>
                <p className="text-2xl text-[var(--red-1)] font-bold">Website & mibile App Frontend Developer</p>
                <p>I am a passionate front-end developer with experience in building dynamic and responsive web applications using frameworks such as Next.js, Vue.js, and Tailwind CSS. Skilled in state management with Pinia and Zustand, API integration, and optimizing user experiences. I also have experience in building mobile app frontends using Expo (React Native). Additionally, I work with backend technologies, including PHP, MySQL, and Laravel.</p>
                <div className="w-full flex flex-col items-start justify-start">
                {details.map((detail, index) => (
                    <div className="flex flex-col items-start justify-start" key={index}>
                        <div className="flex flex-row items-center">
                            <div className="w-6 h-6 rounded-full border-4 border-[var(--red-1)]"></div><p className="text-[var(--gray-5)] font-bold">{detail.title} :</p><p>{detail.data}</p>
                        </div>
                        <div className={` ${detail.style} w-0 h-5 border-2 border-[var(--gray-1)] ml-[11px]`}></div>
                    </div>
                ))}
                <a href="/habeeb Resume 2.0.pdf" download className="ml-2 text-[var(--red-1)] border-2 px-5 py-3 rounded-[8px] mt-3">DOWNLOAD CV</a>
                </div>
            </div>
        </div>       
        )
}
