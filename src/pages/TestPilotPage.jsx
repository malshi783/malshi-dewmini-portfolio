import { FeatureGrid, LearningGrid, ProjectDetailLayout, ProjectHero, ProjectOverview, TechnologyStack } from '../components/projects/ProjectDetailComponents'

export function TestPilotPage() {
  return (
    <ProjectDetailLayout>
      <ProjectHero
        eyebrow="Software Quality Engineering Concept"
        title="TestPilot-AI"
        subtitle="Exploring Agentic AI for Software Quality Engineering"
        status="Under Development"
        repository="https://github.com/malshi783/TestPilot-AI"
      />
      <ProjectOverview
        introduction="TestPilot-AI is an ongoing software quality engineering platform exploring how centralised requirements, testing activities and AI-assisted analysis can support software teams."
        objectives={[
          'Explore requirements and test-case traceability.',
          'Organise test execution and defect tracking.',
          'Design a role-based quality engineering environment.',
          'Investigate responsible AI-assisted software testing workflows.',
        ]}
        implementation="The repository currently establishes backend architecture, PostgreSQL data modelling and system requirements. Frontend development and AI integration remain planned areas."
      />
      <TechnologyStack items={['Node.js', 'Express.js', 'PostgreSQL', 'AI-assisted QA']} />
      <FeatureGrid title="Current and Planned Direction" features={[
        { title: 'Requirements Analysis', description: 'Planned: organise and manage software requirements throughout the development lifecycle.' },
        { title: 'Test Case Generation', description: 'Planned: create test cases and connect them with relevant requirements.' },
        { title: 'Test Execution', description: 'Planned: organise test runs and maintain execution results.' },
        { title: 'Defect Management', description: 'Planned: record, track and manage defects identified during testing.' },
        { title: 'Database Foundation', description: 'Current: an initial PostgreSQL schema and backend setup provide the project foundation.' },
        { title: 'AI-Assisted Analysis', description: 'Planned: investigate AI-supported quality insights; no full AI agent is claimed as implemented.' },
      ]} />
      <LearningGrid learnings={[
        { title: 'Requirements Engineering', description: 'Tracing project needs into structured requirements and testing relationships.' },
        { title: 'Software Architecture', description: 'Separating backend services, routes, middleware and database responsibilities.' },
        { title: 'Database Modelling', description: 'Designing a PostgreSQL foundation for projects, users, requirements and test records.' },
        { title: 'Quality Engineering', description: 'Understanding requirements coverage, test execution and defect workflows.' },
        { title: 'AI Concept Evaluation', description: 'Assessing where intelligent assistance could support, rather than replace, engineering decisions.' },
      ]} />
    </ProjectDetailLayout>
  )
}
