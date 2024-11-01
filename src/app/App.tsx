import { FC, Suspense } from 'react'
import './styles/index.scss'
import { Header } from '@widgets/Header'
import { Sidebar } from '@widgets/Sidebar'
import { AppRouter } from '@app/providers/router'

export const App: FC = () => {
  return (
    <div className='app'>
      <Suspense fallback=''>
        <Header />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}
