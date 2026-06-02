const MARQUEE_TEXT =
  'AI ENGLISH SPEAKING ✦ CODING ✦ LEADERSHIP ✦ FUTURE-READY ✦ ZENE AI ✦'

export function WhySchoolsMarquee() {
  return (
    <div
      className="overflow-hidden"
      style={{
        marginTop: 'var(--why-marquee-offset-top)',
        paddingBottom: 'var(--why-marquee-bottom)',
      }}
      data-node-id="685:1633"
    >
      <div
        className="flex items-center overflow-hidden"
        style={{
          height: 'var(--why-marquee-h)',
          borderRadius: 'var(--why-marquee-radius)',
          backgroundColor: 'var(--why-marquee-bg)',
        }}
        data-node-id="642:1297"
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {[0, 1].map(i => (
            <p
              key={i}
              className="shrink-0 font-heading font-medium uppercase leading-none text-white"
              style={{
                fontSize: 'var(--section-text-heading)',
                paddingLeft: 'var(--why-marquee-text-gap)',
                paddingRight: 'var(--why-marquee-text-gap)',
              }}
              data-node-id={i === 0 ? '685:1601' : '685:1603'}
            >
              {MARQUEE_TEXT}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
