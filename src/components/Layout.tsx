import { useState, type ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import type { ViewKey } from "../types";

export function Layout({
  children,
  activeView,
  onViewChange,
  onOpenVenture,
}: {
  children: ReactNode;
  activeView: ViewKey;
  onViewChange: (view: ViewKey) => void;
  onOpenVenture: (id: string) => void;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const close = () => setSidebarOpen(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close menu"
          onClick={close}
          className="fixed inset-0 z-30 bg-slate-900/50 backdrop-blur-sm md:hidden"
        />
      )}

      <div
        className={`fixed inset-y-0 left-0 z-40 transform transition-transform duration-200 md:static md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar
          activeView={activeView}
          onViewChange={(v) => { onViewChange(v); close(); }}
          onOpenVenture={(id) => { onOpenVenture(id); close(); }}
        />
      </div>

      <main className="flex min-w-0 flex-1 flex-col overflow-y-auto bg-slate-50">
        <div className="sticky top-0 z-20 flex items-center gap-3 border-b border-slate-200 bg-slate-50/80 px-4 py-2 backdrop-blur md:hidden">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
            className="rounded-md p-2 text-slate-600 hover:bg-slate-200"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span className="text-sm font-semibold text-slate-900">Venture Studio</span>
        </div>

        <div className="flex-1 p-4 md:p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
