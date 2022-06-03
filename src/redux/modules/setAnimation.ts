import { setStartType } from "../../types";

export const SET_ANIMATION_START = "SET_ANIMATION_START";
export const SET_ANIMATION_END = "SET_ANIMATION_END";

export const setAnimationStart = (): setStartType => {
  return {
    type: SET_ANIMATION_START,
  };
};

export const setAnimationEnd = (): setStartType => {
  return {
    type: SET_ANIMATION_END,
  };
};

const reducer = (prev = initialState, action: any) => {
  switch (action.type) {
    case SET_ANIMATION_START: {
      return { ...prev, animationStart: true };
    }
    case SET_ANIMATION_END: {
      return { ...prev, animationStart: true, animationEnd: true };
    }
    default: {
      return prev;
    }
  }
};

const initialState = {
  animationStart: false,
  animationEnd: false,
};

export default reducer;
