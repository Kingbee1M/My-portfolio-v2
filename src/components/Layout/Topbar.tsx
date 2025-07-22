"use client";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Topbar() {
    const [isOpen, setIsOpen] = useState(false);
    // Toggle the menu open state
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className="fixed top-0 left-0 z-30 w-full min-h-15 flex flex-col justify-center items-center bg-[var(--gray-1)] pb-3 lg:flex-row lg:justify-around lg:items-center lg:px-6 lg:py-4">
            <div className=" w-4/5 flex items-center justify-between lg:px-4 py-2 text-white lg:w-1/5">
            <div className="text-[14px] lg:text-[20px] w-2/5">E-portfolio</div>
            <RxHamburgerMenu onClick={toggleMenu} className="text-white text-[36px] border-white border-1 p-1 lg:hidden" />   
            </div>
            <div className={`overflow-hidden transition-all duration-700 ease-in-out ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } w-4/5 flex-col justify-start items-start gap-5 lg:flex lg:flex-row lg:w-3/5 lg:justify-between lg:max-h-full lg:opacity-100`}>
                <ul className="w-full flex flex-col text-[var(--gray-2)] lg:flex-row justify-start items-start gap-3 lg:items-center lg:justify-between lg:w-1/2 lg:text-[19px]">
                    <li className="w-full"><a href="" className="hover:text-[var(--gray-3)]">Home</a></li>
                    <li className="w-full"><a href='' className="hover:text-[var(--gray-3)]">About</a></li>
                    <li className="w-full"><a href='' className="hover:text-[var(--gray-3)]">Projects</a></li>
                    <li className="w-full"><a href='' className="hover:text-[var(--gray-3)]">Contact</a></li>
                </ul>
            <div className=" w-10 h-10 rounded-full bg-[var(--red-1)] text-white flex justify-center items-center font-bold mt-3 lg:mt-0"><p>IH</p> </div>
            </div> 
        </div>
    )
}