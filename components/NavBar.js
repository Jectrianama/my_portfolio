export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/65 backdrop-blur-md border-b border-neutral-200/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-lg font-semibold text-neutral-900">
          Jenniffer Triana
        </div>
        <nav className="hidden sm:flex space-x-6 text-sm text-neutral-700">
          <a href="#work" className="hover:text-neutral-900 transition">Work</a>
          <a href="#about" classclassName="hover:text-neutral-900 transition">About</a>
          <a href="#contact" className="hover:text-neutral-900 transition">Contact</a>
          <a href="https://github.com/Jectrianama" target="_blank" rel="noreferrer" className="hover:text-neutral-900 transition">GitHub</a>
        </nav>
      </div>
    </header>
  );
}