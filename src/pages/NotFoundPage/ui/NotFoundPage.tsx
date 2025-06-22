import { Box, Typography } from '@mui/material'
import { Button } from '@ui/Button/Button.tsx'
import { useTranslation } from 'react-i18next'
import styles from './NotFoundPage.module.css'

export const NotFoundPage = () => {
  const { t } = useTranslation('NotFound')
  return (
    <Box
      className={styles.notFoundPage}
    >
      <Typography variant='h1' color='textPrimary'>
        404
      </Typography>
      <Typography variant='h6' color="textPrimary">
        {t('Страница не найдена')}
      </Typography>
      <Button variant='contained'>{t('Вернуться домой')}</Button>
    </Box>
  )
}
