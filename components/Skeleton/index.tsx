import styles from "./index.module.scss";

export default function Skeleton({ height }: { height?: number }) {
  return (
    <div
      style={{ height: (height || 100) + "px" }}
      className={styles["skeleton-loading"]}
    ></div>
  );
}
