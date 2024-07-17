import styles from "./Spinner.module.css";

function Spinner({ color = "#000" }) {
  return <div className={styles.ldsDualRing} style={{ color }}></div>;
}

export default Spinner;
