import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
    return (
        <div className="w-full h-auto flex flex-col items-center justify-start gap-3 pt-15">
            <h1 className="text-[30px] text-[var(--blue-1)]">Contact Me</h1>
            <div className="w-full h-auto flex flex-col items-start justify-evenly gap-15 p-20 text-white lg:flex-row">
                <div className="flex flex-col gap-4">
                    <h1>Where to find me</h1>
                    <p>_ _ _ _ _ _ _ _ _ _ </p>
                    <p>Lagos, Nigeria</p>
                </div>
                
                <div className="flex flex-col gap-4 ">
                    <h1>Follow me on :</h1>
                    <p>_ _ _ _ _ _ _  </p>
                    <p className="flex flex-row justify-start items-center gap-2"><FaLinkedin /><a href="https://www.linkedin.com/in/habeeb-idris-babatunde/">Linkedin</a></p>
                    <p className="flex flex-row justify-start items-center gap-2"><FaGithub /><a href="https://github.com/Kingbee1M">Github</a></p>
                </div>
                
                <div className="flex flex-col gap-4 ">
                    <h1>Where to find me</h1>
                    <p>_ _ _ _ _ _ _ _ _ _ </p>
                    <p>+234 9070646794</p>
                    <p>+234 9068235584</p>
                </div>

            </div>
        </div>
    )
}