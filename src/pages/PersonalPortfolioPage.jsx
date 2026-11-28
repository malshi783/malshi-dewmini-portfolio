import {
  FeatureGrid,
  LearningGrid,
  ProjectDetailLayout,
  ProjectHero,
  ProjectOverview,
  ScreenshotGallery,
  TechnologyStack,
} from '../components/projects/ProjectDetailComponents'

// PORTFOLIO SCREENSHOTS
const portfolioScreenshots = [
  {
    title: 'Portfolio – Home Page',
    src: '/projets%20screenshots/Portfolio/portfolio-preview.png',
    alt: 'Personal portfolio home page',
    description:
      'The landing page introduces me as a Software Engineering undergraduate and provides an overview of my professional profile.',
  },
  {
    title: 'Portfolio – About Me',
    src: '/projets%20screenshots/Portfolio/about.png',
    alt: 'Personal portfolio about section',
    description:
      'The about section presents my background, interests and journey in software engineering.',
  },
  {
    title: 'Portfolio – Technical Skills',
    src: '/projets%20screenshots/Portfolio/skills.png',
    alt: 'Personal portfolio technical skills section',
    description:
      'A visual overview of my technical skills, programming languages, frameworks and development tools.',
  },
  {
    title: 'Portfolio – Projects',
    src: '/projets%20screenshots/Portfolio/projects.png',
    alt: 'Personal portfolio projects section',
    description:
      'Showcases my individual and team academic projects with their technologies and project details.',
  },
  {
    title: 'Portfolio – Contact',
    src: '/projets%20screenshots/Portfolio/contact.png',
    alt: 'Personal portfolio contact section',
    description:
      'Provides contact information and professional links for networking and opportunities.',
  },
]

export function PersonalPortfolioPage() {
  return (
    <ProjectDetailLayout>

      <ProjectHero
        eyebrow="Personal Web Development Project"
        title="Personal Portfolio Website"
        subtitle="A Responsive Portfolio Showcasing My Software Engineering Journey"
        status="Completed"
      />

      <ProjectOverview
        introduction="I developed my personal portfolio website to present my technical skills, educational background, certifications, projects and development journey in one place."

        objectives={[
          'Build a professional online presence.',
          'Showcase individual and collaborative projects.',
          'Present technical skills and technologies.',
          'Highlight academic achievements and certifications.',
          'Provide an easy way for recruiters and developers to contact me.',
        ]}

        implementation="The website was developed using React.js and Vite, with responsive layouts and interactive animations. React Router is used for navigation between project detail pages."
      />

      <TechnologyStack
        items={[
          'React.js',
          'Vite',
          'JavaScript',
          'CSS',
          'Framer Motion',
          'React Router',
          'Git',
          'GitHub',
          'Vercel',
        ]}
      />

      <FeatureGrid
        title="Key Features"
        features={[
          {
            title: 'Professional Introduction',
            description:
              'Introduces my background, interests and career goals as a Software Engineering undergraduate.',
          },
          {
            title: 'Technical Skills',
            description:
              'Displays programming languages, frameworks, databases and development tools.',
          },
          {
            title: 'Project Showcase',
            description:
              'Presents individual and team academic projects with descriptions, technologies and detailed project pages.',
          },
          {
            title: 'Education & Certifications',
            description:
              'Highlights my academic background and professional learning achievements.',
          },
          {
            title: 'Responsive Design',
            description:
              'Provides an accessible browsing experience across desktop, tablet and mobile devices.',
          },
          {
            title: 'Contact & Social Links',
            description:
              'Allows visitors to explore my professional profiles and contact me.',
          },
        ]}
      />

      <ScreenshotGallery
        categories={[
          {
            title: 'Personal Portfolio Screenshots',
            images: portfolioScreenshots,
          },
        ]}
      />

      <LearningGrid
        learnings={[
          {
            title: 'React Development',
            description:
              'Improved my understanding of reusable components, props and component-based development.',
          },
          {
            title: 'Responsive Web Design',
            description:
              'Practised designing layouts for different screen sizes.',
          },
          {
            title: 'Frontend Development',
            description:
              'Improved my skills in JavaScript, CSS and modern frontend development.',
          },
          {
            title: 'Animation & Interaction',
            description:
              'Used Framer Motion to create interactive visual experiences.',
          },
          {
            title: 'Project Deployment',
            description:
              'Gained experience building and deploying a React application.',
          },
          {
            title: 'Personal Branding',
            description:
              'Learned how to present technical skills and projects professionally.',
          },
        ]}
      />

    </ProjectDetailLayout>
  )
}