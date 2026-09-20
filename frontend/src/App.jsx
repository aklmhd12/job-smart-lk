import React, { useEffect, useState } from 'react'

const API_URL = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '')

export default function App() {
  const [apiStatus, setApiStatus] = useState('Checking...')

  useEffect(() => {
    const checkApi = async () => {
      try {
        const response = await fetch(`${API_URL}/api/health`)
        if (!response.ok) throw new Error('API request failed')
        const data = await response.json()
        setApiStatus(data.ok ? 'Connected' : 'Unavailable')
      } catch {
        setApiStatus('Unavailable')
      }
    }

    checkApi()
  }, [])

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', maxWidth: 900, margin: '0 auto', padding: 40 }}>
      <h1>JobSmart.lk</h1>
      <p>Sri Lanka's Trusted Digital Work Marketplace</p>
      <p>
        Backend API: <strong>{apiStatus}</strong>
      </p>
    </main>
  )
}
