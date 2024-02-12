import {QueryClientProvider} from '@tanstack/react-query'
import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

import {queryClient} from '@src/lib/react-query'

type AppProviderProps = {
  children: React.ReactNode
}

export const AppProvider: React.FC<AppProviderProps> = ({children}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>{children}</Router>
    </QueryClientProvider>
  )
}
