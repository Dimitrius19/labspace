interface MemoFooterProps {
  date: string;
}

export function MemoFooter({ date }: MemoFooterProps) {
  return (
    <footer className="fo-footer" role="contentinfo">
      <div className="fo-footer__left">
        T-Life Capital · Confidential — Not for redistribution
      </div>
      <div className="fo-footer__center">{date}</div>
      <div className="fo-footer__right">Page 1 of 1</div>
    </footer>
  );
}
