import { Box } from '@mui/material'
import styles from './header.module.scss'
import { AppLink } from '@ui/AppLink/AppLink.tsx'
import { RoutePath } from '@shared/config/routeConfig/routeConfig.tsx'
import { useTranslation } from 'react-i18next'

export const Header = () => {
  const { t } = useTranslation()
  return (
    <Box className={styles.wrapper}>
      <Box className={styles.linkBlock}>
        <AppLink to={RoutePath.main}>{t('На главную')}</AppLink>
        <AppLink to={RoutePath.about}>{t('О сайте')}</AppLink>
      </Box>
    </Box>
  )
}
