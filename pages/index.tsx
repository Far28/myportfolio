
import Head from "next/head";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaJava, FaPython, FaReact, FaBootstrap, FaBars, FaTimes } from "react-icons/fa";
import { SiSpring, SiSpringboot, SiMysql, SiJavascript, SiHtml5, SiCss3, SiApachespark } from "react-icons/si";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen">
      <Head>
        <title>F.H. Farha | Portfolio</title>
        <meta name="description" content="F.H. Farha - Software Engineering Portfolio" />
      </Head>

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-gray-900 bg-opacity-90 shadow-lg">
        <nav className="max-w-6xl mx-auto flex justify-between items-center p-4 relative">
          <h1 className="text-2xl font-bold text-pink-400">F.H. FARHA</h1>
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 font-medium">
            <li><a href="#about" className="hover:text-pink-400">About</a></li>
            <li><a href="#skills" className="hover:text-pink-400">Skills</a></li>
            <li><a href="#projects" className="hover:text-pink-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-pink-400">Contact</a></li>
            <li><Link href="/resume" className="hover:text-pink-400">Resume</Link></li>
          </ul>
          {/* Hamburger Icon */}
          <button
            className="md:hidden text-pink-400 text-3xl focus:outline-none z-50"
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center gap-8 text-2xl font-medium transition-all duration-300 z-40">
              <a href="#about" className="hover:text-pink-400" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#skills" className="hover:text-pink-400" onClick={() => setMobileMenuOpen(false)}>Skills</a>
              <a href="#projects" className="hover:text-pink-400" onClick={() => setMobileMenuOpen(false)}>Projects</a>
              <a href="#contact" className="hover:text-pink-400" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              <Link href="/resume" className="hover:text-pink-400" onClick={() => setMobileMenuOpen(false)}>Resume</Link>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center p-6 pb-2 relative">
        <Image src="/farhaphoto.png" alt="Farha Photo" width={260} height={260} className="rounded-full shadow-lg border-4 border-pink-400 mb-8" />
        <h2 className="text-4xl md:text-6xl font-bold mb-4">F.H.Farha</h2>
        <p className="text-lg md:text-2xl max-w-2xl italic text-gray-300">
          &quot;Turning ideas into reality through creativity, passion, and code.&quot;
        </p>
        <div className="mt-6 flex gap-4">
          <a href="#projects" className="px-6 py-2 bg-pink-500 text-white rounded-full shadow hover:bg-pink-600">View Projects</a>
          <a href="#contact" className="px-6 py-2 border border-pink-400 rounded-full hover:bg-pink-400 hover:text-black">Contact Me</a>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="max-w-5xl mx-auto pt-4 pb-10 px-4 sm:px-6">
        <h3 className="text-3xl font-bold mb-6 text-pink-400 text-center">About Me</h3>
        <div className="flex justify-center mb-6">
          <div className="bg-gray-900 border-4 border-pink-400 rounded-2xl shadow-lg p-6 sm:p-8 w-full max-w-2xl">
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="text-pink-400 font-semibold">Age:</span>
                <span className="text-gray-200">22</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-pink-400 font-semibold">Languages:</span>
                <span className="text-gray-200">English, Sinhala, Tamil</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-pink-400 font-semibold">Location:</span>
                <span className="text-gray-200">Colombo, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-pink-400 font-semibold">Email:</span>
                <span className="text-gray-200">farhasha2803@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <p className="leading-relaxed text-gray-200 text-center">
          I am a passionate Software Engineering student driven by curiosity and creativity. My journey in tech has been fueled by hands-on projects where I&apos;ve explored web development, backend systems, and user-focused design. I enjoy solving real-world problems through clean, efficient code and I&apos;m eager to grow into a developer who creates meaningful digital experiences.
        </p>
      </section>

      {/* Education */}
      <section id="education" className="max-w-5xl mx-auto pb-10 px-4 sm:px-6">
        <h3 className="text-3xl font-bold mb-6 text-pink-400 text-center">Education</h3>
        <div className="flex justify-center">
          <div className="bg-gray-900 border-4 border-pink-400 rounded-2xl shadow-lg p-6 sm:p-8 w-full max-w-2xl">
            <ul className="space-y-4 text-gray-200">
              <li><span className="text-pink-400 font-semibold">G.C.E. Advanced Level- 2022(23):</span> Department of Examinations, Sri Lanka. (Commerce Stream)</li>
              <li><span className="text-pink-400 font-semibold">G.C.E. Ordinary Level- 2019:</span> Department of Examinations, Sri Lanka.</li>
              <li><span className="text-pink-400 font-semibold">Foundation in IT- 2023:</span> Australian College of Business and Technology</li>
              <li><span className="text-pink-400 font-semibold">Bachelor of Science (Hons) in Computer Science – 2024 - Present:</span> Lithan Academy, Singapore</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-gray-800 py-12">
        <div className="max-w-5xl mx-auto p-6">
          <h3 className="text-3xl font-bold mb-10 text-pink-400 text-center tracking-widest">Skills</h3>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Technical Skills */}
            <div>
              <h4 className="font-semibold mb-6 text-center text-lg tracking-wide text-pink-300">Technical Skills</h4>
              <div className="flex flex-wrap justify-center gap-8">
                {/* Each tech in a styled circle */}
                <div className="flex flex-col items-center">
                  <span className="rounded-full border-4 border-pink-400 bg-gray-900 w-32 h-32 flex items-center justify-center mb-2 shadow-lg">
                    <SiHtml5 className="text-6xl text-orange-500" />
                  </span>
                  <span className="font-semibold text-lg text-gray-100">HTML</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="rounded-full border-4 border-pink-400 bg-gray-900 w-32 h-32 flex items-center justify-center mb-2 shadow-lg">
                    <SiCss3 className="text-6xl text-blue-400" />
                  </span>
                  <span className="font-semibold text-lg text-gray-100">CSS</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="rounded-full border-4 border-pink-400 bg-gray-900 w-32 h-32 flex items-center justify-center mb-2 shadow-lg">
                    <SiJavascript className="text-6xl text-yellow-400" />
                  </span>
                  <span className="font-semibold text-lg text-gray-100">JavaScript</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="rounded-full border-4 border-pink-400 bg-gray-900 w-32 h-32 flex items-center justify-center mb-2 shadow-lg">
                    <FaReact className="text-6xl text-cyan-400" />
                  </span>
                  <span className="font-semibold text-lg text-gray-100">React</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="rounded-full border-4 border-pink-400 bg-gray-900 w-32 h-32 flex items-center justify-center mb-2 shadow-lg">
                    <FaBootstrap className="text-6xl text-purple-500" />
                  </span>
                  <span className="font-semibold text-lg text-gray-100">Bootstrap</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="rounded-full border-4 border-pink-400 bg-gray-900 w-32 h-32 flex items-center justify-center mb-2 shadow-lg">
                    <FaJava className="text-6xl text-yellow-700" />
                  </span>
                  <span className="font-semibold text-lg text-gray-100">Java</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="rounded-full border-4 border-pink-400 bg-gray-900 w-32 h-32 flex items-center justify-center mb-2 shadow-lg">
                    <SiSpringboot className="text-6xl text-green-400" />
                  </span>
                  <span className="font-semibold text-lg text-gray-100">Spring Boot</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="rounded-full border-4 border-pink-400 bg-gray-900 w-32 h-32 flex items-center justify-center mb-2 shadow-lg">
                    <SiSpring className="text-6xl text-green-300" />
                  </span>
                  <span className="font-semibold text-lg text-gray-100">Spring</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="rounded-full border-4 border-pink-400 bg-gray-900 w-32 h-32 flex items-center justify-center mb-2 shadow-lg">
                    <SiApachespark className="text-6xl text-blue-300" />
                  </span>
                  <span className="font-semibold text-lg text-gray-100">REST API</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="rounded-full border-4 border-pink-400 bg-gray-900 w-32 h-32 flex items-center justify-center mb-2 shadow-lg">
                    <SiMysql className="text-6xl text-blue-500" />
                  </span>
                  <span className="font-semibold text-lg text-gray-100">MySQL</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="rounded-full border-4 border-pink-400 bg-gray-900 w-32 h-32 flex items-center justify-center mb-2 shadow-lg">
                    <FaPython className="text-6xl text-yellow-300" />
                  </span>
                  <span className="font-semibold text-lg text-gray-100">Python</span>
                </div>
              </div>
            </div>
            {/* Soft Skills */}
            <div>
              <h4 className="font-semibold mb-6 text-center text-lg tracking-wide text-pink-300">Soft Skills</h4>
              <div className="bg-gray-900 border-4 border-pink-400 rounded-3xl shadow-lg p-8 flex flex-col items-center justify-center min-h-[300px]">
                <ul className="space-y-4 text-lg text-gray-200 font-medium">
                  <li className="px-6 py-2 bg-pink-500 bg-opacity-20 rounded-full border border-pink-400 w-64 text-center">Problem Solving</li>
                  <li className="px-6 py-2 bg-pink-500 bg-opacity-20 rounded-full border border-pink-400 w-64 text-center">Communication</li>
                  <li className="px-6 py-2 bg-pink-500 bg-opacity-20 rounded-full border border-pink-400 w-64 text-center">Teamwork</li>
                  <li className="px-6 py-2 bg-pink-500 bg-opacity-20 rounded-full border border-pink-400 w-64 text-center">Time Management</li>
                  <li className="px-6 py-2 bg-pink-500 bg-opacity-20 rounded-full border border-pink-400 w-64 text-center">Creativity</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
<section id="projects" className="max-w-5xl mx-auto p-10">
  <h3 className="text-3xl font-bold mb-6 text-pink-400 text-center">Projects</h3>
  <div className="grid md:grid-cols-2 gap-8 justify-center items-stretch">
    
    <div className="p-6 border border-gray-700 rounded-lg shadow hover:shadow-lg bg-gray-900 flex flex-col items-center">
      <Image src="/DoBuMartialarts.png" alt="DoBu Martial Arts Website Screenshot" width={400} height={220} className="rounded-lg mb-4 object-cover w-full h-44 sm:h-56 md:h-48 lg:h-44 xl:h-48" />
      <h4 className="font-semibold text-xl text-pink-400 text-center mb-2 tracking-wide uppercase">DoBu Martial Arts Website</h4>
      <p className="text-sm mt-2 text-gray-300">
        A static multi-page website for DoBu Martial Arts including Home, About, Classes, Trainers, Membership, Timetable and Contact pages. 
        Built to present schedules, trainer profiles and membership options in a clean, responsive layout. <br />
        <span className="text-pink-400">Tech Used:</span> HTML, CSS, JavaScript
      </p>
      <a href="https://github.com/Far28/DoBuMartialArts.git" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline mt-2 inline-block">Source Code</a>
    </div>

    <div className="p-6 border border-gray-700 rounded-lg shadow hover:shadow-lg bg-gray-900 flex flex-col items-center">
      <Image src="/Judocalculator.png" alt="Judo Fee Calculator Screenshot" width={400} height={220} className="rounded-lg mb-4 object-cover w-full h-44 sm:h-56 md:h-48 lg:h-44 xl:h-48" />
      <h4 className="font-semibold text-xl text-pink-400 text-center mb-2 tracking-wide uppercase">Judo Fee Calculator (Java)</h4>
      <p className="text-sm mt-2 text-gray-300">
        Console-based Java application that calculates monthly training fees for judo athletes based on weight, chosen training plan, and private coaching hours. 
        Produces a detailed fee breakdown per athlete profile. <br />
        <span className="text-pink-400">Tech Used:</span> Java (OOP, Console I/O)
      </p>
      <a href="https://github.com/Far28/judofeecalculator.git" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline mt-2 inline-block">Source Code</a>
    </div>

    <div className="p-6 border border-gray-700 rounded-lg shadow hover:shadow-lg bg-gray-900 flex flex-col items-center">
      <Image src="/Mealsonwheels.jpg" alt="Meals on Wheels Screenshot" width={400} height={220} className="rounded-lg mb-4 object-cover w-full h-44 sm:h-56 md:h-48 lg:h-44 xl:h-48" />
      <h4 className="font-semibold text-xl text-pink-400 text-center mb-2 tracking-wide uppercase">Meals on Wheels (Enterprise Web App)</h4>
      <p className="text-sm mt-2 text-gray-300">
        A full-stack food delivery system focused on enterprise workflows: customer management, order processing, tracking, and admin reporting. 
        Built with a React frontend and a robust Java backend for production-ready features and secure authentication. <br />
        <span className="text-pink-400">Tech Used:</span> Frontend: React + Tailwind CSS · Backend: Spring Boot (Java) · Database: MySQL · Auth: JWT + Spring Security · API Client: Axios
      </p>
      <a href="https://github.com/AlexAutumns/MerryMeals-TeamBanana.git" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline mt-2 inline-block">Source Code</a>
    </div>

    <div className="p-6 border border-gray-700 rounded-lg shadow hover:shadow-lg bg-gray-900 flex flex-col items-center">
      <Image src="/Jumpstartfashion.png" alt="Jumpstart Fashion Screenshot" width={400} height={220} className="rounded-lg mb-4 object-cover w-full h-44 sm:h-56 md:h-48 lg:h-44 xl:h-48" />
      <h4 className="font-semibold text-xl text-pink-400 text-center mb-2 tracking-wide uppercase">Jumpstart Fashion (Full-Stack E-Commerce Prototype)</h4>
      <p className="text-sm mt-2 text-gray-300">
        A full-stack e-commerce prototype with product browsing, cart flows, and AI-powered recommendations. Focused on modern UX and backend-for-frontend features using serverless/postgres. <br />
        <span className="text-pink-400">Tech Used:</span> Tailwind CSS 3.4.17 · TypeScript 5.8.3 · Vite 5.4.19 · Database: Supabase (PostgreSQL) · Backend: Supabase Edge Functions (Deno) · AI: OpenAI API (recommendations & sentiment analysis)
      </p>
      <a href="https://github.com/Far28/jumpstart-fashion.git" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline mt-2 inline-block">Source Code</a>
    </div>

  </div>
</section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto p-10">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-3xl font-bold mb-6 text-pink-400 text-center">Contact Me</h3>
          <p className="mb-4 text-gray-300 text-center">Let’s connect and create something amazing together:</p>
          <div className="flex gap-6 text-4xl text-pink-400 justify-center">
            <a href="https://github.com/Far28" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/farha-738385313" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-300"><strong>Email:</strong> <a href="mailto:farhasha2803@gmail.com" className="text-pink-400 hover:underline">farhasha2803@gmail.com</a></p>
            <p className="text-gray-300"><strong>Phone:</strong> +94 76 657 8514</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 text-center py-6 border-t border-gray-800">
        <p>© 2025 F.H. Farha</p>
      </footer>
    </div>
  );
}
