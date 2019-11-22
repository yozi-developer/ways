import styles from "./styles.module.css";
import React, { FC } from "react";
import Header from "./Header";
import ActionsMenu from "./ActionsMenu";

const MainScreen: FC = () => {
  return (
    <div className={styles.container}>
      <Header className={styles.header} />
      <div className={styles.body}>
        <ActionsMenu />
      </div>
      <div className={styles.sidebar}>Sidebar</div>
    </div>
  );
};
export default MainScreen;
