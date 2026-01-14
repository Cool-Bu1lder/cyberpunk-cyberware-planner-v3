import { createContext, useContext, useState } from 'react'

const PageContext = createContext(null)

export function PageProvider({ children }) {
  const [page, setPage] = useState('MainMenu')
  return <PageContext value={{page, setPage}}>{children}</PageContext>
}

export function usePage() {
  return useContext(PageContext)
}
