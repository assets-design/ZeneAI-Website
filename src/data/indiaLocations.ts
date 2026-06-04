import { City, State } from 'country-state-city'

export type LocationOption = {
  value: string
  label: string
}

const INDIAN_STATES = State.getStatesOfCountry('IN')

export const INDIAN_STATE_OPTIONS: LocationOption[] = INDIAN_STATES.map(state => ({
  value: state.isoCode,
  label: state.name,
})).sort((a, b) => a.label.localeCompare(b.label))

export function getIndianCityOptions(stateIsoCode: string): LocationOption[] {
  if (!stateIsoCode) return []

  return City.getCitiesOfState('IN', stateIsoCode)
    .map(city => ({
      value: city.name,
      label: city.name,
    }))
    .sort((a, b) => a.label.localeCompare(b.label))
}

export function getIndianStateLabel(stateIsoCode: string): string {
  return INDIAN_STATE_OPTIONS.find(option => option.value === stateIsoCode)?.label ?? ''
}
