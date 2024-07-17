import Spinner from "./Spinner";
import styles from "./SpinnerFullPage.module.css";

function SpinnerFullPage() {
  return (
    <div className={styles.page}>
      <Spinner color="#fff" />
      <h1>Loading...</h1>
    </div>
  );
}

export default SpinnerFullPage;
