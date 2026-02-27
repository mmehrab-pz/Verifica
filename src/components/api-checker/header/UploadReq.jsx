"use client";
import useApiStore from "@/app/store/useApiStore";
import { Button } from "@/components/ui/button";
import { IconUpload, IconTrash } from "@tabler/icons-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IconCalendarCheck, IconClockHour4 } from "@tabler/icons-react";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export function UploadReq() {
  const saved = useApiStore((state) => state.savedRequests);
  const loadRequest = useApiStore((state) => state.loadRequest);
  const deleteRequest = useApiStore((state) => state.deleteRequest);
  const clearRequests = useApiStore((state) => state.clearRequests);

  const [open, setOpen] = useState(false); // کنترل باز/بسته بودن دیالوگ

  const getBadgeClass = (method) => {
    switch (method) {
      case "POST":
        return "bg-blue-500 text-blue-50 dark:bg-blue-950 dark:text-blue-300";
      case "PUT":
        return "bg-orange-500 text-orange-50 dark:bg-orange-950 dark:text-orange-300";
      case "DELETE":
        return "bg-red-500 text-red-50 dark:bg-red-950 dark:text-red-300";
      case "GET":
        return "bg-green-500 text-green-50 dark:bg-green-950 dark:text-green-300";
      default:
        return "bg-gray-500 text-gray-50 dark:bg-gray-950 dark:text-gray-300";
    }
  };

  const handleUpload = (id) => {
    loadRequest(id);
    setOpen(false); // 👈 دیالوگ بسته می‌شود بعد از upload
  };

  const handleDeleteAll = () => {
    clearRequests();
    setOpen(false); // 👈 دیالوگ بسته می‌شود بعد از پاک کردن همه
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className={"capitalize"}>
          <IconUpload />
          upload request
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:min-w-xl">
        <DialogHeader>
          <DialogTitle className={"capitalize"}>Upload request</DialogTitle>
          <DialogDescription>
            Access and select your saved requests here.
          </DialogDescription>
        </DialogHeader>

        {saved.length === 0 ? (
          <Card className={"p-5 text-[15px]"}>No saved requests.</Card>
        ) : (
          saved.map((item) => (
            <Card key={item.id}>
              <CardHeader className={"flex justify-between items-center"}>
                <CardTitle className={"capitalize flex items-center gap-2.5"}>
                  {item.name}
                  <Badge className={`${getBadgeClass(item.method)} uppercase`}>
                    {item.method}
                  </Badge>
                </CardTitle>
                <CardAction>
                  <ButtonGroup>
                    <Button
                      variant="secondary"
                      className={"capitalize"}
                      size="sm"
                      onClick={() => handleUpload(item.id)}
                    >
                      upload
                    </Button>
                    <ButtonGroupSeparator />
                    <Button
                      variant="destructive"
                      className={"capitalize bg-[#E91A23]!"}
                      size="sm"
                      onClick={() => deleteRequest(item.id)}
                    >
                      delete
                    </Button>
                  </ButtonGroup>
                </CardAction>
              </CardHeader>
              <CardContent className={"flex flex-col gap-2"}>
                <div className="flex gap-2.5 *:text-[12px]">
                  <h6 className="flex items-center gap-1">
                    <IconCalendarCheck size={18} />
                    {item.savedDate}
                  </h6>
                  <h6 className="flex items-center gap-1">
                    <IconClockHour4 size={18} />
                    {item.savedTime}
                  </h6>
                </div>
                <h4 className="text-[14px] text-muted-foreground">{item.url}</h4>
                <p className="text-[13px]">{item.description}</p>
              </CardContent>
            </Card>
          ))
        )}

        <DialogFooter className={"justify-between!"}>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            variant="destructive"
            className={"capitalize bg-[#E91A23]!"}
            onClick={handleDeleteAll}
          >
            delete all
            <IconTrash />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}