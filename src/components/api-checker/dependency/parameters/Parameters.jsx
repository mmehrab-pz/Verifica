"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { IconCircleDashedPlus } from "@tabler/icons-react";
import ParamField from "./ParamField";
import { FieldGroup } from "@/components/ui/field";
import useApiStore from "@/app/store/useApiStore";

export default function Parameters() {
  const fields = useApiStore((s) => s.fields);
  const addField = useApiStore((s) => s.addField);
  const removeField = useApiStore((s) => s.removeField);
  const updateField = useApiStore((s) => s.updateField);

  useEffect(() => {

    console.log(fields);
    
  }, [fields]);
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
