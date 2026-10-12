import { useEffect, useState } from 'react'

export default function usePersistentState(key, initial) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key)
      return stored === null ? (typeof initial === 'function' ? initial() : initial) : JSON.parse(stored)
    } catch {
      return typeof initial === 'function' ? initial() : initial
    }
  })
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      /* storage unavailable */
    }
  }, [key, value])
  return [value, setValue]
}
