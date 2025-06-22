import { FC, ReactNode } from 'react'
import {
  Modal as MuiModal,
  Box,
  Paper,
  IconButton,
  SxProps,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  title?: string
  width?: number | string
  height?: number | string
  className?: string
  showCloseButton?: boolean
}

export const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  width = 400,
  height,
  className,
  showCloseButton = true,
}) => {
  const modalStyle: SxProps = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width,
    height,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 1,
    p: 3,
    outline: 'none',
    maxWidth: '90vw',
    maxHeight: '90vh',
    overflow: 'auto',
  }

  return (
    <MuiModal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      className={className}
    >
      <Box sx={modalStyle}>
        <Paper elevation={0} sx={{ height: '100%', position: 'relative' }}>
          {showCloseButton && (
            <IconButton
              aria-label="close"
              onClick={onClose}
              sx={{
                position: 'absolute',
                right: -8,
                top: -48,
                color: theme => theme.palette.grey[500],
                zIndex: 1,
              }}
            >
              <CloseIcon />
            </IconButton>
          )}

          {title && (
            <Box
              id="modal-title"
              sx={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                mb: 2,
                pr: showCloseButton ? 4 : 0,
              }}
            >
              {title}
            </Box>
          )}

          <Box
            id="modal-description"
            sx={{ mt: title ? 0 : showCloseButton ? 4 : 0 }}
          >
            {children}
          </Box>
        </Paper>
      </Box>
    </MuiModal>
  )
}
