"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { IconCircleDashedPlus } from "@tabler/icons-react";
import HeaderField from "./HeaderField";
import useApiStore from "@/app/store/useApiStore";

export default function Headers() {
  const heads = useApiStore((s) => s.heads);
  const addHead = useApiStore((s) => s.addHead);
  const removeHead = useApiStore((s) => s.removeHead);
  const updateHead = useApiStore((s) => s.updateHead);
  return (
    <>
      <div className="flex flex-col">
        {heads.map((head) => {
          return (
            <HeaderField
              key={head.id}
              id={head.id}
              onDelete={removeHead}
              onChange={updateHead}
              headData={head}
            />
          );
        })}
      </div>
      <div className="">
        <Button onClick={addHead} className={"capitalize flex items-center"}>
          add header
          <IconCircleDashedPlus />
        </Button>
      </div>
    </>
  );
}
