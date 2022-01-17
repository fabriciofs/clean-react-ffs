import { ValidationComposite } from './validation-composite'
import { FieldValidationSpy } from '@/validation/test'

type SutTypes = {
  sut: ValidationComposite
  fieldValitationsSpy: FieldValidationSpy[]
}

const makeSut = (): SutTypes => {
  const fieldValidationSpy1 = new FieldValidationSpy('any_field')
  const fieldValidationSpy2 = new FieldValidationSpy('any_field')
  const fieldValitationsSpy = [
    fieldValidationSpy1,
    fieldValidationSpy2
  ]
  const sut = new ValidationComposite(fieldValitationsSpy)
  return { sut, fieldValitationsSpy }
}

describe('ValidationComposite', () => {
  test('Shoud return error if any validation fails', () => {
    const { sut, fieldValitationsSpy } = makeSut()
    fieldValitationsSpy[0].error = Error('first_error_message')
    fieldValitationsSpy[1].error = Error('second_error_message')
    const error = sut.validate('any_field', 'any_value')
    expect(error).toBe('first_error_message')
  })
})
