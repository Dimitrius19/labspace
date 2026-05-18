import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { CompetitionLanding } from "./components/CompetitionLanding";

const isCompetitionRoute = window.location.pathname.startsWith("/competition");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {isCompetitionRoute ? <CompetitionLanding /> : <App />}
  </StrictMode>
);
