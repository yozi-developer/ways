import styles from "./styles.module.css";
import React, { FC } from "react";

const MainScreen: FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.day}>День: 103</div>
      </header>
      <div className={styles.body}>Body</div>
      <div className={styles.sidebar}>Sidebar</div>
    </div>
  );
};
export default MainScreen;
