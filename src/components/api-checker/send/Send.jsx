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

export default function Send({ onSend, loading }) {
  const [url, setUrlLocal] = useState("");
  const [method, setMethodLocal] = useState("");

  const storeUrl = useApiStore((state) => state.url);
  const storeMethod = useApiStore((state) => state.method);

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
        <Input
          value={url}
          className="w-[50%]!"
          id="input-url"
          type="text"
          placeholder="https://jsonplaceholder.typicode.com/posts"
          onChange={(e) => setUrlLocal(e.target.value)}
        />

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