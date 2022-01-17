export class InvalidFieldError extends Error {
  constructor (readonly fieldLabel: string) {
    super(`O Campo ${fieldLabel} é inválido`)
    this.name = 'InvalidFieldError'
  }
}
