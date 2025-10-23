import React, { useState, useEffect } from 'react';
import { Linkedin, Github, X } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});
  const [typedText, setTypedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  
  const fullText = "Hi, I'm Jenniffer";

  useEffect(() => {
    // Typing animation
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Intersection observer for fade-in animations
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: 'LocalBiplot — Explainable AI Visualization Engine',
      description:
        'Interactive AI component that generates local visual explanations from complex data,  enabling transparent model decisions and trust for real-world applications.',
      tags: ['Explainable AI', 'Data Visualization', 'Python'],
      link: 'https://github.com/UN-GCPDS/python-gcpds.localbiplot',
      logo: '/localbip_logo.png'
    },
    {
      title: 'CrowdIntel (GCECDL) — Noise-Robust Annotation Engine',
      description:
        'AI reliability module that detects and mitigates noisy or inconsistent human labels in large-scale crowdsourced training data — improving accuracy and trust in real-world AI deployments.',
      tags: ['AI Reliability', 'Crowdsourcing', 'Noise-Robust Learning', 'Python'],
      link: 'https://github.com/Jectrianama/GCCE_TEST',
      logo: '/GCECDL.png'
    },
    {
      title: 'Computer Vision System',
      description: 'Created an object detection system for automated quality control in manufacturing processes.',
      tags: ['Computer Vision', 'YOLO', 'OpenCV']
    }
  ];

  const skills = [
    'Machine Learning',
    'Deep Learning',
    'Data Analysis',
    'Python',
    'TensorFlow/PyTorch',
    'Data Visualization',
    'NLP',
    'Computer Vision'
  ];

  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .hero-text {
          animation: fadeInLeft 1s ease-out;
        }

        .hero-buttons {
          animation: fadeInUp 1s ease-out 0.3s both;
        }

        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .photo-float {
          animation: float 6s ease-in-out infinite;
        }

        .skill-item {
          transition: transform 0.3s ease;
        }

        .skill-item:hover {
          transform: translateX(10px);
        }

        .typing-cursor {
          display: inline-block;
          width: 3px;
          height: 1em;
          background-color: #4F46E5;
          margin-left: 4px;
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 49% {
            opacity: 1;
          }
          50%, 100% {
            opacity: 0;
          }
        }
      `}</style>

      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600">Jenniffer Carolina Triana-Martinez </div>
          <ul className="hidden md:flex gap-10">
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <li key={item}>
                <a
                  href={'#' + item}
                  className={'font-medium transition-colors capitalize ' + (activeSection === item ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600')}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-8 w-full">
          <div className="hero-text">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {typedText}
              {!isTypingComplete && <span className="typing-cursor"></span>}
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
              <span className="italic bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                AI & Data Science Practitioner
              </span>{' '}
              with experience in machine learning, data analysis, and building intelligent solutions for real-world problems.
            </p>
            <div className="hero-buttons flex flex-col sm:flex-row gap-5">
              <a
                href="#projects"
                className="px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-all hover:-translate-y-0.5 hover:scale-105 shadow-lg shadow-indigo-600/30 text-center"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white hover:scale-105 transition-all text-center"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20 fade-in">
            <div className="text-sm font-semibold text-indigo-600 tracking-widest uppercase mb-3">
              About Me
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Building Intelligent Solutions
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="fade-in">
                    <img
                src="/jenn.png"   // ← reemplaza con el nombre REAL de tu imagen dentro de /public
                alt="Jenniffer Triana"
                className="w-full aspect-square object-cover rounded-3xl shadow-2xl shadow-indigo-600/30 photo-float object-top"
                />
            </div>
            <div className="space-y-8 fade-in">
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  I'm passionate about leveraging artificial intelligence and data science to create meaningful impact. With a strong foundation in machine learning and statistical analysis, I transform complex data into actionable insights.
                </p>
                <p>
                  My work focuses on developing human-centered AI solutions that solve real-world problems, from predictive modeling to natural language processing and computer vision applications.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3 skill-item">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full flex-shrink-0"></div>
                    <span className="font-medium text-gray-900">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20 fade-in">
            <div className="text-sm font-semibold text-indigo-600 tracking-widest uppercase mb-3">
              Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Featured Projects
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 duration-300 fade-in"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
               {index === 0 ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="h-60 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center rounded-xl">
                      <img
                        src={project.logo}
                        alt={project.title}
                        className="max-h-64 max-w-64 object-contain"
                      />
                    </div>
                  </a>
                ) : index === 1 ? (
                  // ✅ PROJECT 2 (GCECDL / CrowdIntel)
                  <a href="https://github.com/Jectrianama/GCCE_TEST" target="_blank" rel="noopener noreferrer">
                    <div className="h-60 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center rounded-xl">
                      <img src="/GCECDL.png" alt="CrowdIntel (GCECDL)" className="max-h-40 max-w-40 object-contain" />
                    </div>
                  </a>
                ) : (
                  <div className="h-60 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xl font-semibold">
                    Project {index + 1}
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-5 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 bg-gray-50">
        <div className="max-w-3xl mx-auto px-8 text-center fade-in">
          <div className="text-sm font-semibold text-indigo-600 tracking-widest uppercase mb-3">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <a
            href="mailto:jectrianama@gmail.com"
            className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-all hover:-translate-y-0.5 hover:scale-105 shadow-lg shadow-indigo-600/30 mb-10"
          >
            Send Me an Email
          </a>
          <div className="flex justify-center gap-5">
            <a
              href="https://www.linkedin.com/in/jectrianama/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-700 shadow-md hover:bg-indigo-600 hover:text-white transition-all hover:-translate-y-1 hover:scale-110 hover:shadow-lg"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/Jectrianama"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-700 shadow-md hover:bg-indigo-600 hover:text-white transition-all hover:-translate-y-1 hover:scale-110 hover:shadow-lg"
            >
              <Github size={20} />
            </a>
            <a
              href="https://x.com/jenntriana"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-700 shadow-md hover:bg-indigo-600 hover:text-white transition-all hover:-translate-y-1 hover:scale-110 hover:shadow-lg"
            >
              <X size={20} />
            </a>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p className="text-gray-600 text-sm">
            &copy; 2025 Jectrianama. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;