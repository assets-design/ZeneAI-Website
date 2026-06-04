import { ContentArticle } from '@/components/content/ContentArticle'
import { ContentPageShell, highlightStyle } from '@/components/content/ContentPageShell'
import { PRIVACY_POLICY_META, PRIVACY_POLICY_SECTIONS } from '@/data/privacyPolicy'
import { Link } from 'react-router-dom'

export function PrivacyPolicySection() {
  return (
    <ContentPageShell
      headingId="privacy-policy-heading"
      eyebrow={PRIVACY_POLICY_META.eyebrow}
      title={
        <>
          Privacy{' '}
          <span className="inline-flex items-center bg-zene-cyan" style={highlightStyle}>
            Policy
          </span>
        </>
      }
      subtitle={PRIVACY_POLICY_META.subtitle}
      intro={PRIVACY_POLICY_META.intro}
      showApply={false}
    >
      <ContentArticle
        sections={PRIVACY_POLICY_SECTIONS}
        marginTop="var(--blog-post-header-to-feature)"
      />

      <p
        className="blog-post-content mx-auto w-full min-w-0 max-w-none capitalize font-body font-normal leading-normal text-black"
        style={{
          fontSize: 'var(--blog-post-body-size)',
          fontVariationSettings: "'opsz' 14",
          marginTop: 'var(--blog-post-section-gap)',
        }}
      >
        Questions about this policy?{' '}
        <Link
          to="/contact"
          className="text-zene-blue underline decoration-solid underline-offset-2"
        >
          Contact us →
        </Link>
      </p>
    </ContentPageShell>
  )
}
