"use client";

import React, { useState } from "react";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
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
import { toast } from "sonner"

export default function Send({ onSend, loading }) {
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("");
  const handleSned = () => {
    if (!url.trim()) return;
    onSend({
      url,
      method,
    });
  };
  return (
    <div className="w-full border-b border-border px-8 py-4">
      <Field className="flex flex-row">
        <Input
          className="w-[50%]!"
          id="input-url"
          type="text"
          placeholder="https://jsonplaceholder.typicode.com/posts"
          onChange={(e) => setUrl(e.target.value)}
        />
        <Select onValueChange={setMethod}>
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
          <Button variant="outline" className="w-[20%]!" onClick={handleSned}>
            Send <IconSend2 />
          </Button>
        )}
      </Field>
    </div>
  );
}
