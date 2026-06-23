import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // This is correct for a user site like tomerhershkovitz.github.io.
  // If you deploy under a repository path later, update the base accordingly.
  base: "/",
});
