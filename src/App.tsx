import { useState, type ReactNode } from "react";
import { IdeasProvider } from "./hooks/useIdeas";
import { VenturesProvider } from "./hooks/useVentures";
import { Layout } from "./components/Layout";
import { Dashboard } from "./components/Dashboard";
import { FunnelBoard } from "./components/FunnelBoard";
import { IdeaCatalog } from "./components/IdeaCatalog";
import { ByGeography } from "./components/ByGeography";
import { ByCategoryView } from "./components/ByCategoryView";
import { IdeaDetail } from "./components/IdeaDetail";
import { VenturesOverview } from "./components/VenturesOverview";
import { VentureDetail } from "./components/VentureDetail";
import type { ViewKey, Idea } from "./types";

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
          {viewMap[activeView]}
        </Layout>
        {selectedIdea && (
          <IdeaDetail
            ideaId={selectedIdea.id}
            onClose={() => setSelectedIdea(null)}
          />
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
