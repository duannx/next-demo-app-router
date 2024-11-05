import styles from './index.module.scss'

export default function LazyComponent() {
  return <h2 className={`${styles.LazyComponent}`}> This is a lazy component </h2>;
}
