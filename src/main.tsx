import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app/App.tsx'
import { BrowserRouter } from 'react-router-dom'

import '@shared/config/i18n/i18n.ts'
import { ErrorBoundary } from '@app/providers/ErrorBoundary'
import { StoreProvider } from '@app/providers/StoreProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </StoreProvider>
    </BrowserRouter>
  </StrictMode>,
)
