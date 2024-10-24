import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../src/styles/styles.scss";
import UIProvider from "./context/uiContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UIProvider>
    <App />
  </UIProvider>
);
