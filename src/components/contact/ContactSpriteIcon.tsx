import contactIconsSprite from '@/assets/figma/contact/section-2/contact-icons-sprite.png'

type ContactSpriteIconProps = {
  wrapWidth: string
  wrapHeight: string
  imageWidth: string
  imageHeight: string
  imageLeft: string
  imageTop: string
  alt: string
  nodeId?: string
}

export function ContactSpriteIcon({
  wrapWidth,
  wrapHeight,
  imageWidth,
  imageHeight,
  imageLeft,
  imageTop,
  alt,
  nodeId,
}: ContactSpriteIconProps) {
  return (
    <div
      className="relative shrink-0 overflow-hidden"
      style={{ width: wrapWidth, height: wrapHeight }}
      data-node-id={nodeId}
    >
      <img
        src={contactIconsSprite}
        alt={alt}
        className="absolute max-w-none object-cover"
        style={{
          width: imageWidth,
          height: imageHeight,
          left: imageLeft,
          top: imageTop,
        }}
      />
    </div>
  )
}
