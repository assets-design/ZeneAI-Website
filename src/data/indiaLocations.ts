export type LocationOption = {
  value: string
  label: string
}

/** Static list — avoids bundling the full country-state-city database (~8 MB) on every page. */
export const INDIAN_STATE_OPTIONS: LocationOption[] = [
  { value: 'AN', label: 'Andaman and Nicobar Islands' },
  { value: 'AP', label: 'Andhra Pradesh' },
  { value: 'AR', label: 'Arunachal Pradesh' },
  { value: 'AS', label: 'Assam' },
  { value: 'BR', label: 'Bihar' },
  { value: 'CH', label: 'Chandigarh' },
  { value: 'CT', label: 'Chhattisgarh' },
  { value: 'DH', label: 'Dadra and Nagar Haveli and Daman and Diu' },
  { value: 'DL', label: 'Delhi' },
  { value: 'GA', label: 'Goa' },
  { value: 'GJ', label: 'Gujarat' },
  { value: 'HR', label: 'Haryana' },
  { value: 'HP', label: 'Himachal Pradesh' },
  { value: 'JK', label: 'Jammu and Kashmir' },
  { value: 'JH', label: 'Jharkhand' },
  { value: 'KA', label: 'Karnataka' },
  { value: 'KL', label: 'Kerala' },
  { value: 'LA', label: 'Ladakh' },
  { value: 'LD', label: 'Lakshadweep' },
  { value: 'MP', label: 'Madhya Pradesh' },
  { value: 'MH', label: 'Maharashtra' },
  { value: 'MN', label: 'Manipur' },
  { value: 'ML', label: 'Meghalaya' },
  { value: 'MZ', label: 'Mizoram' },
  { value: 'NL', label: 'Nagaland' },
  { value: 'OR', label: 'Odisha' },
  { value: 'PY', label: 'Puducherry' },
  { value: 'PB', label: 'Punjab' },
  { value: 'RJ', label: 'Rajasthan' },
  { value: 'SK', label: 'Sikkim' },
  { value: 'TN', label: 'Tamil Nadu' },
  { value: 'TG', label: 'Telangana' },
  { value: 'TR', label: 'Tripura' },
  { value: 'UP', label: 'Uttar Pradesh' },
  { value: 'UT', label: 'Uttarakhand' },
  { value: 'WB', label: 'West Bengal' },
]

type IndiaCitiesByState = Record<string, string[]>

let citiesByState: IndiaCitiesByState | null = null
let citiesPromise: Promise<IndiaCitiesByState> | null = null

export function loadIndiaCities() {
  if (citiesByState) return Promise.resolve(citiesByState)

  if (!citiesPromise) {
    citiesPromise = fetch('/assets/data/india-cities.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load India city list')
        }
        return response.json() as Promise<IndiaCitiesByState>
      })
      .then(data => {
        citiesByState = data
        return data
      })
      .catch(error => {
        citiesPromise = null
        throw error
      })
  }

  return citiesPromise
}

export function getIndianCityOptions(stateIsoCode: string): LocationOption[] {
  if (!stateIsoCode || !citiesByState) return []

  return (citiesByState[stateIsoCode] ?? []).map(name => ({
    value: name,
    label: name,
  }))
}

export function getIndianStateLabel(stateIsoCode: string): string {
  return INDIAN_STATE_OPTIONS.find(option => option.value === stateIsoCode)?.label ?? ''
}
