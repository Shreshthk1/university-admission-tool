import { SET_MESSAGE, CLEAR_MESSAGE } from "./types";

// used for Redux actions related to messages from the API. Will set a message.
export const setMessage = (message) => ({
  type: SET_MESSAGE,
  payload: message,
});

// used for Redux actions related to messages from the API. Will clear a message.
export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});