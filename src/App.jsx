import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Exploring } from './components/Exploring'
import { Leadership } from './components/Leadership'
import { Projects } from './components/Projects'
import { Education } from './components/Education'
import { Certifications } from './components/Certifications'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Route, Routes, useLocation } from 'react-router-dom'
import { EmployeeManagementPage } from './pages/EmployeeManagementPage'
import { TestPilotPage } from './pages/TestPilotPage'
import { StudyMatePage } from './pages/StudyMatePage'
import { WaveMirissaPage } from './pages/WaveMirissaPage'

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Exploring />
      <Leadership />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
    </main>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <>
      {location.pathname === '/' && <Navbar />}
      <Routes>
        <Route path="/" element={<><HomePage /><Footer /></>} />
        <Route path="/projects/employee-management-system" element={<EmployeeManagementPage />} />
        <Route path="/projects/testpilot-ai" element={<TestPilotPage />} />
        <Route path="/projects/ai-al-studymate" element={<StudyMatePage />} />
        <Route path="/projects/wave-mirissa-oims" element={<WaveMirissaPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  )
}
