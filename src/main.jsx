import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../public/assets/css/all.min.css";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/assets/scss/style.scss";

import { FarzaaContextProvider } from "./context/FarzaaContext.jsx";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <FarzaaContextProvider>
      <App />
      <ToastContainer />
    </FarzaaContextProvider>
  </Provider>
);
