import type { InputHTMLAttributes, SelectHTMLAttributes } from 'react'
import { useNavigate } from 'react-router-dom'
import chevronDown from '@/assets/figma/contact/section-2/chevron-down.svg'
import { ContactSpriteIcon } from '@/components/contact/ContactSpriteIcon'
import { cn } from '@/lib/utils'

type ContactFormSectionProps = {
  panel?: boolean
}

const FIELD_CLASS =
  'contact-form-field w-full box-border border border-black/60 bg-white capitalize font-body font-medium text-black outline-none transition-colors focus:border-zene-blue'

const FIELD_STYLE = {
  minHeight: 'var(--contact-form-field-h)',
  height: 'var(--contact-form-field-h)',
  lineHeight: 'var(--contact-form-field-line-height)',
  borderRadius: 'var(--contact-form-field-radius)',
  paddingLeft: 'var(--contact-form-field-padding-x)',
  paddingRight: 'var(--contact-form-field-padding-x)',
  paddingTop: 'var(--contact-form-field-padding-y)',
  paddingBottom: 'var(--contact-form-field-padding-y)',
  fontSize: 'var(--contact-form-field-text)',
  fontVariationSettings: "'opsz' 14",
} as const

function ContactTextField({
  className,
  style,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`${FIELD_CLASS} placeholder:text-black/50 ${className ?? ''}`}
      style={{ ...FIELD_STYLE, ...style }}
      {...props}
    />
  )
}

function ContactSelectField({
  className,
  children,
  style,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div
      className="relative w-full"
      style={{ height: 'var(--contact-form-field-h)' }}
    >
      <select
        className={`${FIELD_CLASS} appearance-none pr-[calc(var(--contact-form-field-padding-x)+28px)] ${className ?? ''}`}
        style={{ ...FIELD_STYLE, ...style }}
        {...props}
      >
        {children}
      </select>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 flex items-center"
        style={{ right: 'var(--contact-form-field-padding-x)' }}
      >
        <img
          src={chevronDown}
          alt=""
          className="rotate-90 object-contain opacity-50"
          style={{
            width: 'var(--contact-form-chevron-w)',
            height: 'var(--contact-form-chevron-h)',
          }}
        />
      </span>
    </div>
  )
}

const CONTACT_INFO = [
  {
    nodeId: '642:2122',
    iconNodeId: '642:2123',
    alt: 'Phone',
    wrapWidth: 'var(--contact-info-phone-icon-w)',
    wrapHeight: 'var(--contact-info-phone-icon-h)',
    imageWidth: '334.64%',
    imageHeight: '215.58%',
    imageLeft: '-10.68%',
    imageTop: '-56.63%',
    textNodeId: '642:2124',
    lines: ['+91 9912983515', '+91 9177650701'],
    lineNodeIds: ['642:2125', '642:2126'],
  },
  {
    nodeId: '642:2127',
    iconNodeId: '642:2128',
    alt: 'Email',
    wrapWidth: 'var(--contact-info-email-icon-w)',
    wrapHeight: 'var(--contact-info-email-icon-h)',
    imageWidth: '302.36%',
    imageHeight: '231.15%',
    imageLeft: '-104.53%',
    imageTop: '-65.24%',
    textNodeId: '642:2129',
    lines: ['info@zeneai.com', 'zeneai@gmail.com'],
    lineNodeIds: ['642:2130', '642:2131'],
  },
  {
    nodeId: '642:2132',
    iconNodeId: '642:2133',
    alt: 'Address',
    wrapWidth: 'var(--contact-info-address-icon-w)',
    wrapHeight: 'var(--contact-info-address-icon-h)',
    imageWidth: '359.72%',
    imageHeight: '192.12%',
    imageLeft: '-248.71%',
    imageTop: '-44.28%',
    textNodeId: '642:2134',
    lines: [
      'Plot No, 73P, Beverly Hills, Guttala Begumpet, Kavuri Hills, Jubilee Hills, Hyderabad, Telangana 500081',
    ],
    lineNodeIds: ['642:2134'],
  },
] as const

export function ContactFormSection({ panel = false }: ContactFormSectionProps) {
  const navigate = useNavigate()

  return (
    <section
      className={cn(
        'w-full px-[5px]',
        panel ? 'section-scroll-panel section-scroll-panel--form' : 'pt-[5px]',
      )}
      aria-labelledby="contact-form-heading"
      data-node-id="1041:1897"
    >
      <div
        className="relative mx-auto w-full overflow-hidden section-card-shell bg-white"
        style={{ maxWidth: 'var(--section-card-max-w)' }}
        data-node-id="642:2090"
      >
        <div
          style={{
            paddingLeft: 'var(--section-padding-x)',
            paddingRight: 'var(--section-padding-x)',
            paddingTop: 'var(--contact-form-padding-top)',
            paddingBottom: 'var(--contact-form-padding-bottom)',
          }}
        >
          <h2 id="contact-form-heading" className="sr-only">
            Request a demo
          </h2>

          <form
            className="reveal mx-auto w-full max-w-[var(--contact-form-max-w)]"
            onSubmit={event => {
              event.preventDefault()
              navigate('/thank-you')
            }}
          >
            <div
              className="grid grid-cols-1 gap-x-[var(--contact-form-col-gap)] gap-y-[var(--contact-form-row-gap)] sm:grid-cols-2 xl:grid-cols-3"
            >
              <ContactTextField
                name="schoolName"
                placeholder="School Name"
                autoComplete="organization"
                data-node-id="642:2101"
              />
              <ContactSelectField name="city" defaultValue="" data-node-id="642:2113">
                <option value="" disabled>
                  City
                </option>
                <option value="hyderabad">Hyderabad</option>
                <option value="bengaluru">Bengaluru</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
              </ContactSelectField>
              <ContactSelectField name="state" defaultValue="" data-node-id="642:2117">
                <option value="" disabled>
                  State
                </option>
                <option value="telangana">Telangana</option>
                <option value="karnataka">Karnataka</option>
                <option value="maharashtra">Maharashtra</option>
                <option value="delhi">Delhi</option>
              </ContactSelectField>
              <ContactTextField
                name="name"
                placeholder="Name"
                autoComplete="name"
                data-node-id="642:2104"
              />
              <ContactTextField
                name="designation"
                placeholder="Designation"
                autoComplete="organization-title"
                data-node-id="642:2107"
              />
              <ContactTextField
                name="phone"
                type="tel"
                placeholder="Phone Number"
                autoComplete="tel"
                data-node-id="642:2110"
              />
            </div>

            <div
              className="flex justify-center"
              style={{ marginTop: 'var(--contact-form-button-gap)' }}
            >
              <button
                type="submit"
                className="w-full max-w-[var(--contact-form-button-w)] bg-gradient-to-b from-zene-cyan to-zene-blue font-heading uppercase leading-none text-black transition-opacity hover:opacity-90"
                style={{
                  height: 'var(--contact-form-button-h)',
                  borderRadius: 'var(--contact-form-button-radius)',
                  fontSize: 'var(--contact-form-button-text)',
                }}
                data-node-id="642:2120"
              >
                <span data-node-id="642:2121">Request a Demo</span>
              </button>
            </div>
          </form>

          <div
            className="reveal-scale mx-auto grid w-full max-w-[var(--contact-form-max-w)] grid-cols-1 gap-[var(--contact-info-gap)] md:grid-cols-3"
            style={{ marginTop: 'var(--contact-form-info-gap)' }}
          >
            {CONTACT_INFO.map(item => (
              <div
                key={item.nodeId}
                className="flex min-w-0 items-center gap-[var(--contact-info-icon-gap)]"
                data-node-id={item.nodeId}
              >
                <ContactSpriteIcon
                  wrapWidth={item.wrapWidth}
                  wrapHeight={item.wrapHeight}
                  imageWidth={item.imageWidth}
                  imageHeight={item.imageHeight}
                  imageLeft={item.imageLeft}
                  imageTop={item.imageTop}
                  alt={item.alt}
                  nodeId={item.iconNodeId}
                />
                <div
                  className="min-w-0 capitalize font-body font-normal leading-normal text-black"
                  style={{
                    fontSize: 'var(--contact-info-text-size)',
                    fontVariationSettings: "'opsz' 14",
                  }}
                  data-node-id={item.textNodeId}
                >
                  {item.lines.map((line, index) => (
                    <p
                      key={item.lineNodeIds[index]}
                      className={index > 0 ? 'mb-0' : 'mb-0'}
                      style={
                        index > 0
                          ? { marginTop: 'var(--contact-info-line-gap)' }
                          : undefined
                      }
                      data-node-id={item.lineNodeIds[index]}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
