import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, Database, Expand, Server, TestTube2, X } from 'lucide-react'

const adminScreens = [
  ['Admin Dashboard', 'System overview, key metrics and operational summaries'],
  ['Employee Management', 'Employee records and workforce administration'],
  ['Attendance Management', 'Attendance records and daily workforce tracking'],
  ['Leave Management', 'Leave requests, approvals and leave records'],
  ['Support Management', 'Employee support requests and administrative responses'],
]

const employeeScreens = [
  ['Employee Dashboard', 'Personal overview of attendance, leave and support activity'],
  ['My Attendance', 'Personal attendance history and daily status'],
  ['My Leave', 'Leave requests and request status tracking'],
  ['My Support', 'Employee support submissions and responses'],
]

const slugify = (value) => value.toLowerCase().replaceAll(' ', '-')

function ScreenshotCard({ title, description, onOpen }) {
  const baseName = slugify(title)
  const candidates = [
    `/assets/projects/employee-management/${baseName}.webp`,
    `/assets/projects/employee-management/${baseName}.png`,
    `/assets/projects/employee-management/${baseName}.jpg`,
  ]
  const [sourceIndex, setSourceIndex] = useState(0)
  const [failed, setFailed] = useState(false)

  const handleError = () => {
    if (sourceIndex + 1 < candidates.length) setSourceIndex(sourceIndex + 1)
    else setFailed(true)
  }

  return (
    <article className="showcase-screenshot-card">
      <button
        type="button"
        className="showcase-screenshot-media"
        onClick={() => !failed && onOpen({ title, description, src: candidates[sourceIndex] })}
        disabled={failed}
        aria-label={failed ? `${title} screenshot unavailable` : `Enlarge ${title} screenshot`}
      >
        {failed ? (
          <div className="showcase-image-placeholder" role="img" aria-label={`${title} screenshot not available`}>
            <Expand size={20} />
            <span>Screenshot unavailable</span>
            <small>{title}</small>
          </div>
        ) : (
          <>
            <img src={candidates[sourceIndex]} alt={`${title} - ${description}`} onError={handleError} />
            <span className="showcase-enlarge"><Expand size={15} /> View</span>
          </>
        )}
      </button>
      <div className="showcase-screenshot-caption">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </article>
  )
}

function Gallery({ category, items }) {
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    if (!lightbox) return undefined
    const onKeyDown = (event) => event.key === 'Escape' && setLightbox(null)
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [lightbox])

  return (
    <>
      <section className="showcase-gallery" aria-labelledby={`${slugify(category)}-title`}>
        <div className="showcase-gallery-heading">
          <span>{category === 'Admin Experience' ? 'Role 01' : 'Role 02'}</span>
          <h3 id={`${slugify(category)}-title`}>{category}</h3>
        </div>
        <div className="showcase-screenshot-grid">
          {items.map(([title, description]) => (
            <ScreenshotCard key={title} title={title} description={description} onOpen={setLightbox} />
          ))}
        </div>
      </section>
      {lightbox && (
        <div className="showcase-lightbox" role="dialog" aria-modal="true" aria-label={`${lightbox.title} enlarged preview`} onMouseDown={(event) => event.target === event.currentTarget && setLightbox(null)}>
          <button type="button" className="showcase-lightbox-close" aria-label="Close enlarged preview" onClick={() => setLightbox(null)}>
            <X size={22} />
          </button>
          <img src={lightbox.src} alt={`${lightbox.title} - ${lightbox.description}`} />
          <div className="showcase-lightbox-caption">
            <strong>{lightbox.title}</strong>
            <span>{lightbox.description}</span>
          </div>
        </div>
      )}
    </>
  )
}

export function EmployeeProjectShowcase({ open, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    document.body.classList.add('showcase-open')
    closeRef.current?.focus()
    const onKeyDown = (event) => event.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.classList.remove('showcase-open')
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="employee-showcase" role="dialog" aria-modal="true" aria-labelledby="employee-showcase-title">
      <header className="showcase-topbar">
        <button ref={closeRef} type="button" className="showcase-back" onClick={onClose}>
          <ArrowLeft size={18} />
          Back to projects
        </button>
        <span>Case Study / 01</span>
      </header>

      <main className="showcase-main">
        <section className="showcase-hero">
          <div>
            <p className="showcase-eyebrow">Full-Stack Application</p>
            <h1 id="employee-showcase-title">Employee Management <span>System</span></h1>
          </div>
          <p className="showcase-summary">
            A centralised platform for managing employee information, attendance, leave workflows and internal support through role-based web experiences.
          </p>
        </section>

        <section className="showcase-overview" aria-labelledby="overview-title">
          <div className="showcase-section-heading">
            <span>01</span>
            <h2 id="overview-title">Project Overview</h2>
          </div>
          <div className="showcase-overview-grid">
            <article>
              <p className="showcase-kicker">Introduction</p>
              <p>The Employee Management System separates administrative operations from employee self-service, using a React interface and Spring Boot REST APIs backed by MySQL.</p>
            </article>
            <article>
              <p className="showcase-kicker">Main Objectives</p>
              <ul>
                <li>Centralise employee administration</li>
                <li>Support role-based workflows</li>
                <li>Improve leave and attendance tracking</li>
                <li>Connect tested REST APIs to a responsive UI</li>
              </ul>
            </article>
            <article>
              <p className="showcase-kicker">Key Modules</p>
              <ul>
                <li>Employee records</li>
                <li>Attendance</li>
                <li>Leave management</li>
                <li>Support management</li>
              </ul>
            </article>
          </div>
        </section>

        <Gallery category="Admin Experience" items={adminScreens} />
        <Gallery category="Employee Experience" items={employeeScreens} />

        <section className="showcase-stack" aria-labelledby="stack-title">
          <div className="showcase-section-heading">
            <span>04</span>
            <h2 id="stack-title">Technology Stack</h2>
          </div>
          <div className="showcase-stack-grid">
            <article><TestTube2 size={22} /><p>Frontend</p><strong>React.js</strong></article>
            <article><Server size={22} /><p>Backend</p><strong>Java + Spring Boot</strong></article>
            <article><Database size={22} /><p>Database</p><strong>MySQL</strong></article>
            <article><TestTube2 size={22} /><p>API Testing</p><strong>Postman + Swagger</strong></article>
          </div>
        </section>

        <section className="showcase-learnings" aria-labelledby="learnings-title">
          <div className="showcase-section-heading">
            <span>05</span>
            <h2 id="learnings-title">Key Learnings</h2>
          </div>
          <div className="showcase-learning-grid">
            {[
              ['01', 'Full-stack development', 'Building connected React and Spring Boot features across clear frontend and backend boundaries.'],
              ['02', 'REST API integration', 'Connecting application workflows to structured endpoints and handling API responses consistently.'],
              ['03', 'Database integration', 'Designing and accessing MySQL-backed data for employee, attendance, leave and support records.'],
              ['04', 'Debugging', 'Tracing issues across interfaces, HTTP requests, server logic and persistence layers.'],
              ['05', 'Business workflows', 'Translating administrative and employee processes into understandable application states.'],
            ].map(([number, title, text]) => (
              <article key={title}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
