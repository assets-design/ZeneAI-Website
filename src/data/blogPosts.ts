import blogNep2020Image from '@/assets/figma/blog/blog-nep-2020.png'
import blogReadsEverythingImage from '@/assets/figma/blog/blog-reads-everything.png'
import blogSilentEnglishImage from '@/assets/figma/blog/blog-silent-english.png'

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
    slug: 'why-your-child-goes-silent-when-someone-speaks-english',
    title: 'Why Your Child Goes Silent the Moment Someone Speaks English to Them',
    description:
      'Is your child fluent on paper but silent in conversation? Discover why Indian school students struggle with spoken English — and how AI-powered learning is changing that.',
    image: blogSilentEnglishImage,
    published: 'March 12, 2026',
    readTime: '3 min read',
    imageNodeId: '1163:894',
    titleNodeId: '1163:892',
    bodyNodeId: '1163:893',
    ctaNodeId: '1163:901',
    sections: [
      {
        paragraphs: [
          'Picture this: a Class 7 student who scores 90% in English grammar tests. She knows her tenses, her articles, her prepositions. But ask her to introduce herself in English at a school event — and she freezes.',
          "This isn't a rare case. It's the silent epidemic in India's English classrooms.",
        ],
      },
      {
        heading: 'The Gap Between Knowing English and Using It',
        paragraphs: [
          'English education in Indian schools has long been built around one goal: passing the exam. Students memorise rules, complete exercises, and move to the next chapter. What never gets practised is English as a living language — something you speak, respond to, and think in.',
          "The result? Students who understand English perfectly on paper but shut down the moment they need to use it in real life. This gap between passive knowledge and active fluency is well-documented in language research — and it's rarely addressed in a traditional classroom.",
        ],
      },
      {
        heading: "Why the Classroom Alone Can't Fix This",
        paragraphs: [
          "With 40+ students per class, there simply isn't time for every child to practise speaking and receive individual feedback. Add to that the fear of being judged — one mispronounced word, a few laughs, and a child stops trying altogether. Not because they can't learn, but because the environment makes trying feel risky.",
        ],
      },
      {
        heading: 'What AI Changes',
        paragraphs: [
          'AI-powered language tools give every student something no classroom can: unlimited, judgment-free speaking practice. When a child practises pronunciation with AI, there\'s no audience to judge, no pressure to perform. The system listens, responds, and gives precise, immediate feedback — not just "wrong," but how to fix it.',
          'This creates the low-stakes repetition that fluency actually requires. Research in second language acquisition consistently shows that fluency comes not from studying rules, but from practising in safe, repeated contexts over time.',
          "The students who grow up speaking confidently aren't those who studied harder. They're the ones who practised more — in environments where making mistakes was allowed.",
          "Zene AI's English Language Lab gives every school student exactly that — a personalised, judgment-free space to speak, practise, and grow. Learn more at zene.ai.",
        ],
      },
    ],
  },
  {
    id: '1163:895',
    slug: 'nep-2020-wants-students-to-communicate-not-just-memorise',
    title: 'NEP 2020 Wants Students to Communicate, Not Just Memorise. Is Your School Ready?',
    description:
      'NEP 2020 shifts English education from rote learning to real communication. Here\'s what that means in practice — and what schools need to change.',
    image: blogNep2020Image,
    published: 'March 5, 2026',
    readTime: '4 min read',
    imageNodeId: '1163:897',
    titleNodeId: '1163:895',
    bodyNodeId: '1163:896',
    ctaNodeId: '1163:902',
    sections: [
      {
        paragraphs: [
          'When NEP 2020 was released, it used a word that rarely appears in Indian education policy: communication.',
          'Not comprehension. Not grammar. Not exam performance. Communication.',
          'The policy explicitly endorses the Communicative Language Teaching (CLT) approach — the global standard in language education, built on the principle that language is best learned by using it in real, meaningful contexts. For most Indian schools, this requires a genuine shift.',
        ],
      },
      {
        heading: 'What CLT Means in Practice',
        paragraphs: [
          'CLT says language learning happens best when students are doing something with the language — solving a problem, telling a story, having a conversation — not just filling in blanks about it. Grammar is still taught, but through use rather than isolation.',
          "Most Indian classrooms aren't designed this way. Textbooks, assessments, and teacher training have historically been grammar-first. Shifting to CLT isn't just a curriculum update — it's a rethink of how English is taught from the ground up.",
        ],
      },
      {
        heading: 'Why CEFR Alignment Matters',
        paragraphs: [
          'NEP 2020 also encourages alignment with the CEFR — the global language proficiency benchmark that measures what students can do in English, not just what rules they can recite. Can the student hold a conversation? Describe an experience? Write a coherent opinion? These are the competencies that matter in the real world.',
          'Schools aligning with CEFR will need to track progress differently — less about marks, more about developmental milestones in speaking, reading, and writing.',
        ],
      },
      {
        heading: 'The Teacher Burden Problem — and How Technology Helps',
        paragraphs: [
          'CLT asks teachers to listen to students speak, give pronunciation feedback, and track individual communication progress. For a teacher managing 45 students across six periods a day, that\'s not realistic without support.',
          "This is where AI becomes essential, not optional. AI tools handle the individual practice layer — pronunciation coaching, spontaneous speaking prompts, real-time feedback — while teachers focus on what technology can't replace: relationships, group discussion, and human context.",
          'The model that works is blended. NEP 2020 has set the direction. The question is whether the tools your school has chosen can actually take you there.',
          "Zene AI's English curriculum is built in alignment with NEP 2020, NCERT, and CEFR standards. Learn more at zene.ai.",
        ],
      },
    ],
  },
  {
    id: '1163:898',
    slug: 'the-child-who-reads-everything-but-says-nothing',
    title: 'The Child Who Reads Everything But Says Nothing',
    description:
      "Many students read English fluently but can't speak it. Here's the science behind why — and how the right reading programme builds both comprehension and confidence.",
    image: blogReadsEverythingImage,
    published: 'February 28, 2026',
    readTime: '3 min read',
    imageNodeId: '1163:900',
    titleNodeId: '1163:898',
    bodyNodeId: '1163:899',
    ctaNodeId: '1163:903',
    sections: [
      {
        paragraphs: [
          "There's a particular kind of student every English teacher knows well.",
          'She reads every book she can find. Her vocabulary is extraordinary for her age. She understands everything the teacher says. But in spoken English — when she needs to form a sentence in real time, with someone waiting — she goes quiet.',
          "Reading and speaking are not the same skill. But they're far more connected than most people realise.",
        ],
      },
      {
        heading: 'What Reading Does to the Brain',
        paragraphs: [
          'When a child reads a word repeatedly in context — woven into a story, in a sentence that carries emotion and meaning — something specific happens in the brain. The word gets attached to an experience, not just a definition. That kind of memory is far more durable, and far more accessible in conversation.',
          "This is why reading matters for speaking. Not because reading is speaking, but because it builds the raw material that speaking draws from. A child who has encountered \"reluctant\" in a story will use that word far more naturally in conversation than one who memorised it from a word list.",
        ],
      },
      {
        heading: 'The Problem With How Schools Use Reading',
        paragraphs: [
          'Most school reading programmes focus on comprehension — answering questions about the passage, finding the main idea. These are valuable skills. But they treat text as a source of information rather than a vehicle for language experience.',
          "When reading is reduced to comprehension exercises, students learn to extract meaning. What they don't develop is the ability to generate language — to produce sentences that sound like the language they've been reading.",
        ],
      },
      {
        heading: 'Why Stories Work Better Than Textbooks',
        paragraphs: [
          'Stories create emotional investment. When a child cares about a character, they read more carefully, remember more deeply, and — crucially — want to talk about what they read. That natural desire to share and retell is spoken English practice happening organically.',
          'Well-curated reading material should stretch vocabulary, sustain attention, and build naturally into classroom discussion. This isn\'t about making reading "fun" in a superficial sense — it\'s about using literature the way it has always worked: as a doorway into language that feels lived-in, not studied.',
          "The child who reads everything and says nothing isn't missing motivation or intelligence. She's missing the bridge between what she takes in and what she puts out. The right reading programme builds that bridge — one story at a time.",
          "Zene AI's English Reader uses a CLT approach with curated, NEP-aligned stories for Grades 1–8 — designed to develop not just comprehension, but the vocabulary and confidence that make students want to speak. Learn more at zene.ai.",
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
