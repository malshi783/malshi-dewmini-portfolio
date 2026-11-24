import {
  FeatureGrid,
  LearningGrid,
  ProjectDetailLayout,
  ProjectHero,
  ProjectOverview,
  ScreenshotGallery,
  TechnologyStack,
} from '../components/projects/ProjectDetailComponents'

// WAVE MIRISSA SCREENSHOTS
const waveMirissaScreenshots = [
  {
    title: 'Wave Mirissa – Application Preview',
    src: '/projets%20screenshots/WaveMirissa/Screenshot%202026-11-22%20030931.png',
    alt: 'Wave Mirissa Order and Inventory Management System preview',
    description:
      'A preview of the Wave Mirissa digital management solution developed as part of the academic team project.',
  },
]

export function WaveMirissaPage() {
  return (
    <ProjectDetailLayout>

      {/* PROJECT HERO */}

      <ProjectHero
        eyebrow="Academic Team Project"
        title="Wave Mirissa – Order and Inventory Management System"
        subtitle="A Digital Management Solution for a Handmade Jewellery Business"
        status="Near Completion"
        repository="https://github.com/agentdynarq/wm-oims"
      />

      {/* PROJECT OVERVIEW */}

      <ProjectOverview
        introduction="Wave Mirissa OIMS is an academic team project for a handmade jewellery business, intended to support digital order, inventory and marketing-related business operations."

        objectives={[
          'Support the management of customer orders.',
          'Organise inventory information and product availability.',
          'Explore marketing-related functionality.',
          'Apply a collaborative software engineering approach.',
        ]}

        implementation="The project combines order management, inventory management and marketing functionality to support the business operations of Wave Mirissa. It is being developed collaboratively as an academic team project."
      />

      {/* TECHNOLOGY STACK */}

      <TechnologyStack
        items={[
          'Team Project',
          'Order Management',
          'Inventory Management',
          'Marketing',
        ]}
      />

      {/* KEY FEATURES */}

      <FeatureGrid
        title="Project Features"
        features={[
          {
            title: 'Order Management',
            description:
              'Support digital workflows associated with customer orders and business operations.',
          },
          {
            title: 'Inventory Management',
            description:
              'Organise product and inventory-related information for the jewellery business.',
          },
          {
            title: 'Marketing Module',
            description:
              'Include marketing-related functionality within the wider application.',
          },
          {
            title: 'Team Collaboration',
            description:
              'Develop the application collaboratively as part of an academic software engineering project.',
          },
        ]}
      />

      {/* APPLICATION SCREENSHOTS */}

      <ScreenshotGallery
        categories={[
          {
            title: 'Wave Mirissa Application Preview',
            images: waveMirissaScreenshots,
          },
        ]}
      />

      {/* MY CONTRIBUTIONS */}

      <FeatureGrid
        title="My Individual Contributions"
        features={[
          {
            title: 'Database Design',
            description:
              'Contributed to designing the database structure for the application.',
          },
          {
            title: 'Marketing Module',
            description:
              'Worked on the marketing-related functionality of the system.',
          },
          {
            title: 'Coupons and Campaigns',
            description:
              'Contributed to coupon and campaign management functionality.',
          },
          {
            title: 'Email Outbox',
            description:
              'Worked on the email outbox functionality within the project.',
          },
        ]}
      />

      {/* DEVELOPMENT LEARNINGS */}

      <LearningGrid
        learnings={[
          {
            title: 'Team Software Development',
            description:
              'Collaborating within a shared academic application and repository.',
          },
          {
            title: 'Business Process Analysis',
            description:
              'Understanding how order, inventory and marketing activities connect in a small business.',
          },
          {
            title: 'Database Design',
            description:
              'Developing practical understanding of database structure and application data relationships.',
          },
          {
            title: 'Marketing Functionality',
            description:
              'Understanding how marketing features can support business operations.',
          },
          {
            title: 'Collaborative Delivery',
            description:
              'Planning and coordinating development activities across team-developed modules.',
          },
        ]}
      />

    </ProjectDetailLayout>
  )
}