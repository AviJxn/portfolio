export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 pt-12 pb-12 flex flex-col sm:flex-row items-center justify-between gap-6">
      <div className="text-sm text-zinc-600 font-mono">
        © 2026 Ravi Ranjan. Built with premium interface discipline.
      </div>
      <div className="flex gap-6 text-sm font-mono">
        <a href="https://www.linkedin.com/in/raviranjan-cs" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">LinkedIn ↗</a>
        <a href="https://github.com/AviJxn" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">GitHub ↗</a>
        <a href="mailto:raviranjan.myinfo@gmail.com" className="text-zinc-500 hover:text-white transition-colors">Email ↗</a>
      </div>
    </footer>
  )
}