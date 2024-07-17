import styles from './styles/GameLayout.module.css'

function GameLayout({ children }) {
  return <div className={styles.layout}>{children}</div>;
}

export default GameLayout;
