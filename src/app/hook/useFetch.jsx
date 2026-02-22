import React, { useState } from "react";
import { toast } from "sonner"
export default function useFetch() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false)
  const sendRequest = async (url, method) => {
    try {
      setLoading(true);
      const response = await fetch(url, { method });
      const result = await response.json();
    
      if (!response.ok) {
        setSuccess(false)
        throw new Error(result.message || "url not found");
      }
      setSuccess(true)
      toast.success("Event has been created", { position: "top-center" })
      setData(result);
    } catch (error) {
      toast.error(error.message, { position: "top-center" })
    } finally {
      setLoading(false);
    }
  };
  return { sendRequest, data, loading, success };
}
