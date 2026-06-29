'use client'
import { useState } from 'react'
import { motion, AnimatePresence, addStyleValue } from 'framer-motion'
import { ArrowUpRight, BookOpen, Layers, ChevronDown, Layers2Icon, IceCream, Undo2Icon } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'GaiaAir',
    desc: 'An open-source AI environmental engine utilizing dynamic satellite telemetry data streams for real-time planetary health analytics and predictive environmental metrics.',
    expandedDetails: 'Engineered to map multidimensional atmospheric indicators across geo-coordinates. Built to provide open science networks with direct satellite pipeline analytics and predictive model layers.',
    tags: ['Python', 'AI/ML', 'Satellite Data', 'Open Source'],
    gridSpan: 'md:col-span-2',
    icon: Layers
  },
  {
    id: 2,
    title: 'FoodBench-QA 2026',
    desc: 'First-authored research paper "Anonymized at FoodBench-QA 2026: The Cake Makes the Ingredients," accepted for poster presentation at the CL4Health workshop (LREC-COLING 2026).',
    expandedDetails: 'Explores domain-specific NLP modeling logic and boundaries within open medical and context validation datasets.',
    tags: ['Research', 'NLP', 'Publication', 'LREC'],
    gridSpan: 'md:col-span-1',
    icon: BookOpen
  },
  {
    id: 3,
    title: 'GLA Academic Intelligence System (GAIS)',
    desc: 'An integrated predictive toolkit built to model student performance indicators, grade metrics, and academic operational tracks.',
    expandedDetails: 'Designed to optimize grade telemetry visualization states and automate index modeling parameters with clean dashboard outputs.',
    tags: ['Full-Stack', 'Predictive Modeling', 'EdTech'],
    gridSpan: 'md:col-span-1',
    icon: Layers
  }
]

export default function Projects() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <section id="projects">
      <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-8 border-b border-zinc-800 pb-4">Engineering & Research</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => {
          const IconComponent = project.icon
          const isExpanded = expandedId === project.id

          return (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              className={`glass-card p-6 sm:p-8 flex flex-col justify-between group transition-all duration-300 ${project.gridSpan} ${isExpanded ? 'border-zinc-700 bg-zinc-900/20' : 'hover:border-zinc-800'}`}
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-blue-400 transition-colors">
                    <IconComponent size={16} />
                  </div>
                  <ArrowUpRight size={18} className="text-zinc-600 group-hover:text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                
                <h4 className="text-xl font-medium text-zinc-200 group-hover:text-white transition-colors">{project.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed mt-2.5 mb-4">{project.desc}</p>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.p 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-zinc-500 text-xs sm:text-sm leading-relaxed border-t border-zinc-900 pt-3 my-3"
                    >
                      {project.expandedDetails}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono bg-zinc-900 border border-zinc-800/80 px-2.5 py-0.5 rounded-full text-zinc-400">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button 
                  onClick={() => setExpandedId(isExpanded ? null : project.id)}
                  className="text-zinc-500 hover:text-zinc-300 p-1 rounded-lg hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-all flex items-center gap-1 text-[11px] font-mono"
                >
                  {isExpanded ? 'Collapse' : 'Breakdown'}
                  <ChevronDown size={12} className={`transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

