import { motion } from 'framer-motion'
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ArrowUpRight,
  MapPin,
  MessageCircle
} from 'lucide-react'
import { SectionHeading } from './SectionHeading'

export function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-grid">

          <motion.div
            className="contact-intro"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45 }}
          >
            <SectionHeading
              eyebrow="06 / Contact"
              title="Let’s build something meaningful."
            />

            <p className="contact-copy">
              I’m currently open to IT internship opportunities where I can
              apply my knowledge, gain hands-on industry experience, and
              continue growing as a Software Engineering professional.
              I’m also interested in connecting with people who share a
              passion for software development, Generative AI, and Agentic AI.
            </p>

            <div className="contact-status">
              <span aria-hidden="true" />
              Open to internship opportunities
            </div>

            <a
              className="button button-primary contact-email-button"
              href="mailto:malshi783@gmail.com"
            >
              <Mail size={18} />
              Get in touch
              <ArrowUpRight size={17} />
            </a>
          </motion.div>

          <motion.div
            className="contact-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            aria-label="Contact options"
          >
            <a href="mailto:malshi783@gmail.com">
              <span className="contact-link-icon">
                <Mail size={19} />
              </span>
              <span className="contact-link-text">
                <small>Email</small>
                malshi783@gmail.com
              </span>
              <ArrowUpRight size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/malshidewmini/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-link-icon">
                <Linkedin size={19} />
              </span>
              <span className="contact-link-text">
                <small>LinkedIn</small>
                malshidewmini
              </span>
              <ArrowUpRight size={18} />
            </a>

            <a
              href="https://wa.me/94762938961"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-link-icon">
                <MessageCircle size={19} />
              </span>
              <span className="contact-link-text">
                <small>WhatsApp</small>
                +94 76 293 8961
              </span>
              <ArrowUpRight size={18} />
            </a>

            <a
              href="https://github.com/malshi783"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-link-icon">
                <Github size={19} />
              </span>
              <span className="contact-link-text">
                <small>GitHub</small>
                malshi783
              </span>
              <ArrowUpRight size={18} />
            </a>

            <a href="tel:+94762938961">
              <span className="contact-link-icon">
                <Phone size={19} />
              </span>
              <span className="contact-link-text">
                <small>Phone</small>
                +94 76 293 8961
              </span>
              <ArrowUpRight size={18} />
            </a>

            <div className="contact-location">
              <span className="contact-link-icon">
                <MapPin size={19} />
              </span>
              <span className="contact-link-text">
                <small>Location</small>
                Sri Lanka
              </span>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}