import { AxiosHttpClient } from './axios.http-client'
import { mockAxios, mockHttpResponse } from '@/infra/test'
import { mockPostRequest } from '@/data/test'
import axios from 'axios'

jest.mock('axios')

type sutTypes = {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): sutTypes => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxios()
  return { sut, mockedAxios }
}

describe('AxiosHttpClient', () => {
  test('Shoud call axios with correct values', async () => {
    const request = mockPostRequest()
    const { sut, mockedAxios } = makeSut()
    await sut.post(request)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })

  test('Shoud return the correct statusCode and body', () => {
    const { sut, mockedAxios } = makeSut()
    const promisse = sut.post(mockPostRequest())
    expect(promisse).toEqual(mockedAxios.post.mock.results[0].value)
  })

  test('Shoud return the correct statusCode and body on failure', () => {
    const { sut, mockedAxios } = makeSut()
    mockedAxios.post.mockRejectedValueOnce({
      response: mockHttpResponse()
    })
    const promisse = sut.post(mockPostRequest())
    expect(promisse).toEqual(mockedAxios.post.mock.results[0].value)
  })
})
