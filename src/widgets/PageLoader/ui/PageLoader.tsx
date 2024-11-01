import styles from './PageLoader.module.scss'
import { Loader } from '@ui/Loader/Loader.tsx'

export const PageLoader = () => (
  <div className={styles.PageLoader}>
    <Loader />
  </div>
)
