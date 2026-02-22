import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ApiDocumentation from './ApiDocumentation';

export default function ResTabs() {
  return (
        <Tabs defaultValue="Documentation" className={'mt-6'}>
          <TabsList>
            <TabsTrigger value="Documentation">Documentation</TabsTrigger>
            <TabsTrigger value="Headers">Headers</TabsTrigger>
            <TabsTrigger value="Response">Response</TabsTrigger>
          </TabsList>
          <TabsContent value="Documentation">
            <Card className={'p-4'}>
              <ApiDocumentation />
            </Card>
          </TabsContent>
          <TabsContent value="Headers">
            <Card className={'p-4'}>
              234
            </Card>
          </TabsContent>
          <TabsContent value="Response">
            <Card className={'p-4'}>
sdf
            </Card>
          </TabsContent>
        </Tabs>
  )
}
