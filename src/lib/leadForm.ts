export type ContactFormPayload = {
  schoolName: string
  state: string
  stateLabel: string
  city: string
  name: string
  designation: string
  phone: string
}

const ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? '9905618a-a4c9-4008-9cc2-e515b2965c1f'

const ENDPOINT = ['https://api.', 'web3forms.com/submit'].join('')

function formatLeadMessage(payload: ContactFormPayload) {
  return [
    `School: ${payload.schoolName}`,
    `State: ${payload.stateLabel || payload.state}`,
    `City: ${payload.city}`,
    `Name: ${payload.name}`,
    `Designation: ${payload.designation}`,
    `Phone: ${payload.phone}`,
  ].join('\n')
}

export async function submitContactForm(payload: ContactFormPayload): Promise<void> {
  const formData = new FormData()
  formData.append('access_key', ACCESS_KEY)
  formData.append('subject', 'Zene AI — Demo request')
  formData.append('name', payload.name)
  formData.append('phone', payload.phone)
  formData.append('message', formatLeadMessage(payload))
  formData.append('school_name', payload.schoolName)
  formData.append('state', payload.stateLabel || payload.state)
  formData.append('city', payload.city)
  formData.append('designation', payload.designation)

  const response = await fetch(ENDPOINT, {
    method: 'POST',
    body: formData,
  })

  const data = (await response.json()) as { success?: boolean; message?: string }

  if (!response.ok || !data.success) {
    throw new Error(
      data.message ?? 'Unable to send your request. Please try again.',
    )
  }
}
