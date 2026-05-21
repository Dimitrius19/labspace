import type { Memo } from "../data/sample-memos";

interface MemoSidebarProps {
  memos: Memo[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export function MemoSidebar({ memos, selectedId, onSelect }: MemoSidebarProps) {
  return (
    <aside className="fo-sidebar" aria-label="Memo index">
      <div className="fo-sidebar__label">Memo Index</div>
      <ul className="fo-sidebar__list">
        {memos.map((memo) => {
          const active = memo.id === selectedId;
          return (
            <li key={memo.id}>
              <button
                type="button"
                className={
                  "fo-sidebar__item" +
                  (active ? " fo-sidebar__item--active" : "")
                }
                onClick={() => onSelect(memo.id)}
                aria-current={active ? "true" : undefined}
              >
                <div className="fo-sidebar__num">No. {memo.number}</div>
                <div className="fo-sidebar__title">{memo.shortTitle}</div>
                <div className="fo-sidebar__meta">
                  <span>{memo.sector}</span>
                  <span className="fo-sidebar__meta-date">{memo.date}</span>
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
