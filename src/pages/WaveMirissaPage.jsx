import { FeatureGrid, LearningGrid, ProjectDetailLayout, ProjectHero, ProjectOverview, TechnologyStack } from '../components/projects/ProjectDetailComponents'

export function WaveMirissaPage() {
  return (
    <ProjectDetailLayout>
      <ProjectHero
        eyebrow="Academic Team Project"
        title="Wave Mirissa – Order and Inventory Management System"
        subtitle="A Digital Management Solution for a Handmade Jewellery Business"
        status="Near Completion"
        repository="https://github.com/agentdynarq/wm-oims"
      />
      <ProjectOverview
        introduction="Wave Mirissa OIMS is an academic team project for a handmade jewellery business, intended to support digital order, inventory and marketing-related business operations."
        objectives={[
          'Support the management of customer orders.',
          'Organise inventory information and availability.',
          'Explore marketing-related functionality.',
          'Apply a collaborative software engineering approach.',
        ]}
        implementation="The verified public project scope identifies order management, inventory management and marketing functionality. Detailed implementation boundaries and individual responsibilities should be confirmed from the project source before further claims."
      />
      <TechnologyStack items={['Team Project', 'Order Management', 'Inventory Management', 'Marketing']} />
      <FeatureGrid title="Verified Project Scope" features={[
        { title: 'Order Management', description: 'Support digital workflows associated with customer and business orders.' },
        { title: 'Inventory Management', description: 'Organise product and inventory-related information for the jewellery business.' },
        { title: 'Marketing Capability', description: 'Include marketing-related functionality within the wider application scope.' },
        { title: 'Team Collaboration', description: 'The project is developed as a team-based academic system.' },
      ]} />
      <LearningGrid learnings={[
        { title: 'Team Software Development', description: 'Collaborating within a shared academic application and repository.' },
        { title: 'Business Process Analysis', description: 'Considering how order, inventory and marketing activities connect in a small business.' },
        { title: 'Scope Awareness', description: 'Communicating verified project features without overstating individual responsibility.' },
        { title: 'Collaborative Delivery', description: 'Building an understanding of planning and coordinating across team-developed modules.' },
      ]} />
    </ProjectDetailLayout>
  )
}
