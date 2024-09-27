import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

import routes from "./pages/routes";
import { ThemeProvider } from "./contexts/ThemeProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        {routes}
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
