import { useMemo, useState } from 'react'
import { login } from '../services/fakeAuth'

export default function LoginPage() {
  const [email, setEmail] = useState('demo@example.com')
  const [password, setPassword] = useState('Password123!')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const demoText = useMemo(
    () => 'Demo account: demo@example.com / Password123!',
    [],
  )

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const user = await login(email.trim(), password)
      alert(`Logged in as ${user.name} (${user.email})`)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        padding: 24,
        background:
          'radial-gradient(800px circle at 50% 30%, rgba(99, 102, 241, 0.25), transparent 55%), #0b1220',
        color: '#e5e7eb',
      }}
    >
      <form
        onSubmit={onSubmit}
        style={{
          width: 'min(420px, 100%)',
          padding: 24,
          borderRadius: 14,
          background: 'rgba(2, 6, 23, 0.75)',
          border: '1px solid rgba(148, 163, 184, 0.20)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.55)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <div style={{ marginBottom: 16 }}>
          <h1
            style={{
              margin: 0,
              fontSize: 26,
              letterSpacing: -0.2,
              color: '#ffffff',
              fontWeight: 750,
              lineHeight: 1.15,
            }}
          >
            Sign in
          </h1>
          <p style={{ margin: '8px 0 0', color: '#9ca3af', fontSize: 13 }}>
            {demoText}
          </p>
        </div>

        <label style={{ display: 'block', fontSize: 13, marginBottom: 6 }}>
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="username"
          style={{
            width: '100%',
            padding: '10px 12px',
            borderRadius: 10,
            border: '1px solid rgba(148, 163, 184, 0.25)',
            background: 'rgba(2, 6, 23, 0.6)',
            color: '#e5e7eb',
            outline: 'none',
            marginBottom: 14,
          }}
        />

        <label style={{ display: 'block', fontSize: 13, marginBottom: 6 }}>
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
          style={{
            width: '100%',
            padding: '10px 12px',
            borderRadius: 10,
            border: '1px solid rgba(148, 163, 184, 0.25)',
            background: 'rgba(2, 6, 23, 0.6)',
            color: '#e5e7eb',
            outline: 'none',
            marginBottom: 10,
          }}
        />

        {error ? (
          <div
            role="alert"
            style={{
              marginTop: 8,
              padding: '10px 12px',
              borderRadius: 10,
              border: '1px solid rgba(248, 113, 113, 0.30)',
              background: 'rgba(127, 29, 29, 0.25)',
              color: '#fecaca',
              fontSize: 13,
            }}
          >
            {error}
          </div>
        ) : null}

        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%',
            marginTop: 14,
            padding: '11px 12px',
            borderRadius: 10,
            border: '1px solid rgba(99, 102, 241, 0.45)',
            background: loading ? 'rgba(99, 102, 241, 0.35)' : '#6366f1',
            color: '#fff',
            fontWeight: 650,
            cursor: loading ? 'default' : 'pointer',
          }}
        >
          {loading ? 'Signing in…' : 'Sign in'}
        </button>

        <div
          style={{
            marginTop: 14,
            display: 'flex',
            justifyContent: 'space-between',
            gap: 12,
            color: '#9ca3af',
            fontSize: 12,
          }}
        >
          <span>Forgot password (next)</span>
          <span>Register (next)</span>
        </div>
      </form>
    </div>
  )
}

