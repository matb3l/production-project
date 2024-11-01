import { Button as MuiButton, ButtonProps } from '@mui/material'
import styles from './Button.module.scss'

export function Button(props: ButtonProps) {
  return <MuiButton className={styles.button} {...props}></MuiButton>
}
