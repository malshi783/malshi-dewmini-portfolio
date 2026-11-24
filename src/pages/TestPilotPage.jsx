import {
  FeatureGrid,
  LearningGrid,
  ProjectDetailLayout,
  ProjectHero,
  ProjectOverview,
  ScreenshotGallery,
  TechnologyStack,
} from '../components/projects/ProjectDetailComponents'

// TestPilot-AI screenshots
const testPilotScreenshots = [
  {
    title: 'Interface Preview 01',
    src: '/projets%20screenshots/TestPilotAI/Screenshot%202026-11-24%20164746.png',
    alt: 'TestPilot-AI application interface preview 1',
    description: 'Development-stage screenshot of the TestPilot-AI application.',
  },
  {
    title: 'Interface Preview 02',
    src: '/projets%20screenshots/TestPilotAI/Screenshot%202026-11-24%20164804.png',
    alt: 'TestPilot-AI application interface preview 2',
    description: 'Development-stage screenshot of the TestPilot-AI application.',
  },
  {
    title: 'Interface Preview 03',
    src: '/projets%20screenshots/TestPilotAI/Screenshot%202026-11-24%20164822.png',
    alt: 'TestPilot-AI application interface preview 3',
    description: 'Development-stage screenshot of the TestPilot-AI application.',
  },
  {
    title: 'Interface Preview 04',
    src: '/projets%20screenshots/TestPilotAI/Screenshot%202026-11-24%20164834.png',
    alt: 'TestPilot-AI application interface preview 4',
    description: 'Development-stage screenshot of the TestPilot-AI application.',
  },
  {
    title: 'Interface Preview 05',
    src: '/projets%20screenshots/TestPilotAI/Screenshot%202026-11-24%20164851.png',
    alt: 'TestPilot-AI application interface preview 5',
    description: 'Development-stage screenshot of the TestPilot-AI application.',
  },
  {
    title: 'Interface Preview 06',
    src: '/projets%20screenshots/TestPilotAI/Screenshot%202026-11-24%20164912.png',
    alt: 'TestPilot-AI application interface preview 6',
    description: 'Development-stage screenshot of the TestPilot-AI application.',
  },
]

export function TestPilotPage() {
  return (
    <ProjectDetailLayout>

      {/* PROJECT HERO */}

      <ProjectHero
        eyebrow="Software Quality Engineering Platform"
        title="TestPilot-AI"
        subtitle="Exploring AI-assisted workflows for software quality engineering."
        status="In Progress"
        repository="https://github.com/malshi783/TestPilot-AI"
      />

      {/* PROJECT OVERVIEW */}

      <ProjectOverview
        introduction="TestPilot-AI is an individual software development project exploring how requirements management, testing activities and AI-assisted analysis can support software quality engineering teams."

        objectives={[
          'Explore requirements and test-case traceability.',
          'Organise test execution and defect tracking.',
          'Design a structured quality engineering environment.',
          'Investigate responsible AI-assisted software testing workflows.',
        ]}

        implementation="The current project foundation includes a Node.js and Express backend, PostgreSQL data modelling and initial backend setup. Further frontend development, testing workflows and AI integration are planned development areas."
      />

      {/* TECHNOLOGY STACK */}

      <TechnologyStack
        items={[
          'Node.js',
          'Express.js',
          'PostgreSQL',
          'JavaScript',
          'REST APIs',
          'Git',
          'GitHub',
        ]}
      />

      {/* KEY FEATURES */}

      <FeatureGrid
        title="Current and Planned Direction"
        features={[
          {
            title: 'Requirements Analysis',
            description:
              'Planned: organise and manage software requirements throughout the development lifecycle.',
          },
          {
            title: 'Test Case Generation',
            description:
              'Planned: create test cases and connect them with relevant requirements.',
          },
          {
            title: 'Test Execution',
            description:
              'Planned: organise test runs and maintain execution results.',
          },
          {
            title: 'Defect Management',
            description:
              'Planned: record, track and manage defects identified during testing.',
          },
          {
            title: 'Backend Foundation',
            description:
              'Current: initial Node.js, Express.js and PostgreSQL backend setup.',
          },
          {
            title: 'AI-Assisted Analysis',
            description:
              'Planned: investigate AI-supported quality insights; a complete AI agent is not yet implemented.',
          },
        ]}
      />

      {/* APPLICATION SCREENSHOTS */}

      <ScreenshotGallery
        categories={[
          {
            title: 'TestPilot-AI Application Preview',
            images: testPilotScreenshots,
          },
        ]}
      />

      {/* MY ROLE AND LEARNINGS */}

      <LearningGrid
        learnings={[
          {
            title: 'Requirements Engineering',
            description:
              'Understanding how software requirements can be organised and connected with testing activities.',
          },
          {
            title: 'Backend Development',
            description:
              'Working with Node.js, Express.js, routes, middleware and backend application structure.',
          },
          {
            title: 'Database Modelling',
            description:
              'Establishing a PostgreSQL foundation for application data.',
          },
          {
            title: 'Quality Engineering',
            description:
              'Exploring requirements coverage, test execution and defect management workflows.',
          },
          {
            title: 'API Development',
            description:
              'Building an understanding of backend endpoints and structured API communication.',
          },
          {
            title: 'AI Concept Evaluation',
            description:
              'Investigating where intelligent assistance could support software testing and engineering decisions.',
          },
        ]}
      />

    </ProjectDetailLayout>
  )
}