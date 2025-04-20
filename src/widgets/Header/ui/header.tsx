import { Box } from '@mui/material'
import styles from './header.module.scss'
import { Button } from '@src/shared/ui/Button/Button'
import { useCallback, useState } from 'react'
import { Modal } from '@src/shared/ui'
import { useTranslation } from 'react-i18next'

export const Header = () => {
  const { t } = useTranslation()
  const [isOpenModal, setIsOpenModal] = useState(false)

  const closeModal = useCallback(() => {
    setIsOpenModal(false)
  }, [setIsOpenModal])

  const openModal = useCallback(() => {
    setIsOpenModal(true)
  }, [setIsOpenModal])

  return (
    <Box className={styles.wrapper}>
      <Box className={styles.linkBlock}>
        <Button sx={{ justifyItems: 'end' }} onClick={openModal}>
          {t('Войти')}
        </Button>
      </Box>
      <Modal isOpen={isOpenModal} onClose={closeModal}>
        {t('12333')}
      </Modal>
    </Box>
  )
}
