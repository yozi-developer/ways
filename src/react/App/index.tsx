import React, { ReactElement } from "react";
import AppBody from "./AppBody";
import StoreProvider from "./StoreProvider";

const App = (): ReactElement => {
  return (
    <StoreProvider>
      <AppBody />
    </StoreProvider>
  );
};

export default App;
