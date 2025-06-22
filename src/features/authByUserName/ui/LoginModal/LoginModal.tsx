import { LoginForm } from '../LoginForm/LoginForm'
import { FC } from 'react'
import { Modal } from '@shared/ui'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} showCloseButton>
      <LoginForm />
    </Modal>
  )
}
