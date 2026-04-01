import { Sidebar } from '@/components/Sidebar'
import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Certifications } from '@/components/sections/Certifications'
import { Projects } from '@/components/sections/Projects'
import { CTF } from '@/components/sections/CTF'

export default function Home() {
  return (
    <div className="max-w-[1180px] mx-auto px-6 md:px-10 flex flex-col md:flex-row md:gap-32 lg:gap-40 relative z-[1]">
      <Sidebar />
      <main className="flex-1 pt-0 md:pt-20 pb-20 md:pb-[120px] min-w-0">
        <About />
        <Experience />
        <Certifications />
        <Projects />
        <CTF />
      </main>
    </div>
  )
}
