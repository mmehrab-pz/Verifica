// import { create } from "zustand";
// import { toast } from "sonner";

// const useApiStore = create((set) => ({
//   data: null,
//   loading: false,
//   success: null,
//   url: "",
//   method: "",
//   statusCode: null,

//   sendRequest: async (url, method) => {
//     set({ loading: true });

//     try {
//       const res = await fetch(url, { method });
//       const json = await res.json();

//       set({
//         data: json,
//         success: res.ok,
//         url,
//         method,
//         statusCode: res.status,
//       });

//       if (res.ok) {
//         toast.success("Request succeeded", { position: "top-center" });
//       } else {
//         toast.error(json.message || "Request error", {
//           position: "top-center",
//         });
//       }
//     } catch (e) {
//       set({
//         success: false,
//         url,
//         method,
//         statusCode: null,
//       });

//       toast.error(e.message || "Request error", {
//         position: "top-center",
//       });
//     } finally {
//       set({ loading: false });
//     }
//   },
// }));

// export default useApiStore;
import { create } from "zustand";
import { toast } from "sonner";

const useApiStore = create((set, get) => ({
  data: null,
  loading: false,
  success: null,
  url: "",
  method: "",
  statusCode: null,
  responseTime: null,
  fields: [],
  heads: [],

  setFields: (fields) => set({ fields }),

  addField: () =>
    set((state) => ({
      fields: [...state.fields, { id: Date.now(), key: "", value: "" }],
    })),

  removeField: (id) =>
    set((state) => ({
      fields: state.fields.filter((f) => f.id !== id),
    })),

  updateField: (id, key, value) =>
    set((state) => ({
      fields: state.fields.map((f) => (f.id === id ? { ...f, key, value } : f)),
    })),

  addHead: () =>
    set((state) => ({
      heads: [...state.heads, { id: Date.now(), key: "", value: "" }],
    })),

  removeHead: (id) =>
    set((state) => ({
      heads: state.heads.filter((h) => h.id !== id),
    })),

  updateHead: (id, key, value) =>
    set((state) => ({
      heads: state.heads.map((h) => (h.id === id ? { ...h, key, value } : h)),
    })),

  sendRequest: async (rawUrl, method) => {
    set({ loading: true });

    try {
      const start = performance.now();
      const { fields, heads } = get();

      const urlObject = new URL(rawUrl);

      fields.forEach((field) => {
        const key = field.key?.trim();
        if (!key) return;
        urlObject.searchParams.append(key, field.value ?? "");
      });

      const headersObject = {};

      heads.forEach((head) => {
        const key = head.key?.trim();
        if (!key) return;
        headersObject[key] = head.value ?? "";
      });

      const finalUrl = urlObject.toString();

      const res = await fetch(finalUrl, {
        method,
        headers: headersObject,
      });

      let json = null;
      try {
        json = await res.json();
      } catch {
        json = { message: "Response is not JSON" };
      }

      const end = performance.now();
      const duration = end - start;

      set({
        data: json,
        success: res.ok,
        url: finalUrl,
        method,
        statusCode: res.status,
        responseTime: duration.toFixed(2),
      });

      if (res.ok) {
        toast.success("Request succeeded", {
          position: "top-center",
        });
      } else {
        toast.error(json?.message || "Request error", {
          position: "top-center",
        });
      }
    } catch (e) {
      set({
        success: false,
        url: rawUrl,
        method,
        statusCode: null,
        responseTime: null,
      });

      toast.error(e.message || "Invalid URL or request error", {
        position: "top-center",
      });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useApiStore;
