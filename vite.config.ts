import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	optimizeDeps: {
		exclude: ["lucide-react"],
	},
	server: {
		host: true, // This exposes the server to all network interfaces
		port: 5173,
	},
});
