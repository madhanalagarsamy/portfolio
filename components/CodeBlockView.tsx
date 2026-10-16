"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

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
    <div className="mt-4 border border-white/[0.08] bg-[#161617] rounded-[20px] overflow-hidden max-w-full shadow-xl">
      {/* macOS Window Titlebar */}
      <div className="px-4 py-3 border-b border-white/[0.06] bg-[#1d1d1f] flex items-center justify-between gap-3 text-xs text-[#86868b]">
        {/* macOS Traffic Light Buttons */}
        <div className="flex items-center space-x-2 shrink-0">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/40 block" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/40 block" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]/40 block" />
          <span className="text-[11px] font-mono text-[#86868b] pl-2 truncate max-w-[200px] sm:max-w-none">
            {caption || "Terminal"}
          </span>
        </div>

        <div className="flex items-center space-x-2 shrink-0">
          <span className="uppercase text-[10px] font-mono text-[#86868b] px-2 py-0.5 bg-white/[0.04] rounded-full border border-white/5">
            {language}
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center space-x-1 text-xs text-[#86868b] hover:text-white px-3 py-1 bg-white/[0.06] hover:bg-white/10 rounded-full border border-white/10 transition-all active:scale-95"
            aria-label="Copy Code"
          >
            {copied ? (
              <>
                <Check size={12} className="text-[#30d158]" />
                <span className="text-[#30d158] font-medium">Copied</span>
              </>
            ) : (
              <>
                <Copy size={12} />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      <pre className="p-4 sm:p-5 text-xs sm:text-[13px] font-mono text-[#f5f5f7] overflow-x-auto leading-relaxed overscroll-x-contain max-w-full selection:bg-[#0071e3] selection:text-white">
        <code>{code}</code>
      </pre>
    </div>
  );
}
