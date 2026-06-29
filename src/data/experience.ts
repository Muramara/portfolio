export interface Experience {
  type: 'work' | 'education';
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights?: string[];
}

export const experiences: Experience[] = [
  {
    type: 'work',
    title: 'Software Developer',
    organization: 'Dew CIS Solutions Ltd',
    period: 'Jan 2025 - Present',
    description: 'Develop and maintain backend systems, optimize PostgreSQL databases, manage remote Linux infrastructure, and lead technical onboarding for engineering team members.',
    highlights: [
      'Spearheaded the remote deployment and rollout of the corporate HR system for multiple enterprise clients.',
      'Engineered and deployed customized application modules tailored to specific client business requirements.',
      'Trained and mentored engineering interns, successfully transitioning them to manage independent projects.',
      'Engineered a Java API to parse and display structured CV data from user uploads.',
      'Automated workflows by creating system-generated contracts and reports via Jaspersoft Studio.',
    ]
  },
  {
    type: 'work',
    title: 'Business Analyst Intern',
    organization: 'Kenya Commercial Bank',
    period: 'Feb 2023 - April 2023',
    description: 'Mostly Involved in the design phase of the SDLC process',
    highlights: [
      'Liaised with stakeholders to identify the problems and gather requirements for a new card payment system',
      'Created use cases and sequence diagrams to easily explain the flow expectations for an ATM system',
      'Engaged developers to ensure feasibility of the designs for a USSD system',
    ]
  },
  // {
  //   type: 'work',
  //   title: 'Junior Developer',
  //   organization: 'StartupHouse',
  //   period: '2016 - 2018',
  //   description: 'Worked in an agile startup environment on multiple projects from concept to deployment.',
  //   highlights: [
  //     'Assisted in developing an IoT dashboard with real-time analytics',
  //     'Collaborated with backend engineers to design and implement RESTful APIs',
  //     'Participated in daily stand-ups and sprint planning sessions',
  //     'Gained experience with various frameworks and technologies'
  //   ]
  // },
  {
    type: 'education',
    title: 'Bachelor of Business Information Technology',
    organization: 'Strathmore University',
    period: 'April 2020 - June 2024',
    description: 'Focused on software engineering and web development.',
    highlights: [
      'Minor in Business Intelligence and Data Analytics',
      'GPA: 2.9/4.0',
      'Completed attachment at a major local bank (Kenya Commercial Bank) as a Business Analyst Intern',
      'Final Year Project: "A High School Chemistry Game with a Dashboard for Student Performance Review"'
    ]
  },
  {
    type: 'education',
    title: 'Kenya Certificate of Secondary Education',
    organization: 'Nova Pioneer Boys High School',
    period: '2016 - 2019',
    description: 'A new, upcoming high school of which I was in the pioneer class.',
    highlights: [
      'Mathematics: A',
      'Computer Studies: B+',
      'Business Studies: A-',
      'Mean Grade: B'
    ]
  }
];