"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { IconCircleDashedPlus } from "@tabler/icons-react";
import useApiStore from "@/app/store/useApiStore";
import BodyField from "./BodyField";

export default function FormMode() {
const bodys = useApiStore((s) => s.bodys);       // درستش همین
const addBody = useApiStore((s) => s.addBody);    // درستش این
const removeBody = useApiStore((s) => s.removeBody);
const updateBody = useApiStore((s) => s.updateBody);
  return (
    <>
      <div className="flex flex-col">
        {bodys.map((body) => (
          <BodyField
            key={body.id}
            id={body.id}
            onDelete={removeBody}
            onChange={updateBody}
            fieldData={body}
          />
        ))}
      </div>
      <div className="">
        <Button onClick={addBody} className={"capitalize flex items-center"}>
          add body
          <IconCircleDashedPlus />
        </Button>
      </div>
    </>
  );
}
