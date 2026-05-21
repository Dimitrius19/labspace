import type { Memo } from "../data/sample-memos";
import { ComparableTable } from "./ComparableTable";
import { ReferencesList } from "./ReferencesList";
import { PrintButton } from "./PrintButton";

interface MemoBodyProps {
  memo: Memo;
}

export function MemoBody({ memo }: MemoBodyProps) {
  return (
    <main className="fo-body-wrap" role="main">
      <PrintButton />
      <article className="fo-body">
        <div className="fo-body__doctype">
          Investment Memo · {memo.sector}
        </div>
        <h1 className="fo-body__title">{memo.title}</h1>
        <div className="fo-body__byline">
          <span>
            <span className="fo-body__byline-label">Date</span>
            <span className="fo-body__byline-value">{memo.date}</span>
          </span>
          <span>
            <span className="fo-body__byline-label">Memo</span>
            <span className="fo-body__byline-value">#{memo.number}</span>
          </span>
          <span>
            <span className="fo-body__byline-label">Prepared for</span>
            <span className="fo-body__byline-value">
              {memo.recipientInitials}
            </span>
          </span>
        </div>

        {/* Executive Summary */}
        <section className="fo-section">
          <div className="fo-section__heading-row">
            <h2 className="fo-section__heading">Executive Summary</h2>
          </div>
          <p className="fo-pullquote">
            {memo.executiveSummary.bottomLine}
          </p>
          {memo.executiveSummary.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>

        {/* Investment Thesis */}
        <section className="fo-section">
          <div className="fo-section__heading-row">
            <h2 className="fo-section__heading">Investment Thesis</h2>
          </div>
          {memo.thesisParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>

        {/* Comparable Transactions */}
        <section className="fo-section">
          <div className="fo-section__heading-row">
            <h2 className="fo-section__heading">Comparable Transactions</h2>
          </div>
          <ComparableTable
            rows={memo.comparables.rows}
            footnote={memo.comparables.footnote}
          />
        </section>

        {/* Key Risks */}
        <section className="fo-section">
          <div className="fo-section__heading-row">
            <h2 className="fo-section__heading">Key Risks</h2>
          </div>
          <div className="fo-risks">
            {memo.risks.map((risk, i) => (
              <div key={i}>
                <p className="fo-risk__heading">{risk.heading}.</p>
                <p className="fo-risk__body">{risk.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* References */}
        <section className="fo-section">
          <div className="fo-section__heading-row">
            <h2 className="fo-section__heading">References</h2>
          </div>
          <ReferencesList references={memo.references} />
        </section>
      </article>
    </main>
  );
}
