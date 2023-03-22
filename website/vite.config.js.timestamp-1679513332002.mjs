// vite.config.js
import { sveltekit } from "file:///home/john/CO/website/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import { defineConfig } from "file:///home/john/CO/website/node_modules/vite/dist/node/index.js";
import path from "path";
var vite_config_default = defineConfig({
  plugins: [sveltekit()],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"]
  },
  resolve: {
    alias: {
      $cmp: path.resolve("src/components")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9qb2huL0NPL3dlYnNpdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL2pvaG4vQ08vd2Vic2l0ZS92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9qb2huL0NPL3dlYnNpdGUvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBzdmVsdGVraXQgfSBmcm9tICdAc3ZlbHRlanMva2l0L3ZpdGUnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcblx0cGx1Z2luczogW3N2ZWx0ZWtpdCgpXSxcblx0dGVzdDoge1xuXHRcdGluY2x1ZGU6IFsnc3JjLyoqLyoue3Rlc3Qsc3BlY30ue2pzLHRzfSddXG5cdH0sXG5cdHJlc29sdmU6IHtcblx0XHRhbGlhczoge1xuXHRcdFx0JGNtcDogcGF0aC5yZXNvbHZlKCdzcmMvY29tcG9uZW50cycpXG5cdFx0fVxuXHR9XG59KTsiXSwKICAibWFwcGluZ3MiOiAiO0FBQWlQLFNBQVMsaUJBQWlCO0FBQzNRLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sVUFBVTtBQUVqQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMzQixTQUFTLENBQUMsVUFBVSxDQUFDO0FBQUEsRUFDckIsTUFBTTtBQUFBLElBQ0wsU0FBUyxDQUFDLDhCQUE4QjtBQUFBLEVBQ3pDO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUixPQUFPO0FBQUEsTUFDTixNQUFNLEtBQUssUUFBUSxnQkFBZ0I7QUFBQSxJQUNwQztBQUFBLEVBQ0Q7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
