import styles from './index.module.scss'

export default function LazyOnClickComponent() {
  return <h2 className={`${styles.LazyComponent}`}> This is a lazy on click component </h2>;
}
