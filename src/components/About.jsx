import { motion } from 'framer-motion'
import { GraduationCap, Search, Users } from 'lucide-react'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading eyebrow="01 / About" title="Engineering with purpose." />
        <div className="about-grid">
          <motion.div className="about-image" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.35 }}>
            <img src="/assets/Friendly Tech Study Session.png" alt="A student writing notes" />
          </motion.div>
          <motion.div className="about-copy" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.35 }}>
            <p>I am a Software Engineering undergraduate at NSBM Green University, Sri Lanka, passionate about technology, innovation and solving real-world problems.</p>
            <p>I particularly enjoy working with AI-powered coding agents and exploring how intelligent tools can support software development, automation and productivity.</p>
            <p>Beyond coding, I am interested in understanding user needs, analysing business problems and exploring how technology can transform ideas into practical digital solutions.</p>
            <p>I believe in continuous learning, collaboration and sharing knowledge. My goal is to grow into a well-rounded technology professional who builds meaningful solutions and helps others grow along the way.</p>
            <div className="about-cards">
              <article><GraduationCap size={22} /><div><span>Education</span><strong>BSc (Hons) Software Engineering</strong></div></article>
              <article><Search size={22} /><div><span>Approach</span><strong>Understand users &amp; business needs</strong></div></article>
              <article><Users size={22} /><div><span>Working style</span><strong>Analytical, collaborative &amp; learning</strong></div></article>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
