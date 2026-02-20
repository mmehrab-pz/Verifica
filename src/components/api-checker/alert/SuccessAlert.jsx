
"use client"

import { Button } from "@/components/ui/button"
import { useEffect } from "react"
import { toast } from "sonner"

export default function SuccessAlert() {
  useEffect(()=>{
    toast.success("Event has been created")
  },[])
}
