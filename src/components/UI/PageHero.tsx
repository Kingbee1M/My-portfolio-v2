import Image from "next/image";

export default function PageHero() {
  return (
    <div className="w-full h-auto flex justify-center items-center ">
        <Image 
            src="/images/hero-image.jpg"
            alt="Hero Image"
            width={500}
            height={300}
            className="w-full h-[] object-cover"
        />
        <div className="absolute text-white text-3xl font-bold flex flex-col justify-center items-center">
            <p>Welcome to My Portfolio</p>
            <p className="text-xl mt-2">I'm Idris Habeeb</p>
            <p>Explore My Work and Projects</p>
    </div>
    </div>
  );
}