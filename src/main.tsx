import { StrictMode, type ReactElement } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { CompetitionLanding } from "./components/CompetitionLanding";
import { BriefDetailPublic } from "./components/BriefDetailPublic";

function resolveRoot(): ReactElement {
  const path = window.location.pathname;
  const briefMatch = path.match(/^\/competition\/briefs\/([^/]+)\/?$/);
  if (briefMatch) {
    return <BriefDetailPublic briefId={decodeURIComponent(briefMatch[1])} />;
  }
  if (path.startsWith("/competition")) {
    return <CompetitionLanding />;
  }
  return <App />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>{resolveRoot()}</StrictMode>
);
