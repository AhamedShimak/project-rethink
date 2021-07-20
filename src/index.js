import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";
import ReactPWAInstallProvider, { useReactPWAInstall } from "react-pwa-install";

// import reportWebVitals from './reportWebVitals';
// import { Provider } from "./context/context";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactPWAInstallProvider enableLogging>
        <App />
      </ReactPWAInstallProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
