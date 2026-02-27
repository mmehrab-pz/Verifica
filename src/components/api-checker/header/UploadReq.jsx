'use client'
import useApiStore from "@/app/store/useApiStore"
import { Button } from "@/components/ui/button"
import { IconUpload } from "@tabler/icons-react"

export function UploadReq() {
  const saved = useApiStore((state) => state.savedRequests)
  const test = ()=>{
    
console.log(saved)
  }
  return (
    <Button variant="outline" onClick={test}>
      <IconUpload /> Upload Request
    </Button>
  )
}
