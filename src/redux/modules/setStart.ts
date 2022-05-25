import { setStartType } from "../../types";

export const SET_START = "SET_START";

export const setLoadEnd = (): setStartType => {
  return {
    type: SET_START,
  };
};

const reducer = (prev = initialState, action: any) => {
  switch (action.type) {
    case SET_START: {
      return { start: true };
    }
    default: {
      return prev;
    }
  }
};

const initialState = {
  start: false,
};

export default reducer;
