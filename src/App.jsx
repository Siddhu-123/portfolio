import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectsSection from './components/ProjectsSection'
import CourseworkSection from './components/CourseworkSection'
import SkillsSection from './components/SkillsSection'
import ExperienceSection from './components/ExperienceSection'
import PositioningSection from './components/PositioningSection'
import Footer from './components/Footer'
import usePersistentState from './hooks/usePersistentState'

const prefersDark = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches

function App() {
  const [dark, setDark] = usePersistentState('theme-dark', prefersDark)

  useEffect(() => {
    document.documentElement.classList.toggle('dark-theme', dark)
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light')
    } catch {
      /* storage unavailable */
    }
  }, [dark])

  return (
    <div className="min-h-screen font-sans antialiased">
      <Navbar dark={dark} onToggleTheme={() => setDark((d) => !d)} />
      <main>
        <Hero />
        <ProjectsSection />
        <CourseworkSection />
        <SkillsSection />
        <ExperienceSection />
        <PositioningSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
