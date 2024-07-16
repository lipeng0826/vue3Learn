# 1

## vite-plugin-vue-setup-extend 使用

这个插件的作用是：使 vue 脚本设置语法支持 name 属性

```js
<template>
  <div>hello world {{ a }}</div>
</template>

<script lang="ts" setup name="App">
  const a = 1
</script>
```

1.npm i vite-plugin-vue-setup-extend 2.在 vite.config.ts 中配置插件

```js
import vueSetupExtend from "vite-plugin-vue-setup-extend";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueSetupExtend()],
});
```

3.重启项目
