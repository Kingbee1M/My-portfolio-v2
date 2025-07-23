import PageHero from "@/components/UI/PageHero";
import About from "@/components/UI/About";
import Skills from "@/components/UI/Skills";
import Services from "@/components/UI/Services";
import Projects from "@/components/UI/Projects";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-start min-h-screen mt-15 lg:mt-19">
      <PageHero />
      <About />
      <div className="w-full bg-[var(--deep-blue)] pb-15 my-12 "><Skills /></div>
      <Services />
      <Projects />
    </div>
  );
}
