import React, { FC } from "react";
import { Provider } from "react-redux";
import MainScreen from "../components/MainScreen";
import configureStore from "../../redux/configureStore";

const store = configureStore();

const App: FC = () => {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
};

export default App;
