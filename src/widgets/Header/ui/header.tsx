import { Box } from '@mui/material'
import styles from './header.module.scss'
import { Button } from '@src/shared/ui/Button/Button'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LoginModal } from '@src/features/authByUserName'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthUserData, userActions } from '@entities/user'

export const Header = () => {
  const { t } = useTranslation()
  const [isOpenModal, setIsOpenModal] = useState(false)

  const dispatch = useDispatch()
  const authData = useSelector(getAuthUserData)

  const closeModal = useCallback(() => {
    setIsOpenModal(false)
  }, [setIsOpenModal])

  const openModal = useCallback(() => {
    setIsOpenModal(true)
  }, [setIsOpenModal])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
    setIsOpenModal(false)
  }, [dispatch])

  if (authData) {
    return (
      <Box className={styles.wrapper}>
        <Box className={styles.linkBlock}>
          <Button sx={{ justifyItems: 'end' }} onClick={onLogout}>
            {t('Выйти')}
          </Button>
        </Box>
      </Box>
    )
  }

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
