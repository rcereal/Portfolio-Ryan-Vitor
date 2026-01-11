import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="bg-[#030712]">
      <Hero />
      <TechStack />
      <Projects />
    </main>
  );
}
