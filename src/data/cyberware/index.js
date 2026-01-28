import { frontalCortex } from './frontal-cortex'
import { operatingSystem } from './operating-system'
import { arms } from './arms'
import { face } from './face'
import { skeleton } from './skeleton'
import { hands } from './hands'
import { nervousSystem } from './nervous-system'
import { circulatorySystem } from './circulatory-system'
import { integumentarySystem } from './integumentary-system.js'
import { legs } from './legs'

export const cyberware = {
  a: frontalCortex,
  b: operatingSystem,
  c: arms,
  d: face,
  e: skeleton,
  f: hands,
  g: nervousSystem,
  h: circulatorySystem,
  i: integumentarySystem,
  j: legs,
}

export const cyberwareLookUp = Object.keys(cyberware).reduce(
  (accumulator, categoryId) => {
    accumulator[categoryId] = cyberware[categoryId].reduce(
      (map, obj, index) => {
        map[obj.id] = {
          label: obj.label,
          capacity: obj.capacity,
          icon: obj.icon,
          armor: obj.armor,
          conflicts: obj.conflicts,
          order: index,
        }
        return map
      },
      {},
    )
    return accumulator
  },
  {},
)
