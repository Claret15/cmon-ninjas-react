import React from "react";
import "./index.css";
import { Provider } from "react-redux";
import configureStore from './configureStore';

export default ({children}) => {
  const store = configureStore();
  return <Provider store={store}>{children}</Provider>;
};
