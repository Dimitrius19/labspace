import { lazy, Suspense, useState, type ReactNode } from "react";
import { IdeasProvider } from "./hooks/useIdeas";
import { VenturesProvider } from "./hooks/useVentures";
import { Layout } from "./components/Layout";
import { VenturesOverview } from "./components/VenturesOverview";
import { VentureDetail } from "./components/VentureDetail";
import type { ViewKey, Idea } from "./types";

const Dashboard = lazy(() => import("./components/Dashboard").then((m) => ({ default: m.Dashboard })));
const FunnelBoard = lazy(() => import("./components/FunnelBoard").then((m) => ({ default: m.FunnelBoard })));
const IdeaCatalog = lazy(() => import("./components/IdeaCatalog").then((m) => ({ default: m.IdeaCatalog })));
const ByGeography = lazy(() => import("./components/ByGeography").then((m) => ({ default: m.ByGeography })));
const ByCategoryView = lazy(() => import("./components/ByCategoryView").then((m) => ({ default: m.ByCategoryView })));
const IdeaDetail = lazy(() => import("./components/IdeaDetail").then((m) => ({ default: m.IdeaDetail })));

function ViewFallback() {
  return (
    <div className="flex h-full items-center justify-center text-sm text-slate-400">
      Loading…
    </div>
  );
}

export default function App() {
  const [activeView, setActiveView] = useState<ViewKey>("ventures");
  const [selectedIdea, setSelectedIdea] = useState<Idea | null>(null);
  const [openVentureId, setOpenVentureId] = useState<string | null>(null);

  const viewMap: Record<ViewKey, ReactNode> = {
    ventures: <VenturesOverview onOpenVenture={setOpenVentureId} />,
    dashboard: <Dashboard onSelectIdea={setSelectedIdea} />,
    funnel: <FunnelBoard onSelectIdea={setSelectedIdea} />,
    catalog: <IdeaCatalog onSelectIdea={setSelectedIdea} />,
    geography: <ByGeography onSelectIdea={setSelectedIdea} />,
    category: <ByCategoryView onSelectIdea={setSelectedIdea} />,
  };

  return (
    <IdeasProvider>
      <VenturesProvider>
        <Layout
          activeView={activeView}
          onViewChange={setActiveView}
          onOpenVenture={setOpenVentureId}
        >
          <Suspense fallback={<ViewFallback />}>{viewMap[activeView]}</Suspense>
        </Layout>
        {selectedIdea && (
          <Suspense fallback={null}>
            <IdeaDetail
              ideaId={selectedIdea.id}
              onClose={() => setSelectedIdea(null)}
            />
          </Suspense>
        )}
        {openVentureId && (
          <VentureDetail
            ventureId={openVentureId}
            onClose={() => setOpenVentureId(null)}
          />
        )}
      </VenturesProvider>
    </IdeasProvider>
  );
}
