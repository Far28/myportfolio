import Head from "next/head";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaJava, FaPython, FaReact, FaBootstrap } from "react-icons/fa";
import { SiSpring, SiSpringboot, SiMysql, SiJavascript, SiHtml5, SiCss3, SiApachespark } from "react-icons/si";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen">
      <Head>
        <title>F.H. Farha | Portfolio</title>
        <meta name="description" content="F.H. Farha - Software Engineering Portfolio" />
      </Head>

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-gray-900 bg-opacity-90 shadow-lg">
        <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-pink-400">F.H. FARHA</h1>
          <ul className="hidden md:flex gap-6 font-medium">
            <li><a href="#about" className="hover:text-pink-400">About</a></li>
            <li><a href="#skills" className="hover:text-pink-400">Skills</a></li>
            <li><a href="#projects" className="hover:text-pink-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-pink-400">Contact</a></li>
            <li><Link href="/resume" className="hover:text-pink-400">Resume</Link></li>
          </ul>
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
      <section id="about" className="max-w-5xl mx-auto pt-4 pb-10 px-6">
        <h3 className="text-3xl font-bold mb-6 text-pink-400 text-center">About Me</h3>
        <div className="flex justify-center mb-6">
          <div className="bg-gray-900 border-4 border-pink-400 rounded-2xl shadow-lg p-8 w-full max-w-2xl">
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="text-pink-400 font-semibold"><svg xmlns='http://www.w3.org/2000/svg' className='inline-block mr-1' width='22' height='22' fill='currentColor' viewBox='0 0 24 24'><path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/></svg>Birthday:</span>
                <span className="text-gray-200">28th of July 2003</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-pink-400 font-semibold"><svg xmlns='http://www.w3.org/2000/svg' className='inline-block mr-1' width='22' height='22' fill='currentColor' viewBox='0 0 24 24'><path d='M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z'/></svg>Age:</span>
                <span className="text-gray-200">22</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-pink-400 font-semibold"><svg xmlns='http://www.w3.org/2000/svg' className='inline-block mr-1' width='22' height='22' fill='currentColor' viewBox='0 0 24 24'><path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/></svg>Languages:</span>
                <span className="text-gray-200">English, Sinhala, Tamil</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-pink-400 font-semibold"><svg xmlns='http://www.w3.org/2000/svg' className='inline-block mr-1' width='22' height='22' fill='currentColor' viewBox='0 0 24 24'><path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'/></svg>Location:</span>
                <span className="text-gray-200">Colombo, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-pink-400 font-semibold"><svg xmlns='http://www.w3.org/2000/svg' className='inline-block mr-1' width='22' height='22' fill='currentColor' viewBox='0 0 24 24'><path d='M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10zm-8-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'/></svg>Email:</span>
                <span className="text-gray-200">farhasha2803@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-pink-400 font-semibold"><svg xmlns='http://www.w3.org/2000/svg' className='inline-block mr-1' width='22' height='22' fill='currentColor' viewBox='0 0 24 24'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z'/></svg>Degree:</span>
                <span className="text-gray-200">BSc (Hons) in Software Engineering</span>
              </li>
            </ul>
          </div>
        </div>
        <p className="leading-relaxed text-gray-200 text-center">
          I am a passionate Software Engineering student driven by curiosity and creativity. My journey in tech has been fueled by hands-on projects where I&apos;ve explored web development, backend systems, and user-focused design. I enjoy solving real-world problems through clean, efficient code and I&apos;m eager to grow into a developer who creates meaningful digital experiences.
        </p>
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
      <h4 className="font-semibold text-xl text-pink-400 text-center mb-2 tracking-wide uppercase">DoBu Martial Arts Website</h4>
      <p className="text-sm mt-2 text-gray-300">
        A static multi-page website for DoBu Martial Arts including pages such as Home, About, Classes, Trainers, Membership, and Contact. 
        Designed to provide information about classes and facilities with a clean, responsive layout. <br />
        <span className="text-pink-400">Tech Used:</span> HTML, CSS, JavaScript
      </p>
      <a href="https://github.com/Far28/DoBuMartialArts.git" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline mt-2 inline-block">Source Code</a>
    </div>

    <div className="p-6 border border-gray-700 rounded-lg shadow hover:shadow-lg bg-gray-900 flex flex-col items-center">
      <h4 className="font-semibold text-xl text-pink-400 text-center mb-2 tracking-wide uppercase">Judo Fee Calculator (Java)</h4>
      <p className="text-sm mt-2 text-gray-300">
        A console-based Java application that calculates monthly training fees for judo athletes based on weight, training plan, and private coaching hours. 
        Provides detailed cost breakdowns for different profiles. <br />
        <span className="text-pink-400">Tech Used:</span> Java (OOP, Console I/O)
      </p>
      <a href="https://github.com/Far28/judofeecalculator.git" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline mt-2 inline-block">Source Code</a>
    </div>

    <div className="p-6 border border-gray-700 rounded-lg shadow hover:shadow-lg bg-gray-900 flex flex-col items-center">
      <h4 className="font-semibold text-xl text-pink-400 text-center mb-2 tracking-wide uppercase">Meals on Wheels (Enterprise Web App)</h4>
      <p className="text-sm mt-2 text-gray-300">
        A full-stack enterprise food delivery system with a structured backend and secure user authentication. 
        Features include customer management, order tracking, and reporting dashboards. <br />
        <span className="text-pink-400">Tech Used:</span> Java, Spring MVC, Hibernate, MySQL, JSP, CSS
      </p>
      <a href="https://github.com/AlexAutumns/MerryMeals-TeamBanana.git" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline mt-2 inline-block">Source Code</a>
    </div>

    <div className="p-6 border border-gray-700 rounded-lg shadow hover:shadow-lg bg-gray-900 flex flex-col items-center">
      <h4 className="font-semibold text-xl text-pink-400 text-center mb-2 tracking-wide uppercase">Jumpstart Fashion (Full-Stack E-Commerce Prototype)</h4>
      <p className="text-sm mt-2 text-gray-300">
        A full-stack prototype for an e-commerce fashion platform featuring product browsing, user interface design, and cart functionality. 
        Focused on delivering a modern shopping experience with responsive layouts. <br />
        <span className="text-pink-400">Tech Used:</span> HTML, CSS, JavaScript (Frontend) | Node.js, Express.js (Backend)
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
