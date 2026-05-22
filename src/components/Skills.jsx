import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const skills = [
  { name: 'React', icon: '⚛️', level: 80, category: 'Frontend' },
  { name: 'TypeScript', icon: '📘', level: 65, category: 'Frontend' },
  { name: 'Next.js', icon: '▲', level: 60, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: '🌊', level: 85, category: 'Frontend' },
  { name: 'HTML/CSS', icon: '🎨', level: 90, category: 'Frontend' },
  { name: 'Node.js', icon: '💚', level: 65, category: 'Backend' },
  { name: 'Python', icon: '🐍', level: 85, category: 'Backend' },
  { name: 'FastAPI', icon: '⚡', level: 70, category: 'Backend' },
  { name: 'MySQL', icon: '🐬', level: 75, category: 'Backend' },
  { name: 'MongoDB', icon: '🍃', level: 60, category: 'Backend' },
  { name: 'TensorFlow', icon: '🔶', level: 65, category: 'AI/ML' },
  { name: 'PyTorch', icon: '🔥', level: 60, category: 'AI/ML' },
  { name: 'Scikit-learn', icon: '🤖', level: 75, category: 'AI/ML' },
  { name: 'OpenCV', icon: '👁️', level: 70, category: 'AI/ML' },
  { name: 'Pandas', icon: '🐼', level: 80, category: 'AI/ML' },
  { name: 'Docker', icon: '🐳', level: 55, category: 'Tools' },
  { name: 'Git', icon: '🌿', level: 85, category: 'Tools' },
  { name: 'Linux', icon: '🐧', level: 65, category: 'Tools' },
  { name: 'Hadoop', icon: '🐘', level: 60, category: 'Tools' },
  { name: 'Apache Spark', icon: '✨', level: 60, category: 'Tools' },
]

const filterIcons = {
  All: '</>',
  Frontend: '</>',
  Backend: '⬡',
  'AI/ML': '◎',
  Tools: '⚙',
}

const filters = ['All', 'Frontend', 'Backend', 'AI/ML', 'Tools']

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? skills
    : skills.filter(s => s.category === activeFilter)

  return (
    <section id="skills" className="py-24 relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-3 text-gradient">Skills & Expertise</h2>
        <p className="text-secondary">A comprehensive overview of my technical capabilities and proficiency levels</p>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex items-center justify-center gap-3 flex-wrap mb-12"
      >
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${activeFilter === filter
                ? 'bg-accent text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]'
                : 'glass text-secondary hover:text-primary'
              }`}
          >
            <span className="text-xs">{filterIcons[filter]}</span>
            {filter}
          </button>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25, delay: index * 0.04 }}
              className="glass-card p-4 flex flex-col gap-3 hover:-translate-y-1 transition-transform"
            >
              {/* Top row: icon + name + percentage */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{skill.icon}</span>
                  <span className="text-primary font-semibold text-sm">{skill.name}</span>
                </div>
                <span className="text-accent font-bold text-sm">{skill.level}%</span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.04, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                />
              </div>

              {/* Category badge */}
              <span className="text-xs text-secondary bg-white/5 border border-white/10 px-2 py-0.5 rounded-full w-fit">
                {skill.category}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
