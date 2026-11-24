import { motion } from 'framer-motion'
import {
  MessageCircleMore,
  HeartHandshake,
  Share2,
  Users,
  ShieldCheck,
  Workflow,
  Quote,
} from 'lucide-react'
import { SectionHeading } from './SectionHeading'

const values = [
  {
    icon: MessageCircleMore,
    title: 'Communication',
    description:
      'I value clear and respectful communication, active listening and expressing ideas in a way that helps everyone understand and contribute.',
  },
  {
    icon: HeartHandshake,
    title: 'Empathy & Respect',
    description:
      'I believe in understanding different perspectives, respecting individual strengths and creating an environment where everyone feels valued.',
  },
  {
    icon: Share2,
    title: 'Knowledge Sharing',
    description:
      'I enjoy sharing what I learn, exchanging ideas and supporting others in developing their knowledge and skills.',
  },
  {
    icon: Users,
    title: 'Teamwork & Collaboration',
    description:
      'I value working towards shared goals, learning from different perspectives and contributing positively to team achievements.',
  },
  {
    icon: ShieldCheck,
    title: 'Ownership & Accountability',
    description:
      'I believe in taking responsibility for my work, keeping my commitments, learning from mistakes and continuously improving.',
  },
  {
    icon: Workflow,
    title: 'Problem-Solving & Decision-Making',
    description:
      'I approach challenges with curiosity, consider different possibilities and aim to make thoughtful, practical decisions.',
  },
]

export function Leadership() {
  return (
    <section id="leadership" className="section leadership-section">
      <div className="container">

        <SectionHeading
          eyebrow="Beyond Coding"
          title="Leadership starts with how we work together."
          description="Being a good software professional is about more than writing code. It also involves communication, collaboration, accountability and helping others grow."
        />

        <motion.div
          className="leadership-intro"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
        >
          <p>
            My goal is to become a supportive and responsible technology
            professional who contributes to positive team environments,
            shares knowledge and encourages others to achieve their
            potential. I believe leadership begins with small actions,
            continuous learning and a willingness to grow together.
          </p>
        </motion.div>

        <div
          className="leadership-grid"
          aria-label="Personal and professional values"
        >
          {values.map(({ icon: Icon, title, description }, index) => (
            <motion.article
              className="leadership-card"
              key={title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.45,
                delay: index * 0.06,
              }}
            >
              <div className="leadership-card-header">
                <div className="leadership-icon" aria-hidden="true">
                  <Icon size={21} />
                </div>

                <span>0{index + 1}</span>
              </div>

              <h3>{title}</h3>
              <p>{description}</p>
            </motion.article>
          ))}
        </div>

        <motion.blockquote
          className="leadership-quote"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
        >
          <Quote size={26} aria-hidden="true" />

          <p>
            "Great leadership is not about being above others.
            It is about helping others move forward together."
          </p>
        </motion.blockquote>

      </div>
    </section>
  )
}