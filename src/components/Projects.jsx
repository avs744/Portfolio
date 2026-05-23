import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Filter } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: 'Tech Comparison Website',
    shortDesc: 'Advanced tech comparison platform with AI-powered chatbot.',
    fullDesc: 'Developed a sophisticated tech comparison platform that helps users make informed decisions. Features include:',
    bullets: [
      'AI-powered chatbot for personalized product recommendations.',
      'Side-by-side product comparison with detailed specifications.',
      'User accounts with saved product lists and preferences.',
      'Responsive design optimized for all devices.',
      'Real-time price tracking and alerts.',
    ],
    image: '/project1.png',
    tags: ['Next.js', 'TypeScript', 'Python', '+2'],
    category: 'AI/ML',
    featured: true,
    liveUrl: 'https://duel-tech.onrender.com',
    githubUrl: 'https://github.com/avs744/Duel-Tech.git',
  },
  {
    title: 'Custom Bike Marketplace',
    shortDesc: 'An innovative e-commerce platform for motorcycle enthusiasts.',
    fullDesc: 'Built a comprehensive marketplace for custom motorcycles with advanced features:',
    bullets: [
      'Easy Shopping Experience: Intuitive bike browsing interface, streamlined checkout process, secure payment integration, and order tracking system.',
      'Advanced Search Features: Detailed bike specifications, multiple filter options, side-by-side comparison, and sorting by various criteria.',
    ],
    image: '/project2.png',
    tags: ['Next.js', 'React', 'Node.js', '+2'],
    category: 'Web Dev',
    featured: false,
    liveUrl: 'https://customebike1.vercel.app/',
    githubUrl: 'https://github.com/avs744/Customebike.git',
  },
]

const filters = ['All', 'AI/ML', 'Web Dev', 'Data Science']

const categoryColors = {
  'AI/ML': 'bg-blue-500',
  'Web Dev': 'bg-purple-500',
  'Data Science': 'bg-pink-500',
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [hoveredCard, setHoveredCard] = useState(null)

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="py-24 relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-3 text-gradient">Featured Projects</h2>
        <p className="text-secondary">A showcase of my technical expertise and creative problem-solving abilities</p>
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
            className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${activeFilter === filter
                ? 'bg-accent text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]'
                : 'glass text-secondary hover:text-primary'
              }`}
          >
            <Filter size={13} />
            {filter}
          </button>
        ))}
      </motion.div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => {
            const isExpanded = hoveredCard === project.title
            return (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                className="glass-card overflow-hidden group flex flex-col cursor-default"
                onMouseEnter={() => setHoveredCard(project.title)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {project.featured && (
                    <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full z-10 uppercase tracking-wide">
                      Featured
                    </span>
                  )}
                  <span className={`absolute bottom-3 left-3 ${categoryColors[project.category] || 'bg-gray-600'} text-white text-xs font-semibold px-2.5 py-0.5 rounded-full z-10`}>
                    {project.category}
                  </span>
                  <div className="absolute top-3 right-3 flex gap-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-all">
                      <FaGithub size={14} />
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-all">
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  {/* Title */}
                  <h3 className={`text-lg font-bold mb-2 transition-colors ${isExpanded ? 'text-accent' : 'text-primary'}`}>
                    {project.title}
                  </h3>

                  {/* Description - collapses/expands */}
                  <AnimatePresence initial={false}>
                    {!isExpanded ? (
                      <motion.p
                        key="short"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-secondary text-sm leading-relaxed mb-4"
                      >
                        {project.shortDesc}
                      </motion.p>
                    ) : (
                      <motion.div
                        key="full"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mb-4"
                      >
                        <p className="text-secondary text-sm leading-relaxed mb-2">{project.fullDesc}</p>
                        <ul className="text-secondary text-sm space-y-1">
                          {project.bullets.map((b, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="text-accent mt-0.5">•</span>
                              {b}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium text-secondary bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Links */}
                  <div className="flex items-center gap-4 text-sm font-medium border-t border-white/5 pt-4 mt-auto">
                    <a href={project.githubUrl} className="flex items-center gap-1.5 text-secondary hover:text-primary transition-colors">
                      <FaGithub size={15} /> Code
                    </a>
                    <a href={project.liveUrl} className={`flex items-center gap-1.5 px-4 py-1 rounded-full transition-all
                      ${project.featured
                        ? 'bg-accent text-white hover:bg-accent/80'
                        : 'text-secondary hover:text-primary'
                      }`}>
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

      {/* View All Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="flex justify-center mt-12"
      >
        <a
          href="https://github.com/aniketshinde"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]"
        >
          <FaGithub size={18} /> View All Projects on GitHub
        </a>
      </motion.div>
    </section>
  )
}
