
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">

      <div className="absolute top-[-10%] left-[-20%] w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-[140px] pointer-events-none" />
      
      <main className="max-w-4xl mx-auto px-6 space-y-24 sm:space-y-36 relative z-10">
        <Hero />
        <Experience />
        <Projects />
        <Footer />
      </main>
    </div>
  )
}
