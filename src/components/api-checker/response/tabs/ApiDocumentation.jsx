import useApiStore from "@/app/store/useApiStore";
import { Badge } from "@/components/ui/badge";
import React from "react";

export default function ApiDocumentation() {
  const { url, method } = useApiStore();
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
        </>
      ) : (
        <p>
          After submitting the request, the documentation is automatically
          created.
        </p>
      )}
    </>
  );
}
