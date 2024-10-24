import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

export const UIContext = createContext(null);

const OPEN_LEFT_SLIDE = "OPEN_LEFT_SLIDE";
const OPEN_RIGHT_SLIDE = "OPEN_RIGHT_SLIDE";
const OPEN_BOTTOM_SLIDE = "OPEN_BOTTOM_SLIDE";

function uiReducer(state, action) {
  switch (action.type) {
    case OPEN_LEFT_SLIDE:
      return {
        ...state,
        leftSlideVisible: !state.leftSlideVisible,
      };
    case OPEN_RIGHT_SLIDE:
      return {
        ...state,
        rightSlideVisible: !state.rightSlideVisible,
      };
    case OPEN_BOTTOM_SLIDE:
      return {
        ...state,
        bottomSlideVisible: !state.bottomSlideVisible,
      };
    default:
      return state;
  }
}

const initialState = {
  leftSlideVisible: false,
  rightSlideVisible: false,
  bottomSlideVisible: false,
};

export default function UIProvider({ children }) {
  const [state, uiDispatch] = useReducer(uiReducer, initialState);

  return (
    <UIContext.Provider value={{ state, uiDispatch }}>
      {children}
    </UIContext.Provider>
  );
}

UIProvider.propTypes = {
  children: PropTypes.object,
};
