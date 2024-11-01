import { FC } from 'react'
import './styles/index.scss'
import { AppRouter } from '@/app/providers/router'
import { Header } from '@/widgets/Header'
import { Sidebar } from '@/widgets/Sidebar'

export const App: FC = () => {
  return (
    <div className='app'>
      <Header />
      <div className='content-page'>
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  )
}
