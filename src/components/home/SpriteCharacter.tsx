import charactersSprite from '@/assets/figma/home/section-7/characters-sprite.png'

type SpriteCharacterProps = {
  imageWidth: string
  imageHeight: string
  imageLeft: string
  imageTop: string
  nodeId: string
  imageNodeId: string
}

export function SpriteCharacter({
  imageWidth,
  imageHeight,
  imageLeft,
  imageTop,
  nodeId,
  imageNodeId,
}: SpriteCharacterProps) {
  return (
    <div className="relative size-full overflow-hidden" data-node-id={nodeId}>
      <img
        src={charactersSprite}
        alt=""
        aria-hidden
        className="pointer-events-none absolute max-w-none"
        style={{
          width: imageWidth,
          height: imageHeight,
          left: imageLeft,
          top: imageTop,
        }}
        data-node-id={imageNodeId}
      />
    </div>
  )
}
