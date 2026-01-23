import { useEffect, useState } from 'react'
import { useData } from './useData'
import { cyberwareLookUp } from '../data/cyberware'

function getTotalCapacity(data) {
  let total = 0
  for (const [i, a] of Object.entries(data)) {
    a.forEach((b) => {
      total += cyberwareLookUp[i][b].capacity
    })
  }
  return total
}

export function useTotalCapacity() {
  const [data] = useData()

  const [capacity, setCapacity] = useState(() => {
    return getTotalCapacity(data)
  })

  useEffect(() => {
    setCapacity(getTotalCapacity(data))
  }, [data])

  return capacity
}
