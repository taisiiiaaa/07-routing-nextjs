import styles from './page.module.css'

const NotFoundPage = () => {
  return (
    <>
      <h1 className={styles.title}>404 - Page not found</h1>
      <p className={styles.description}>Sorry, the page you are looking for does not exist.</p>
    </>
  )
}

export default NotFoundPage
