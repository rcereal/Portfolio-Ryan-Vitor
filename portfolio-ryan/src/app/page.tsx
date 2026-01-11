import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className="bg-[#030712]">
      <Hero />
      <TechStack />
      {/* Aqui virão os próximos componentes: Sobre, Projetos, etc. */}
    </main>
  );
}
