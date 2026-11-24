import {
  FeatureGrid,
  LearningGrid,
  ProjectDetailLayout,
  ProjectHero,
  ProjectOverview,
  ScreenshotGallery,
  TechnologyStack,
} from '../components/projects/ProjectDetailComponents'

// METER MIND SCREENSHOTS
const meterMindScreenshots = [
  {
    title: 'MeterMind – Customer Application Preview',
    src: '/projets%20screenshots/MeterMind/metermind-customer-ui.png',
    alt: 'MeterMind smart energy management mobile application preview',
    description:
      'A visual preview of the customer-facing mobile application, including outage information, energy-saving recommendations and customer profile screens.',
  },
]

export function MeterMindPage() {
  return (
    <ProjectDetailLayout>

      {/* PROJECT HERO */}

      <ProjectHero
        eyebrow="AI-Assisted Smart Energy Management"
        title="MeterMind – Smart Energy Management System"
        subtitle="A Smart Electricity Meter Data and Energy Management Application"
        status="In Progress"
      />

      {/* PROJECT OVERVIEW */}

      <ProjectOverview
        introduction="MeterMind is an academic team project designed to help electricity customers understand and manage their electricity consumption. The system also aims to support meter readers and administrators through a connected digital experience."

        objectives={[
          'Help customers understand their electricity consumption.',
          'Provide electricity usage insights and estimated bills.',
          'Allow customers to report possible electricity outages.',
          'Provide energy-saving recommendations.',
          'Support meter-reading and administrative operations.',
        ]}

        implementation="The mobile application is being developed using Flutter and Dart. The current prototype demonstrates the intended customer experience using illustrative data and interactions. Backend integration and fully functional services remain separate development considerations."
      />

      {/* TECHNOLOGY STACK */}

      <TechnologyStack
        items={[
          'Flutter',
          'Dart',
          'Material Design',
          'VS Code',
          'Android Emulator',
          'Git',
          'GitHub',
        ]}
      />

      {/* SYSTEM USER ROLES */}

      <FeatureGrid
        title="Three Main User Roles"
        features={[
          {
            title: 'Customer',
            description:
              'Monitor electricity consumption, explore usage insights, view potential outages, receive energy-saving recommendations and manage account information.',
          },
          {
            title: 'Meter Reader',
            description:
              'View assigned meter-reading tasks, record electricity meter readings and monitor daily reading progress.',
          },
          {
            title: 'Admin / Supervisor',
            description:
              'Monitor operational activities, review meter-reading assignments and investigate potential outage reports.',
          },
        ]}
      />

      {/* MY INDIVIDUAL CONTRIBUTION */}

      <FeatureGrid
        title="My Individual Contribution – Customer UI"
        features={[
          {
            title: 'Outage Page',
            description:
              'Developing a customer interface for viewing potential nearby outage reports and submitting electricity supply problem reports.',
          },
          {
            title: 'Recommendations Page',
            description:
              'Developing an interface that presents energy-saving suggestions, explanations and practical actions for customers.',
          },
          {
            title: 'Profile Page',
            description:
              'Developing the customer profile interface with account information, notifications, settings, help and support options.',
          },
        ]}
      />

      {/* APPLICATION SCREENSHOTS */}

      <ScreenshotGallery
        categories={[
          {
            title: 'MeterMind – Customer UI Preview',
            images: meterMindScreenshots,
          },
        ]}
      />

      {/* DEVELOPMENT LEARNINGS */}

      <LearningGrid
        learnings={[
          {
            title: 'Flutter Development',
            description:
              'Developing mobile application interfaces using Flutter and reusable widgets.',
          },
          {
            title: 'Dart Programming',
            description:
              'Building practical understanding of Dart and Flutter application structure.',
          },
          {
            title: 'User Interface Development',
            description:
              'Creating consistent customer-facing screens with clear navigation and visual hierarchy.',
          },
          {
            title: 'User-Centred Design',
            description:
              'Considering electricity customers’ needs when designing mobile application features.',
          },
          {
            title: 'Team Collaboration',
            description:
              'Working within a shared academic project and maintaining consistency across different user roles.',
          },
          {
            title: 'Mobile Testing',
            description:
              'Running and checking mobile interfaces using the Android Emulator.',
          },
        ]}
      />

    </ProjectDetailLayout>
  )
}