import { FC, ReactNode, useCallback } from 'react'
import styles from './Modal.module.scss'
import classNames from 'classnames'
import { Portal } from '@mui/material'

interface ModalProps {
  children: ReactNode
  onClose: () => void
  isOpen: boolean
}

export const Modal: FC<ModalProps> = ({
  children,
  isOpen = false,
  onClose,
}) => {
  const handleOverlayClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }, [])

  return (
    <Portal>
      <div
        className={classNames(styles.Modal, {
          [styles.Opened]: isOpen,
        })}
      >
        <div className={styles.Overlay} onClick={handleOverlayClick}>
          <div className={styles.Content}>{children}</div>
        </div>
      </div>
    </Portal>
  )
}
