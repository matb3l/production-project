import { Box, Typography } from '@mui/material'
import { Button } from '@ui/Button/Button.tsx'
import { useTranslation } from 'react-i18next'

export const NotFoundPage = () => {
  const { t } = useTranslation('NotFound')
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#f44336',
      }}
    >
      <Typography variant='h1' style={{ color: 'white' }}>
        404
      </Typography>
      <Typography variant='h6' style={{ color: 'white' }}>
        {t('Страница не найдена')}
      </Typography>
      <Button variant='contained'>{t('Вернуться домой')}</Button>
    </Box>
  )
}
