import { createContext, useContext } from 'react'
import { useGoogleSheets as useGoogleSheetsHook } from '../hooks/useGoogleSheets'

const SheetsContext = createContext(null)

export function SheetsProvider({ children }) {
  const data = useGoogleSheetsHook()
  return <SheetsContext.Provider value={data}>{children}</SheetsContext.Provider>
}

export function useSheetsData() {
  const ctx = useContext(SheetsContext)
  if (!ctx) {
    throw new Error('useSheetsData must be used within SheetsProvider')
  }
  return ctx
}
