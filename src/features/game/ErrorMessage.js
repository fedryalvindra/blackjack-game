import styles from "./styles/ErrorMessage.module.css";

function ErrorMessage({ error }) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h1>{error}</h1>
      </div>
    </div>
  );
}

export default ErrorMessage;
