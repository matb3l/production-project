import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/index.scss'
import { AppRouter } from '@/app/providers/router'

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
      <AppRouter />
    </div>
  )
}
