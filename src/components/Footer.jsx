import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { ArrowUp } from 'lucide-react'
import { useState, useEffect } from 'react'

/**
 * Footer Component: The bottom section of the website.
 * Includes contact info, navigation links, and a scroll-to-top feature.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  // State to track whether the "Scroll to Top" button should be visible
  const [showScroll, setShowScroll] = useState(false)

  // Effect to listen for scroll events and toggle the scroll-to-top button
  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    // Cleanup: remove the event listener when the component is unmounted
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <footer className="relative z-10 mt-8 border-t border-white/10 bg-black">
      {/* --- Main footer content divided into 3 columns --- */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Column 1: Personal Info & Social Media Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-gradient">Aniket Vijay Shinde</h3>
          <p className="text-secondary text-sm leading-relaxed max-w-xs">
            Full Stack Developer & AI/ML Engineer passionate about creating innovative solutions that make a difference.
          </p>
          <div className="flex items-center gap-3 mt-1">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 glass rounded-lg flex items-center justify-center text-secondary hover:text-white hover:bg-accent/20 transition-all">
              <FaGithub size={16} />
            </a>
            <a href="https://www.linkedin.com/in/aniket-shinde-15413a2b7" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 glass rounded-lg flex items-center justify-center text-secondary hover:text-white hover:bg-accent/20 transition-all">
              <FaLinkedin size={16} />
            </a>
            <a href="https://www.instagram.com/aniket.shinde_7" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 glass rounded-lg flex items-center justify-center text-secondary hover:text-white hover:bg-accent/20 transition-all">
              <FaInstagram size={16} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Navigation Links */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-bold text-primary">Quick Links</h3>
          <nav className="flex flex-col gap-2">
            {['About', 'Projects', 'Skills', 'Contact'].map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-secondary text-sm hover:text-primary transition-colors w-fit"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Column 3: Contact Details */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-bold text-primary">Get In Touch</h3>
          {/* Email link */}
          <a href="mailto:work.aniket4@gmail.com" className="text-secondary text-sm hover:text-primary transition-colors">
            work.aniket4@gmail.com
          </a>
          {/* Phone number */}
          <p className="text-secondary text-sm">+91 9975499107</p>
        </div>
      </div>

      {/* --- Bottom bar: Copyright & "Made With" section --- */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 py-5 flex flex-col gap-2">
          {/* First line: Left aligned "Made with..." info */}
          <p className="text-secondary text-sm flex items-center gap-1.5">
            Made with <span className="text-red-500 animate-pulse">❤️</span> by Aniket Vijay Shinde
          </p>
          {/* Second line: Centered copyright info */}
          <p className="text-secondary/50 text-xs text-center w-full">
            © 2025 Aniket Vijay Shinde. All rights reserved.
          </p>
        </div>
      </div>

      {/* Floating button to smoothly scroll back to the top of the page */}
      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center shadow-lg hover:opacity-90 transition-all z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </footer>
  )
}
