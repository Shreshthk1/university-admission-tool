import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// standard middleware for async login in using Redux. 
// https://redux.js.org/usage/writing-logic-thunks#redux-thunk-middleware for more information
const middleware = [thunk];

// passes in the index.js within the reducers folder, which contains the combined reducers.
// this store brings Actions and Reducers together and holds the Application state.
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;