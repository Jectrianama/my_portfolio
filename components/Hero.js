import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const [show, setShow] = useState(false);
  useEffect(() => setShow(true), []);

  return (
    <section className="bg-white min-h-screen flex items-center px-6">
      <div className="max-w-7xl w-full mx-auto flex flex-col-reverse md:flex-row items-center gap-12 pt-28">
        
        {/* LEFT: Text */}
        <div
          className={`${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } transition-all duration-1000 ease-out flex-1`}
        >
          <p className="text-lg text-neutral-700 mb-2">
            Hi, I'm <span className="font-semibold text-neutral-900">Jenniffer</span>
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
            AI & Data Science Practitioner
          </h1>
          <p className="mt-4 text-neutral-700 text-lg max-w-md">
            I build intelligent, human-centered solutions for real-world problems.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="#work"
              className="rounded-full bg-neutral-900 text-white px-6 py-3 text-sm font-medium hover:bg-neutral-800 transition"
            >
              Explore My Projects
            </a>
          </div>
        </div>

        {/* RIGHT: Photo */}
        <div
          className={`${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } transition-all duration-1000 ease-out delay-200 flex-1 flex justify-center md:justify-end`}
        >
          <Image
            src="https://github.com/Jectrianama.png"
            alt="Jenniffer Triana"
            width={420}
            height={420}
            className="object-cover rounded-xl shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}