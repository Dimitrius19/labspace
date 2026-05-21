import type { MemoReference } from "../data/sample-memos";

interface ReferencesListProps {
  references: MemoReference[];
}

export function ReferencesList({ references }: ReferencesListProps) {
  return (
    <ol className="fo-refs">
      {references.map((ref) => (
        <li key={ref.tag}>
          <span className="fo-refs__tag">{ref.tag}</span>
          <span>
            <span className="fo-refs__pub">{ref.publication}</span>
            <span className="fo-refs__title">, {ref.title} </span>
            <span className="fo-refs__year">({ref.year})</span>
            {ref.url ? (
              <>
                {" "}
                <span className="fo-refs__url">{ref.url}</span>
              </>
            ) : null}
          </span>
        </li>
      ))}
    </ol>
  );
}
