'use client'
import { motion } from 'framer-motion'
import { FileText, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-16 md:pt-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Available for technical roles
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
          Ravi <span className="text-zinc-500 font-normal"></span> Ranjan
        </h1>
        
        <h2 className="text-xl sm:text-2xl text-zinc-400 font-normal mb-6 max-w-2xl leading-relaxed">
          Founder of GaiaAir. Building at the intersection of AI, Open Science, and Systems.
        </h2>
        
        <p className="text-zinc-500 mb-10 max-w-2xl text-base sm:text-lg leading-relaxed">
          Computer Science undergraduate engineering Neural-Symbolic agents, distributed packet core infrastructures, and optimized RAG systems. Pushing boundaries by translating satellite data streams and spaceflight telemetry into actionable, intelligent insights.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <a href="https://github.com/AviJxn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-zinc-100 text-black px-6 py-3 rounded-full font-medium hover:bg-zinc-200 transition-colors">
            <svg height="18" width="18" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            View GitHub
          </a>
          
          <a href="mailto:raviranjan.myinfo@gmail.com" className="flex items-center gap-2 glass-card px-6 py-3 rounded-full font-medium hover:bg-white/5 transition-colors">
            <Mail size={18} className="text-zinc-400" />
            Contact Direct
          </a>
        </div>
      </motion.div>
    </section>
  )
}
