export type ProgramVariant = 'english-ai' | 'code-monkey' | 'the-edge'

export function isCustomProgramVariant(variant: ProgramVariant) {
  return variant === 'code-monkey' || variant === 'the-edge'
}
