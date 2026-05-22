import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { FaReact, FaPython, FaNodeJs, FaDocker } from 'react-icons/fa'
import { SiTypescript, SiTensorflow } from 'react-icons/si'

/**
 * Hero Component: The landing section of the website.
 * Contains the introduction, main title, social links, and a visual representation of skills.
 */
export default function Hero() {
  return (
    // Section container with minimum screen height and padding
    <section id="home" className="min-h-screen flex items-center pt-24 pb-12 relative overflow-hidden">
      {/* Container to center content and define the grid layout */}
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center z-10">

        {/* --- LEFT COLUMN: Typography & Call to Action (CTA) --- */}
        <div className="flex flex-col text-left">
          {/* Main heading with fade-in and slide-up animation */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl xl:text-8xl font-extrabold tracking-tight mb-2 text-primary leading-tight"
          >
            Hello, <br />
            {/* Gradient text for the first name */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">I'm Aniket</span> <br />
            {/* Gradient text for the surname, with whitespace-nowrap to prevent line breaks */}
            <span className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Vijay Shinde</span>
          </motion.h1>

          {/* Intro paragraph with delayed fade-in animation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-secondary max-w-lg mb-10 leading-relaxed font-medium mt-6"
          >
            Full Stack Developer & AI/ML Engineer crafting innovative solutions that bridge the gap between technology and human needs.
          </motion.p>

          {/* Social media links container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-4 mb-12"
          >
            <SocialLink href="#" icon={<FaGithub size={20} />} />
            <SocialLink href="https://www.linkedin.com/in/aniket-shinde-15413a2b7?utm_source=share_via&utm_content=profile&utm_medium=member_ios" icon={<FaLinkedin size={20} />} />
            <SocialLink href="https://www.instagram.com/aniket.shinde_7?igsh=bjRyNjM0eWFlMGZr&utm_source=qr" icon={<FaInstagram size={20} />} />
            <SocialLink href="mailto:work.aniket4@gmail.com" icon={<FaEnvelope size={20} />} />
          </motion.div>

          {/* Call to Action (CTA) buttons: View My Work and Get In Touch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            {/* Primary button: Link to Projects section */}
            <a
              href="#projects"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)]"
            >
              <FaGithub size={18} /> View My Work
            </a>
            {/* Secondary button: Link to Contact section */}
            <a
              href="#contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-2 border-secondary/30 text-primary px-8 py-4 rounded-full font-semibold hover:border-primary transition-all"
            >
              <FaEnvelope size={18} /> Get In Touch
            </a>
          </motion.div>
        </div>

        {/* --- RIGHT COLUMN: Visual Elements (Code Snippet & Skill Cards) --- */}
        <div className="flex flex-col gap-6">
          {/* Glassmorphic code editor window mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/80 dark:bg-[#111827]/80 backdrop-blur-md rounded-2xl border border-black/5 dark:border-white/5 overflow-hidden shadow-2xl"
          >
            {/* Window control buttons (red, yellow, green) */}
            <div className="flex items-center gap-2 px-4 py-3 bg-black/5 dark:bg-black/40 border-b border-black/5 dark:border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            {/* Code content area */}
            <div className="p-6 font-mono text-sm sm:text-base text-slate-800 dark:text-gray-300 leading-relaxed overflow-x-auto">
              <span className="text-pink-600 dark:text-green-400">const</span> <span className="text-blue-600 dark:text-blue-400">developer</span> = {'{'} <br />
              &nbsp;&nbsp;<span className="text-pink-600 dark:text-green-400">name:</span> <span className="text-amber-600 dark:text-yellow-300">"Aniket Vijay Shinde"</span>,<br />
              &nbsp;&nbsp;<span className="text-pink-600 dark:text-green-400">skills:</span> [<span className="text-amber-600 dark:text-yellow-300">"React"</span>, <span className="text-amber-600 dark:text-yellow-300">"Python"</span>, <span className="text-amber-600 dark:text-yellow-300">"ML"</span>],<br />
              &nbsp;&nbsp;<span className="text-pink-600 dark:text-green-400">passion:</span> <span className="text-amber-600 dark:text-yellow-300">"Building the future"</span><br />
              {'};'}
            </div>
          </motion.div>

          {/* Grid of colorful cards representing main technical skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            <SkillCard color="from-blue-400 to-blue-600" icon={<FaReact className="text-white mb-6" size={24} />} title="React" />
            <SkillCard color="from-green-400 to-green-600" icon={<FaPython className="text-white mb-6" size={24} />} title="Python" />
            <SkillCard color="from-blue-500 to-blue-700" icon={<SiTypescript className="text-white mb-6" size={24} />} title="TypeScript" />
            <SkillCard color="from-purple-400 to-purple-600" icon={<SiTensorflow className="text-white mb-6" size={24} />} title="AI/ML" />
            <SkillCard color="from-green-500 to-green-700" icon={<FaNodeJs className="text-white mb-6" size={24} />} title="Node.js" />
            <SkillCard color="from-cyan-400 to-cyan-600" icon={<FaDocker className="text-white mb-6" size={24} />} title="Docker" />
          </motion.div>
        </div>

      </div>

      {/* Bouncing scroll indicator centered at the bottom of the section */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-secondary flex flex-col items-center animate-bounce">
        <span className="text-xs mb-2">Scroll to explore</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
      </div>
    </section>
  )
}

/**
 * Reusable component for social media links with a consistent style.
 */
function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-surface rounded-full text-secondary hover:text-white transition-all duration-300"
    >
      {icon}
    </a>
  )
}

/**
 * Component for individual skill cards used in the grid.
 * Displays an icon and title over a colorful gradient background.
 */
function SkillCard({ color, icon, title }) {
  return (
    <div className={`p-4 rounded-xl bg-gradient-to-br ${color} shadow-lg hover:-translate-y-1 transition-transform flex flex-col`}>
      {icon}
      <span className="text-white font-semibold text-sm mt-auto">{title}</span>
    </div>
  )
}
