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
      'A preview of the centralized order, inventory and marketing management application developed as part of an academic team project.',
  },
]

export function WaveMirissaPage() {
  return (
    <ProjectDetailLayout>

      {/* PROJECT HERO */}

      <ProjectHero
        eyebrow="Academic Team Project"
        title="Wave Mirissa – Order and Inventory Management System"
        subtitle="A Database-Driven Business Management Solution for a Sri Lankan Handmade Jewellery Business"
        status="In Progress"
        repository="https://github.com/agentdynarq/wm-oims"
      />

      {/* PROJECT OVERVIEW */}

      <ProjectOverview
        introduction="Wave Mirissa Order and Inventory Management System (WM-OIMS) is a database-driven web application developed as an academic team project for a Sri Lankan handmade jewellery business. The system aims to centralize product, inventory, customer, order, payment, delivery and marketing operations that were previously managed through separate communication channels."

        objectives={[
          'Centralize customer order and product management.',
          'Organize inventory records and monitor product availability.',
          'Support payment and delivery management.',
          'Provide coupon and promotional campaign management.',
          'Manage customer marketing consent and email communication.',
          'Support business reporting and operational insights.',
        ]}

        implementation="The application follows a three-tier architecture using React and Vite for the frontend, Python FastAPI for backend APIs and PostgreSQL for data storage and business rules. My individual responsibility is the Coupons, Campaigns and Email Management module, where I work on frontend interfaces, backend APIs and PostgreSQL database functionality."
      />

      {/* TECHNOLOGY STACK */}

      <TechnologyStack
        items={[
          'React',
          'Vite',
          'Tailwind CSS',
          'Python',
          'FastAPI',
          'PostgreSQL',
          'Git',
          'GitHub',
        ]}
      />

      {/* KEY FEATURES */}

      <FeatureGrid
        title="System Features"
        features={[
          {
            title: 'Product & Catalog Management',
            description:
              'Manage jewellery products, product categories and product information through a centralized application.',
          },
          {
            title: 'Order Management',
            description:
              'Support customer order recording and order-related business workflows.',
          },
          {
            title: 'Inventory Management',
            description:
              'Maintain stock information and support inventory tracking and stock-related operations.',
          },
          {
            title: 'Payment & Delivery',
            description:
              'Support payment verification and delivery information management.',
          },
          {
            title: 'Coupon Management',
            description:
              'Create and validate discount coupons with eligibility rules and redemption restrictions.',
          },
          {
            title: 'Marketing Campaigns',
            description:
              'Organize promotional campaigns and select eligible customer segments for marketing communication.',
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

      {/* MY INDIVIDUAL CONTRIBUTIONS */}

      <FeatureGrid
        title="My Individual Contributions – Marketing Module"
        features={[
          {
            title: 'Coupon Management',
            description:
              'Developed coupon creation and management functionality through the marketing administration interface and backend APIs.',
          },
          {
            title: 'Coupon Validation Function',
            description:
              'Implemented a PostgreSQL function to validate coupon codes, check eligibility conditions and calculate discount amounts.',
          },
          {
            title: 'Redemption Protection',
            description:
              'Applied database constraints to prevent the same customer from redeeming the same coupon more than once.',
          },
          {
            title: 'Campaign Management',
            description:
              'Developed campaign management functionality, including campaign creation and customer segmentation.',
          },
          {
            title: 'Customer Consent Protection',
            description:
              'Implemented a PostgreSQL function and database trigger to ensure promotional emails are only queued for customers who have granted marketing consent.',
          },
          {
            title: 'Campaign Queue Procedure',
            description:
              'Created a PostgreSQL stored procedure to identify eligible customer segments and queue campaign email records.',
          },
          {
            title: 'Email Outbox',
            description:
              'Developed an email outbox interface to view and filter queued, sent and failed email records.',
          },
        ]}
      />

      {/* DEVELOPMENT LEARNINGS */}

      <LearningGrid
        learnings={[
          {
            title: 'Advanced PostgreSQL',
            description:
              'Gained practical experience implementing database functions, stored procedures, triggers and constraints.',
          },
          {
            title: 'Database Design',
            description:
              'Applied relational database concepts, normalization and data integrity rules.',
          },
          {
            title: 'Backend API Development',
            description:
              'Worked with FastAPI endpoints to connect frontend functionality with database operations.',
          },
          {
            title: 'Business Rule Implementation',
            description:
              'Implemented coupon eligibility, redemption restrictions and customer marketing consent rules.',
          },
          {
            title: 'Team Collaboration',
            description:
              'Collaborated with team members using Git and GitHub to develop and integrate application modules.',
          },
        ]}
      />

    </ProjectDetailLayout>
  )
}