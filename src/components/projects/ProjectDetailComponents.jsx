import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Github, Expand, X } from 'lucide-react'
import { Link } from 'react-router-dom'

export function ProjectNavigation() {
  return (
    <header className="project-detail-nav">
      <Link to="/#projects" className="project-back-button">
        <ArrowLeft size={17} />
        Back to Projects
      </Link>
      <span>Project Case Study</span>
    </header>
  )
}

export function ProjectHero({ eyebrow, title, subtitle, status, repository }) {
  return (
    <motion.section
      className="project-detail-hero"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .45 }}
    >
      <div>
        <p className="showcase-eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="project-detail-subtitle">{subtitle}</p>
      </div>
      <div className="project-detail-actions">
        {status && <span className="status status-in-progress">{status}</span>}
        {repository && (
          <a className="button button-secondary" href={repository} target="_blank" rel="noreferrer">
            <Github size={16} />
            GitHub Repository
          </a>
        )}
      </div>
    </motion.section>
  )
}

export function ProjectDetailLayout({ children }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="project-detail-page">
      <ProjectNavigation />
      <main className="project-detail-main">{children}</main>
    </div>
  )
}

export function ProjectOverview({ introduction, objectives = [], implementation }) {
  return (
    <section className="project-detail-section">
      <SectionHeadingSmall number="01" title="Project Overview" />
      <div className="project-overview-grid">
        <article className="project-overview-intro">
          <p className="showcase-kicker">Introduction</p>
          <p>{introduction}</p>
        </article>
        {objectives.length > 0 && (
          <article>
            <p className="showcase-kicker">Objectives</p>
            <ul>{objectives.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        )}
        {implementation && (
          <article>
            <p className="showcase-kicker">Technical Direction</p>
            <p>{implementation}</p>
          </article>
        )}
      </div>
    </section>
  )
}

export function SectionHeadingSmall({ number, title }) {
  return (
    <div className="showcase-section-heading">
      <span>{number}</span>
      <h2>{title}</h2>
    </div>
  )
}

export function TechnologyStack({ items }) {
  return (
    <section className="project-detail-section">
      <SectionHeadingSmall number="Technology" title="Technology Stack" />
      <div className="technology-stack">
        {items.map((item) => <span key={item}>{item}</span>)}
      </div>
    </section>
  )
}

export function FeatureGrid({ title = 'Key Features', features, number = '02' }) {
  return (
    <section className="project-detail-section">
      <SectionHeadingSmall number={number} title={title} />
      <div className="feature-grid">
        {features.map((feature, index) => (
          <article key={feature.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export function ImageLightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return undefined
    const onKeyDown = (event) => event.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [image, onClose])

  if (!image) return null
  return (
    <div className="showcase-lightbox" role="dialog" aria-modal="true" aria-label={`${image.title} enlarged preview`} onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <button type="button" className="showcase-lightbox-close" aria-label="Close enlarged preview" onClick={onClose}>
        <X size={22} />
      </button>
      <img src={image.src} alt={image.alt} />
      <div className="showcase-lightbox-caption">
        <strong>{image.title}</strong>
        <span>{image.description}</span>
      </div>
    </div>
  )
}

export function ScreenshotGallery({ categories }) {
  const [lightbox, setLightbox] = useState(null)
  return (
    <section className="project-detail-section">
      <SectionHeadingSmall number="04" title="Screenshots" />
      {categories.map((category) => (
        category.images.length > 0 && (
          <div className="project-screenshot-category" key={category.title}>
            <h3>{category.title}</h3>
            <div className="showcase-screenshot-grid">
              {category.images.map((image) => (
                <article className="showcase-screenshot-card" key={image.title}>
                  <button type="button" className="showcase-screenshot-media" onClick={() => setLightbox(image)} aria-label={`Enlarge ${image.title} screenshot`}>
                    <img src={image.src} alt={image.alt} />
                    <span className="showcase-enlarge"><Expand size={15} /> View</span>
                  </button>
                  <div className="showcase-screenshot-caption">
                    <h4>{image.title}</h4>
                    <p>{image.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )
      ))}
      <ImageLightbox image={lightbox} onClose={() => setLightbox(null)} />
    </section>
  )
}

export function LearningGrid({ learnings }) {
  return (
    <section className="project-detail-section">
      <SectionHeadingSmall number="Learning" title="Key Learnings" />
      <div className="feature-grid learning-feature-grid">
        {learnings.map((item, index) => (
          <article key={item.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
