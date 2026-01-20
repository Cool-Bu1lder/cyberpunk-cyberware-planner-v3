export const categories = [
  {
    id: 'a',
    label: 'FRONTAL CORTEX',
    slots: 3,
  },
  {
    id: 'b',
    label: 'OPERATING SYSTEM',
    slots: 1,
  },
  {
    id: 'c',
    label: 'ARMS',
    slots: 1,
  },
  {
    id: 'd',
    label: 'FACE',
    slots: 1,
  },
  {
    id: 'e',
    label: 'SKELETON',
    slots: 3,
  },
  {
    id: 'f',
    label: 'HANDS',
    slots: 2,
  },
  {
    id: 'g',
    label: 'NERVOUS SYSTEM',
    slots: 3,
  },
  {
    id: 'h',
    label: 'CIRCULATORY SYSTEM',
    slots: 3,
  },
  {
    id: 'i',
    label: 'INTEGUMENTARY SYSTEM',
    slots: 3,
  },
  {
    id: 'j',
    label: 'LEGS',
    slots: 1,
  },
]

// https://stackoverflow.com/a/26265095
export const categoriesLookUp = categories.reduce(function (map, obj, index) {
  map[obj.id] = {
    label: obj.label,
    slots: obj.slots,
    order: index,
  }
  return map
}, {})
