import heroRobotVideo from '@/data/left right_01.mp4'

export function HeroRobotVideo() {
  return (
    <div
      className="hero-robot-video shrink-0 overflow-hidden"
      style={{
        width: 'var(--hero-decorative-w)',
        height: 'var(--hero-decorative-h)',
      }}
      data-node-id="642:1262"
    >
      <video
        src={heroRobotVideo}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
        className="hero-robot-video__media"
      />
    </div>
  )
}
