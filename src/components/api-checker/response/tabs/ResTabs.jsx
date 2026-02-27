import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ApiDocumentation from "./ApiDocumentation";
import ResponseBody from "./ResponseBody";
import useApiStore from "@/app/store/useApiStore";
import { IconCopy } from "@tabler/icons-react";
import { toast } from "sonner"

export default function ResTabs() {
  const { url , data } = useApiStore();
  const copyJson = ()=>{
    navigator.clipboard.writeText(JSON.stringify(data, null, 2))
    toast.success("JSON copied successfully", { position: "top-center" })
  }
  return (
    <>
      <Tabs defaultValue="Documentation" className={"mt-6"}>
        <div className="flex items-center gap-2.5">
          <TabsList>
            <TabsTrigger value="Documentation">Documentation</TabsTrigger>
            {/* <TabsTrigger value="Headers">Headers</TabsTrigger> */}
            <TabsTrigger value="Response">Response</TabsTrigger>
          </TabsList>
          {url ? (
            <Button variant="outline" size="icon" onClick={copyJson} >
            <IconCopy />
          </Button>
          ) : (
            <Button disabled variant="outline" size="icon" onClick={copyJson} >
            <IconCopy />
          </Button>
          )}
        </div>
        <TabsContent value="Documentation">
          <Card className={"min-h-70 p-4"}>
            <ApiDocumentation />
          </Card>
        </TabsContent>
        {/* <TabsContent value="Headers">
          <Card className={"min-h-70 p-4"}>234</Card>
        </TabsContent> */}
        <TabsContent value="Response">
          <Card className={"min-h-70 p-4"}>
            {url ? (
              <ResponseBody />
            ) : (
              <p className="text-[14px] capitalize">
                After submitting the request, the documentation is automatically
                created.
              </p>
            )}
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}
