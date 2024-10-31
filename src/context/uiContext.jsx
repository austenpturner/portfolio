import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

export const UIContext = createContext(null);

const SET_ACTIVE_SLIDE = "SET_ACTIVE_SLIDE";
const CLOSE_SLIDES = "CLOSE_SLIDES";

function uiReducer(state, action) {
  switch (action.type) {
    case SET_ACTIVE_SLIDE:
      return {
        ...state,
        activeSlideDirection: action.payload,
      };
    case CLOSE_SLIDES:
      return {
        ...state,
        activeSlideDirection: null,
      };
    default:
      return state;
  }
}

const initialState = {
  activeSlideDirection: null,
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
