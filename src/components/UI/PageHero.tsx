import Image from "next/image";

export default function PageHero() {
  return (
    <div className="w-full relative h-auto flex justify-center items-center overflow-y-clip" id="Home">
        <Image 
            src="/images/hero-image.jpg"
            alt="Hero Image"
            width={500}
            height={300}
            className="w-full h-[630px] object-cover"
        />
        <div className="absolute top-0 left-0 z-10 w-screen lg:w-[1500px] h-[730px] backdrop-blur-sm bg-white/10 border border-white/30 p-6 shadow-lg"/>
        <div className="absolute z-20 text-white text-3xl font-bold flex flex-col justify-center items-center gap-5">
            <p className="text-[40px] text-[var()] ">Welcome</p>
            <p className="text-[25px] text-[var()]">I&apos;m <span className="text-[var(--red-1)]">Idris</span> Habeeb</p>
            <p className="text-[15px] text-[var(--red-1)] py-2 px-4 rounded-[14px] bg-[var(--red-2)] ">Website & mobile App Frontend Developer</p>
    </div>
    </div>
  );
}