import { MapPin, GraduationCap } from 'lucide-react'
import { SectionHeading } from './SectionHeading'

export function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <SectionHeading
          eyebrow="04 / Education"
          title="Academic foundation."
        />

        <div className="education-list">

          {/* Undergraduate Degree */}
          <article className="education-card education-primary">
            <div className="education-index">01</div>

            <div>
              <p className="education-label">Undergraduate Degree</p>
              <h3>BSc (Hons) Software Engineering</h3>
              <p className="education-school">
                NSBM Green University
              </p>
            </div>

            <div className="education-meta">
              <span>
                <MapPin size={16} />
                Homagama, Sri Lanka
              </span>
              <strong>Currently 3rd Year Undergraduate</strong>
              <strong>Started: 2025</strong>
              <strong>Expected Graduation: 2028</strong>
            </div>
          </article>

          {/* Advanced Level */}
          <article className="education-card education-secondary">
            <div className="education-index">02</div>

            <div className="education-details">
              <p className="education-label">GCE Advanced Level</p>
              <h3>Saranath National College</h3>
              <p className="education-school">
                Kuliyapitiya, Sri Lanka
              </p>
            </div>

            <div className="education-meta">
              <span>
                <GraduationCap size={16} />
                Advanced Level Education
              </span>
            </div>
          </article>

          {/* School Education */}
          <article className="education-card education-primary-school">
            <div className="education-index">03</div>

            <div>
              <p className="education-label">School Education</p>
              <h3>Holy Angels Girls&apos; College</h3>
              <p className="education-school">
                Kuliyapitiya, Sri Lanka
              </p>
            </div>

            <div className="education-meta">
              <span>
                <GraduationCap size={16} />
                School Education
              </span>
            </div>
          </article>

        </div>
      </div>
    </section>
  )
}