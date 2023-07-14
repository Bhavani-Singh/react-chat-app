import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootreducer from "../reducers";


// need rootreducer
let store;

/**
 * Configure and create the Redux store
 * @returns {Object} - Redux store
 */

export function configureStore() {
  store = createStore(rootreducer, applyMiddleware(thunk, logger));
  return store;
}
