import { http, HttpResponse } from 'msw'

import { SignInBory } from '../sign-in'
export const signInMock = http.post<never, SignInBory>(
  '/authenticate',
  async ({ request }) => {
    const { email } = await request.json()

    if (email === 'teste@teste.com') {
      return new HttpResponse(null, {
        status: 200,
        headers: {
          'Set-Cookie': 'auth-sample-jwt',
        },
      })
    }
    return new HttpResponse(null, { status: 401 })
  },
)
