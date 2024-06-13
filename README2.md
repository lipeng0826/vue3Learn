# 1

## vite-plugin-vue-setup-extend 使用

1.npm i vite-plugin-vue-setup-extend 2.在 vite.config.ts 中配置插件

```js
import vueSetupExtend from "vite-plugin-vue-setup-extend";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueSetupExtend()],
});
```

3.重启项目
