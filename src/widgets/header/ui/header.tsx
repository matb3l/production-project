import { Box } from '@mui/material'
import styles from './header.module.scss'
import { AppLink } from '@/shared/ui/AppLink/AppLink.tsx'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig.tsx'

export const Header = () => {
  return (
    <Box className={styles.wrapper}>
      <Box className={styles.linkBlock}>
        <AppLink to={RoutePath.main}>На главную</AppLink>
        <AppLink to={RoutePath.about}>О Сайте</AppLink>
      </Box>
    </Box>
  )
}
