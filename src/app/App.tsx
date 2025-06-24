import { FC, Suspense, useEffect } from 'react'
import './styles/index.scss'
import { Header } from '@widgets/Header'
import { Sidebar } from '@widgets/Sidebar'
import { AppRouter } from '@app/providers/router'
import { useDispatch } from 'react-redux'
import { userActions } from '@entities/user'

export const App: FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
    <div className="app">
      <Suspense fallback="">
        <Header />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}
