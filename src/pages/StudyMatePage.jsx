import {
  FeatureGrid,
  LearningGrid,
  ProjectDetailLayout,
  ProjectHero,
  ProjectOverview,
  ScreenshotGallery,
  TechnologyStack,
} from '../components/projects/ProjectDetailComponents'

// STUDYMATE SCREENSHOTS
const studyMateScreenshots = [
  {
    title: 'AI A/L StudyMate – Application Preview',
    src: '/projets%20screenshots/StudyMate/Screenshot%202026-11-22%20184507.png',
    alt: 'AI A/L StudyMate mobile application interface preview',
    description:
      'A visual overview of the StudyMate mobile application, including its learning assistant, dashboard and study organisation interfaces.',
  },
]

export function StudyMatePage() {
  return (
    <ProjectDetailLayout>

      {/* PROJECT HERO */}

      <ProjectHero
        eyebrow="Mobile Learning Application"
        title="AI A/L StudyMate"
        subtitle="A Learning and Study Organisation Application for Sri Lankan A/L Students"
        status="In Progress"
        repository="https://github.com/malshi783/ai-al-studymate"
      />

      {/* PROJECT OVERVIEW */}

      <ProjectOverview
        introduction="AI A/L StudyMate is a mobile application project designed to help Sri Lankan Advanced Level students organise academic activities, manage study workloads and plan revision and examination preparation."

        objectives={[
          'Centralise study schedules and academic activities.',
          'Help students organise tuition, assignments and revision.',
          'Support workload planning and deadline awareness.',
          'Explore future AI-assisted personalised study recommendations.',
        ]}

        implementation="The application is being developed using Flutter and Dart. AI assistance and cloud synchronisation are planned areas of development rather than verified completed functionality."
      />

      {/* TECHNOLOGY STACK */}

      <TechnologyStack
        items={[
          'Flutter',
          'Dart',
        ]}
      />

      {/* KEY FEATURES */}

      <FeatureGrid
        title="Intended Product Direction"
        features={[
          {
            title: 'Study Schedule Management',
            description:
              'Plan and organise daily and weekly learning activities.',
          },
          {
            title: 'Academic Workload Planning',
            description:
              'Keep assignments, deadlines and study priorities in one structured environment.',
          },
          {
            title: 'Tuition Organisation',
            description:
              'Record and manage tuition class schedules and upcoming sessions.',
          },
          {
            title: 'Revision Planning',
            description:
              'Organise revision activities by subject and learning priority.',
          },
          {
            title: 'Examination Management',
            description:
              'Keep important examination dates and preparation activities organised.',
          },
          {
            title: 'AI-Assisted Learning',
            description:
              'Explore personalised study recommendations and workload suggestions as a future capability.',
          },
        ]}
      />

      {/* APPLICATION SCREENSHOTS */}

      <ScreenshotGallery
        categories={[
          {
            title: 'AI A/L StudyMate – Application Preview',
            images: studyMateScreenshots,
          },
        ]}
      />

      {/* DEVELOPMENT LEARNINGS */}

      <LearningGrid
        learnings={[
          {
            title: 'Cross-Platform Development',
            description:
              'Learning to structure an application for Android and iOS using Flutter.',
          },
          {
            title: 'Dart and Application State',
            description:
              'Developing practical understanding of Dart, widgets and mobile application data handling.',
          },
          {
            title: 'User-Centred Planning',
            description:
              'Translating Sri Lankan A/L student workloads into understandable application concepts.',
          },
          {
            title: 'Mobile Architecture',
            description:
              'Organising features for future data, backend and AI integration.',
          },
          {
            title: 'Progressive Development',
            description:
              'Distinguishing implemented work from planned capabilities during active development.',
          },
        ]}
      />

    </ProjectDetailLayout>
  )
}