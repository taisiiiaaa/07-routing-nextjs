'use client'
import { useRouter } from 'next/navigation'
import Modal from '@/components/Modal/Modal'
import type { Note } from '@/types/note'
import styles from './NotePreview.module.css'

interface NotePreviewClientProps {
  note: Note
}

const NotePreviewClient = ({ note }: NotePreviewClientProps) => {
  const router = useRouter()

  const handleClose = () => {
    router.back()
  }

  return (
    <Modal onClose={handleClose}>
      <div className={styles.header}>
        <h2>{note.title}</h2>
      </div>

      <p className={styles.tag}>{note.tag}</p>

      <p className={styles.content}>{note.content}</p>

      <p className={styles.date}>{new Date(note.createdAt).toLocaleDateString()}</p>
    </Modal>
  )
}

export default NotePreviewClient
