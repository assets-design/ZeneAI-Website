import blogCardImage from '@/assets/figma/blog/card-image.png'

export type BlogPostSection = {
  heading?: string
  paragraphs: string[]
}

export type BlogPost = {
  id: string
  slug: string
  title: string
  description: string
  image: string
  published: string
  readTime: string
  sections: BlogPostSection[]
  imageNodeId: string
  titleNodeId: string
  bodyNodeId: string
  ctaNodeId: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1163:892',
    slug: 'why-coding-is-the-new-literacy-for-students',
    title: 'Why Coding is the New Literacy for Students',
    description:
      'Coding helps students develop logical thinking, creativity, and problem-solving skills.',
    image: blogCardImage,
    published: 'March 12, 2026',
    readTime: '6 min read',
    imageNodeId: '1163:894',
    titleNodeId: '1163:892',
    bodyNodeId: '1163:893',
    ctaNodeId: '1163:901',
    sections: [
      {
        paragraphs: [
          'In the same way reading and writing opened doors for previous generations, coding is becoming the literacy that helps young people understand and shape the digital world around them. Schools that treat coding as a core skill—not an optional enrichment—give students tools to think clearly, create confidently, and participate in an economy transformed by software and artificial intelligence.',
        ],
      },
      {
        heading: 'From consumers to creators',
        paragraphs: [
          'Most students grow up using apps, games, and AI tools without seeing how they work. Learning to code shifts that relationship. When learners write, test, and refine programs, they move from passive consumption to active creation. Research on coding in K–12 settings consistently links this shift to stronger creativity, persistence, and student agency.',
          'Block-based platforms and physical computing kits lower the entry point for younger grades, while text-based languages in middle and high school deepen abstraction and debugging skills. The goal is not to turn every student into a software engineer, but to ensure every student understands how digital systems behave.',
        ],
      },
      {
        heading: 'Computational thinking across subjects',
        paragraphs: [
          'Coding builds computational thinking: breaking problems into steps, spotting patterns, and designing solutions that can be tested and improved. These habits support mathematics, science, writing, and project-based learning. Students learn to anticipate errors, revise work systematically, and explain their reasoning—skills that transfer far beyond the computer lab.',
          'Recent curriculum reviews emphasize that coding and computational thinking should not live in a single elective silo. When integrated across subjects, schools see stronger engagement and more authentic problem-solving in everyday lessons.',
        ],
      },
      {
        heading: 'Why it still matters in the age of AI',
        paragraphs: [
          'Generative AI can write code snippets on demand, but it cannot replace the learning that happens when a student struggles through a bug, redesigns an algorithm, or explains a program to a peer. Understanding code remains the most reliable path to fluency with technology—and to critical judgment about what machines get right and wrong.',
          'Workforce trends point to growing demand for people who combine programming with domain expertise in health, agriculture, design, and public service. Early coding literacy widens who can access those opportunities and helps prevent a future where only a small group understands the systems that affect everyone.',
        ],
      },
      {
        heading: 'What schools can do now',
        paragraphs: [
          'Start with clear progression from unplugged activities to guided projects, then to open-ended builds aligned to your timetable. Pair coding blocks with reflection: What failed? What changed? What would you do differently? Celebrate process, not only finished products.',
          'Programs like Code Monkey are designed for Indian classrooms—structured weekly paths, teacher dashboards, and practice that fits existing schedules. The outcome is not just better coders, but young people who can program rather than be programmed.',
        ],
      },
    ],
  },
  {
    id: '1163:895',
    slug: 'building-confident-communicators-with-english-ai',
    title: 'Building Confident Communicators with English AI',
    description:
      'AI speaking practice gives every student a safe space to build fluency, pronunciation, and classroom confidence.',
    image: blogCardImage,
    published: 'March 5, 2026',
    readTime: '7 min read',
    imageNodeId: '1163:897',
    titleNodeId: '1163:895',
    bodyNodeId: '1163:896',
    ctaNodeId: '1163:902',
    sections: [
      {
        paragraphs: [
          'Ask any English teacher what they wish they had more of, and the answer is almost always the same: time for each student to speak. In a class of thirty, many learners get minutes of oral practice per week—far below what research suggests for meaningful gains in fluency and confidence. AI-powered English speaking labs are changing that equation without replacing the teacher.',
        ],
      },
      {
        heading: 'The speaking gap in traditional classrooms',
        paragraphs: [
          'Reading and writing dominate timetables because they scale. Speaking does not. Shy students avoid volunteering; advanced learners dominate pair work; homework rarely includes sustained oral production. Meanwhile, boards and parents expect clear communication skills that exams only partially measure.',
          'The result is a persistent gap between what students study and what they can actually say under pressure—in interviews, presentations, and everyday English.',
        ],
      },
      {
        heading: 'How AI practice complements live teaching',
        paragraphs: [
          'Modern AI English tools offer 24/7 conversation practice, pronunciation feedback, and adaptive difficulty in a low-anxiety environment. Students can repeat lines, slow down prompts, and try again without fear of judgment from peers. Teachers retain control of curriculum and assessment while the platform handles volume: hundreds of short speaking turns per week, per child.',
          'Effective school models use AI for daily micro-practice—often ten to fifteen minutes—and reserve classroom time for discussion, drama, debate, and human feedback on higher-order skills. AI handles repetition; teachers handle meaning, culture, and motivation.',
        ],
      },
      {
        heading: 'What to measure beyond scores',
        paragraphs: [
          'Strong implementations track speaking time, completion of assigned oral tasks, pronunciation trends, and participation rates across the class—not only test marks. Heatmaps and term reports help coordinators see which sections need support before board exams.',
          'When students see their own progress in dashboards, confidence compounds. Research on AI conversation practice in schools reports gains in willingness to speak, clearer pronunciation, and more regular practice outside the classroom compared with textbook-only routines.',
        ],
      },
      {
        heading: 'Privacy, purpose, and balance',
        paragraphs: [
          'Schools should choose platforms built for education, with clear data policies and alignment to your syllabus—not generic chatbots. Set expectations with parents: AI supplements the teacher, it does not replace human connection or cultural nuance in language learning.',
          'Zene’s English AI program is designed for this balance: speaking, listening, reading, and writing in one place; personalised paths; visibility for teachers and leaders; and practice that maps to how Indian schools actually run. The aim is simple—every student heard, every skill measured, every teacher in control.',
        ],
      },
    ],
  },
  {
    id: '1163:898',
    slug: 'preparing-students-for-an-ai-shaped-future',
    title: 'Preparing Students for an AI-Shaped Future',
    description:
      'Schools must blend digital literacy, communication, and life-ready skills so learners thrive alongside intelligent systems.',
    image: blogCardImage,
    published: 'February 28, 2026',
    readTime: '6 min read',
    imageNodeId: '1163:900',
    titleNodeId: '1163:898',
    bodyNodeId: '1163:899',
    ctaNodeId: '1163:903',
    sections: [
      {
        paragraphs: [
          'Artificial intelligence is no longer a chapter in a computer science textbook—it is embedded in search, writing tools, hiring screens, and everyday decisions. Students entering secondary school today will graduate into workplaces where working with AI is as normal as working with email. The question for schools is not whether to respond, but how comprehensively to prepare learners for shared work with intelligent systems.',
        ],
      },
      {
        heading: 'Beyond tool training',
        paragraphs: [
          'Teaching students to “use ChatGPT” is not a strategy. A durable approach combines technical literacy (how systems work, what data they use, where errors appear), communication skills (explaining ideas, interviewing, presenting), and judgment (ethics, sourcing, verification). Coding literacy fits here: students who understand logic and algorithms are better equipped to evaluate AI outputs and design solutions.',
          'Life-ready programs add structured practice in leadership, collaboration, and reflection—documented in portfolios parents and universities can trust.',
        ],
      },
      {
        heading: 'Skills that stay valuable',
        paragraphs: [
          'Reports from education and industry bodies converge on a short list of durable capabilities: critical thinking, creativity, collaboration, digital fluency, and adaptability. AI accelerates routine tasks; humans still set goals, choose values, and resolve conflict. Schools that double down on these human skills while adopting AI for practice and measurement avoid the trap of chasing every new app without a coherent graduate profile.',
        ],
      },
      {
        heading: 'Building school-wide coherence',
        paragraphs: [
          'Fragmented pilots—one class using an AI tutor, another ignoring technology—confuse families and limit impact. Stronger models align English practice, coding pathways, and leadership development under one vision of graduate outcomes. Leaders get aggregate data; teachers keep autonomy in the classroom; students see consistent expectations from grade to grade.',
        ],
      },
      {
        heading: 'A practical path forward',
        paragraphs: [
          'Audit what you already teach that maps to digital and life-ready skills. Identify gaps in speaking volume, coding exposure, and documented leadership. Pilot with clear metrics: participation, skill growth, teacher workload. Scale what proves sustainable for your timetable and community.',
          'Zene partners with schools to implement this stack—English AI, Code Monkey, and The Edge—so innovation is integrated, measurable, and aligned to the learners you serve. The future is AI-shaped; your students can be ready to shape it in return.',
        ],
      },
    ],
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find(post => post.slug === slug)
}

export function getAdjacentBlogPosts(slug: string): {
  prev: BlogPost | null
  next: BlogPost | null
} {
  const index = BLOG_POSTS.findIndex(post => post.slug === slug)
  if (index === -1) {
    return { prev: null, next: null }
  }

  return {
    prev: index > 0 ? BLOG_POSTS[index - 1]! : null,
    next: index < BLOG_POSTS.length - 1 ? BLOG_POSTS[index + 1]! : null,
  }
}
