import { motion } from 'framer-motion'
import {
  Sparkles,
  ChartNoAxesCombined,
  Boxes,
  CodeXml,
} from 'lucide-react'
import { SectionHeading } from './SectionHeading'

const areas = [
  {
    icon: Sparkles,
    title: 'Generative AI & Agentic AI',
    description:
      'Exploring how Generative AI can support content creation, coding and knowledge work, and how Agentic AI systems can perform multi-step tasks, automate workflows and support intelligent problem-solving.',
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Business Analysis',
    description:
      'Developing an understanding of business needs, stakeholder requirements and business processes to connect real-world problems with practical technology solutions.',
  },
  {
    icon: Boxes,
    title: 'Product Management',
    description:
      'Exploring how to understand user needs, define product goals, prioritise features and balance technical feasibility with business value.',
  },
  {
    icon: CodeXml,
    title: 'Software Engineering',
    description:
      'Strengthening my foundation in software development, backend engineering, database design and building reliable, maintainable applications.',
  },
]

export function Exploring() {
  return (
    <section id="exploring" className="section exploring-section">
      <div className="container">
        <SectionHeading
          eyebrow="03 / Areas I'm Exploring"
          title="Where curiosity meets purpose."
          description="Beyond my academic studies, I am continuously exploring these areas through learning, practical projects and hands-on experimentation."
        />

        <div className="exploring-grid">
          {areas.map(({ icon: Icon, title, description }, index) => (
            <motion.article
              className="exploring-card"
              key={title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.45,
                delay: index * 0.07,
              }}
            >
              <div className="exploring-card-top">
                <div className="exploring-icon" aria-hidden="true">
                  <Icon size={21} />
                </div>

                <span>0{index + 1}</span>
              </div>

              <h3>{title}</h3>

              <p>{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}