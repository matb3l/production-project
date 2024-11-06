import { useTranslation } from 'react-i18next'
import { Button } from '@ui/Button/Button.tsx'
import { Typography } from '@mui/material'
import styles from './PageError.module.scss'

export const PageError = () => {
  const { t } = useTranslation('Error')

  const reloadPage = () => {
    window.location.reload()
  }

  return (
    <div className={styles.Wrapper}>
      <Typography>{t('Произошла непредвиденнная ошибка')}</Typography>
      <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
    </div>
  )
}
