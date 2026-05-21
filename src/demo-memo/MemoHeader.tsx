import type { Memo } from "../data/sample-memos";

interface MemoHeaderProps {
  memo: Memo;
  recipientInitials?: string;
}

export function MemoHeader({
  memo,
  recipientInitials = "K.K.",
}: MemoHeaderProps) {
  return (
    <header className="fo-header" role="banner">
      <div className="fo-header__brand">T-Life Capital</div>
      <div className="fo-header__center">
        Confidential
        <span className="fo-header__sep">·</span>
        Memo #{memo.number}
      </div>
      <div className="fo-header__right">
        {memo.date}
        <span className="fo-header__sep">·</span>
        {recipientInitials}
      </div>
    </header>
  );
}
