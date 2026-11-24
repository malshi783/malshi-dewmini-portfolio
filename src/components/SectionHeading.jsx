import { motion } from 'framer-motion'

export function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.header
      className="section-heading"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.55 }}
    >
      {eyebrow && (
        <p className="section-eyebrow">
          <span aria-hidden="true">//</span> {eyebrow}
        </p>
      )}

      <h2>{title}</h2>

      {description && (
        <p className="section-description">
          {description}
        </p>
      )}
    </motion.header>
  )
}