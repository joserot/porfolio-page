import styles from "./line.module.scss";

export default function Line() {
  return (
    <div
      className={`${styles.line} w-[1px] bg-primary absolute left-[10px] top-1`}
    ></div>
  );
}
