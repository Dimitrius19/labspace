import { Fragment, type ReactNode } from "react";

// Minimal markdown renderer for memo packs.
// Supports: # ## ### headers, **bold**, *italic*, `code`, ordered/unordered lists,
// blockquotes, horizontal rules, plain paragraphs, links.

function renderInline(text: string): ReactNode {
  const parts: ReactNode[] = [];
  let cursor = 0;
  const pattern = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  let match: RegExpExecArray | null;
  let i = 0;
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > cursor) parts.push(text.slice(cursor, match.index));
    const m = match[0];
    if (m.startsWith("**")) parts.push(<strong key={`b${i}`} className="font-semibold text-slate-900">{m.slice(2, -2)}</strong>);
    else if (m.startsWith("`")) parts.push(<code key={`c${i}`} className="rounded bg-slate-100 px-1 py-0.5 font-mono text-[0.9em] text-slate-800">{m.slice(1, -1)}</code>);
    else if (m.startsWith("[")) {
      const linkMatch = /\[([^\]]+)\]\(([^)]+)\)/.exec(m);
      if (linkMatch) {
        const [, label, href] = linkMatch;
        parts.push(<a key={`l${i}`} href={href} target="_blank" rel="noreferrer noopener" className="text-blue-600 hover:text-blue-800 hover:underline">{label}</a>);
      } else parts.push(m);
    } else if (m.startsWith("*")) parts.push(<em key={`i${i}`}>{m.slice(1, -1)}</em>);
    else parts.push(m);
    cursor = match.index + m.length;
    i += 1;
  }
  if (cursor < text.length) parts.push(text.slice(cursor));
  return parts;
}

export function Markdown({ source }: { source: string }) {
  const lines = source.split("\n");
  const blocks: ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Headers
    if (/^### /.test(line)) {
      blocks.push(<h3 key={key++} className="mt-5 mb-2 text-sm font-semibold uppercase tracking-wide text-slate-700">{renderInline(line.slice(4))}</h3>);
      i++; continue;
    }
    if (/^## /.test(line)) {
      blocks.push(<h2 key={key++} className="mt-7 mb-3 text-base font-bold text-slate-900">{renderInline(line.slice(3))}</h2>);
      i++; continue;
    }
    if (/^# /.test(line)) {
      blocks.push(<h1 key={key++} className="mt-8 mb-4 border-b border-slate-200 pb-2 text-lg font-bold text-slate-900">{renderInline(line.slice(2))}</h1>);
      i++; continue;
    }

    // Horizontal rule
    if (/^---+$/.test(line.trim())) {
      blocks.push(<hr key={key++} className="my-5 border-slate-200" />);
      i++; continue;
    }

    // Blockquote
    if (/^> /.test(line)) {
      const lines2: string[] = [];
      while (i < lines.length && /^> /.test(lines[i])) {
        lines2.push(lines[i].slice(2));
        i++;
      }
      blocks.push(<blockquote key={key++} className="my-3 border-l-2 border-slate-300 pl-3 text-sm italic text-slate-600">{renderInline(lines2.join(" "))}</blockquote>);
      continue;
    }

    // Unordered list
    if (/^[-*] /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*] /.test(lines[i])) {
        items.push(lines[i].replace(/^[-*] /, ""));
        i++;
      }
      blocks.push(
        <ul key={key++} className="my-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
          {items.map((it, j) => <li key={j}>{renderInline(it)}</li>)}
        </ul>
      );
      continue;
    }

    // Ordered list
    if (/^\d+\. /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\. /, ""));
        i++;
      }
      blocks.push(
        <ol key={key++} className="my-2 list-decimal space-y-1 pl-5 text-sm text-slate-700">
          {items.map((it, j) => <li key={j}>{renderInline(it)}</li>)}
        </ol>
      );
      continue;
    }

    // Blank
    if (line.trim() === "") { i++; continue; }

    // Paragraph (accumulate consecutive non-blank lines)
    const paraLines: string[] = [line];
    i++;
    while (i < lines.length && lines[i].trim() !== "" && !/^(#|>|[-*] |\d+\. |---+$)/.test(lines[i])) {
      paraLines.push(lines[i]); i++;
    }
    blocks.push(<p key={key++} className="my-2 text-sm leading-relaxed text-slate-700">{renderInline(paraLines.join(" "))}</p>);
  }

  return <Fragment>{blocks}</Fragment>;
}
