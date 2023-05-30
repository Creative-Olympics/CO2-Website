// vite.config.js
import { sveltekit } from "file:///home/john/CO/website/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import { imagetools } from "file:///home/john/CO/website/node_modules/@zerodevx/svelte-img/dist/vite.js";
import { ViteMinifyPlugin } from "file:///home/john/CO/website/node_modules/vite-plugin-minify/dist/index.js";
import { defineConfig } from "file:///home/john/CO/website/node_modules/vite/dist/node/index.js";
import path from "path";
var vite_config_default = defineConfig({
  plugins: [sveltekit(), imagetools(), ViteMinifyPlugin()],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"]
  },
  resolve: {
    alias: {
      $cmp: path.resolve("src/components")
    }
  },
  build: {
    rollupOptions: {
      output: {
        compact: true
      }
    },
    commonjsOptions: {
      sourceMap: false
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9qb2huL0NPL3dlYnNpdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL2pvaG4vQ08vd2Vic2l0ZS92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9qb2huL0NPL3dlYnNpdGUvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBzdmVsdGVraXQgfSBmcm9tICdAc3ZlbHRlanMva2l0L3ZpdGUnO1xuaW1wb3J0IHsgaW1hZ2V0b29scyB9IGZyb20gJ0B6ZXJvZGV2eC9zdmVsdGUtaW1nL3ZpdGUnXG5pbXBvcnQgeyBWaXRlTWluaWZ5UGx1Z2luIH0gZnJvbSAndml0ZS1wbHVnaW4tbWluaWZ5J1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcblx0cGx1Z2luczogW3N2ZWx0ZWtpdCgpLCBpbWFnZXRvb2xzKCksIFZpdGVNaW5pZnlQbHVnaW4oKV0sXG5cdHRlc3Q6IHtcblx0XHRpbmNsdWRlOiBbJ3NyYy8qKi8qLnt0ZXN0LHNwZWN9Lntqcyx0c30nXVxuXHR9LFxuXHRyZXNvbHZlOiB7XG5cdFx0YWxpYXM6IHtcblx0XHRcdCRjbXA6IHBhdGgucmVzb2x2ZSgnc3JjL2NvbXBvbmVudHMnKVxuXHRcdH1cblx0fSxcblx0YnVpbGQ6IHtcblx0XHRyb2xsdXBPcHRpb25zOiB7XG5cdFx0XHRvdXRwdXQ6IHtcblx0XHRcdFx0Y29tcGFjdDogdHJ1ZVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y29tbW9uanNPcHRpb25zOiB7XG5cdFx0XHRzb3VyY2VNYXA6IGZhbHNlXG5cdFx0fVxuXHR9XG59KTsiXSwKICAibWFwcGluZ3MiOiAiO0FBQWlQLFNBQVMsaUJBQWlCO0FBQzNRLFNBQVMsa0JBQWtCO0FBQzNCLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sVUFBVTtBQUVqQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMzQixTQUFTLENBQUMsVUFBVSxHQUFHLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQztBQUFBLEVBQ3ZELE1BQU07QUFBQSxJQUNMLFNBQVMsQ0FBQyw4QkFBOEI7QUFBQSxFQUN6QztBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1IsT0FBTztBQUFBLE1BQ04sTUFBTSxLQUFLLFFBQVEsZ0JBQWdCO0FBQUEsSUFDcEM7QUFBQSxFQUNEO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTixlQUFlO0FBQUEsTUFDZCxRQUFRO0FBQUEsUUFDUCxTQUFTO0FBQUEsTUFDVjtBQUFBLElBQ0Q7QUFBQSxJQUNBLGlCQUFpQjtBQUFBLE1BQ2hCLFdBQVc7QUFBQSxJQUNaO0FBQUEsRUFDRDtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
