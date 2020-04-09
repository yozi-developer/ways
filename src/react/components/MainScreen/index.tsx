import styles from "./styles.module.css";
import React, { FC, useState } from "react";
import Header from "./Header";
import ActionsMenu from "./ActionsMenu";

const MainScreen: FC = () => {
  const [state, setState] = useState(0);

  return (
    <div className={styles.container} onClick={() => setState(state + 1)}>
      state: {state}s
      <Header className={styles.header} />
      <div className={styles.body}>
        <ActionsMenu />
      </div>
      <div className={styles.sidebar}>Sidebar</div>
    </div>
  );
};
export default MainScreen;
