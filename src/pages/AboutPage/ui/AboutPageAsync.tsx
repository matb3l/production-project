import { lazy, Suspense } from 'react'
import { PageLoader } from '@widgets/PageLoader'

const AboutPage = lazy(() => import('./AboutPage.tsx'))

export const AboutPageAsync = () => (
  <Suspense fallback={<PageLoader />}>
    <AboutPage />
  </Suspense>
)
