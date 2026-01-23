// https://react.dev/learn/scaling-up-with-reducer-and-context

import { createContext, useState, useContext } from 'react'
import { getData } from '../utils/getData'

const DataContext = createContext(null)

export function DataProvider({ children }) {
  const [data, setData] = useState(getData())
  return <DataContext value={{ data, setData }}>{children}</DataContext>
}

export function useData() {
  return useContext(DataContext)
}
