import useApiStore from "@/app/store/useApiStore";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ResponseBody() {
    const {data} = useApiStore()
  return (
    <>
      {data && (
        <div className="mt-2.5 w-full">
          <h3 className="text-sm mb-2">Response Body:</h3>

          <div className="w-full max-w-full overflow-hidden rounded-lg">
            <SyntaxHighlighter
              language="json"
              style={vscDarkPlus}
              wrapLongLines={true}
              customStyle={{
                margin: 0,
                padding: "16px",
                fontSize: "14px",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                overflowWrap: "anywhere",
              }}
              codeTagProps={{
                style: {
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                  overflowWrap: "anywhere",
                },
              }}
            >
              {JSON.stringify(data, null, 2)}
            </SyntaxHighlighter>
          </div>
        </div>
      )}
    </>
  );
}
