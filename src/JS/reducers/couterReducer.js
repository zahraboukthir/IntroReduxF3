import {
  DECREMENT,
  GETTEXT,
  INCREMENT,
  TOGGLE,
} from "./../actiotypes/actionTypes";
const initstate = {
  count: 0,
  value: "",
  show: true,
};

export const couterReducer = (state = initstate, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count && state.count - 1 };
    case GETTEXT:
      return { ...state, value: action.payload };
    case TOGGLE:
      return {
        ...state,
        show: !state.show,
      };
    default:
      return state;
  }
};
