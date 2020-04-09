import React, { ReactElement, ReactNode, useState } from "react";
import { Provider } from "react-redux";
import createStore from "src/redux/configureStore";

export const StoreProvider = (props: { children: ReactNode }): ReactElement => {
  const [store] = useState(createStore());

  return <Provider store={store}>{props.children}</Provider>;
};

export default StoreProvider;
