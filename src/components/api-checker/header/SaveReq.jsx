'use client'
import { Button } from "@/components/ui/button";
import { IconDownload } from "@tabler/icons-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import useApiStore from "@/app/store/useApiStore";

export function SaveReq() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const saveRequest = useApiStore((state) => state.saveRequest);

   const handleSubmit = (e) => {
    e.preventDefault()

     if (!name.trim()) {
       alert("اسم وارد کن")
       return
     }

    saveRequest(name, description)

    setName("")
    setDescription("")
  }
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">
            <IconDownload /> Save Request
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle className={"capitalize"}>Save request</DialogTitle>
            <DialogDescription>
              You can save your requests to access and use them later.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1" className={"capitalize"}>
                name request
              </Label>
              <Input id="name-1" placeholder="User List" value={name}
                onChange={(e) => setName(e.target.value)} />
            </Field>
            <Field>
              <Label htmlFor="description" className={"capitalize"}>
                description (Optional)
              </Label>
              {/* <Input id="username-1" name="username" defaultValue="@peduarte" /> */}
              <Textarea
                id="description"
                placeholder="Type your description here."
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
                }
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button
              type="submit"
              className={"capitalize"}
              onClick={handleSubmit}
            >
              Save request
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
