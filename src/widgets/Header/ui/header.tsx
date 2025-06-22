import { Box } from '@mui/material'
import styles from './header.module.scss'
import { Button } from '@src/shared/ui/Button/Button'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LoginModal } from '@src/features/authByUserName'

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
      <LoginModal isOpen={isOpenModal} onClose={closeModal} />
    </Box>
  )
}
