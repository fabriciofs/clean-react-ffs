import React from 'react'
import { Login } from '@/presentation/pages'
import { RemoteAuthentication } from '@/data/usecases/authentication/remote-authentication'
import { AxiosHttpClient } from '@/infra/http/axios-http-client/axios.http-client'
import { ValidationComposite, ValidationBuilder } from '@/validation/validators'

export const makeLogin: React.FC = () => {
  const url = 'http://fordevs.herokuapp.com/api/login'
  const axiosHttpCliente = new AxiosHttpClient()
  const remoteAuthentication = new RemoteAuthentication(url, axiosHttpCliente)
  const validationComposite = new ValidationComposite([
    ...ValidationBuilder.field('email').required().email().build(),
    ...ValidationBuilder.field('password').required().min(5).build()
  ])
  return (
    <Login
    authentication={remoteAuthentication}
    validation={validationComposite}
    />
  )
}
