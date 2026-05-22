import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'

const experiences = [
  {
    type: 'work',
    role: 'Digital Marketing Intern',
    company: 'Internshala',
    period: 'Nov 2024 - Dec 2024 · 2 mos',
    description: 'Gained hands-on experience in social media consulting, team management, and 9+ other skills. Developed and implemented digital marketing strategies while working in a hybrid environment.',
    tags: ['Digital Marketing', 'Social Media', 'Team Management', 'Strategy'],
  },
  {
    type: 'work',
    role: 'Lead',
    company: 'Google Developer Program (GDSC) KJSIT',
    period: 'Sep 2023 - Present · 2 yrs 9 mos',
    description: 'Led KJSIT\'s Google Developer Student Club, building and managing a college-wide tech community where students explored and upskilled in Google Cloud, Big Data, and Machine Learning. Drove team strategy, organized learning initiatives, and helped members grow both technically and professionally.',
    tags: ['Google Cloud', 'Big Data', 'Team Management', 'Strategy', 'Machine Learning'],
  },
  {
    type: 'education',
    role: 'Bachelor of Technology - BTech, Artificial Intelligence',
    company: 'K. J. Somaiya Institute of Technology, Mumbai, Maharashtra, India',
    period: 'Jul 2023 - Present',
    description: 'Pursuing specialized education in Artificial Intelligence, focusing on machine learning, deep learning, and AI applications.',
    tags: ['Machine Learning', 'Deep Learning', 'AI Applications', 'Python', 'Data Science'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">Experience</h2>
      </motion.div>

      <div className="max-w-4xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30"></div>

        <div className="flex flex-col gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative flex gap-8 items-start"
            >
              {/* Icon circle */}
              <div className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center shadow-lg
                ${exp.type === 'work'
                  ? 'bg-gradient-to-br from-blue-500 to-indigo-600'
                  : 'bg-gradient-to-br from-purple-500 to-pink-600'
                }`}
              >
                {exp.type === 'work'
                  ? <Briefcase size={24} className="text-white" />
                  : <GraduationCap size={24} className="text-white" />
                }
              </div>

              {/* Card */}
              <div className="glass-card flex-1 p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <h3 className="text-lg font-bold text-accent leading-snug">{exp.role}</h3>
                  <span className="text-secondary text-sm whitespace-nowrap">{exp.period}</span>
                </div>
                <p className="text-primary font-semibold text-sm mb-3">{exp.company}</p>
                <p className="text-secondary text-sm leading-relaxed mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
