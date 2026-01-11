import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#030712]">
      <Hero />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
