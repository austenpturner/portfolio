import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

export const UIContext = createContext(null);

// const SET_ACTIVE_SLIDE = "SET_ACTIVE_SLIDE";

function uiReducer(state, action) {
  switch (action.type) {
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
