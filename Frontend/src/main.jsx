import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom"; //isko add kiya hai
import UserContextt from "./context/UserContextt.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextt>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContextt>
  </StrictMode>
);
