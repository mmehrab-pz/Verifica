"use client";

import React, { useState, useEffect } from "react";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { IconSend2 } from "@tabler/icons-react";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import useApiStore from "@/app/store/useApiStore";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IconInfoCircle, IconStar, IconClipboard } from "@tabler/icons-react";

export default function Send({ onSend, loading }) {
  const [url, setUrlLocal] = useState("");
  const [method, setMethodLocal] = useState("");
  const [isFavorite, setIsFavorite] = React.useState(false);

  const storeUrl = useApiStore((state) => state.url);
  const storeMethod = useApiStore((state) => state.method);
  const handleClipboardClick = () => {
    setUrlLocal("https://jsonplaceholder.typicode.com/posts");
  };

  useEffect(() => {
    if (storeUrl) setUrlLocal(storeUrl);
    if (storeMethod) setMethodLocal(storeMethod);
  }, [storeUrl, storeMethod]);

  const handleSend = () => {
    if (!url.trim()) {
      toast.error("URL cannot be empty!");
      return;
    }

    if (!method) {
      toast.error("Please select a method!");
      return;
    }

    onSend({
      url,
      method,
    });
  };

  return (
    <div className="w-full border-b border-border px-8 py-4">
      <Field className="flex flex-row">
        {/* <Input
          value={url}
          className="w-[50%]!"
          id="input-url"
          type="text"
          placeholder="https://jsonplaceholder.typicode.com/posts"
          onChange={(e) => setUrlLocal(e.target.value)}
        /> */}
        <InputGroup className="w-[50%]!">
          <Popover>
            <PopoverTrigger asChild>
              <InputGroupAddon>
                <InputGroupButton variant="secondary" size="icon-xs">
                  <IconInfoCircle />
                </InputGroupButton>
              </InputGroupAddon>
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className="flex flex-col gap-1 rounded-xl text-sm"
            >
              <p className="font-medium">API URL</p>
              <p className="text-[13px] text-muted-foreground">
                Enter the URL of the API you want to fetch data from. This field
                should contain a valid endpoint for your request.
              </p>
              <p className="flex items-center gap-1">
                you can click 
                <IconClipboard size={20}/>
                to auto-fill the field
              </p>
            </PopoverContent>
          </Popover>
          <InputGroupInput
            id="input-url"
            placeholder="https://jsonplaceholder.typicode.com/posts"
            onChange={(e) => setUrlLocal(e.target.value)}
             value={url}
          />
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              onClick={() => handleClipboardClick()}
              size="icon-xs"
            >
              <IconClipboard
                size={40}
                className="data-[favorite=true]:fill-blue-600 data-[favorite=true]:stroke-blue-600"
              />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>

        <Select value={method} onValueChange={setMethodLocal}>
          <SelectTrigger className="w-[30%]!">
            <SelectValue placeholder="Method" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="GET">Get</SelectItem>
              <SelectItem value="POST">Post</SelectItem>
              <SelectItem value="PUT">Put</SelectItem>
              <SelectItem value="DELETE">Delete</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {loading ? (
          <Button variant="outline" disabled className="w-[20%]!">
            <Spinner data-icon="inline-start" />
            Please wait
          </Button>
        ) : (
          <Button variant="outline" className="w-[20%]!" onClick={handleSend}>
            Send <IconSend2 />
          </Button>
        )}
      </Field>
    </div>
  );
}
