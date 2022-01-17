import { ValidationComposite } from './validation-composite'
import { FieldValidation } from '@/validation/protocols/field-validation'
import { FieldValidationSpy } from '@/validation/test'

const makeSut = (validators: FieldValidation[]): ValidationComposite => {
  const sut = new ValidationComposite(validators)
  return sut
}

describe('ValidationComposite', () => {
  test('Shoud return error if any validation fails', () => {
    const fieldValidationSpy = new FieldValidationSpy('any_field')
    const fieldValidationSpy2 = new FieldValidationSpy('any_field')
    fieldValidationSpy2.error = Error('any_error_message')
    const sut = makeSut([
      fieldValidationSpy,
      fieldValidationSpy2
    ])
    const error = sut.validate('any_field', 'any_value')
    expect(error).toBe('any_error_message')
  })
})
