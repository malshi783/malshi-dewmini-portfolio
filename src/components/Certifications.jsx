import { motion } from 'framer-motion'
import {ExternalLink, BookOpen} from 'lucide-react'
import { SectionHeading } from './SectionHeading'

export function LearningEntry({ course, provider, completed, duration, image, verificationUrl, learnings, skills }) {
  return (
    <motion.article
      className="learning-entry"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45 }}
    >
      {image && (
        <div className="learning-entry-preview">
          <img src={image} alt={`${course} certificate preview`} loading="lazy" decoding="async" />
        </div>
      )}

      <div className="learning-entry-content">
        <div className="learning-entry-heading">
          <div>
            {provider && <p className="learning-provider">{provider}</p>}
            <h3>{course}</h3>
          </div>
          {verificationUrl && (
            <a href={verificationUrl} target="_blank" rel="noreferrer" aria-label={`Verify ${course} certificate`}>
              <ExternalLink size={17} />
            </a>
          )}
        </div>

        {(completed || duration) && (
          <dl className="learning-meta">
            {completed && <div><dt>Completed</dt><dd>{completed}</dd></div>}
            {duration && <div><dt>Duration</dt><dd>{duration}</dd></div>}
          </dl>
        )}

        {learnings && (
          <div className="learning-outcome">
            <p>What I Learned</p>
            <span>{learnings}</span>
          </div>
        )}

        {skills?.length > 0 && (
          <ul className="learning-skills" aria-label="Skills and concepts">
            {skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        )}
      </div>
    </motion.article>
  )
}

const learningEntries = [
  {
    course: 'Java Object-Oriented Programming',
    provider: 'LinkedIn Learning',
    completed: '2026',
    verificationUrl: '/certificates/CertificateOfCompletion_Java%20ObjectOriented%20Programming.pdf',
    learnings: 'Object-oriented programming principles, classes and objects, inheritance, encapsulation and polymorphism.',
  },
  {
    course: 'Business Analysis Basics',
    provider: 'Simplilearn SkillUp',
    completed: ' 2026',
    verificationUrl: '/certificates/1793593676033.pdf',
    learnings: 'Business analysis fundamentals, business requirements and core business analysis concepts.',
  },
  {
    course: 'Introduction to Software Testing',
    provider: 'Simplilearn SkillUp',
    completed: ' 2026',
    verificationUrl: '/certificates/1795018984297.pdf',
    learnings: 'Software testing fundamentals, testing types and techniques, and software quality concepts.',
  },
  {
    course: 'Transforming Project Management with AI Agents',

    provider: 'LinkedIn Learning',
    completed: ' 2026',
    verificationUrl: '/certificates/public/certificates/CertificateOfCompletion_Transforming Project Management with AI Agents.pdf',
    learnings: 'Software testing fundamentals, testing types and techniques, and software quality concepts.',
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="05 / Certifications & Continuous Learning"
          title="Always learning."
        />

        {learningEntries.length > 0 && (
          <div className="learning-entries">
            {learningEntries.map((entry) => (
              <LearningEntry key={entry.course} {...entry} />
            ))}
          </div>
        )}

        <motion.article
          className="learning-message"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
        >
          <div className="learning-message-icon" aria-hidden="true">
            <BookOpen size={23} />
          </div>
          <p>
            Continuous learning is an important part of my development as a technology professional.
            I actively explore new tools, technologies and concepts to expand my knowledge and improve my skills.
          </p>
        </motion.article>
      </div>
    </section>
  )
}
