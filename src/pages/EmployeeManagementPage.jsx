import {
  FeatureGrid,
  LearningGrid,
  ProjectDetailLayout,
  ProjectHero,
  ProjectOverview,
  ScreenshotGallery,
  TechnologyStack,
} from '../components/projects/ProjectDetailComponents'

const adminScreenshots = [
  {
    title: 'Admin Dashboard',
    src: '/projets%20screenshots/EmployeeManagementSystem/admindash.png',
    alt: 'Employee Management System admin dashboard',
    description:
      'An overview of employee activities, system metrics and administrative quick actions.',
  },
  {
    title: 'Dashboard Overview',
    src: '/projets%20screenshots/EmployeeManagementSystem/admindash2.png',
    alt: 'Admin dashboard overview',
    description:
      'An additional view of the administrative dashboard.',
  },
  {
    title: 'Employee Management',
    src: '/projets%20screenshots/EmployeeManagementSystem/adminemployemanage.png',
    alt: 'Employee management interface',
    description:
      'Administrative interface for managing employee records.',
  },
  {
    title: 'Attendance Management',
    src: '/projets%20screenshots/EmployeeManagementSystem/attenManadmin.png',
    alt: 'Attendance management interface',
    description:
      'Interface for monitoring and managing employee attendance.',
  },
  {
    title: 'Leave Management',
    src: '/projets%20screenshots/EmployeeManagementSystem/adminleaverequestman.png',
    alt: 'Leave management interface',
    description:
      'Interface for reviewing and managing employee leave requests.',
  },
  {
    title: 'Support Management',
    src: '/projets%20screenshots/EmployeeManagementSystem/adminsuport.png',
    alt: 'Support management interface',
    description:
      'Administrative interface for reviewing employee support requests.',
  },
]

const employeeScreenshots = [
  {
    title: 'Employee Dashboard',
    src: '/projets%20screenshots/EmployeeManagementSystem/EmployeeDash.png',
    alt: 'Employee dashboard',
    description:
      'Personal dashboard displaying employee activities and information.',
  },
  {
    title: 'My Attendance',
    src: '/projets%20screenshots/EmployeeManagementSystem/attenManadmin.png',
    alt: 'Attendance interface preview',
    description:
      'Attendance management interface preview.',
  },
  {
    title: 'My Leave',
    src: '/projets%20screenshots/EmployeeManagementSystem/employeeLeave.png',
    alt: 'Employee leave interface',
    description:
      'Interface for submitting and tracking leave requests.',
  },
  {
    title: 'My Support',
    src: '/projets%20screenshots/EmployeeManagementSystem/employeesupport.png',
    alt: 'Employee support interface',
    description:
      'Interface for submitting support requests and viewing responses.',
  },
  {
    title: 'Profile Management',
    src: '/projets%20screenshots/EmployeeManagementSystem/profileupdating.png',
    alt: 'Employee profile management interface',
    description:
      'Interface for updating employee profile information.',
  },
]

export function EmployeeManagementPage() {
  return (
    <ProjectDetailLayout>

      {/* PROJECT HERO */}

      <ProjectHero
        eyebrow="Full-Stack Workforce Platform"
        title="Employee Management System"
        subtitle="A full-stack workforce management platform designed to simplify employee administration."
        status="Completed"
        repository="https://github.com/malshi783/employee-management-system"
      />

      {/* PROJECT OVERVIEW */}

      <ProjectOverview
        introduction="The Employee Management System is an individual full-stack development project designed to centralise employee administration and workplace management. It provides separate experiences for administrators and employees through a web interface, REST APIs and relational database integration."

        objectives={[
          'Centralise employee record administration.',
          'Provide attendance and leave management workflows.',
          'Separate administrative and employee experiences.',
          'Implement role-based application access.',
          'Connect a React interface with Spring Boot REST APIs.',
        ]}

        implementation="The application uses React.js for the frontend, Java and Spring Boot for backend development, and MySQL for relational data storage. Postman and Swagger are used for API testing and documentation."
      />

      {/* KEY FEATURES */}

      <FeatureGrid
        features={[
          {
            title: 'Employee Administration',
            description:
              'Manage employee information and organisational records through a central interface.',
          },
          {
            title: 'Attendance Tracking',
            description:
              'Record and review employee attendance information through administrative workflows.',
          },
          {
            title: 'Leave Management',
            description:
              'Support employee leave requests and administrative review.',
          },
          {
            title: 'Support Requests',
            description:
              'Organise employee support submissions and administrative responses.',
          },
          {
            title: 'Role-Based Access',
            description:
              'Provide separate administrative and employee-facing experiences.',
          },
          {
            title: 'REST API Integration',
            description:
              'Connect frontend workflows to backend services using structured API requests.',
          },
        ]}
      />

      {/* APPLICATION SCREENSHOTS */}

      <ScreenshotGallery
        categories={[
          {
            title: 'Admin Experience',
            images: adminScreenshots,
          },
          {
            title: 'Employee Experience',
            images: employeeScreenshots,
          },
        ]}
      />

      {/* TECHNOLOGY STACK */}

      <TechnologyStack
        items={[
          'React.js',
          'Java',
          'Spring Boot',
          'MySQL',
          'REST APIs',
          'Postman',
          'Swagger',
          'Git',
          'GitHub',
        ]}
      />

      {/* MY LEARNINGS */}

      <LearningGrid
        learnings={[
          {
            title: 'Full-Stack Development',
            description:
              'Understanding how frontend interfaces communicate with backend services.',
          },
          {
            title: 'REST API Integration',
            description:
              'Connecting frontend workflows with backend REST endpoints.',
          },
          {
            title: 'Database Integration',
            description:
              'Working with relational data for employee, attendance and workplace records.',
          },
          {
            title: 'Authentication',
            description:
              'Understanding authentication flows and role-based application access.',
          },
          {
            title: 'Debugging',
            description:
              'Tracing issues across interface states, HTTP requests and persistence layers.',
          },
          {
            title: 'Problem Solving',
            description:
              'Applying structured troubleshooting to full-stack development challenges.',
          },
        ]}
      />

    </ProjectDetailLayout>
  )
}