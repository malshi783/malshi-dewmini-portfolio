import { motion } from 'framer-motion'
import { ArrowDownRight, Download, Github, Linkedin ,Phone} from 'lucide-react'

export function Hero() {
  const currentHour = new Date().getHours()
  let greeting = 'Hello! Welcome to my portfolio.'
  if (currentHour >= 5 && currentHour < 12) {
    greeting = 'Good morning! Welcome to my portfolio.'
  } else if (currentHour >= 12 && currentHour < 17) {
    greeting = 'Good afternoon! Welcome to my portfolio.'
  } else if (currentHour >= 17 && currentHour < 21) {
    greeting = 'Good evening! Welcome to my portfolio.'
  }
  return (
    <section id="home" className="hero">
      <div className="hero-grid container">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <motion.p
          className="hero-greeting"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          >
            {greeting}
          </motion.p>
          <p className="availability"><span /> Looking for internship opportunities</p>
          <p className="hero-kicker">SOFTWARE ENGINEERING UNDERGRADUATE · YEAR 3</p>
          <h1 className="hero-name">MALSHI<br /><span>DEWMINI.</span></h1>
          <p className="hero-headline">Exploring AI Agents, Intelligent Workflows<br /><span>&amp; Business Innovation.</span></p>
          <p className="hero-intro">
            I am a Software Engineering undergraduate at NSBM Green University, Sri Lanka, passionate about
            technology, innovation and solving real-world problems.
            <br /><br />
            I work with AI-powered coding agents and explore how technology, automation and collaboration
            can turn ideas into practical digital solutions.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="/Malshi_Dewmini_CV.pdf" download>
              <Download size={18} /> Download CV
            </a>
            <a className="button button-secondary" href="#projects">
              Explore projects <ArrowDownRight size={18} />
            </a>
          </div>
          <div className="social-links" aria-label="Social profiles">
            <a href="https://github.com/malshi783" target="_blank" rel="noreferrer" aria-label="Visit Malshi's GitHub profile"><Github size={19} /></a>
            <a href="https://linkedin.com/in/malshidewmini" target="_blank" rel="noreferrer" aria-label="Visit Malshi's LinkedIn profile"><Linkedin size={19} /></a>
          <a href="https://wa.me/94762938961" target="_blank" rel="noreferrer" aria-label="Visit Malshi's WhatsApp profile"><Phone size={19} /></a>
          </div>
        </motion.div>

        <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.75, delay: 0.12 }}>
          <div className="portrait-frame">
            <img src="/assets/malshi-professional.jpg" alt="Malshi Dewmini" loading="eager" decoding="async" fetchPriority="high" />
            <div className="portrait-label"><span>Exploring</span><strong>Software · AI · Business</strong></div>
          </div>
          <div className="code-card" aria-hidden="true"><span>01</span><code>build(better_software);</code></div>
        </motion.div>
      </div>
    </section>
  )
}
