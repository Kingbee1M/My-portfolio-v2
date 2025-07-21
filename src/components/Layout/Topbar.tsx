

export default function Topbar() {
    return (
        <div className="w-full min-h-15 flex justify-center items-center bg-[var(--gray-1)]">
            <div className=" w-4/5 lg:w-9/10 flex items-center justify-between lg:px-4 py-2 text-white ">
            <div className="text-[14px] lg:text-[20px] w-2/5">E-portfolio</div>
            <div className="hidden lg:flex lg:w-4/5 items-center justify-between">
                <ul className="flex flex-row items-center justify-between lg:w-1/2">
                    <li className="text-[var(--red-1)]"><a href="">Home</a></li>
                    <li><a href=''>About</a></li>
                    <li><a href=''>Projects</a></li>
                    <li><a href=''>Contact</a></li>
                </ul>
            <div className=" w-15 h-15 rounded-full bg-amber-500 flex justify-center items-center font-extrabold"><p>IH</p> </div>
            </div>    
            </div>
        </div>
    )
}