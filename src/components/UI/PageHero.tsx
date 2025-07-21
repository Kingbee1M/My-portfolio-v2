import Image from "next/image";

export default function PageHero() {
  return (
    <div className="w-full h-auto flex justify-center items-center ">
        <Image 
            src="/images/hero-image.jpg"
            alt="Hero Image"
            width={500}
            height={300}
            className="w-ful h-full object-cover"
        />
    </div>
  );
}