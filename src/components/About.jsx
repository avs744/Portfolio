import { motion } from 'framer-motion'
import { Code2, Globe, Cpu, Calendar } from 'lucide-react'

export default function About() {
  const stats = [
    { label: 'Projects Completed', value: '5+' },
    { label: 'Months Experience', value: '2+' },
    { label: 'Technologies Learning', value: '10+' },
    { label: 'Commitment Level', value: '100%' },
  ]

  return (
    <section id="about" className="py-24 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">About Me</h2>
        <p className="text-secondary">Passionate about creating innovative solutions that make a difference</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Card Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="glass-card w-full max-w-xs p-5 flex flex-col items-center gap-4">
            {/* Name at top */}
            <p className="text-primary font-semibold text-sm self-start">Aniket Vijay Shinde</p>
            <div className="w-full h-px bg-white/10"></div>

            {/* Photo Placeholder */}
            <div className="relative w-full aspect-square rounded-xl bg-surface/80 overflow-hidden flex items-center justify-center text-secondary border border-white/5">
              {/* Replace the line below with your actual photo: */}
              {/* <img src="/profile.jpg" alt="Aniket" className="w-full h-full object-cover" /> */}
              <div className="flex flex-col items-center gap-2 text-secondary/50">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /></svg>
                <span className="text-xs">Your Photo Here</span>
              </div>
            </div>

            <div className="w-full h-px bg-white/10"></div>

            {/* Available badge */}
            <div className="flex items-center gap-2 text-accent text-sm font-medium self-start">
              <Calendar size={16} />
              <span>Available for new opportunities</span>
            </div>
          </div>
        </motion.div>

        {/* Text Column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-secondary text-lg mb-6 leading-relaxed">
            I'm an aspiring AI/ML Engineer and Full Stack Developer currently pursuing my B.Tech in Artificial Intelligence at K. J. Somaiya Institute of Technology. My passion lies in exploring how technology can solve real-world problems, with a particular focus on the intersection of web development and artificial intelligence.<br />
            Recently, I completed an enriching internship in Digital Marketing, where I gained valuable experience in social media consulting and team management. I'm constantly learning and challenging myself with new technologies, always eager to apply my knowledge to innovative projects.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="glass-card p-4">
                <div className="text-2xl md:text-3xl font-bold text-accent mb-1">{stat.value}</div>
                <div className="text-sm text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
