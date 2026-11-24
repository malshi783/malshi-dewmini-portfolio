import { motion } from 'framer-motion'
import { GraduationCap, Brain, Users } from 'lucide-react'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="01 / About"
          title="Engineering with purpose."
        />

        <div className="about-grid">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
          >
            <img
              src="/assets/Friendly Tech Study Session.png"
              alt="A student exploring technology and learning"
            />
          </motion.div>

          <motion.div
            className="about-copy"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
          >
            <p>
              I am a third-year Software Engineering undergraduate at NSBM
              Green University, Sri Lanka, passionate about technology,
              continuous learning, and building meaningful digital solutions.
            </p>

            <p>
              Through individual and team-based academic projects, I have
              gained practical experience with technologies such as Java,
              Spring Boot, React.js, Node.js, PostgreSQL, and Flutter. I enjoy
              exploring how different technologies work together to solve
              problems and turn ideas into useful applications.
            </p>

            <p>
              I am particularly interested in Generative AI and Agentic AI,
              and how these technologies can transform software development,
              intelligent automation, and real-world problem-solving. I enjoy
              exploring emerging technologies and discovering ways to apply
              them through practical projects.
            </p>

            <p>
              Beyond development, I am interested in understanding user needs,
              analysing business processes, and creating solutions that
              deliver real value. I believe becoming a good software
              professional means more than writing code — it also requires
              critical thinking, effective communication, collaboration, and
              a willingness to keep learning.
            </p>

            <p>
              I am currently looking for opportunities to strengthen my
              technical skills, gain industry experience, and grow as a
              technology professional.
            </p>

            <div className="about-cards">
              <article>
                <GraduationCap size={22} />
                <div>
                  <span>Education</span>
                  <strong>BSc (Hons) Software Engineering</strong>
                </div>
              </article>

              <article>
                <Brain size={22} />
                <div>
                  <span>Areas of Interest</span>
                  <strong>Generative AI, Agentic AI &amp; Software Development</strong>
                </div>
              </article>

              <article>
                <Users size={22} />
                <div>
                  <span>Working Style</span>
                  <strong>Analytical, Collaborative &amp; Adaptable</strong>
                </div>
              </article>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}