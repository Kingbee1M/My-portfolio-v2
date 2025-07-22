import Image from "next/image";

export default function PageHero() {
  return (
    <div className="w-full h-auto flex justify-center items-center ">
        <Image 
            src="/images/hero-image.jpg"
            alt="Hero Image"
            width={500}
            height={300}
            className="w-full h-[630px] object-cover"
        />
        <div className="absolute z-10 w-full h-[630px] backdrop-blur-sm bg-white/10 border border-white/30 rounded-lg p-6 shadow-lg"></div>
        <div className="absolute z-20 text-white text-3xl font-bold flex flex-col justify-center items-center gap-5">
            <p className="text-[40px] text-[var()] ">Welcome</p>
            <p className="text-[25px] text-[var()]">I&apos;m <span className="text-[var(--red-1)]">Idris</span> Habeeb</p>
            <p className="text-[15px] text-[var(--red-1)] py-2 px-4 rounded-[14px] bg-[var(--red-2)] ">Website & mibile App Frontend Developer</p>
    </div>
    </div>
  );
}