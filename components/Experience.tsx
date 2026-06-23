'use client'
import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'First Author & Lead Researcher',
    company: 'Cohere (Cohere For AI Open Science Community)',
    date: 'Dec 2025 – Present',
    description: 'Coordinated a global, cross-institutional research team within the C4AI community to benchamark deterministic retrieval approaches against generative LLMs. Designed a high-precision, retrieval-augmented pipeline utilizing TF-IDF vectorization and weighted k-NN, publishing "The Cake Makes the Ingredients" in the official proceedings of the CL4Health Workshop at LREC-COLING 2026.'
  },
  {
    role: 'Research Intern',
    company: 'RV University (School of Computer Science and Engineering)',
    date: 'June 2026 – Present',
    description: 'Selected for the RVU Summer Internship Program within a core research team under the supervision of Prof. Sunil Kumar J. Focused on developing an AI-Driven Adaptive Intrusion Detection and Network Threat Intelligence Framework using Transformer-Based Temporal Anomaly Detection models to analyze sequence-based network logs.'
  },
  {
    role: 'LFX Magma Core - Mentee',
    company: 'The Linux Foundation',
    date: 'Jan 2026 – May 2026',
    description: 'Successfully deployed and optimized a carrier-grade containerized mobile packet core network (Magma Orchestrator & Access Gateway) using Docker and Python on Ubuntu 20.04. Authored and submitted an upstream patch for orc8r/cloud/docker/fluentd/Dockerfile to resolve critical dependency decay, and debugged gRPC handshake channels over secure TLS control paths.'
  },
  {
    role: 'Member (NASA OSDR - Analysis Working Group)',
    company: 'NASA - National Aeronautics and Space Administration',
    date: 'Nov 2025 – Present',
    description: 'Applying advanced computational techniques within the Analysis Working Group (AWG) to process spaceflight radiation telemetry. Serving as Technical Lead for an open-source, WebGL-powered 3D visualization framework designed to map physical orbital contexts and validate ML models for South Atlantic Anomaly (SAA) data separation.'
  }
]

export default function Experience() {
  return (
    <section id="experience">
      <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-8 border-b border-zinc-800 pb-4">Selected Experience</h3>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col md:flex-row md:items-baseline justify-between gap-4"
          >
            <div className="max-w-2xl">
              <h4 className="text-lg font-medium text-zinc-100">{exp.role}</h4>
              <h5 className="text-zinc-400 text-sm mt-0.5 mb-3">{exp.company}</h5>
              <p className="text-zinc-500 text-sm sm:text-base leading-relaxed">{exp.description}</p>
            </div>
            <span className="text-xs text-zinc-500 font-mono tracking-tighter shrink-0">{exp.date}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
