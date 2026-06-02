import rubikCube from '@/assets/figma/home/section-11/rubik-cube.png'
import rubikExpanded from '@/assets/figma/home/section-11/rubik-expanded.png'

export type FaqItem = {
  number: string
  question: string
  answer: string
  icon: string
}

export const HOME_FAQ_ITEMS: FaqItem[] = [
  {
    number: '01',
    question: 'What age group is Zene AI designed for?',
    answer:
      "Zene AI has been designed for students between ages 6–18. Programs are tailored to each age group, from block-based coding for young beginners to leadership and English fluency practice for high schoolers. Every stage of a student's academic life is covered.",
    icon: rubikExpanded,
  },
  {
    number: '02',
    question: 'How is learning personalized by the AI?',
    answer:
      "Each student's performance data is analyzed in real time. Based on pronunciation scores, activity completion, and comprehension levels, a unique learning path is created so time is not wasted on what has already been mastered.",
    icon: rubikCube,
  },
  {
    number: '03',
    question: 'Is a free trial offered?',
    answer:
      'Yes, a free demo session is offered to all interested schools and students. Explore the platform, experience a session, and see the full potential of AI-powered learning before any commitment.',
    icon: rubikCube,
  },
  {
    number: '04',
    question: 'What subjects are covered by Zene AI?',
    answer:
      'Three core skill areas are addressed: English communication (English AI), coding and digital literacy (Code Monkey), and life and leadership skills (The Edge). Together they deliver a complete future-ready education on one integrated platform.',
    icon: rubikCube,
  },
  {
    number: '05',
    question: 'Why is AI used for English learning instead of traditional methods?',
    answer:
      'Traditional classroom instruction is limited by time and teacher availability. With AI English speaking practice, personalized feedback is given instantly, pronunciation is corrected in real time, and consistent practice is possible every day.',
    icon: rubikCube,
  },
  {
    number: '06',
    question: 'How is English fluency improved through Zene AI?',
    answer:
      'Fluency is built through speaking exercises, vocabulary activities, grammar games, AI conversation practice, and reading comprehension. Every session is designed to develop real-world communication confidence, not only test scores.',
    icon: rubikCube,
  },
  {
    number: '07',
    question: 'How do schools onboard with Zene AI?',
    answer:
      'Schools begin with a discovery call and demo. Our team maps your timetable, grades, and goals to English AI, Code Monkey, and The Edge modules. Teachers receive onboarding support, dashboards, and ongoing training so adoption fits your existing workflow.',
    icon: rubikCube,
  },
  {
    number: '08',
    question: 'Is student data kept private and secure?',
    answer:
      'Yes. Personal information is protected with physical, business, and technical security measures. Data is used only to provide access, support, feedback, and important policy updates—it is not sold or repurposed beyond its intended educational use.',
    icon: rubikCube,
  },
]
