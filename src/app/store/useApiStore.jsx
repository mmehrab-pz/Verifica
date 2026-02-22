import { create } from "zustand";
import { toast } from "sonner";

const useApiStore = create((set) => ({
  data: null,
  loading: false,
  success: null,
  url: "",
  method: "",
  statusCode: null,

  sendRequest: async (url, method) => {
    set({ loading: true });

    try {
      const res = await fetch(url, { method });
      const json = await res.json();

      set({
        data: json,
        success: res.ok,
        url,
        method,
        statusCode: res.status,
      });

      if (res.ok) {
        toast.success("Request succeeded", { position: "top-center" });
      } else {
        toast.error(json.message || "Request error", {
          position: "top-center",
        });
      }
    } catch (e) {
      set({
        success: false,
        url,
        method,
        statusCode: null,
      });

      toast.error(e.message || "Request error", {
        position: "top-center",
      });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useApiStore;