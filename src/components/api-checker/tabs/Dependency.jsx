import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import React from "react";
import Parameters from "./parameters/Parameters";
import Headers from "./Headers/Headers.";

export default function Dependency() {
  return (
    <Tabs defaultValue="Parameters" className="w-full px-8 py-4 border-b border-border">
      <TabsList>
        <TabsTrigger value="Parameters">Parameters</TabsTrigger>
        <TabsTrigger value="Headers">Headers</TabsTrigger>
        <TabsTrigger value="Body">Body</TabsTrigger>
      </TabsList>
      <TabsContent value="Parameters">
        <Card className={'p-4 gap-0'}>
          <Parameters />
        </Card>
      </TabsContent>
      <TabsContent value="Headers">
        <Card className={'p-4 gap-0'}>
          <Headers />
        </Card>
      </TabsContent>
      <TabsContent value="Body">
        <Card>
          <CardHeader>
            <CardTitle>Reports</CardTitle>
            <CardDescription>
              Generate and download your detailed reports. Export data in
              multiple formats for analysis.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm">
            You have 5 reports ready and available to export.
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
