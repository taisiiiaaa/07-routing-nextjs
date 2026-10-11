'use client'
import { createPortal } from 'react-dom'
import { useEffect } from 'react'
import styles from './Modal.module.css'
import { useRouter } from 'next/navigation'

interface ModalProps {
  children: React.ReactNode
  onClose: () => void
}

const Modal = ({ children, onClose }: ModalProps) => {
  const modalRoot = document.getElementById('modal-root')

  const router = useRouter()
  const close = () => router.back()

  useEffect(() => {
    if (!modalRoot) return

    const originalOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [modalRoot])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [close])

  const handleCloseModal = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      close()
    }
  }

  if (!modalRoot) {
    return null
  }

  return createPortal(
    <div className={styles.backdrop} onClick={handleCloseModal} role='dialog' aria-modal='true'>
      <div className={styles.modal}>{children}</div>
    </div>,
    modalRoot
  )
}

export default Modal
