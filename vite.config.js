import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
    resolve: { extensions: [".jsx", ".json", ".css", ".js"] },
    plugins: [react(), tailwindcss()],
    base: "/",
})
