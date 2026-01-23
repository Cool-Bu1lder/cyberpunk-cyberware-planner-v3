import { useData } from '../contexts/DataContext'
import { cyberwareLookUp } from '../data/cyberware'

function getTotalArmor(data) {
  let total = 0
  for (const [i, a] of Object.entries(data)) {
    a.forEach((b) => {
      if (cyberwareLookUp[i][b].armor) {
        total += cyberwareLookUp[i][b].armor
      }
    })
  }
  return total
}

export function useTotalArmor() {
  const { data } = useData()
  return getTotalArmor(data)
}
