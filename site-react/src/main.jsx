import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

function RootWrapper() {
  // Scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <App />;
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RootWrapper />
  </React.StrictMode>,
);
