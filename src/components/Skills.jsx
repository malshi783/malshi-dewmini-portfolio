import { motion } from 'framer-motion'
import { Bot, Code2, Database, GitBranch, Laptop, Send, Workflow } from 'lucide-react'
import { SectionHeading } from './SectionHeading'

const groups = [
  { icon: Code2, title: 'Programming Languages & Frameworks', items: ['Java', 'Spring Boot', 'React.js', 'JavaScript', 'Python', 'Dart', 'Flutter', 'HTML', 'CSS'] },
  { icon: Laptop, title: 'Development Environments', items: ['Visual Studio Code', 'IntelliJ IDEA', 'Android Studio'] },
  { icon: Send, title: 'API Development & Testing', items: ['Postman'] },
  { icon: GitBranch, title: 'Version Control', items: ['Git', 'GitHub'] },
  { icon: Database, title: 'Database Tools', items: ['MySQL', 'MySQL Workbench', 'PostgreSQL'] },
  { icon: Bot, title: 'AI & Agentic Development', status: 'Exploring', items: ['AI-assisted coding', 'Agentic workflows', 'Human-AI collaboration', 'Workflow automation'] },
  { icon: Workflow, title: 'Software Practices', items: ['Software QA', 'Docker'] },
]

export function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <SectionHeading eyebrow="02 / Technical Skills" title="Tools I work with." description="A practical stack focused on full-stack development, backend systems and software quality." />
        <div className="skills-grid">
          {groups.map(({ icon: Icon, title, status, items }, index) => (
            <motion.article
              className="skill-card"
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="skill-card-top"><Icon size={21} /><span>0{index + 1}</span></div>
              <h3>{title}</h3>
              {status && <p className="skill-status">{status}</p>}
              <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
