import { lazy, Suspense } from 'react'

const AboutPage = lazy(() => import('./AboutPage.tsx'))

export const AboutPageAsync = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <AboutPage />
  </Suspense>
)
