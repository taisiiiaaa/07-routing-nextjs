import Modal from '@/components/Modal/Modal'
import { fetchNoteById } from '@/lib/api'
import styles from './NotePreview.module.css'

type Props = {
  params: Promise<{ id: string }>
}

const NotePreview = async ({ params }: Props) => {
  const { id } = await params
  const note = await fetchNoteById(id)

  return (
    <Modal>
      <div className={styles.header}>
        <h2>{note.title}</h2>
      </div>

      <p className={styles.tag}>{note.tag}</p>

      <p className={styles.content}>{note.content}</p>

      <p className={styles.date}>{new Date(note.createdAt).toLocaleDateString()}</p>
    </Modal>
  )
}

export default NotePreview
