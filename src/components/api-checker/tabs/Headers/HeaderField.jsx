"use client";
import React from "react";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IconTrash } from "@tabler/icons-react";

export default function HeaderField({ id, onDelete, onChange, headData }) {
  const handleKeyChange = (e) => {
    onChange(id, e.target.value, headData.value);
  };
  const handleValueChange = (e) => {
    onChange(id, headData.key, e.target.value);
  };

  return (
    <FieldGroup className="flex gap-2.5 flex-row mb-2.5">
      <Field>
        <Input
          placeholder="key"
          value={headData.key}
          onChange={handleKeyChange}
        />
      </Field>
      <Field>
        <Input
          placeholder="value"
          value={headData.value}
          onChange={handleValueChange}
        />
      </Field>
      <Button onClick={() => onDelete(id)} variant="destructive" className={'bg-[#E91A23]!'}>
        <IconTrash />
      </Button>
    </FieldGroup>
  );
}
