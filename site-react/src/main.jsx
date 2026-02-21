import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

(function () {
  const saved = localStorage.getItem("theme") ?? "system";
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const shouldBeDark =
    saved === "dark" || (saved === "system" && prefersDark);
  document.documentElement.classList.toggle("dark", shouldBeDark);
})();

function RootWrapper() {
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
