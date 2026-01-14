import { useMemo } from 'react'

export function useData() {
  return useMemo(() => {
    const params = new URLSearchParams(window.location.search)
    const result = {}

    for (const [key, value] of params.entries()) {
      result[key] = value
        .split(',')
        .map((v) => decodeURIComponent(v.trim()))
        .filter(Boolean)
    }

    return result
  }, [])
}
