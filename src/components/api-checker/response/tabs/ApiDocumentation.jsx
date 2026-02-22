import useApiStore from "@/app/store/useApiStore";
import { Badge } from "@/components/ui/badge";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ApiDocumentation() {
  const { url, method, statusCode, data } = useApiStore();
  console.log(data);

  let statusBadgeClass = "";
  let badgeClass =
    "bg-green-500 text-green-50 dark:bg-green-950 dark:text-green-300";
  switch (method) {
    case "POST":
      badgeClass =
        "bg-blue-500 text-blue-50 dark:bg-blue-950 dark:text-blue-300";
      break;
    case "PUT":
      badgeClass =
        "bg-orange-500 text-orange-50 dark:bg-orange-950 dark:text-orange-300";
      break;
    case "DELETE":
      badgeClass = "bg-red-500 text-red-50 dark:bg-red-950 dark:text-red-300";
      break;
  }
  if (statusCode >= 200 && statusCode < 300) {
    statusBadgeClass =
      "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300";
  } else if (statusCode >= 400 && statusCode < 500) {
    statusBadgeClass =
      "bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300";
  } else if (statusCode >= 500) {
    statusBadgeClass =
      "bg-red-500 text-red-50 dark:bg-red-950 dark:text-red-300";
  }
  return (
    <>
      {url ? (
        <>
          <h2 className="capitalize border-b pb-2">Api Documentation</h2>
          <div className="flex gap-2.5">
            {url && <p>{url}</p>}
            {method && (
              <Badge className={`${badgeClass} uppercase`}>{method}</Badge>
            )}
          </div>
          <div>
            <h2 className="capitalize">parameters</h2>
            <Table className={"mt-2.5"}>
              <TableHeader>
                <TableRow>
                  <TableHead>Key</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Type</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>userId</TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>string</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div>
            <h2 className="capitalize">heads</h2>
            <Table className={"mt-2.5"}>
              <TableHeader>
                <TableRow>
                  <TableHead>Key</TableHead>
                  <TableHead>Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Authorization</TableCell>
                  <TableCell>Bearer your_token_here</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div>
            <h2 className="capitalize">response</h2>
            <div className="mt-2.5 flex gap-2">
              <h6 className="capitalize text-[14px]">status code:</h6>
              {statusCode !== null && (
                <Badge className={statusBadgeClass}>{statusCode}</Badge>
              )}
            </div>
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
          </div>
        </>
      ) : (
        <p className="text-[14px] capitalize">
          After submitting the request, the documentation is automatically
          created.
        </p>
      )}
    </>
  );
}
