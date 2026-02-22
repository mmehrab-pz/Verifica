import React from "react";
import { Badge } from "@/components/ui/badge";
import { Spinner } from "@/components/ui/spinner";

export default function Response({ loading, data, success }) {
  let statusText = "ready";
  let badgeClass =
    "bg-green-500 text-green-50 dark:bg-green-950 dark:text-green-300";
  let showSpinner = false;

  if (loading) {
    statusText = "sending...";
    badgeClass = "bg-blue-500 text-blue-50 dark:bg-blue-950 dark:text-blue-300";
    showSpinner = true;
  } else if (data && success === true) {
    statusText = "Finish";
    badgeClass =
      "bg-green-500 text-green-50 dark:bg-green-950 dark:text-green-300";
  } else if (data && success === false) {
    statusText = "error";
    badgeClass = "bg-red-500 text-red-50 dark:bg-red-950 dark:text-red-300";
  }
  return (
    <div className="w-full px-8 py-4">
      <div className="flex justify-between items-center">
        <h2 className="capitalize">response</h2>
        <Badge className={`${badgeClass} capitalize`}>
          {statusText}
          {showSpinner && <Spinner data-icon="inline-end" />}
        </Badge>
      </div>
    </div>
  );
}
