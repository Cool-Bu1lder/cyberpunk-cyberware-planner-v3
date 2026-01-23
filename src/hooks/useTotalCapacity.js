import { useData } from '../contexts/DataContext'
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
  const { data } = useData()
  return getTotalCapacity(data)
}
