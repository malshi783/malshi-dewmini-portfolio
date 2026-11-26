import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SectionHeading } from './SectionHeading'

const projects = [
  {
    number: '01',
    title: 'Employee Management System',
    projectType: 'Individual Project',
    status: 'Completed',
    description:
      'A full-stack application for managing employee information through a web interface, REST APIs and role-based access.',
    stack: [
      'React.js',
      'Java',
      'Spring Boot',
      'MySQL',
      'Postman',
      'Swagger',
    ],
    image:
      '/projets%20screenshots/EmployeeManagementSystem/admindash.png',
    link: 'https://github.com/malshi783/employee-management-system',
    route: '/projects/employee-management-system',
  },

  {
    number: '02',
    title: 'TestPilot-AI',
    projectType: 'Individual Project',
    status: 'In Progress',
    description:
      'A software quality engineering platform MVP under development, focusing on test management and AI-assisted quality engineering capabilities.',
    stack: [
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'React.js',
      'AI-assisted QA',
    ],
    image:
      '/projets%20screenshots/TestPilotAI/Screenshot%202026-11-24%20164746.png',
    link: 'https://github.com/malshi783/TestPilot-AI',
    route: '/projects/testpilot-ai',
  },

  {
    number: '03',
    title: 'AI A/L StudyMate',
    projectType: 'Individual Project',
    status: 'In Progress',
    description:
      'A Flutter-based academic application under development to help Sri Lankan A/L students organise subjects, plan study tasks and interact with an AI study assistant.',
    stack: [
      'Flutter',
      'Dart',
      'Firebase',
      'AI Study Assistant',
    ],
    image:
      '/projets%20screenshots/StudyMate/Screenshot%202026-11-22%20184507.png',
    link: 'https://github.com/malshi783/ai-al-studymate',
    route: '/projects/ai-al-studymate',
  },

  
    {
  number: '04',
  title: 'Wave Mirissa OIMS',
  projectType: 'Team Academic Project',
  status: 'In Progress',
  description:
    'A database-driven business management application for a Sri Lankan handmade jewellery business. My contribution focuses on coupon management, marketing campaigns, customer consent validation and PostgreSQL database operations.',
  stack: [
    'React',
    'FastAPI',
    'PostgreSQL',
    'Stored Procedures',
    'Database Triggers',
  ],
  image:
    '/projets%20screenshots/WaveMirissa/Screenshot%202026-11-22%20030931.png',
  link: 'https://github.com/agentdynarq/wm-oims',
  route: '/projects/wave-mirissa-oims',
},

  {
    number: '05',
    title: 'MeterMind – Smart Energy Management System',
    projectType: 'Team Academic Project',
    status: 'In Progress',
    description:
      'An AI-assisted smart energy management application designed to help electricity customers understand their consumption, explore energy-saving recommendations and report potential outages.',
    stack: [
      'Flutter',
      'Dart',
      'Material Design',
      'Android Development',
    ],
    image:
      '/projets%20screenshots/MeterMind/metermind-customer-ui.png',
    link: '',
    route: '/projects/metermind',
  },
]

export function Projects() {
  return (
    <section id="projects" className="section projects-section">

      <div className="container">

        <SectionHeading
          eyebrow="03 / Projects"
          title="Selected builds."
          description="Explore my individual projects and collaborative academic work."
        />

        <div className="projects-grid">

          {projects.map((project, index) => (

            <motion.article
              className="project-card featured-project"
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ delay: index * 0.07 }}
            >

              {/* PROJECT IMAGE */}

              <div className="project-visual">

                {project.image ? (

                  <img
                    className="project-preview-image"
                    src={project.image}
                    alt={`${project.title} interface preview`}
                    loading="lazy"
                  />

                ) : (

                  <div className="project-preview-placeholder">

                    <span className="project-number">
                      {project.number}
                    </span>

                    <div className="visual-terminal">
                      <i />
                      <i />
                      <i />

                      <code>
                        {project.title.toLowerCase().replaceAll(' ', '_')}
                      </code>

                    </div>

                  </div>

                )}

              </div>

              {/* PROJECT DETAILS */}

              <div className="project-body">

                {/* PROJECT STATUS */}

                <div className="project-status-row">

                  <span
                    className={`status status-${project.status
                      .toLowerCase()
                      .replaceAll(' ', '-')}`}
                  >
                    {project.status}
                  </span>

                  <span className="project-type">
                    {project.projectType}
                  </span>

                </div>

                {/* TITLE */}

                <h3>{project.title}</h3>

                {/* DESCRIPTION */}

                <p>{project.description}</p>

                {/* TECHNOLOGIES */}

                <ul className="tech-list">

                  {project.stack.map((item) => (

                    <li key={item}>
                      {item}
                    </li>

                  ))}

                </ul>

                {/* PROJECT LINK */}

                <div className="project-actions project-actions-full">

                  <Link
                    className="project-action project-action-primary"
                    to={project.route}
                  >
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