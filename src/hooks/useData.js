const defaultSearch = '?a=&b=&c=&d=&e=&f=&g=&h=&i=&j=' // TODO: create from array of letters
const defaultSearchParams = new URLSearchParams(defaultSearch)
const defaultSearchKeys = Array.from(defaultSearchParams.keys())

function readSearchParams(searchParams) {
  const result = {}
  for (const [key, value] of searchParams) {
    result[key] = value.split('')
  }
  return result
}

function arraysEqual(a, b) {
  return a.length === b.length && a.every((v, i) => v === b[i])
}

export function useData() {
  const searchParams = new URLSearchParams(window.location.search) // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
  const urlKeys = Array.from(searchParams.keys())

  // TODO: validate ids in categories
  if (!arraysEqual(urlKeys, defaultSearchKeys)) {
    window.history.replaceState(null, '', defaultSearch)
    return readSearchParams(defaultSearchParams)
  }

  return readSearchParams(searchParams)
}
