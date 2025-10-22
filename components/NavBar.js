export default function NavBar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-white/60 backdrop-blur-md border-b border-neutral-200/50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="text-lg font-semibold tracking-tight text-neutral-900">
          Jenniffer Triana
        </span>
        <div className="hidden sm:flex space-x-6 text-sm text-neutral-700">
          <a href="#work" className="hover:text-neutral-900 transition-colors">Work</a>
          <a href="#about" className="hover:text-neutral-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-neutral-900 transition-colors">Contact</a>
          <a 
            href="https://github.com/Jectrianama" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-neutral-900 transition-colors"
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}