const FOOTER_COLUMNS = [
  {
    title: 'Programs',
    nodeId: '975:2518',
    links: [
      { label: 'English AI', href: '/english-ai', nodeId: '975:2520' },
      { label: 'Code Monkey', href: '/code-monkey', nodeId: '975:2521' },
      { label: 'The Edge', href: '/the-edge', nodeId: '975:2522' },
    ],
  },
  {
    title: 'Company',
    nodeId: '975:2524',
    links: [
      { label: 'About Us', href: '/about', nodeId: '975:2526' },
      { label: 'Careers', href: '#careers', nodeId: '975:2527' },
      { label: 'Blogs', href: '#blogs', nodeId: '975:2528' },
    ],
  },
  {
    title: 'Support',
    nodeId: '975:2530',
    links: [
      { label: 'Get in Touch', href: '/contact', nodeId: '975:2532' },
      { label: 'FAQs', href: '#faqs', nodeId: '975:2533' },
      { label: 'privacy Policy', href: '#privacy', nodeId: '975:2534' },
    ],
  },
] as const

const bodyStyle = {
  fontSize: 'var(--footer-text-body)',
  fontVariationSettings: "'opsz' 14",
} as const

export function Footer() {
  return (
    <footer
      className="w-full bg-black text-white [&_a]:text-white [&_a:hover]:text-white [&_a]:transition-none"
      data-node-id="977:2019"
    >
      <div
        className="mx-auto w-full max-w-[var(--footer-content-max-w)] px-6 sm:px-10 lg:px-[var(--footer-padding-x)]"
        style={{
          paddingTop: 'var(--footer-padding-top)',
          paddingBottom: 'var(--footer-padding-bottom)',
        }}
        data-node-id="975:2514"
      >
        {/* Top section — brand + link columns */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          {/* Brand column */}
          <div className="shrink-0">
            <a href="/" aria-label="Zene AI — Home" data-node-id="975:2515">
              <img
                src="/assets/figma/footer/logo.png"
                alt="Zene.ai"
                className="object-contain object-left"
                style={{
                  width: 'var(--footer-logo-w)',
                  height: 'var(--footer-logo-h)',
                }}
              />
            </a>
            <p
              className="capitalize font-body font-normal leading-normal text-white"
              style={{
                ...bodyStyle,
                maxWidth: 'var(--footer-tagline-max-w)',
                marginTop: 'var(--footer-tagline-gap)',
              }}
              data-node-id="975:2516"
            >
              AI-powered learning for future-ready students across India.
            </p>
          </div>

          {/* Link columns */}
          <div className="flex flex-col gap-y-10 sm:flex-row sm:flex-wrap sm:gap-x-[var(--footer-col-gap)] sm:gap-y-10">
            {FOOTER_COLUMNS.map(column => (
              <div key={column.title}>
                <p
                  className="font-heading font-medium uppercase leading-none text-white"
                  style={{ fontSize: 'var(--footer-text-heading)' }}
                  data-node-id={column.nodeId}
                >
                  {column.title}
                </p>
                <ul
                  className="flex flex-col capitalize"
                  style={{
                    marginTop: 'var(--footer-heading-link-gap)',
                    gap: 'var(--footer-link-gap)',
                  }}
                >
                  {column.links.map(link => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="font-body font-normal leading-normal text-white"
                        style={bodyStyle}
                        data-node-id={link.nodeId}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr
          className="border-0 border-t border-white"
          style={{ marginTop: 'var(--footer-section-gap)' }}
          data-node-id="975:2535"
        />

        {/* Bottom bar */}
        <div
          className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
          style={{ marginTop: 'var(--footer-bottom-gap)' }}
        >
          <p
            className="capitalize font-body font-normal leading-normal text-white"
            style={bodyStyle}
            data-node-id="975:2536"
          >
            © 2026 Zene AI. All rights reserved.
          </p>
          <p
            className="capitalize font-body font-normal leading-normal text-white"
            style={bodyStyle}
            data-node-id="975:2537"
          >
            Designed by{' '}
            <a
              href="https://theories.consulting/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline decoration-solid underline-offset-2"
            >
              Theories consulting
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
