import { Box } from '@mui/material'
import styles from './header.module.scss'
import { Button } from '@ui/Button/Button.tsx'
import { AppLink } from '@ui/AppLink/AppLink.tsx'
import { RoutePath } from '@shared/config/routeConfig/routeConfig.tsx'

export const Header = () => {
  return (
    <Box className={styles.wrapper}>
      <Button>check</Button>
      <Box className={styles.linkBlock}>
        <AppLink to={RoutePath.main}>На главную</AppLink>
        <AppLink to={RoutePath.about}>О Сайте</AppLink>
      </Box>
    </Box>
  )
}
