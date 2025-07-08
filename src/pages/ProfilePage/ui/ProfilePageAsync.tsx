import { lazy, Suspense } from 'react'
import { PageLoader } from '@widgets/PageLoader'

const ProfilePage = lazy(() => import('./ProfilePage.tsx'))

export const ProfilePageAsync = () => (
  <Suspense fallback={<PageLoader />}>
    <ProfilePage />
  </Suspense>
)
