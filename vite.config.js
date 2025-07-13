import { build, defineConfig } from "vite";
import {resolve } from "path";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),  //your main enter point (eg: home pagr)
                about: resolve(__dirname, "about.html"),    // additional html pages
                contact: resolve(__dirname, "contact.html"),
                products: resolve(__dirname, "products.html"),
                addToCart: resolve(__dirname, "addToCart.html"),
            },
        },
    },
});