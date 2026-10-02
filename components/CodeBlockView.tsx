"use client";

import { useState } from "react";
import { Check, Copy, Code2 } from "lucide-react";

interface CodeBlockViewProps {
  code: string;
  language?: string;
  caption?: string;
}

export default function CodeBlockView({
  code,
  language = "plaintext",
  caption,
}: CodeBlockViewProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(code).catch(() => {});
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-4 border border-white/10 bg-black max-w-full">
      <div className="px-3.5 sm:px-4 py-2 border-b border-white/10 bg-white/[0.02] flex items-center justify-between gap-2 text-xs font-mono text-neutral-400">
        <span className="flex items-center space-x-2 min-w-0 break-all text-[11px] sm:text-xs">
          <Code2 size={13} className="text-emerald-400 shrink-0" />
          <span className="truncate">{caption || "Code Snippet"}</span>
        </span>

        <div className="flex items-center space-x-2 shrink-0">
          <span className="uppercase text-[10px] text-neutral-500 font-semibold px-1.5 py-0.5 bg-white/[0.04] border border-white/5">
            {language}
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center space-x-1 text-[11px] font-mono text-neutral-400 hover:text-white px-2 py-0.5 bg-white/[0.05] hover:bg-white/10 border border-white/10 transition-colors"
            aria-label="Copy Code"
          >
            {copied ? (
              <>
                <Check size={12} className="text-emerald-400" />
                <span className="text-emerald-400">COPIED</span>
              </>
            ) : (
              <>
                <Copy size={12} />
                <span>COPY</span>
              </>
            )}
          </button>
        </div>
      </div>

      <pre className="p-3.5 sm:p-4 text-[11px] sm:text-xs font-mono text-neutral-200 overflow-x-auto leading-relaxed overscroll-x-contain max-w-full selection:bg-emerald-500/20">
        <code>{code}</code>
      </pre>
    </div>
  );
}
