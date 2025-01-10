import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

export const UIContext = createContext(null);

const TOGGLE_MOBILE_NAV = "TOGGLE_MOBILE_NAV";
const TOGGLE_OVERLAY = "TOGGLE_OVERLAY";

function uiReducer(state, action) {
  switch (action.type) {
    case TOGGLE_MOBILE_NAV:
      return { ...state, mobileNavOpen: action.payload };
    case TOGGLE_OVERLAY:
      return { ...state, overlayVisible: action.payload };
    default:
      return state;
  }
}

const initialState = {
  mobileNavOpen: false,
  overlayVisible: false,
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
