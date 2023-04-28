import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { FoodContextProvider,FoodContext } from "./Context/FoodProvider.jsx";

export {FoodContext}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <FoodContextProvider>
    <App />
    </FoodContextProvider>
      
    </BrowserRouter>
  </React.StrictMode>
);
