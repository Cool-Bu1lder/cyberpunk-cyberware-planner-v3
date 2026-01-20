// https://react.dev/learn/scaling-up-with-reducer-and-context

import { createContext, useContext, useState } from 'react'

const PageContext = createContext(null)

const initialPage = 'MainMenu'

export function PageProvider({ children }) {
  const [page, setPage] = useState(initialPage)
  return <PageContext value={{ page, setPage }}>{children}</PageContext>
}

export function usePage() {
  return useContext(PageContext)
}
