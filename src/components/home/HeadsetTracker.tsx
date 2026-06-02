import { useCallback, useState } from 'react'

const MAX_EYE_X = 7
const MAX_EYE_Y = 5
const BOTTOM_DEAD_ZONE = 0.65
const EYE_TRACK_TRANSITION = 'transform 0.005s linear'

export type EyeOffset = { x: number; y: number }

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

export function useHeadsetTracking() {
  const [eyeOffset, setEyeOffset] = useState<EyeOffset>({ x: 0, y: 0 })

  const applyOffset = useCallback((next: EyeOffset) => {
    setEyeOffset(next)
  }, [])

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const rect = event.currentTarget.getBoundingClientRect()
      const relX = (event.clientX - rect.left) / rect.width
      const relY = (event.clientY - rect.top) / rect.height

      if (relY > BOTTOM_DEAD_ZONE) {
        applyOffset({ x: 0, y: 0 })
        return
      }

      const x = clamp((relX - 0.5) * 2 * MAX_EYE_X, -MAX_EYE_X, MAX_EYE_X)
      let y = 0

      if (relY < 0.5) {
        y = clamp(-((0.5 - relY) / 0.5) * MAX_EYE_Y, -MAX_EYE_Y, 0)
      }

      applyOffset({ x, y })
    },
    [applyOffset],
  )

  const handleMouseLeave = useCallback(() => {
    applyOffset({ x: 0, y: 0 })
  }, [applyOffset])

  return { eyeOffset, handleMouseMove, handleMouseLeave }
}

const LEFT_EYE_RING =
  'M161.759 115.317C184.339 110.972 206.142 125.835 210.349 148.441C214.491 170.694 200.024 192.078 177.985 196.623L176.929 196.827C154.492 200.861 133.007 186.023 128.836 163.612V163.611C124.665 141.199 139.373 119.625 161.759 115.317Z'

const LEFT_EYE_PUPIL =
  'M163.868 126.276C180.369 123.101 196.302 133.962 199.377 150.483C202.451 167.003 191.493 182.868 174.954 185.843C158.558 188.791 142.857 177.947 139.809 161.569C136.761 145.191 147.509 129.425 163.868 126.276Z'

const RIGHT_EYE_RING =
  'M333.626 115.315C356.121 110.993 377.857 125.734 382.163 148.231C386.469 170.729 371.714 192.456 349.213 196.747C326.734 201.034 305.032 186.295 300.73 163.819C296.428 141.343 311.152 119.632 333.626 115.315Z'

const RIGHT_EYE_PUPIL =
  'M335.731 126.274C352.17 123.116 368.055 133.889 371.202 150.33C374.348 166.771 363.566 182.648 347.122 185.784C330.695 188.917 314.836 178.146 311.692 161.721C308.548 145.296 319.308 129.429 335.731 126.274Z'

type HeadsetTrackerProps = {
  eyeOffset: EyeOffset
}

export function HeadsetTracker({ eyeOffset }: HeadsetTrackerProps) {
  return (
    <div className="relative size-full" data-node-id="765:1733">
      <svg
        viewBox="0 0 499.281 322"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-full"
        aria-hidden
      >
        <defs>
          <clipPath id="headset-left-eye-socket">
            <path d={LEFT_EYE_RING} />
          </clipPath>
          <clipPath id="headset-right-eye-socket">
            <path d={RIGHT_EYE_RING} />
          </clipPath>
        </defs>

        <path
          d="M0.000175565 142.2C3.08569 131.604 4.28623 120.58 7.69926 110.187C20.3751 71.6705 47.0924 39.374 82.5035 19.7623C100.553 9.90104 120.291 3.52895 140.688 0.977809C150.612 -0.345249 167.076 0.0846557 177.467 0.0899721L237.183 0.140883L310.206 0.111868C337.727 0.0638404 358.309 -1.25813 385.275 6.61218C425.539 18.7885 459.388 46.3961 479.474 83.4414C500.078 121.485 504.828 166.158 492.687 207.702C480.513 248.642 452.689 283.096 415.281 303.552C392.253 316.097 384.186 315.003 362.657 322H290.909C286.487 315.858 279.532 302.838 275.574 295.918L249.433 250.4C247.339 253.672 245.241 257.416 243.376 260.837C232.22 281.301 219.446 301.356 208.694 322H137.784C132.028 319.731 120.892 317.996 114.315 316.193C104.26 313.433 93.7408 308.946 84.5695 304.024C47.8959 284.271 20.2861 251.034 7.54085 211.299C4.01307 200.365 3.1919 189.605 0.000175565 179.085V142.2ZM350.725 247.944C373.163 245.996 393.895 235.141 408.308 217.791C439.896 179.697 435.374 126.115 397.652 93.9876C370.547 70.9028 342.586 74.1602 309.636 74.2323L241.024 74.2972L182.254 74.1963C176.469 74.1873 156.063 73.4898 151.323 74.5909C100.492 79.036 65.804 119.198 70.3623 170.517C72.462 193.182 83.54 214.056 101.116 228.465C127.858 250.784 156.29 249.066 188.564 249.01L250.427 248.882L311.192 248.932C321.725 248.944 336.887 249.362 347.036 248.401C348.271 248.286 349.5 248.134 350.725 247.944Z"
          fill="#0397D9"
        />

        {/* Static black eye rings — do not move */}
        <path d={LEFT_EYE_RING} stroke="black" strokeWidth="3" />
        <path d={RIGHT_EYE_RING} stroke="black" strokeWidth="3" />

        {/* Blue pupils — move only inside the rings */}
        <g clipPath="url(#headset-left-eye-socket)">
          <path
            d={LEFT_EYE_PUPIL}
            fill="#0197DA"
            transform={`translate(${eyeOffset.x} ${eyeOffset.y})`}
            style={{ transition: EYE_TRACK_TRANSITION }}
          />
        </g>
        <g clipPath="url(#headset-right-eye-socket)">
          <path
            d={RIGHT_EYE_PUPIL}
            fill="#0197DA"
            transform={`translate(${eyeOffset.x} ${eyeOffset.y})`}
            style={{ transition: EYE_TRACK_TRANSITION }}
          />
        </g>
      </svg>
    </div>
  )
}
