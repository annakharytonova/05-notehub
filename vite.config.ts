import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "react-paginate": "react-paginate/dist/react-paginate.js",
    },
  },
});
