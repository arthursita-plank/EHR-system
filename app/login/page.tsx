"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate network delay
    setTimeout(() => {
      setLoading(false)
      router.push("/dashboard")
    }, 1000)
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-logo">
          <span>open</span>
          <span>EMR</span>
        </div>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="login-username">Username</label>
            <input
              id="login-username"
              name="login-username"
              className="form-control"
              type="text"
              placeholder="Enter your username"
              required
              defaultValue="drsmith"
            />
          </div>
          <div className="form-group">
            <label htmlFor="login-password">Password</label>
            <input
              id="login-password"
              name="login-password"
              className="form-control"
              type="password"
              placeholder="********"
              required
              defaultValue="password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="login-email">E-Mail Address</label>
            <input
              id="login-email"
              name="login-email"
              className="form-control"
              type="email"
              placeholder="name@example.com"
              defaultValue="drsmith@openemr.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="login-language">Language</label>
            <select id="login-language" className="form-control">
              <option>English (Standard)</option>
            </select>
          </div>
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? "Authenticating..." : "Log In"}
          </button>
        </form>
      </div>
    </div>
  )
}
