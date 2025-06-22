import { Input } from '@mui/material'
import { Button } from '@shared/ui'
import { useTranslation } from 'react-i18next'
import styles from './LoginForm.module.scss'

export const LoginForm = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.LoginForm}>
      <Input
        placeholder={t('Введите username')}
        type="text"
        className={styles.Input}
      />
      <Input
        placeholder={t('Введите пароль')}
        type="password"
        className={styles.Input}
      />
      <Button>{t('Авторизоваться')}</Button>
    </div>
  )
}
