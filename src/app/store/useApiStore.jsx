import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "sonner";

const useApiStore = create(
  persist(
    (set, get) => ({
      data: null,
      loading: false,
      success: null,
      url: "",
      method: "",
      statusCode: null,
      responseTime: null,
      fields: [],
      heads: [],
      bodys: [],
      bodyRaw: "",
      savedRequests: [],

      // --- Setters ---
      setBodys: (bodys) => set({ bodys }),
      setBodyRaw: (bodyRaw) => set({ bodyRaw }),
      setUrl: (url) => set({ url }),
      setMethod: (method) => set({ method }),
      // --- Query Params ---
      setFields: (fields) => set({ fields }),
      addField: () =>
        set((state) => ({
          fields: [...state.fields, { id: Date.now(), key: "", value: "" }],
        })),
      removeField: (id) =>
        set((state) => ({ fields: state.fields.filter((f) => f.id !== id) })),
      updateField: (id, key, value) =>
        set((state) => ({
          fields: state.fields.map((f) =>
            f.id === id ? { ...f, key, value } : f,
          ),
        })),

      // --- Headers ---
      addHead: () =>
        set((state) => ({
          heads: [...state.heads, { id: Date.now(), key: "", value: "" }],
        })),
      removeHead: (id) =>
        set((state) => ({ heads: state.heads.filter((h) => h.id !== id) })),
      updateHead: (id, key, value) =>
        set((state) => ({
          heads: state.heads.map((h) =>
            h.id === id ? { ...h, key, value } : h,
          ),
        })),

      // --- Body (Form) ---
      addBody: () =>
        set((state) => ({
          bodys: [...state.bodys, { id: Date.now(), key: "", value: "" }],
        })),
      removeBody: (id) =>
        set((state) => ({ bodys: state.bodys.filter((f) => f.id !== id) })),
      updateBody: (id, key, value) =>
        set((state) => ({
          bodys: state.bodys.map((f) =>
            f.id === id ? { ...f, key, value } : f,
          ),
        })),

      // --- Save Request ---
      saveRequest: (name, description) => {
        const { url, method, bodys, fields, heads, savedRequests } = get();

        const now = new Date();
        const date = now.toLocaleDateString(); // فقط تاریخ، مثلا "27/2/2026"
        const time = now.toLocaleTimeString(); // فقط زمان، مثلا "15:50:12"

        if (!url || !method) {
          toast.error("URL and Method must be set before saving request", {
            position: "top-center",
          });
          return;
        }
        const cleanUrl = url.split("?")[0];
        const newRequest = {
          id: Date.now(),
          name,
          description,
          url: cleanUrl,
          method,
          bodys,
          fields,
          heads,
          savedDate: date,
          savedTime: time,
        };

        set({ savedRequests: [...savedRequests, newRequest] });
        toast.success("Request saved!", { position: "top-center" });
      },
      // --- load Request ---
      loadRequest: (id) => {
        const { savedRequests } = get();

        const req = savedRequests.find((r) => r.id === id);
        if (!req) return;

        set({
          url: req.url,
          method: req.method,
          bodys: req.bodys,
          fields: req.fields,
          heads: req.heads,
        });
      },
      // --- Delete a single request ---
      deleteRequest: (id) => {
        const { savedRequests } = get();
        set({ savedRequests: savedRequests.filter((r) => r.id !== id) });
      },

      // --- Delete all requests ---
      clearRequests: () => {
        set({ savedRequests: [] });
      },

      // --- Send Request ---
sendRequest: async (rawUrl, method) => {
  set({ loading: true });
  try {
    const start = performance.now();
    const { fields, heads, bodys, bodyRaw } = get();

    // --- Query Params ---
    const urlObject = new URL(rawUrl.split("?")[0]); // 👈 فقط base URL بدون query
    fields.forEach((field) => {
      const key = field.key?.trim();
      if (!key) return;
      urlObject.searchParams.append(key, field.value ?? "");
    });
    const finalUrl = urlObject.toString(); // 👈 این URL دیگه تکراری نمیشه

    // --- Headers ---
    const headersObject = {};
    heads.forEach((head) => {
      const key = head.key?.trim();
      if (!key) return;
      headersObject[key] = head.value ?? "";
    });

    // --- Body ---
    let bodyContent = null;
    if (["POST", "PUT", "PATCH"].includes(method.toUpperCase())) {
      if (bodyRaw) {
        bodyContent = bodyRaw;
      } else if (bodys.length > 0) {
        const bodyObj = {};
        bodys.forEach((b) => {
          if (b.key?.trim()) bodyObj[b.key] = b.value;
        });
        bodyContent = JSON.stringify(bodyObj);
      }
      if (bodyContent && !headersObject["Content-Type"]) {
        headersObject["Content-Type"] = "application/json";
      }
    }

    // --- Fetch ---
    const res = await fetch(finalUrl, {
      method,
      headers: headersObject,
      body: bodyContent,
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

    if (res.ok)
      toast.success("Request succeeded", { position: "top-center" });
    else
      toast.error(json?.message || "Request error", { position: "top-center" });
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
    }),
    {
      name: "api-store", // کلید در localStorage
      partialize: (state) => ({ savedRequests: state.savedRequests }), // فقط savedRequests persist میشه
    },
  ),
);

export default useApiStore;
