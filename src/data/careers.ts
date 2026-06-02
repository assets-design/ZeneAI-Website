import blogCardImage from '@/assets/figma/blog/card-image.png'

export type CareerJobSection = {
  heading?: string
  paragraphs: string[]
}

export type CareerJob = {
  id: string
  slug: string
  title: string
  department: string
  location: string
  type: string
  description: string
  image: string
  published: string
  sections: CareerJobSection[]
}

export const CAREER_JOBS: CareerJob[] = [
  {
    id: 'career-1',
    slug: 'senior-education-consultant',
    title: 'Senior Education Consultant',
    department: 'School Partnerships',
    location: 'Mumbai · Hybrid',
    type: 'Full-time',
    description:
      'Lead school discovery, demos, and program rollouts for English AI, Code Monkey, and The Edge across India.',
    image: blogCardImage,
    published: 'Open role',
    sections: [
      {
        paragraphs: [
          'Zene AI is expanding partnerships with schools that want future-ready programs without disrupting existing timetables. As a Senior Education Consultant, you will be the primary relationship owner from first conversation through successful adoption.',
        ],
      },
      {
        heading: 'What you will do',
        paragraphs: [
          'Conduct discovery calls and tailored demos for principals, coordinators, and teachers. Map school goals to Zene AI modules and build implementation plans aligned to academic calendars.',
          'Coordinate pilots, teacher onboarding, and success reviews. Partner with product and curriculum teams to relay classroom feedback and shape rollout improvements.',
        ],
      },
      {
        heading: 'What we are looking for',
        paragraphs: [
          '5+ years in K–12 sales, academic consulting, or edtech partnerships. Strong communication in English and at least one Indian regional language preferred.',
          'Comfort presenting to school leadership and facilitating teacher workshops. Willingness to travel for key accounts.',
        ],
      },
      {
        heading: 'Why Zene AI',
        paragraphs: [
          'Work on programs used by learners ages 6–18 across communication, coding, and leadership. Join a team building AI-powered education with measurable classroom outcomes.',
        ],
      },
    ],
  },
  {
    id: 'career-2',
    slug: 'curriculum-developer-english-ai',
    title: 'Curriculum Developer — English AI',
    department: 'Learning Design',
    location: 'Bengaluru · Remote-friendly',
    type: 'Full-time',
    description:
      'Design speaking, vocabulary, and comprehension pathways that power personalized English AI practice for Indian classrooms.',
    image: blogCardImage,
    published: 'Open role',
    sections: [
      {
        paragraphs: [
          'English AI gives every student a safe space to practice speaking with instant feedback. We are looking for a curriculum developer who can translate pedagogy into structured, age-appropriate learning paths inside the platform.',
        ],
      },
      {
        heading: 'Responsibilities',
        paragraphs: [
          'Author lesson sequences, rubrics, and teacher guides for grades 1–12. Collaborate with AI and engineering teams to align content with adaptive pathways and pronunciation scoring.',
          'Review analytics and classroom pilots to refine activities. Ensure content reflects Indian contexts, syllabi, and communication goals schools care about.',
        ],
      },
      {
        heading: 'Requirements',
        paragraphs: [
          'Background in English language teaching, instructional design, or literacy curriculum. Experience with digital learning products is a strong plus.',
          'Excellent writing and editing skills. Detail-oriented approach to scope, sequence, and accessibility.',
        ],
      },
    ],
  },
  {
    id: 'career-3',
    slug: 'full-stack-engineer-platform',
    title: 'Full Stack Engineer — Platform',
    department: 'Engineering',
    location: 'Remote · India',
    type: 'Full-time',
    description:
      'Build and scale the web platform, teacher dashboards, and integrations that deliver AI learning to schools nationwide.',
    image: blogCardImage,
    published: 'Open role',
    sections: [
      {
        paragraphs: [
          'Our platform connects students, teachers, and school administrators to AI-powered practice across English AI, Code Monkey, and The Edge. Engineers here ship features that land directly in classrooms.',
        ],
      },
      {
        heading: 'You will',
        paragraphs: [
          'Develop responsive web experiences with modern TypeScript and React. Design APIs and data models that support progress tracking, reporting, and secure authentication.',
          'Improve performance, observability, and deployment pipelines. Collaborate with design and product on accessible, reliable interfaces.',
        ],
      },
      {
        heading: 'You bring',
        paragraphs: [
          '3+ years building production web applications. Strength in React, Node or similar backend stacks, and relational databases.',
          'Interest in education technology and privacy-conscious engineering. Experience with cloud hosting and CI/CD is valued.',
        ],
      },
    ],
  },
]

export function getCareerJobBySlug(slug: string): CareerJob | undefined {
  return CAREER_JOBS.find(job => job.slug === slug)
}

export function getAdjacentCareerJobs(slug: string): {
  prev: CareerJob | null
  next: CareerJob | null
} {
  const index = CAREER_JOBS.findIndex(job => job.slug === slug)
  if (index === -1) {
    return { prev: null, next: null }
  }
  return {
    prev: index > 0 ? CAREER_JOBS[index - 1]! : null,
    next: index < CAREER_JOBS.length - 1 ? CAREER_JOBS[index + 1]! : null,
  }
}
