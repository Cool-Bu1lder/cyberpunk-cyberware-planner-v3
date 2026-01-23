// https://stackoverflow.com/a/8495740
export function arrayToChunks(array, chunkSize) {
  const result = []
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize))
  }
  return result
}

export function arraysEqual(a, b) {
  return a.length === b.length && a.every((v, i) => v === b[i])
}
