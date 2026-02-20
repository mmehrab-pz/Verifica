import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import React from "react";

export default function Dependency() {
  return (
    <Tabs defaultValue="Parameters" className="w-full px-8 py-4 border-b border-border">
      <TabsList>
        <TabsTrigger value="Parameters">Parameters</TabsTrigger>
        <TabsTrigger value="Heads">Heads</TabsTrigger>
        <TabsTrigger value="Body">Body</TabsTrigger>
      </TabsList>
      <TabsContent value="Parameters">
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>
              View your key metrics and recent project activity. Track progress
              across all your active projects.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm">
            You have 12 active projects and 3 pending tasks.
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="Heads">
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>
              Track performance and user engagement metrics. Monitor trends and
              identify growth opportunities.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm">
            Page views are up 25% compared to last month.
          </CardContent>
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
