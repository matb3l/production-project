import { useTranslation } from 'react-i18next'
import { Button } from '@ui/Button/Button.tsx'
import { FC } from 'react'
import styles from './LangSwitcher.module.scss'

interface LangSwitcherProps {
  short?: boolean
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ short }) => {
  const { t, i18n } = useTranslation()

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button onClick={toggle} className={styles.switcherBtn}>
      {t(short ? 'Короткий язык' : 'Язык')}
    </Button>
  )
}
