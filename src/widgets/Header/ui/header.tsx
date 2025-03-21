import { Box } from '@mui/material'
import styles from './header.module.scss'

export const Header = () => {
  return (
    <Box className={styles.wrapper}>
      <Box className={styles.linkBlock}></Box>
    </Box>
  )
}
