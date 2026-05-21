import { useState } from "react";
import { sampleMemos } from "../data/sample-memos";
import { MemoHeader } from "./MemoHeader";
import { MemoSidebar } from "./MemoSidebar";
import { MemoBody } from "./MemoBody";
import { MemoFooter } from "./MemoFooter";

export function DemoMemoPage() {
  const [selectedMemoId, setSelectedMemoId] = useState<string>(
    sampleMemos[0].id
  );

  const memo =
    sampleMemos.find((m) => m.id === selectedMemoId) ?? sampleMemos[0];

  return (
    <>
      <MemoHeader memo={memo} recipientInitials={memo.recipientInitials} />
      <div className="fo-shell">
        <MemoSidebar
          memos={sampleMemos}
          selectedId={selectedMemoId}
          onSelect={setSelectedMemoId}
        />
        <MemoBody memo={memo} />
      </div>
      <MemoFooter date={memo.date} />
    </>
  );
}
