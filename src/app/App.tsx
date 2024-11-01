import { FC } from 'react'
import './styles/index.scss'
import { AppRouter } from '@/app/providers/router'
import { Header } from '@/widgets/header/ui/header.tsx'

export const App: FC = () => {
  return (
    <div className='app'>
      <Header />
      <AppRouter />
    </div>
  )
}
