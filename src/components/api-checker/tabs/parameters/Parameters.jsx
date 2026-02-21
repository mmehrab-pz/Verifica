"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { IconCircleDashedPlus } from "@tabler/icons-react";
import ParamField from "./ParamField";
import { FieldGroup } from "@/components/ui/field";

export default function Parameters() {
  const [fields, setFields] = useState(() => {
    const stored = localStorage.getItem("fields");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("fields", JSON.stringify(fields));
  }, [fields]);

  function addField() {
    setFields((prev) => [...prev, { id: Date.now(), key:'', value:'' }]);
  }

  function removeField(id) {
    setFields((prev) => prev.filter((f) => f.id !== id));
  }

  function updateField(id, key, value) {
    setFields((prev) =>
      prev.map((f) =>
        f.id === id ? { ...f, key, value } : f
      )
    );
  }
  return (
    <>
      <div className="flex flex-col">
        {fields.map((field) => {
          return (
            <ParamField
              key={field.id}
              id={field.id}
              onDelete={removeField}
              onChange={updateField}
              fieldData={field}
            />
          );
        })}
      </div>
      <div className="">
        <Button onClick={addField} className={"capitalize flex items-center"}>
          add parameters
          <IconCircleDashedPlus />
        </Button>
      </div>
    </>
  );
}
