import { motion } from 'framer-motion'

import {
  Bot,
  Code2,
  Database,
  GitBranch,
  Laptop,
  Send,
  ShieldCheck,
  TestTube2,
  Workflow,
} from 'lucide-react'

import { SectionHeading } from './SectionHeading'

const groups = [
  {
    icon: Code2,
    title: 'Programming Languages',
    items: [
      'Java',
      'JavaScript',
      'Dart',
      'SQL',
      'HTML',
      'CSS',
    ],
  },

  {
    icon: Laptop,
    title: 'Frameworks & Runtime',
    items: [
      'Spring Boot',
      'React.js',
      'Node.js',
      'Express.js',
      'Flutter',
    ],
  },

  {
    icon: Send,
    title: 'API Development & Testing',
    items: [
      'REST API Development',
      'API Integration',
      'Postman',
      'Swagger / OpenAPI',
    ],
  },

  {
    icon: Database,
    title: 'Database Technologies',
    items: [
      'MySQL',
      'PostgreSQL',
      'Relational Database Concepts',
      'Database Design',
    ],
  },

  {
    icon: Laptop,
    title: 'Development Tools',
    items: [
      'Visual Studio Code',
      'IntelliJ IDEA',
      'Android Studio',
      'MySQL Workbench',
    ],
  },

  {
    icon: GitBranch,
    title: 'Version Control & Collaboration',
    items: [
      'Git',
      'GitHub',
      'Branch Management',
      'Collaborative Development',
    ],
  },

  {
    icon: ShieldCheck,
    title: 'Software Engineering',
    items: [
      'Object-Oriented Programming',
      'CRUD Operations',
      'JWT Authentication',
      'Role-Based Access Control',
      'Frontend–Backend Integration',
    ],
  },

  {
    icon: TestTube2,
    title: 'Software Testing & Quality',
    items: [
      'API Testing',
      'Software Testing Fundamentals',
      'Debugging',
      'Application Validation',
    ],
  },

  {
    icon: Workflow,
    title: 'Generative AI & Agentic AI',
    status: 'Currently Exploring',
    items: [
      'Generative AI Concepts',
      'Agentic AI Concepts',
      'AI-Assisted Development',
      'AI-Assisted Quality Engineering',
      'Intelligent Workflow Automation',
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="section skills-section">

      <div className="container">

        <SectionHeading
          eyebrow="02 / Technical Skills"
          title="Technologies & tools."
          description="Technologies, development tools and software engineering practices I have explored through academic projects and practical learning, alongside emerging areas I am currently exploring."
        />

        <div className="skills-grid">

          {groups.map(({ icon: Icon, title, status, items }, index) => (

            <motion.article
              className="skill-card"
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.45,
                delay: index * 0.06,
              }}
            >

              <div className="skill-card-top">

                <Icon size={21} />

                <span>
                  {String(index + 1).padStart(2, '0')}
                </span>

              </div>

              <h3>{title}</h3>

              {status && (
                <p className="skill-status">
                  {status}
                </p>
              )}

              <ul>
                {items.map((item) => (
                  <li key={item}>
                    {item}
                  </li>
                ))}
              </ul>

            </motion.article>

          ))}

        </div>

      </div>

    </section>
  )
}