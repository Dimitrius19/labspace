import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DemoMemoPage } from "./demo-memo/DemoMemoPage";
import "./demo-memo/demo-memo.css";

createRoot(document.getElementById("demo-memo-root")!).render(
  <StrictMode>
    <DemoMemoPage />
  </StrictMode>
);
