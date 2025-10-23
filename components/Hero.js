import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white min-h-screen flex items-center px-6">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-16 pt-28">
        
        {/* LEFT SIDE */}
        <div className="flex-1 text-left">
          <p className="text-lg text-neutral-700">Hi, I'm <span className="font-semibold text-neutral-900">Jenniffer</span></p>
          <h1 className="text-5xl font-semibold mt-2 text-neutral-900 leading-tight">
            AI & Data Science Practitioner
          </h1>
          <p className="mt-4 text-neutral-700 text-lg max-w-md">
            I build intelligent, human-centered solutions for real-world problems.
          </p>
          <a
            href="#work"
            className="mt-8 inline-block bg-neutral-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-800 transition"
          >
            Explore My Projects
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            src="https://github.com/Jectrianama.png"
            alt="Jenniffer Triana"
            width={450}
            height={450}
            className="object-cover rounded-xl shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}