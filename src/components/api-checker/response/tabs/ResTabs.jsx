import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ApiDocumentation from "./ApiDocumentation";
import ResponseBody from "./ResponseBody";
import useApiStore from "@/app/store/useApiStore";

export default function ResTabs() {
  const { url } = useApiStore();
  return (
    <Tabs defaultValue="Documentation" className={"mt-6"}>
      <TabsList>
        <TabsTrigger value="Documentation">Documentation</TabsTrigger>
        <TabsTrigger value="Headers">Headers</TabsTrigger>
        <TabsTrigger value="Response">Response</TabsTrigger>
      </TabsList>
      <TabsContent value="Documentation">
        <Card className={"min-h-70 p-4"}>
          <ApiDocumentation />
        </Card>
      </TabsContent>
      <TabsContent value="Headers">
        <Card className={"min-h-70 p-4"}>234</Card>
      </TabsContent>
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
  );
}
