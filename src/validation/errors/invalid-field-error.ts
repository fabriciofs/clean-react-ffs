export class InvalidFieldError extends Error {
  constructor () {
    super('O email é inválido')
    this.name = 'InvalidFieldError'
  }
}
