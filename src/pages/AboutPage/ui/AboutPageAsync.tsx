import { lazy } from 'react'

export const AboutPageAsync = lazy(
  () =>
    new Promise(resolve => {
      // todo исскуственная задержка потом исправить
      // @ts-expect-error
      setTimeout(() => resolve(import('./AboutPage.tsx')), 5000)
    }),
)
