import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { IconRotateClockwise } from "@tabler/icons-react";
import FormMode from "./form/FormMode";
import RawMode from "./raw/RawMode";
import useApiStore from "@/app/store/useApiStore";

export default function Body() {
  const [isOn, setIsOn] = useState(false);

  const resetBodies = useApiStore((s) => s.setBodys); // Reset form mode
  const resetRaw = useApiStore((s) => s.setBodyRaw);

    const handleReset = () => {
    resetBodies([]);   // پاک کردن فرم mode
    resetRaw("");     // پاک کردن raw mode
  };
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Switch
            id="airplane-mode"
            checked={isOn}
            onCheckedChange={(checked) => {
              setIsOn(checked);
            }}
          />
          <Label htmlFor="airplane-mode" className={"capitalize"}>
            raw mode
          </Label>
        </div>
        <Button
          variant="destructive"
          className={
            "capitalize bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300"
          }
          onClick={handleReset}
        >
          reset
          <IconRotateClockwise />
        </Button>
      </div>
      <div className="mt-2.5">{isOn ? <RawMode /> : <FormMode />}</div>
    </>
  );
}
