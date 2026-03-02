import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {
    base: command === "build" ? "/2026-03-02-todo-list-react/" : "/",
    plugins: [react()],
  };
});
