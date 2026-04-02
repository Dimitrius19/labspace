import { type ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import type { ViewKey } from "../types";

export function Layout({
  children,
  activeView,
  onViewChange,
}: {
  children: ReactNode;
  activeView: ViewKey;
  onViewChange: (view: ViewKey) => void;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar activeView={activeView} onViewChange={onViewChange} />
      <main className="flex-1 overflow-y-auto bg-slate-50 p-6">
        {children}
      </main>
    </div>
  );
}
