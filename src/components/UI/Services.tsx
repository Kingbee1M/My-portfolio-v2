import { RiComputerLine } from "react-icons/ri";
import { CiMobile2 } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { LuPaintBucket } from "react-icons/lu";

const iconMap: Record<string, React.ElementType> = {
  LuPaintBucket,
  RiComputerLine,
  CiMobile2,
  IoIosSearch,
};

const service = [
    {
        name: "Web Design",
        icon: "LuPaintBucket",
        description: "Creating visually appealing and user-friendly designs for websites."
    },
    {
        name: "Web Development",
        icon: "RiComputerLine",
        description: "Building responsive and dynamic websites using modern technologies."
    },
    {
        name: "Mobile App Development",
        icon: "CiMobile2",
        description: "Creating user-friendly mobile applications for iOS and Android platforms."
    },
    {
        name: "SEO Optimization",
        icon: "IoIosSearch",
        description: "Designing intuitive user interfaces and enhancing user experience."
    }
]


export default function Services() {
    return (
        <div className="w-full h-auto flex flex-row items-center justify-center p-5 mt-20">
            {service.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
                <div key={index} className="w-1/4 flex flex-col items-center justify-center gap-2">
                    <div className="flex justify-center items-center p-2 text-[20px] w-[50px] lg:w-1/5 aspect-square rounded-full border-1 border-black bg-[var(--gray-6)] hover:bg-[var(--red-1)] hover:text-white lg:text-[48px]">{Icon && <Icon />}</div>
                    <p className="w-1/2 lg:w-full text-[8px] text-[var(--red-1)] font-bold text-center lg:text-[20px] lg:font-extrabold lg:h-auto break-words ">{item.name}</p>
                    <p className="w-1/2  text-center text-sm hidden lg:inline">{item.description}</p>
                </div>
            )
            })}
                    
        </div>
    );
}