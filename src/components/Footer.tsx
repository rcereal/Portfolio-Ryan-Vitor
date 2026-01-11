export default function Footer() {
  return (
    <footer className="bg-[#030712] border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Ryan Vitor. Desenvolvido com
          <span className="text-indigo-500 mx-1">Next.js</span> e
          <span className="text-indigo-500 mx-1">Tailwind CSS</span>.
        </p>
      </div>
    </footer>
  );
}
