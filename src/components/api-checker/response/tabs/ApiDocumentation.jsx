// import useApiStore from "@/app/store/useApiStore";
// import { Badge } from "@/components/ui/badge";
// import React from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import ResponseBody from "./ResponseBody";

// export default function ApiDocumentation() {
//   const { url, method, statusCode, data , responseTime } = useApiStore();

//   let statusBadgeClass = "";
//   let badgeClass =
//     "bg-green-500 text-green-50 dark:bg-green-950 dark:text-green-300";
//   switch (method) {
//     case "POST":
//       badgeClass =
//         "bg-blue-500 text-blue-50 dark:bg-blue-950 dark:text-blue-300";
//       break;
//     case "PUT":
//       badgeClass =
//         "bg-orange-500 text-orange-50 dark:bg-orange-950 dark:text-orange-300";
//       break;
//     case "DELETE":
//       badgeClass = "bg-red-500 text-red-50 dark:bg-red-950 dark:text-red-300";
//       break;
//   }
//   if (statusCode >= 200 && statusCode < 300) {
//     statusBadgeClass =
//       "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300";
//   } else if (statusCode >= 400 && statusCode < 500) {
//     statusBadgeClass =
//       "bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300";
//   } else if (statusCode >= 500) {
//     statusBadgeClass =
//       "bg-red-500 text-red-50 dark:bg-red-950 dark:text-red-300";
//   }
//   return (
//     <>
//       {url ? (
//         <>
//           <div className="border-b pb-2 flex justify-between items-center">
//             <h2 className="capitalize">Api Documentation</h2>
//             <div>
//               <p className="capitalize text-muted-foreground text-sm">
//                 duration:&nbsp;
//                 {responseTime}ms
//               </p>
//             </div>
//           </div>
//           <div className="flex gap-2.5">
//             {url && <p>{url}</p>}
//             {method && (
//               <Badge className={`${badgeClass} uppercase`}>{method}</Badge>
//             )}
//           </div>
//           <div>
//             <h2 className="capitalize">parameters</h2>
//             <Table className={"mt-2.5"}>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Key</TableHead>
//                   <TableHead>Value</TableHead>
//                   <TableHead>Type</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 <TableRow>
//                   <TableCell>userId</TableCell>
//                   <TableCell>1</TableCell>
//                   <TableCell>string</TableCell>
//                 </TableRow>
//               </TableBody>
//             </Table>
//           </div>
//           <div>
//             <h2 className="capitalize">heads</h2>
//             <Table className={"mt-2.5"}>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Key</TableHead>
//                   <TableHead>Value</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 <TableRow>
//                   <TableCell>Authorization</TableCell>
//                   <TableCell>Bearer your_token_here</TableCell>
//                 </TableRow>
//               </TableBody>
//             </Table>
//           </div>
//           <div>
//             <div className="flex justify-between items-center">
//               <h2 className="capitalize">response</h2>
//               <div className="mt-2.5 flex gap-2">
//                 <h6 className="capitalize text-[14px]">status code:</h6>
//                 {statusCode !== null && (
//                   <Badge className={statusBadgeClass}>{statusCode}</Badge>
//                 )}
//               </div>
//             </div>
//             <ResponseBody />
//           </div>
//         </>
//       ) : (
//         <p className="text-[14px] capitalize">
//           After submitting the request, the documentation is automatically
//           created.
//         </p>
//       )}
//     </>
//   );
// }
import useApiStore from "@/app/store/useApiStore";
import { Badge } from "@/components/ui/badge";
import React, { useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ResponseBody from "./ResponseBody";

export default function ApiDocumentation() {
  const { url, method, statusCode, responseTime } = useApiStore();
  const heads = useApiStore((s) => s.heads);
  const queryParams = useMemo(() => {
    if (!url) return [];

    try {
      const urlObj = new URL(url);

      return Array.from(urlObj.searchParams.entries()).map(([key, value]) => ({
        key,
        value,
        type: !isNaN(value) && value.trim() !== "" ? "number" : "string",
      }));
    } catch {
      return [];
    }
  }, [url]);

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
          <div className="border-b pb-2 flex justify-between items-center">
            <h2 className="capitalize">Api Documentation</h2>
            <p className="capitalize text-muted-foreground text-sm">
              duration: {responseTime}ms
            </p>
          </div>

          <div className="flex gap-2.5 flex-wrap">
            <p className="break-all">{url}</p>
            {method && (
              <Badge className={`${badgeClass} uppercase`}>{method}</Badge>
            )}
          </div>

          {/* ✅ Parameters Section */}
          <div className="mt-4">
            <h2 className="capitalize">parameters</h2>

            <Table className="mt-2.5">
              <TableHeader>
                <TableRow>
                  <TableHead>Key</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Type</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {queryParams.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={3}
                      className="text-center text-muted-foreground"
                    >
                      No query parameters
                    </TableCell>
                  </TableRow>
                ) : (
                  queryParams.map((param, index) => (
                    <TableRow key={index}>
                      <TableCell>{param.key}</TableCell>
                      <TableCell className="break-all">{param.value}</TableCell>
                      <TableCell>{param.type}</TableCell>
                    </TableRow>
                  ))
                )}
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
                {heads.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={2}
                      className="text-center text-muted-foreground"
                    >
                      No headers
                    </TableCell>
                  </TableRow>
                ) : (
                  heads.map(
                    (head) =>
                      head.key && (
                        <TableRow key={head.id}>
                          <TableCell>{head.key}</TableCell>
                          <TableCell className="break-all">
                            {head.value}
                          </TableCell>
                        </TableRow>
                      ),
                  )
                )}
              </TableBody>
            </Table>
          </div>

          {/* Response Section */}
          <div className="mt-6">
            <div className="flex justify-between items-center">
              <h2 className="capitalize">response</h2>
              <div className="mt-2.5 flex gap-2">
                <h6 className="capitalize text-[14px]">status code:</h6>
                {statusCode !== null && (
                  <Badge className={statusBadgeClass}>{statusCode}</Badge>
                )}
              </div>
            </div>

            <ResponseBody />
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
