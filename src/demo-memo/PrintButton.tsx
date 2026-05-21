export function PrintButton() {
  return (
    <button
      type="button"
      className="fo-print-btn"
      onClick={() => window.print()}
      aria-label="Print memo"
    >
      Print
    </button>
  );
}
