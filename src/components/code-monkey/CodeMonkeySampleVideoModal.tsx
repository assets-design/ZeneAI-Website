import { useEffect, useRef } from 'react'

import codeMonkeyDemoVideo from '@/data/01.mp4'

export const CODE_MONKEY_SAMPLE_VIDEO = codeMonkeyDemoVideo

type CodeMonkeySampleVideoModalProps = {
  open: boolean
  onClose: () => void
}

export function CodeMonkeySampleVideoModal({ open, onClose }: CodeMonkeySampleVideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [open, onClose])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (open) {
      void video.play().catch(() => {})
      return
    }

    video.pause()
    video.currentTime = 0
  }, [open])

  if (!open) return null

  return (
    <div
      className="code-monkey-sample-video-modal fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 p-[var(--section-padding-x)]"
      role="dialog"
      aria-modal="true"
      aria-label="Watch sample video"
      onClick={onClose}
    >
      <div
        className="code-monkey-sample-video-modal__panel relative w-full max-w-[min(960px,calc(100vw-48px))]"
        onClick={event => event.stopPropagation()}
      >
        <button
          type="button"
          className="absolute right-0 top-0 z-10 flex size-10 -translate-y-[calc(100%+8px)] translate-x-0 cursor-pointer items-center justify-center rounded-full border-0 bg-white text-2xl leading-none text-black transition-opacity hover:opacity-80"
          onClick={onClose}
          aria-label="Close video"
        >
          ×
        </button>

        <div className="code-monkey-sample-video-modal__frame aspect-video w-full overflow-hidden rounded-[12px] bg-black">
          <video
            ref={videoRef}
            src={CODE_MONKEY_SAMPLE_VIDEO}
            controls
            playsInline
            className="size-full object-contain"
            aria-label="Zene Code Monkey live session demo"
          />
        </div>
      </div>
    </div>
  )
}
