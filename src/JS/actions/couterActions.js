import {
  DECREMENT,
  GETTEXT,
  INCREMENT,
  TOGGLE,
} from "../actiotypes/actionTypes";

export const increment = () => {
  return {
    type: INCREMENT,
  };
};
export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const gettext = (text) => {
  return {
    type: GETTEXT,
    payload: text,
  };
};

export const Show = () => {
  return {
    type: TOGGLE,
  };
};
