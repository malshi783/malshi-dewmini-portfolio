import { FeatureGrid, LearningGrid, ProjectDetailLayout, ProjectHero, ProjectOverview, TechnologyStack } from '../components/projects/ProjectDetailComponents'

export function StudyMatePage() {
  return (
    <ProjectDetailLayout>
      <ProjectHero
        eyebrow="Mobile Learning Concept"
        title="AI A/L StudyMate"
        subtitle="A Learning and Study Organisation Concept for Sri Lankan A/L Students"
        status="In Progress"
        repository="https://github.com/malshi783/ai-al-studymate"
      />
      <ProjectOverview
        introduction="A mobile application concept for helping Sri Lankan Advanced Level students organise academic activities, manage study workloads and plan revision and examination preparation."
        objectives={[
          'Centralise study schedules and academic activities.',
          'Help students organise tuition, assignments and revision.',
          'Support workload planning and deadline awareness.',
          'Explore future AI-assisted personalised study recommendations.',
        ]}
        implementation="The project is being developed with Flutter and Dart. AI assistance and cloud synchronisation are planned areas rather than verified completed functionality."
      />
      <TechnologyStack items={['Flutter', 'Dart']} />
      <FeatureGrid title="Intended Product Direction" features={[
        { title: 'Study Schedule Management', description: 'Plan and organise daily and weekly learning activities.' },
        { title: 'Academic Workload Planning', description: 'Keep assignments, deadlines and study priorities in one structured environment.' },
        { title: 'Tuition Organisation', description: 'Record and manage tuition class schedules and upcoming sessions.' },
        { title: 'Revision Planning', description: 'Organise revision activities by subject and learning priority.' },
        { title: 'Examination Management', description: 'Keep important examination dates and preparation activities organised.' },
        { title: 'AI-Assisted Learning', description: 'Explore personalised study recommendations and workload suggestions as a future capability.' },
      ]} />
      <LearningGrid learnings={[
        { title: 'Cross-Platform Development', description: 'Learning to structure an application for Android and iOS using Flutter.' },
        { title: 'Dart and Application State', description: 'Developing practical understanding of Dart, widgets and mobile application data handling.' },
        { title: 'User-Centred Planning', description: 'Translating Sri Lankan A/L student workloads into understandable application concepts.' },
        { title: 'Mobile Architecture', description: 'Organising features for future data, backend and AI integration.' },
        { title: 'Progressive Development', description: 'Distinguishing implemented work from planned capabilities during active development.' },
      ]} />
    </ProjectDetailLayout>
  )
}
