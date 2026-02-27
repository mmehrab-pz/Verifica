"use client";
import React from "react";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IconTrash } from "@tabler/icons-react";

export default function BodyField({ id, onDelete, onChange, fieldData }) {
  const handleKeyChange = (e) => onChange(id, e.target.value, fieldData.value);
  const handleValueChange = (e) => onChange(id, fieldData.key, e.target.value);

  return (
    <FieldGroup className="flex gap-2.5 flex-row mb-2.5">
      <Field>
        <Input placeholder="key" value={fieldData.key} onChange={handleKeyChange} />
      </Field>
      <Field>
        <Input placeholder="value" value={fieldData.value} onChange={handleValueChange} />
      </Field>
      <Button onClick={() => onDelete(id)} variant="destructive" className="bg-[#E91A23]!">
        <IconTrash />
      </Button>
    </FieldGroup>
  );
}