'use client'

import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

const STORAGE_KEY = 'beecruit-theme'

export default function ThemeToggle({ className = '' }) {
  const [theme, setTheme] = useState('system')

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null
    if (stored === 'light' || stored === 'dark') {
      setTheme(stored)
      applyTheme(stored)
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      const next = prefersDark ? 'dark' : 'light'
      setTheme(next)
      applyTheme(next)
    }
  }, [])

  const applyTheme = (mode) => {
    const root = document.documentElement
    if (mode === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, next)
    }
    applyTheme(next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className={`inline-flex items-center justify-center rounded-lg border-2 px-2.5 py-2 transition-colors duration-200 ${
        theme === 'dark'
          ? 'bg-black text-yellow-400 border-yellow-400 hover:bg-gray-900'
          : 'bg-white text-yellow-600 border-yellow-400 hover:bg-yellow-50'
      } ${className}`}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  )
}


