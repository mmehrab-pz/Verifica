import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IconInfoCircle } from "@tabler/icons-react"


export default function MoreInfo() {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="capitalize">
            <IconInfoCircle />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="data-[side=bottom]:max-h-[50vh] data-[side=top]:max-h-[50vh]"
        >
          <SheetHeader>
            <SheetTitle>API Tester Logic Documentation</SheetTitle>
            <SheetDescription>
         This section explains the purpose and functionality of the API testing tool built with Next.js and shadcn/ui. It highlights request construction, response handling, saved requests, and interactive UI features.
            </SheetDescription>
          </SheetHeader>
          <div className="no-scrollbar overflow-y-auto px-4">
            
              <p className="mb-2 leading-relaxed">
                This API Tester is designed to be built with Next.js as the
                application framework and shadcn/ui as the component system,
                combining modern React architecture with a clean, modular UI
                structure. At its core, the application is a client-side HTTP
                request builder that allows users to construct, send, and
                analyze API requests in a structured and intuitive environment.
                It provides a flexible interface for defining request methods,
                URLs, query parameters, headers, and request bodies in either
                raw JSON or structured form format. The system dynamically
                generates the final request configuration based on user input,
                executes it using the Fetch API, and then processes the response
                in real time. Response data, headers, status information, and
                execution time are displayed clearly, allowing users to inspect
                API behavior without external tools. The application also
                includes automatic endpoint documentation generation. After a
                request is executed, a structured documentation view is created
                based on the request and response data. This makes the tool not
                only useful for testing APIs but also for documenting them
                during development. User experience is enhanced through: Dynamic
                form generation for parameters and headers Toggle-based
                switching between raw and structured body input JSON formatting
                support Response time measurement Visual status indicators
                Toast-based feedback notifications Additionally, the tool
                supports local persistence of saved requests using browser
                storage. Users can save, update, search, load, and delete
                previously configured API calls. This transforms the application
                from a simple tester into a lightweight API workspace. Dark mode
                support ensures visual consistency with modern UI standards, and
                theme state is preserved between sessions. Overall, this
                application serves as a structured, frontend-driven API
                interaction layer built with Next.js and styled using shadcn
                components. It focuses on usability, clarity, and modular design
                while remaining fully client-side and framework-aligned.
              </p>
           
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button variant="outline">Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
