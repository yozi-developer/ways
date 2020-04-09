import React, { ReactElement } from "react";
import MainScreen from "../components/MainScreen";
import { hot } from "react-hot-loader/root";

export const AppBody = (): ReactElement => {
  return <MainScreen />;
};

export default hot(AppBody);
