import styles from './EmptyState.module.css'

interface EmptyStateProps {
  searchQuery: string
  tag: string | undefined
}

const EmptyState = ({ searchQuery, tag }: EmptyStateProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>No notes found</h2>

      {searchQuery ? (
        <p className={styles.text}>No notes match &quot;{searchQuery}&quot;.</p>
      ) : tag ? (
        <p className={styles.text}>No notes found for the &quot;{tag}&quot; tag.</p>
      ) : (
        <p className={styles.text}>You have no notes yet. Create your first note!</p>
      )}
    </div>
  )
}

export default EmptyState
