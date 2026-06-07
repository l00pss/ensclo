import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages layihəni `https://<user>.github.io/ensclo/` altında verir,
// ona görə asset yolları üçün `base` repo adı ilə eyni olmalıdır.
export default defineConfig({
  base: "/ensclo/",
  plugins: [react()],
});
