import { LoginForm } from '../LoginForm/LoginForm'
import { FC } from 'react'
import { Modal } from '@mui/material'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal onClose={onClose} open={isOpen}>
      <LoginForm />
    </Modal>
  )
}
