import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.page}>
      <Outlet />
    </div>
  );
}

export default AppLayout;
