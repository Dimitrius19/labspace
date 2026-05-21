import type { MemoComparable } from "../data/sample-memos";

interface ComparableTableProps {
  rows: MemoComparable[];
  footnote: string;
}

export function ComparableTable({ rows, footnote }: ComparableTableProps) {
  return (
    <div>
      <table className="fo-table">
        <thead>
          <tr>
            <th>Target</th>
            <th>Acquirer / Event</th>
            <th>Year</th>
            <th className="fo-num-header">Enterprise Value (€M)</th>
            <th className="fo-num-header">EV / EBITDA</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <td>{row.target}</td>
              <td>{row.acquirer}</td>
              <td className="fo-num">{row.year}</td>
              <td className="fo-num">{row.enterpriseValueEurM}</td>
              <td className="fo-num">{row.evToEbitda}</td>
              <td>{row.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="fo-table__footnote">{footnote}</p>
    </div>
  );
}
