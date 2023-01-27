import { createStore } from "redux";
import { couterReducer } from "./reducers/couterReducer";
const devtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export const store = createStore(couterReducer, devtools);
