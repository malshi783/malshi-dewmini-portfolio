import { motion } from 'framer-motion'
import { Bot, ChartNoAxesCombined, Boxes, CodeXml } from 'lucide-react'
import { SectionHeading } from './SectionHeading'

const areas = [
  {
    icon: Bot,
    title: 'AI & Agentic Systems',
    description:
      'I enjoy working with AI-powered coding agents and learning how agentic development workflows can support software development, problem-solving, human-AI collaboration and intelligent productivity.',
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Business Analysis',
    description:
      'Developing knowledge in understanding business needs, clarifying requirements and connecting stakeholder problems with practical solutions.',
  },
  {
    icon: Boxes,
    title: 'Product Management',
    description:
      'Learning to consider user needs, priorities, feasibility and business value when shaping a useful digital product.',
  },
  {
    icon: CodeXml,
    title: 'Software Engineering',
    description:
      'Building a strong foundation in software development, backend systems, databases and reliable, maintainable applications.',
  },
]

export function Exploring() {
  return (
    <section id="exploring" className="section exploring-section">
      <div className="container">
        <SectionHeading
          eyebrow="03 / Areas I'm Exploring"
          title="Where curiosity meets purpose."
          description="These are developing career interests that I am exploring through study, practical projects and continuous learning."
        />
        <div className="exploring-grid">
          {areas.map(({ icon: Icon, title, description }, index) => (
            <motion.article
              className="exploring-card"
              key={title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
            >
              <div className="exploring-card-top">
                <div className="exploring-icon" aria-hidden="true"><Icon size={21} /></div>
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
