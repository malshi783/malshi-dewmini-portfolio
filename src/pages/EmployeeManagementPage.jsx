import {
  FeatureGrid, LearningGrid, ProjectDetailLayout, ProjectHero, ProjectOverview,
  ScreenshotGallery, TechnologyStack,
} from '../components/projects/ProjectDetailComponents'

export function EmployeeManagementPage() {
  return (
    <ProjectDetailLayout>
      <ProjectHero
        eyebrow="Full-Stack Workforce Platform"
        title="Employee Management System"
        subtitle="A Full-Stack Workforce Management Platform"
        status="In Progress"
        repository="https://github.com/malshi783/employee-management-system"
      />
      <ProjectOverview
        introduction="A full-stack application designed to centralise employee administration and workplace management through role-based web experiences, REST APIs and relational data storage."
        objectives={[
          'Support employee record administration.',
          'Provide attendance and leave workflows.',
          'Separate administrative and employee experiences.',
          'Connect a React interface with Spring Boot REST APIs.',
        ]}
        implementation="The application follows a React frontend, Java Spring Boot backend and MySQL database architecture, with API testing supported through Postman and Swagger."
      />
      <TechnologyStack items={['React.js', 'Java', 'Spring Boot', 'MySQL', 'Postman', 'Swagger']} />
      <FeatureGrid features={[
        { title: 'Employee Administration', description: 'Manage employee information and organisational records from a central interface.' },
        { title: 'Attendance Tracking', description: 'Record and review employee attendance information through administrative workflows.' },
        { title: 'Leave Management', description: 'Support leave requests and administrative review within the application.' },
        { title: 'Support Requests', description: 'Organise employee support submissions and administrative responses.' },
        { title: 'Role-Based Experience', description: 'Separate administrative capabilities from employee-facing activities.' },
        { title: 'REST API Integration', description: 'Connect frontend workflows to backend services using structured API requests.' },
      ]} />
      <ScreenshotGallery categories={[
        {
          title: 'Admin Experience',
          images: [
            { title: 'Admin Dashboard', src: '/assets/projects/employee-management/admin-dashboard.webp', alt: 'Privacy-safe preview of the Employee Management System admin dashboard', description: 'System overview, employee metrics and administrative quick actions.' },
            { title: 'Support Management', src: '/assets/projects/employee-management/support-management.webp', alt: 'Privacy-safe preview of the employee support management interface', description: 'Review employee support requests and resolved status.' },
          ],
        },
        { title: 'Employee Experience', images: [] },
      ]} />
      <LearningGrid learnings={[
        { title: 'Full-Stack Development', description: 'Building connected features across React, Java, Spring Boot and MySQL.' },
        { title: 'REST API Integration', description: 'Translating application workflows into frontend and backend API interactions.' },
        { title: 'Database Integration', description: 'Working with relational data for employee, attendance and workplace records.' },
        { title: 'Debugging', description: 'Tracing issues across interface states, HTTP requests and persistence layers.' },
        { title: 'Business Workflows', description: 'Representing practical leave, attendance and support processes in application states.' },
      ]} />
    </ProjectDetailLayout>
  )
}
