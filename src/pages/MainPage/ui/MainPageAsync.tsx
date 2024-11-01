import { lazy, Suspense } from 'react'

const MainPage = lazy(() => import('./MainPage'))

export const MainPageAsync = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <MainPage />
  </Suspense>
)
