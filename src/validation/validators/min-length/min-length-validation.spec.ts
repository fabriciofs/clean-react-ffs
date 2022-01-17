import { InvalidFieldError } from '@/validation/errors/invalid-field-error'
import { MinLengthValidation } from './min-length-validation'

const makeSut = (): MinLengthValidation => {
  const sut = new MinLengthValidation('field', 5)
  return sut
}

describe('MinLengthValidation', () => {
  test('Should return error if value is invalid', () => {
    const sut = makeSut()
    const error = sut.validate('123')
    expect(error).toEqual(new InvalidFieldError())
  })
})
