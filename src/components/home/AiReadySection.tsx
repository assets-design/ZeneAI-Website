import { HeadsetTracker, useHeadsetTracking } from '@/components/home/HeadsetTracker'
import { SpriteCharacter } from '@/components/home/SpriteCharacter'

/* Positions from Figma Frame 58 (765:1839) — 1910 × 854 canvas */

function StakeholderTitle({
  children,
  left,
  top,
  width,
  nodeId,
}: {
  children: string
  left: string
  top: string
  width: string
  nodeId: string
}) {
  return (
    <p
      className="-translate-x-1/2 absolute text-center font-heading font-medium uppercase leading-none text-black"
      style={{
        left,
        top,
        width,
        fontSize: 'var(--section-text-tab)',
      }}
      data-node-id={nodeId}
    >
      {children}
    </p>
  )
}

function StakeholderBody({
  children,
  left,
  top,
  width,
  nodeId,
  paddingBottom,
}: {
  children: string
  left: string
  top: string
  width: string
  nodeId: string
  paddingBottom?: string
}) {
  return (
    <p
      className="-translate-x-1/2 absolute text-center capitalize font-body font-normal leading-normal text-black"
      style={{
        left,
        top,
        width,
        paddingBottom,
        fontSize: 'var(--section-text-body)',
        fontVariationSettings: "'opsz' 14",
      }}
      data-node-id={nodeId}
    >
      {children}
    </p>
  )
}

export function AiReadySection() {
  const { eyeOffset, handleMouseMove, handleMouseLeave } = useHeadsetTracking()

  return (
    <section
      className="w-full px-[5px] pt-[5px]"
      aria-labelledby="ai-ready-heading"
      data-node-id="765:1838"
    >
      <div
        className="ai-ready-card relative mx-auto flex h-full min-h-0 w-full flex-col overflow-hidden section-card-shell bg-white"
        style={{ maxWidth: 'var(--section-card-max-w)' }}
      >
        <div
          className="shrink-0"
          style={{
            paddingLeft: 'var(--section-padding-x)',
            paddingRight: 'var(--section-padding-x)',
            paddingTop: 'var(--ai-ready-padding-top)',
          }}
        >
          <p
            className="section-eyebrow font-body uppercase text-black"
            style={{
              fontSize: 'var(--section-text-eyebrow)',
              fontVariationSettings: "'opsz' 14",
            }}
            data-node-id="765:1863"
          >
            Data your school could not see before — until now
          </p>

          <h2
            id="ai-ready-heading"
            className="relative z-[2] max-w-full font-heading font-medium uppercase leading-none text-black"
            style={{
              fontSize: 'var(--section-text-heading)',
              maxWidth: 'var(--ai-ready-heading-max-w)',
              marginTop: 'var(--section-eyebrow-to-heading)',
            }}
            data-node-id="765:1874"
          >
            Become an
            <br />
            <span className="bg-[#78F3FA]" data-node-id="765:1873">
              AI-Ready
            </span>{' '}
            School
          </h2>
        </div>

        {/* Full-bleed diagram — Figma 765:1839 */}
        <div
          className="ai-ready-diagram relative min-h-0"
          style={{
            marginTop: 'var(--ai-ready-heading-to-diagram)',
            marginBottom: 'var(--ai-ready-padding-bottom)',
          }}
          data-node-id="765:1839"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Student — top center */}
          <div
            className="absolute overflow-hidden"
            style={{
              left: '44.35%',
              top: '0.47%',
              width: '11.21%',
              height: '28.1%',
            }}
            data-node-id="765:1742"
          >
            <SpriteCharacter
              imageWidth="273.8%"
              imageHeight="162.8%"
              imageLeft="0"
              imageTop="-23.37%"
              nodeId="765:1742"
              imageNodeId="765:1742"
            />
          </div>
          <StakeholderTitle left="50%" top="30%" width="8.74%" nodeId="765:1741">
            Student
          </StakeholderTitle>
          <StakeholderBody
            left="50%"
            top="37.82%"
            width="39.21%"
            paddingBottom="var(--ai-ready-student-body-pb)"
            nodeId="765:1749"
          >
            Every student gets the 1-on-1 practice no classroom period can offer.
          </StakeholderBody>

          {/* Schools — bottom left */}
          <div
            className="absolute overflow-hidden"
            style={{
              left: '14.61%',
              top: '49.77%',
              width: '6.75%',
              height: '19.67%',
            }}
            data-node-id="765:1745"
          >
            <SpriteCharacter
              imageWidth="342.86%"
              imageHeight="174.45%"
              imageLeft="-125.22%"
              imageTop="-30.66%"
              nodeId="765:1745"
              imageNodeId="765:1745"
            />
          </div>
          <StakeholderTitle left="17.98%" top="70.84%" width="10.21%" nodeId="765:1744">
            schools
          </StakeholderTitle>
          <StakeholderBody
            left="17.98%"
            top="78.45%"
            width="24.76%"
            nodeId="765:1751"
          >
            Your teachers see skill-level data classroom observation can never capture.
          </StakeholderBody>

          {/* Parent — bottom right */}
          <div
            className="absolute overflow-hidden"
            style={{
              left: '78.74%',
              top: '47.42%',
              width: '10.63%',
              height: '23.3%',
            }}
            data-node-id="765:1748"
          >
            <SpriteCharacter
              imageWidth="302.96%"
              imageHeight="206.43%"
              imageLeft="-199.01%"
              imageTop="-53.02%"
              nodeId="765:1748"
              imageNodeId="765:1748"
            />
          </div>
          <StakeholderTitle left="83.85%" top="72.95%" width="10.21%" nodeId="765:1754">
            Parent.
          </StakeholderTitle>
          <StakeholderBody
            left="83.85%"
            top="80.56%"
            width="24.76%"
            nodeId="765:1755"
          >
            Parents see exactly which skills their child is building — and what&apos;s next.
          </StakeholderBody>

          {/* Center headset — sized to diagram focal area (765:1733) */}
          <div
            className="absolute"
            style={{
              top: 'var(--ai-ready-headset-top)',
              bottom: 'var(--ai-ready-headset-bottom)',
              left: 'var(--ai-ready-headset-left)',
              right: 'var(--ai-ready-headset-right)',
            }}
            data-node-id="765:1733"
          >
            <HeadsetTracker eyeOffset={eyeOffset} />
          </div>
        </div>
      </div>
    </section>
  )
}
