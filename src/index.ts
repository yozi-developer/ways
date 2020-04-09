import { setConfig } from "react-hot-loader";
// start react app
import "./react";

setConfig({ logLevel: "debug" });

// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept("./redux/modules/index", () => {
    console.debug("REload", require("./redux/modules/index"));
  });
}
