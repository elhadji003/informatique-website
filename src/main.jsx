import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./css/btn.css";
import "./css/text.css";
import "animate.css";
import App from "./App.jsx";
import "aos/dist/aos.css";
import AOS from "aos";
import { Provider } from "react-redux";
import { persistor, store } from "./backend/app/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
AOS.init();

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StrictMode>
        <App />
        <ToastContainer />
        <Toaster position="bottom-left" reverseOrder={false} />
      </StrictMode>
    </PersistGate>
  </Provider>
);
