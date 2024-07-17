import styles from "./styles/PlayerLayout.module.css";

function PlayerLayout({ children, isLoading }) {
  return <div className={styles.layout} style={{justifyContent: isLoading && "center", alignItems: isLoading && "center"}}>{children}</div>;
}

export default PlayerLayout;
