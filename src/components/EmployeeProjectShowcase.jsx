import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  ArrowLeft,
  ArrowUpRight,
  Database,
  Github,
  Server,
  Code2,
  ShieldCheck,
  Users,
  CalendarDays,
  ClipboardList,
  LifeBuoy,
  X,
  Expand,
  CheckCircle2,
} from 'lucide-react'

const githubLink =
  'https://github.com/malshi783/employee-management-system'

// ==========================================
// ADMIN SCREENSHOTS
// ==========================================

const adminScreens = [
  {
    title: 'Admin Dashboard',
    description:
      'System overview, employee metrics and administrative quick actions.',
    src: '/projets%20screenshots/EmployeeManagementSystem/admindash.png',
  },
  {
    title: 'Dashboard Overview',
    description:
      'An additional view of the administrative dashboard.',
    src: '/projets%20screenshots/EmployeeManagementSystem/admindash2.png',
  },
  {
    title: 'Employee Management',
    description:
      'Interface for managing employee records and workforce information.',
    src: '/projets%20screenshots/EmployeeManagementSystem/adminemployemanage.png',
  },
  {
    title: 'Attendance Management',
    description:
      'Administrative interface for monitoring employee attendance.',
    src: '/projets%20screenshots/EmployeeManagementSystem/attenManadmin.png',
  },
  {
    title: 'Leave Management',
    description:
      'Interface for reviewing and managing employee leave requests.',
    src: '/projets%20screenshots/EmployeeManagementSystem/adminleaverequestman.png',
  },
  {
    title: 'Support Management',
    description:
      'Interface for reviewing employee support requests.',
    src: '/projets%20screenshots/EmployeeManagementSystem/adminsuport.png',
  },
]

// ==========================================
// EMPLOYEE SCREENSHOTS
// ==========================================

const employeeScreens = [
  {
    title: 'Employee Dashboard',
    description:
      'Personal employee dashboard and activity overview.',
    src: '/projets%20screenshots/EmployeeManagementSystem/EmployeeDash.png',
  },
  {
    title: 'My Leave',
    description:
      'Employee leave request interface.',
    src: '/projets%20screenshots/EmployeeManagementSystem/employeeLeave.png',
  },
  {
    title: 'My Support',
    description:
      'Employee support request interface.',
    src: '/projets%20screenshots/EmployeeManagementSystem/employeesupport.png',
  },
  {
    title: 'Profile Management',
    description:
      'Employee profile updating interface.',
    src: '/projets%20screenshots/EmployeeManagementSystem/profileupdating.png',
  },
]

// ==========================================
// SCREENSHOT CARD
// ==========================================

function ScreenshotCard({ item, onOpen }) {
  const [failed, setFailed] = useState(false)

  return (
    <article className="showcase-screenshot-card">
      <button
        type="button"
        className="showcase-screenshot-media"
        onClick={() => !failed && onOpen(item)}
        disabled={failed}
        aria-label={`View ${item.title} screenshot`}
      >
        {failed ? (
          <div className="showcase-image-placeholder">
            <Expand size={22} />
            <span>Screenshot unavailable</span>
            <small>{item.title}</small>
          </div>
        ) : (
          <>
            <img
              src={item.src}
              alt={item.title}
              loading="lazy"
              onError={() => setFailed(true)}
            />

            <span className="showcase-enlarge">
              <Expand size={15} />
              View
            </span>
          </>
        )}
      </button>

      <div className="showcase-screenshot-caption">
        <h4>{item.title}</h4>
        <p>{item.description}</p>
      </div>
    </article>
  )
}

// ==========================================
// IMAGE GALLERY
// ==========================================

function Gallery({ category, items }) {
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    if (!lightbox) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setLightbox(null)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [lightbox])

  return (
    <>
      <section className="showcase-gallery">
        <div className="showcase-gallery-heading">
          <span>
            {category === 'Admin Experience'
              ? '01 / ADMIN'
              : '02 / EMPLOYEE'}
          </span>

          <h3>{category}</h3>

          <p>
            Explore the main interfaces and application screens.
            Select an image to view it in a larger format.
          </p>
        </div>

        <div className="showcase-screenshot-grid">
          {items.map((item) => (
            <ScreenshotCard
              key={item.title}
              item={item}
              onOpen={setLightbox}
            />
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}

      {lightbox && (
        <div
          className="showcase-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setLightbox(null)
            }
          }}
        >
          <button
            type="button"
            className="showcase-lightbox-close"
            onClick={() => setLightbox(null)}
            aria-label="Close preview"
          >
            <X size={23} />
          </button>

          <img
            src={lightbox.src}
            alt={lightbox.title}
          />

          <div className="showcase-lightbox-caption">
            <strong>{lightbox.title}</strong>
            <span>{lightbox.description}</span>
          </div>
        </div>
      )}
    </>
  )
}

// ==========================================
// MAIN PROJECT PAGE
// ==========================================

export function EmployeeProjectShowcase({
  open = true,
  onClose,
}) {
  const navigate = useNavigate()

  // ========================================
  // BACK NAVIGATION
  // ========================================

  const handleBack = useCallback(() => {
    if (typeof onClose === 'function') {
      onClose()
    } else {
      navigate('/#projects')
    }
  }, [onClose, navigate])

  // ========================================
  // PAGE KEYBOARD EVENTS
  // ========================================

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        // Do not leave the project page when an image preview is open.
        // The Gallery component handles closing its own lightbox.
        const lightboxIsOpen = document.querySelector(
          '.showcase-lightbox'
        )

        if (!lightboxIsOpen) {
          handleBack()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, handleBack])

  if (!open) return null

  // ========================================
  // KEY FEATURES
  // ========================================

  const features = [
    {
      icon: Users,
      title: 'Employee Management',
      description:
        'Centralised employee information and record management.',
    },
    {
      icon: CalendarDays,
      title: 'Attendance Management',
      description:
        'Attendance record monitoring and management.',
    },
    {
      icon: ClipboardList,
      title: 'Leave Management',
      description:
        'Employee leave requests and administrative workflows.',
    },
    {
      icon: LifeBuoy,
      title: 'Support Management',
      description:
        'Employee support requests and response management.',
    },
    {
      icon: ShieldCheck,
      title: 'Authentication',
      description:
        'User authentication and role-based access control.',
    },
    {
      icon: Database,
      title: 'Database Integration',
      description:
        'Persistent employee and operational information using MySQL.',
    },
  ]

  // ========================================
  // MY CONTRIBUTIONS
  // ========================================

  const contributions = [
    'Developing frontend interfaces using React.js.',
    'Working with backend functionality using Java and Spring Boot.',
    'Developing and integrating REST API functionality.',
    'Integrating application data with MySQL.',
    'Working with authentication and role-based access functionality.',
    'Using Postman and Swagger for API testing and documentation.',
  ]

  // ========================================
  // LEARNINGS
  // ========================================

  const learningItems = [
    {
      number: '01',
      title: 'Full-Stack Development',
      text:
        'Understanding how frontend interfaces communicate with backend services.',
    },
    {
      number: '02',
      title: 'REST API Integration',
      text:
        'Connecting frontend workflows with backend REST endpoints.',
    },
    {
      number: '03',
      title: 'Database Management',
      text:
        'Working with relational data and MySQL integration.',
    },
    {
      number: '04',
      title: 'Authentication',
      text:
        'Understanding authentication flows and role-based application access.',
    },
    {
      number: '05',
      title: 'Problem Solving',
      text:
        'Debugging issues across the frontend, backend, APIs and database.',
    },
  ]

  // ========================================
  // PAGE CONTENT
  // ========================================

  return (
    <div className="employee-showcase">

      {/* TOP NAVIGATION */}

      <header className="showcase-topbar">
        <button
          type="button"
          className="showcase-back"
          onClick={handleBack}
        >
          <ArrowLeft size={18} />
          Back to Projects
        </button>

        <span>PROJECT CASE STUDY / 01</span>
      </header>

      <main className="showcase-main">

        {/* ==================================
            HERO SECTION
        ================================== */}

        <section className="showcase-hero">
          <div className="showcase-hero-content">

            <div className="showcase-badges">
              <span className="showcase-project-type">
                INDIVIDUAL PROJECT
              </span>

              <span className="showcase-project-status">
                COMPLETED
              </span>
            </div>

            <p className="showcase-eyebrow">
              FULL-STACK WEB APPLICATION
            </p>

            <h1 id="employee-showcase-title">
              Employee Management
              <span> System.</span>
            </h1>

            <p className="showcase-summary">
              A full-stack employee management application designed
              to simplify workforce administration through employee
              records, attendance tracking, leave management and
              internal support workflows.
            </p>

            <div className="showcase-hero-actions">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="showcase-github-button"
              >
                <Github size={19} />
                View GitHub Repository
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* PROJECT INFORMATION */}

          <div className="showcase-project-meta">
            <div>
              <span>PROJECT TYPE</span>
              <strong>Individual Project</strong>
            </div>

            <div>
              <span>MY ROLE</span>
              <strong>Full-Stack Developer</strong>
            </div>

            <div>
              <span>FRONTEND</span>
              <strong>React.js</strong>
            </div>

            <div>
              <span>BACKEND</span>
              <strong>Java + Spring Boot</strong>
            </div>
          </div>
        </section>

        {/* ==================================
            PROJECT OVERVIEW
        ================================== */}

        <section className="showcase-overview">
          <div className="showcase-section-heading">
            <span>01 / OVERVIEW</span>

            <h2>About the project.</h2>

            <p>
              Understanding the application, its purpose and
              its main functional areas.
            </p>
          </div>

          <div className="showcase-overview-grid">

            <article>
              <p className="showcase-kicker">
                Introduction
              </p>

              <p>
                The Employee Management System is a full-stack web
                application that provides separate experiences for
                administrators and employees. It brings important
                workforce activities into one centralised platform.
              </p>
            </article>

            <article>
              <p className="showcase-kicker">
                Main Objectives
              </p>

              <ul>
                <li>Centralise employee administration.</li>
                <li>Support role-based application workflows.</li>
                <li>Organise attendance and leave management.</li>
                <li>Provide employee support functionality.</li>
              </ul>
            </article>

            <article>
              <p className="showcase-kicker">
                Application Modules
              </p>

              <ul>
                <li>Employee records</li>
                <li>Attendance management</li>
                <li>Leave management</li>
                <li>Support management</li>
              </ul>
            </article>

          </div>
        </section>

        {/* ==================================
            KEY FEATURES
        ================================== */}

        <section className="showcase-features">
          <div className="showcase-section-heading">
            <span>02 / FUNCTIONALITY</span>

            <h2>Key features.</h2>

            <p>
              Main functional areas of the application.
            </p>
          </div>

          <div className="showcase-feature-grid">
            {features.map((feature) => {
              const Icon = feature.icon

              return (
                <article key={feature.title}>
                  <div className="showcase-feature-icon">
                    <Icon size={23} />
                  </div>

                  <h3>{feature.title}</h3>

                  <p>{feature.description}</p>
                </article>
              )
            })}
          </div>
        </section>

        {/* ==================================
            APPLICATION SCREENSHOTS
        ================================== */}

        <section className="showcase-screenshots-section">
          <div className="showcase-section-heading">
            <span>03 / APPLICATION PREVIEW</span>

            <h2>Inside the application.</h2>

            <p>
              Explore the administrative and employee interfaces.
              Select an image to view it in a larger format.
            </p>
          </div>

          <Gallery
            category="Admin Experience"
            items={adminScreens}
          />

          <Gallery
            category="Employee Experience"
            items={employeeScreens}
          />
        </section>

        {/* ==================================
            MY ROLE AND CONTRIBUTIONS
        ================================== */}

        <section className="showcase-role">
          <div className="showcase-section-heading">
            <span>04 / MY CONTRIBUTION</span>

            <h2>My role & responsibilities.</h2>

            <p>
              My responsibilities and technical involvement
              throughout the project.
            </p>
          </div>

          <div className="showcase-role-layout">

            <article className="showcase-role-card">
              <Code2 size={28} />

              <p className="showcase-kicker">
                MY ROLE
              </p>

              <h3>Full-Stack Developer</h3>

              <p>
                Working across frontend interfaces, backend
                functionality and database integration.
              </p>
            </article>

            <div className="showcase-contributions">
              {contributions.map((item) => (
                <div key={item}>
                  <CheckCircle2 size={19} />
                  <p>{item}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ==================================
            TECHNOLOGY STACK
        ================================== */}

        <section className="showcase-stack">
          <div className="showcase-section-heading">
            <span>05 / TECHNOLOGIES</span>

            <h2>Technology stack.</h2>
          </div>

          <div className="showcase-stack-grid">

            <article>
              <Code2 size={23} />
              <p>Frontend</p>
              <strong>React.js</strong>
            </article>

            <article>
              <Server size={23} />
              <p>Backend</p>
              <strong>Java + Spring Boot</strong>
            </article>

            <article>
              <Database size={23} />
              <p>Database</p>
              <strong>MySQL</strong>
            </article>

            <article>
              <ShieldCheck size={23} />
              <p>API Testing & Documentation</p>
              <strong>Postman + Swagger</strong>
            </article>

          </div>
        </section>

        {/* ==================================
            CHALLENGES AND LEARNINGS
        ================================== */}

        <section className="showcase-learnings">
          <div className="showcase-section-heading">
            <span>06 / DEVELOPMENT JOURNEY</span>

            <h2>Challenges & learnings.</h2>

            <p>
              Technical knowledge and practical understanding
              gained during development.
            </p>
          </div>

          <div className="showcase-learning-grid">
            {learningItems.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ==================================
            FINAL GITHUB SECTION
        ================================== */}

        <section className="showcase-final-cta">
          <div>
            <p className="showcase-kicker">
              EXPLORE THE CODE
            </p>

            <h2>
              Interested in the implementation?
            </h2>

            <p>
              Explore the source code and project structure
              in the GitHub repository.
            </p>
          </div>

          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="showcase-github-button"
          >
            <Github size={19} />
            View GitHub Repository
            <ArrowUpRight size={16} />
          </a>
        </section>

        {/* ==================================
            BOTTOM NAVIGATION
        ================================== */}

        <div className="showcase-bottom-navigation">
          <button
            type="button"
            className="showcase-back"
            onClick={handleBack}
          >
            <ArrowLeft size={18} />
            Back to All Projects
          </button>
        </div>

      </main>
    </div>
  )
}