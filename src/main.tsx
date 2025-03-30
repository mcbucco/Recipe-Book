import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./Components/App/App.tsx";
import { Provider } from "react-redux";
import store from "./Components/services/store.ts";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router basename="/recipe-book">
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </StrictMode>
);
