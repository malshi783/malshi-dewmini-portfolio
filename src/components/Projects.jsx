import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SectionHeading } from './SectionHeading'

const projects = [
  {
    number: '01',
    title: 'Employee Management System',
    status: 'In Progress',
    description: 'A full-stack application for managing employee information through a web interface, REST APIs and role-based access.',
    stack: ['React.js', 'Java', 'Spring Boot', 'MySQL', 'Postman', 'Swagger'],
    link: 'https://github.com/malshi783/employee-management-system',
    showcase: true,
    image: '/assets/projects/employee-management/admin-dashboard.webp',
    route: '/projects/employee-management-system',
  },
  {
    number: '02',
    title: 'TestPilot-AI',
    status: 'Expected to develop',
    description: 'An agentic AI-powered software quality engineering platform planned for requirements analysis, test case generation, test execution and defect management.',
    stack: ['Node.js', 'Express.js', 'PostgreSQL', 'AI-assisted QA'],
    link: 'https://github.com/malshi783/TestPilot-AI',
    route: '/projects/testpilot-ai',
  },
  {
    number: '03',
    title: 'AI A/L StudyMate',
    status: 'In Progress',
    description: 'A Flutter-based academic application currently under development to help Sri Lankan A/L students organise subjects, plan study tasks and interact with an AI study assistant.',
    stack: ['Flutter', 'Dart', 'Firebase', 'AI Study Assistant'],
    image: '/assets/image.png',
    link: 'https://github.com/malshi783/ai-al-studymate',
    route: '/projects/ai-al-studymate',
  },
  {
    number: '04',
    title: 'Wave Mirissa OIMS',
    status: 'Near Completion',
    description: 'A team-based academic project in its final stage of development, featuring order management, inventory management and marketing capabilities.',
    stack: ['Team Project', 'Order Management', 'Inventory', 'Marketing'],
    link: 'https://github.com/agentdynarq/wm-oims',
    route: '/projects/wave-mirissa-oims',
  },
]

export function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <SectionHeading eyebrow="03 / Projects" title="Selected builds." description="Verified project links are provided where available. Ongoing and status-limited work is labelled transparently." />
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              className={project.screenshots ? 'project-card featured-project' : 'project-card'}
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ delay: index * 0.07 }}
            >
              <div className="project-visual">
                {project.image ? (
                  <img className="project-preview-image" src={project.image} alt={`${project.title} interface preview`} />
                ) : project.showcase ? (
                  <div className="project-preview-placeholder" role="img" aria-label="Professional preview placeholder for Employee Management System">
                    <div className="preview-placeholder-grid" />
                    <span className="project-number">{project.number}</span>
                    <div className="preview-placeholder-panel">
                      <div className="preview-placeholder-brand">
                        <i /><i /><i />
                        <span>PROJECT PREVIEW</span>
                      </div>
                      <strong>Employee Management System</strong>
                      
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="visual-grid" />
                    <span className="project-number">{project.number}</span>
                    <div className="visual-terminal">
                      <i /><i /><i />
                      <code>{project.title.toLowerCase().replaceAll(' ', '_')}</code>
                    </div>
                  </>
                )}
              </div>
              <div className="project-body">
                <div className="project-status-row">
                  <span className={`status status-${project.status.toLowerCase().replaceAll(' ', '-')}`}>
                    {project.status}
                  </span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="tech-list">
                  {project.stack.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <div className="project-actions project-actions-full">
                  <Link className="project-action project-action-primary" to={project.route}>
                    Explore Project
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
