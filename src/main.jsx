import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./css/btn.css";
import "./css/text.css";
import App from "./App.jsx";
import "aos/dist/aos.css";
import AOS from "aos";
import { Provider } from "react-redux";
import { persistor, store } from "./backend/app/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
AOS.init();

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StrictMode>
        <App />
        <ToastContainer />
      </StrictMode>
    </PersistGate>
  </Provider>
);
