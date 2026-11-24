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
      'I want to express ideas clearly, listen actively and make technical knowledge easier for others to understand.',
  },
  {
    icon: HeartHandshake,
    title: 'Empathy & Respect',
    description:
      'I aim to understand different perspectives, respect every contribution and help create an inclusive environment.',
  },
  {
    icon: Share2,
    title: 'Knowledge Sharing',
    description:
      'I value helping others learn, sharing discoveries and encouraging continuous growth across a team.',
  },
  {
    icon: Users,
    title: 'Teamwork & Collaboration',
    description:
      'I want to appreciate different strengths, work together with purpose and contribute to shared achievements.',
  },
  {
    icon: ShieldCheck,
    title: 'Ownership & Accountability',
    description:
      'I am developing responsibility for my work, learning from mistakes and setting a constructive example.',
  },
  {
    icon: Workflow,
    title: 'Problem-Solving & Decision-Making',
    description:
      'I aim to approach challenges thoughtfully, consider alternatives and make responsible decisions for the team.',
  },
]

export function Leadership() {
  return (
    <section id="leadership" className="section leadership-section">
      <div className="container">
        <SectionHeading
          eyebrow="03 / Beyond Coding"
          title="My Leadership Vision."
          description="Being a great software engineer is not only about writing good code. It is also about helping people, sharing knowledge and creating a positive environment where everyone can grow."
        />

        <motion.div
          className="leadership-intro"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
        >
          <p>
            My long-term goal is to become a supportive and inspiring technology
            leader who helps teammates build confidence, develop their abilities
            and move forward together.
          </p>
        </motion.div>

        <div className="leadership-grid" aria-label="Leadership values">
          {values.map(({ icon: Icon, title, description }, index) => (
            <motion.article
              className="leadership-card"
              key={title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
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
            “Great leadership is not about being above others. It is about helping
            others move forward together.”
          </p>
        </motion.blockquote>
      </div>
    </section>
  )
}
