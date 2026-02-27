"use client";
import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import useApiStore from "@/app/store/useApiStore";

export default function RawMode() {
  const bodyRaw = useApiStore((s) => s.bodyRaw);
  const setBodyRaw = useApiStore((s) => s.setBodyRaw);

  return (
    <div className="flex flex-col gap-4">
      <Textarea
        value={bodyRaw}
        onChange={(e) => setBodyRaw(e.target.value)}
        placeholder={`{
  "name": "Mehrab",
  "role": "front-end developer"
}`}
        className="text-sm"
        rows={8}
      />
      <SyntaxHighlighter
        language="json"
        style={vscDarkPlus}
        wrapLongLines
        customStyle={{
          margin: 0,
          padding: "16px",
          fontSize: "14px",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          overflowWrap: "anywhere",
          borderRadius: "8px",
        }}
      >
        {bodyRaw || `Write your JSON code in the box above...`}
      </SyntaxHighlighter>
    </div>
  );
}