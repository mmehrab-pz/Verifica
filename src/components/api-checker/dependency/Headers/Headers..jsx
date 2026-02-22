"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { IconCircleDashedPlus } from "@tabler/icons-react";
import HeaderField from "./HeaderField";

export default function Headers() {
  const [heads, setHead] = useState(() => {
    const stored = localStorage.getItem("heads");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("heads", JSON.stringify(heads));
  }, [heads]);

  function addHead() {
    setHead((prev) => [...prev, { id: Date.now(), key:'', value:'' }]);
  }

  function removeHead(id) {
    setHead((prev) => prev.filter((f) => f.id !== id));
  }

  function updateHead(id, key, value) {
    setHead((prev) =>
      prev.map((f) =>
        f.id === id ? { ...f, key, value } : f
      )
    );
  }
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
