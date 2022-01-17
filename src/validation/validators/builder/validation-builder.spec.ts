import faker from 'faker'
import { ValidationBuilder as sut } from './validation-builder'
import { RequiredFieldValidation, EmailValidation, MinLengthValidation } from '@/validation/validators'

describe('ValidationBuilder', () => {
  test('Should return RequiredFieldValidation', () => {
    const fieldName = faker.database.column()
    const validations = sut.field(fieldName).required().build()
    expect(validations).toEqual([new RequiredFieldValidation(fieldName)])
  })

  test('Should return EmailFieldValidation', () => {
    const fieldName = faker.database.column()
    const validations = sut.field(fieldName).email().build()
    expect(validations).toEqual([new EmailValidation(fieldName)])
  })

  test('Should return MinLengthFieldValidation', () => {
    const fieldName = faker.database.column()
    const minLength = faker.datatype.number()
    const validations = sut.field(fieldName).min(minLength).build()
    expect(validations).toEqual([new MinLengthValidation(fieldName, minLength)])
  })

  test('Should return a list of validations', () => {
    const fieldName = faker.database.column()
    const minLength = faker.datatype.number()
    const validations = sut.field(fieldName).required().min(minLength).email().build()
    expect(validations).toEqual([
      new RequiredFieldValidation(fieldName),
      new MinLengthValidation(fieldName, minLength),
      new EmailValidation(fieldName)
    ])
  })
})
