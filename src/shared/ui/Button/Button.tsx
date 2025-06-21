import { Button as MuiButton, ButtonProps } from '@mui/material'
import styles from './Button.module.scss'

export function Button(props: ButtonProps) {
  return (
    <MuiButton
      data-testid="button"
      className={styles.button}
      {...props}
    ></MuiButton>
  )
}
