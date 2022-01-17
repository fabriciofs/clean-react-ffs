import { InvalidFieldError } from '@/validation/errors/invalid-field-error'
import { MinLengthValidation } from './min-length-validation'
import faker from 'faker'

const makeSut = (minLength: number): MinLengthValidation => {
  const sut = new MinLengthValidation(faker.database.column(), minLength)
  return sut
}

describe('MinLengthValidation', () => {
  test('Should return error if value is invalid', () => {
    const sut = makeSut(5)
    const error = sut.validate(faker.datatype.string(3))
    expect(error).toEqual(new InvalidFieldError())
  })

  test('Should return falsy if value is valid', () => {
    const sut = makeSut(5)
    const error = sut.validate(faker.datatype.string(5))
    expect(error).toBeNull()
  })
})
