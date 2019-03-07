import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "./reducers";
import loggerMiddleware from "./middleware/logger";
import monitorReducerEnhancer from "./enhancers/monitorReducer";

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducerEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(reducer, preloadedState, composedEnhancers);

  return store;
}
