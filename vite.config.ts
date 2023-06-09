import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { visualizer } from "rollup-plugin-visualizer";


// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  console.log(mode)
  // console.log(env)
  const pluginsArr = mode === "production" ? [visualizer({
    open: true,
    template: "treemap",
  })] : []
  return {
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
        dts: false
      }),
      Components({
        resolvers: [ElementPlusResolver()],
        dts: false
      }),
      ...pluginsArr,
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    // https://cn.vitejs.dev/config/shared-options.html#base
    base: env.BASE_URL,
    build: {
      outDir: mode === "production" ? "docs" : "dist",
      sourcemap: false,
      reportCompressedSize: true,
    },
  }
});
