import React, { useState } from "react";
import { toast } from "sonner"
export default function useFetch() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const sendRequest = async (url, method) => {
    try {
      setLoading(true);
      const response = await fetch(url, { method });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "url not found");
      }
      toast.success("Event has been created", { position: "top-center" })
      setData(result);
    } catch (error) {
      toast.error(error.message, { position: "top-center" })
    } finally {
      setLoading(false);
    }
  };
  return { sendRequest, data, loading };
}
