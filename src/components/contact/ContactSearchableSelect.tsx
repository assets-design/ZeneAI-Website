import chevronDown from '@/assets/figma/contact/section-2/chevron-down.svg'
import { cn } from '@/lib/utils'
import { useEffect, useId, useMemo, useRef, useState } from 'react'

import type { LocationOption } from '@/data/indiaLocations'

const FIELD_CLASS =
  'contact-form-field contact-searchable-select__trigger w-full box-border border border-black/60 bg-white normal-case font-body font-medium text-black outline-none transition-colors focus:border-zene-blue'

const FIELD_STYLE = {
  minHeight: 'var(--contact-form-field-h)',
  height: 'var(--contact-form-field-h)',
  lineHeight: '1.25',
  borderRadius: 'var(--contact-form-field-radius)',
  paddingLeft: 'var(--contact-form-field-padding-x)',
  paddingRight: 'calc(var(--contact-form-field-padding-x) + 28px)',
  paddingTop: '0.35em',
  paddingBottom: '0.35em',
  fontSize: 'var(--contact-form-field-text)',
  fontVariationSettings: "'opsz' 14",
} as const

type ContactSearchableSelectProps = {
  name: string
  placeholder: string
  options: LocationOption[]
  value: string
  onChange: (value: string) => void
  disabled?: boolean
  required?: boolean
  'data-node-id'?: string
}

export function ContactSearchableSelect({
  name,
  placeholder,
  options,
  value,
  onChange,
  disabled = false,
  required = false,
  'data-node-id': dataNodeId,
}: ContactSearchableSelectProps) {
  const listId = useId()
  const rootRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLInputElement>(null)
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  const selectedLabel = options.find(option => option.value === value)?.label ?? ''

  const filteredOptions = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) return options
    return options.filter(option => option.label.toLowerCase().includes(normalized))
  }, [options, query])

  useEffect(() => {
    if (!open) return undefined

    const handlePointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false)
        setQuery('')
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    return () => document.removeEventListener('mousedown', handlePointerDown)
  }, [open])

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => searchRef.current?.focus())
    } else {
      setQuery('')
    }
  }, [open])

  return (
    <div ref={rootRef} className="contact-searchable-select relative w-full" data-node-id={dataNodeId}>
      <input type="hidden" name={name} value={value} required={required} />

      <button
        type="button"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-disabled={disabled}
        title={disabled ? 'Select a state first' : undefined}
        className={cn(
          FIELD_CLASS,
          'text-left',
          !selectedLabel && 'text-black/50',
          disabled && 'cursor-not-allowed opacity-60',
        )}
        style={FIELD_STYLE}
        onClick={() => {
          if (disabled) return
          setOpen(previous => !previous)
        }}
      >
        {selectedLabel || placeholder}
      </button>

      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 flex items-center"
        style={{ right: 'var(--contact-form-field-padding-x)' }}
      >
        <img
          src={chevronDown}
          alt=""
          className={cn('rotate-90 object-contain opacity-50 transition-transform', open && 'rotate-180')}
          style={{
            width: 'var(--contact-form-chevron-w)',
            height: 'var(--contact-form-chevron-h)',
          }}
        />
      </span>

      {open ? (
        <div
          id={listId}
          role="listbox"
          className="contact-searchable-select__menu absolute left-0 right-0 z-20 mt-2 overflow-hidden border border-black/20 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
          style={{ borderRadius: '20px' }}
        >
          <div className="border-b border-black/10 p-3">
            <input
              ref={searchRef}
              type="search"
              value={query}
              onChange={event => setQuery(event.target.value)}
              placeholder={`Search ${placeholder.toLowerCase()}…`}
              className="contact-searchable-select__search w-full border border-black/30 bg-white px-4 py-2 font-body text-black outline-none focus:border-zene-blue"
              style={{
                borderRadius: '20px',
                fontSize: 'var(--contact-form-field-text)',
                fontVariationSettings: "'opsz' 14",
              }}
              aria-label={`Search ${placeholder}`}
            />
          </div>

          <ul className="max-h-[min(280px,40dvh)] overflow-y-auto py-1">
            {filteredOptions.length === 0 ? (
              <li className="px-4 py-3 font-body text-black/60" style={{ fontSize: 'var(--contact-form-field-text)' }}>
                No matches found
              </li>
            ) : (
              filteredOptions.map(option => (
                <li key={option.value}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={value === option.value}
                    className={cn(
                      'w-full px-4 py-2.5 text-left font-body font-medium normal-case text-black transition-colors hover:bg-zene-cyan/20',
                      value === option.value && 'bg-zene-cyan/30',
                    )}
                    style={{
                      fontSize: 'var(--contact-form-field-text)',
                      fontVariationSettings: "'opsz' 14",
                    }}
                    onClick={() => {
                      onChange(option.value)
                      setOpen(false)
                    }}
                  >
                    {option.label}
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      ) : null}
    </div>
  )
}
