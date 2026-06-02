export type LegalSection = {
  heading?: string
  paragraphs: string[]
}

export const PRIVACY_POLICY_META = {
  title: 'Privacy Policy',
  eyebrow: 'Legal',
  subtitle: 'Last updated · March 2026',
  intro:
    'Zene AI is committed to protecting personal information through clear practices, secure handling, and transparent use of data across our learning platform and school partnerships.',
}

export const PRIVACY_POLICY_SECTIONS: LegalSection[] = [
  {
    heading: 'Defining personal information',
    paragraphs: [
      "When we refer to personal information, we mean data that distinctly identifies, contacts, or locates an individual or institution. This includes names, contact email addresses, and phone numbers gathered to fulfill our services and provide support.",
      "Anything beyond this scope is classified as non-personal information. Non-personal information submitted to us is treated as personal information until it is removed from our stored dataset. Personal information you provide directly is used based on the permissions you grant us.",
      'For institutions using Zene AI via site subscription, minimal personal information about members may be shared to help manage activities and track progress effectively.',
    ],
  },
  {
    heading: 'Treating personal information',
    paragraphs: [
      'Codes related to personal information, data acquired through third-party authentication systems, or device permissions for sensor, resource, and functionality usage are considered personal information and are treated with the same privacy standards.',
    ],
  },
  {
    heading: 'Data transfer, storage, and services',
    paragraphs: [
      'User data is handled securely, including during transmission between devices and applications, using necessary cryptographic protocols.',
      'Zene AI applications, as well as apps hosted on platform stores for distribution, require identity authentication to support e-learning activities and provide feedback.',
    ],
  },
  {
    heading: 'Our pledge to security',
    paragraphs: [
      'We commit to safeguarding your personal information through robust physical, business, and technical security measures. In the event of a security breach, we will promptly notify you so you can take necessary actions.',
      'Data will be retained as long as needed, or securely deleted unless legal requirements dictate otherwise. Your data will never be shared, sold, or repurposed beyond its intended use—providing access, support, service, feedback, and important policy and feature notifications.',
    ],
  },
  {
    heading: 'Schools, parents, and learners',
    paragraphs: [
      'School administrators and teachers receive access to progress and usage information needed to support instruction. Parents and guardians may request information about how student accounts are used in accordance with school policies.',
      'Students should use the platform under guidance from their school or parent/guardian. Contact us at privacy@zene.ai for questions about access, correction, or deletion requests subject to applicable law and institutional agreements.',
    ],
  },
  {
    heading: 'Contact',
    paragraphs: [
      'For privacy-related questions or to exercise your rights, reach our team through the contact page or email privacy@zene.ai. We will respond within a reasonable timeframe.',
    ],
  },
]
