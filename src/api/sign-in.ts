import { api } from '@/lib/axios'

export interface SignInBory {
  email: string
}
export async function signIn({ email }: SignInBory) {
  await api.post('/authenticate', { email })
}
