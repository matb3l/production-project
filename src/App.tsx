import { FC, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { AboutPage } from './pages/AboutPage'
import { MainPage } from './pages/MainPage'
import './styles/index.scss'

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export const App: FC = () => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT)

  const toogleTheme = () => {
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
  }

  return (
    <div className={`app ${theme}`}>
      <button onClick={toogleTheme}>Изменить тему</button>
      <Link to='/about'>О сайте</Link>
      <Link to='/'>Главная</Link>
      <Routes>
        <Route path='/about' element={<AboutPage />} />
        <Route path='/' element={<MainPage />} />
      </Routes>
    </div>
  )
}
