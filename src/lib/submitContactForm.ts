export type ContactFormPayload = {
  schoolName: string
  state: string
  stateLabel: string
  city: string
  name: string
  designation: string
  phone: string
}

const CONTACT_EMAIL =
  import.meta.env.VITE_CONTACT_FORM_EMAIL ?? 'digital@catchline.agency'

export async function submitContactForm(payload: ContactFormPayload): Promise<void> {
  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      _subject: 'Zene AI — Demo request',
      _template: 'table',
      school_name: payload.schoolName,
      state: payload.stateLabel || payload.state,
      city: payload.city,
      contact_name: payload.name,
      designation: payload.designation,
      phone: payload.phone,
    }),
  })

  if (!response.ok) {
    throw new Error('Unable to send your request. Please try again.')
  }

  const data = (await response.json()) as { success?: string }
  if (data.success !== 'true') {
    throw new Error('Unable to send your request. Please try again.')
  }
}
