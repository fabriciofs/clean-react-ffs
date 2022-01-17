import { ValidationBuilder, ValidationComposite } from '@/validation/validators'
import { makeLoginValidation } from './login-validation-factory'
describe('LoginValidationFactory', () => {
  test('Shoud compose ValidationComposite with corret validations', () => {
    const composite = makeLoginValidation()
    expect(composite).toEqual(new ValidationComposite([
      ...ValidationBuilder.field('email').required().email().build(),
      ...ValidationBuilder.field('password').required().min(5).build()
    ]))
  })
})
