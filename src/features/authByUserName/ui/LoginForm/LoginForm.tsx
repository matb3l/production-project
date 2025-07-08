import { Input, Typography } from '@mui/material'
import { Button } from '@shared/ui'
import { useTranslation } from 'react-i18next'
import styles from './LoginForm.module.scss'
import { ChangeEvent, memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { loginActions } from '../../model/slice/loginSlice'
import {
  getError,
  getIsLoading,
  getPassword,
  getUsername,
} from '../../model/selectors/getLogin'
import { loginByUsername } from '@features/authByUserName/model/services/loginByUsername.ts'
import { useAppDispatch } from '@app/providers/StoreProvider'

export const LoginForm = memo(() => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const username = useSelector(getUsername)
  const password = useSelector(getPassword)
  const error = useSelector(getError)
  const isLoading = useSelector(getIsLoading)

  const onChangeUsername = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(loginActions.setUsername(e.target.value))
    },
    [dispatch],
  )

  const onChangePassword = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(loginActions.setPassword(e.target.value))
    },
    [dispatch],
  )

  const onSubmit = useCallback(() => {
    dispatch(loginByUsername({ username, password }))
  }, [dispatch, password, username])

  return (
    <div className={styles.LoginForm}>
      {error && (
        <Typography color="error" variant="subtitle1">
          {error}
        </Typography>
      )}
      <Input
        placeholder={t('Введите username')}
        type="text"
        className={styles.Input}
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        placeholder={t('Введите пароль')}
        type="password"
        className={styles.Input}
        onChange={onChangePassword}
        value={password}
      />
      <Button onClick={onSubmit} disabled={isLoading}>
        {t('Авторизоваться')}
      </Button>
    </div>
  )
})
