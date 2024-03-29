import faker from 'faker'
import { RequiredFieldValidation } from './required-field-validation'
import { RequiredFieldError } from '@/validation/errors'

const makeSut = (): RequiredFieldValidation => {
  const sut = new RequiredFieldValidation(faker.database.column())
  return sut
}

describe('RequiredFieldValidation', () => {
  test('Should return error if field is empty', () => {
    const sut = makeSut()
    const error = sut.validate('')
    expect(error).toEqual(new RequiredFieldError())
  })

  test('Should return falsy if field is not empty', () => {
    const sut = makeSut()
    const error = sut.validate(faker.random.word())
    expect(error).toBeFalsy()
  })
})
