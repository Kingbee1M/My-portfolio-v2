import PageHero from "@/components/UI/PageHero";
import About from "@/components/UI/About";
import Skills from "@/components/UI/Skills";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-start min-h-screen mt-15 lg:mt-19">
      <PageHero />
      <About />
      <Skills />
    </div>
  );
}
