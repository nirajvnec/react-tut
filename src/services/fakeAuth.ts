export type User = {
  id: number
  email: string
  name: string
}

const FAKE_USER: User = {
  id: 1,
  email: 'demo@example.com',
  name: 'Demo User',
}

const FAKE_PASSWORD = 'Password123!'

export async function login(email: string, password: string): Promise<User> {
  // Simulate network delay
  await new Promise((r) => setTimeout(r, 600))

  if (email === FAKE_USER.email && password === FAKE_PASSWORD) return FAKE_USER
  throw new Error('Invalid email or password')
}

