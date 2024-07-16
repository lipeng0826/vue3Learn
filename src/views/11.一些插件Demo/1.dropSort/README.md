基本用法
首先，确保你已经安装了 vuedraggable：

bash
复制代码
npm install vuedraggable
然后，你可以在组件中使用 vuedraggable 来实现多行拖拽排序：

vue
复制代码
<template>
  <div>
    <draggable v-model="items" @end="onEnd">
      <template v-for="(item, index) in items" :key="item.id">
        <div class="draggable-item">
          {{ item.name }}
        </div>
      </template>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  components: {
    draggable,
  },
  data() {
    return {
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        // more items...
      ],
    };
  },
  methods: {
    onEnd(event) {
      // 处理拖拽结束后的逻辑
      console.log('拖拽结束：', event);
    },
  },
};
</script>

<style>
.draggable-item {
  padding: 10px;
  margin: 5px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
}
</style>
关键点
v-model 绑定：v-model 绑定到一个数组，当拖拽排序发生变化时，数组也会相应地更新。
事件处理：可以监听拖拽事件，例如 @start、@end、@add、@remove 等来处理不同的拖拽行为。
多行拖拽排序
对于多行拖拽排序，通常只需要在 CSS 中确保列表项可以换行，然后使用 vuedraggable 组件即可。示例如下：

vue
复制代码
<template>
  <div>
    <draggable
      v-model="items"
      @end="onEnd"
      :options="{ animation: 200, group: 'items', multiDrag: true, selectedClass: 'sortable-selected', multiDragKey: 'ctrl' }"
    >
      <template v-for="(item, index) in items" :key="item.id">
        <div class="draggable-item">
          {{ item.name }}
        </div>
      </template>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  components: {
    draggable,
  },
  data() {
    return {
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        // more items...
      ],
    };
  },
  methods: {
    onEnd(event) {
      // 处理拖拽结束后的逻辑
      console.log('拖拽结束：', event);
    },
  },
};
</script>

<style>
.draggable-item {
  display: inline-block;
  padding: 10px;
  margin: 5px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  width: 100px; /* 控制每个项的宽度 */
}
</style>
解释
display: inline-block：使每个列表项可以在同一行显示，超出父容器宽度时自动换行。
:options 属性：配置 Sortable.js 的选项。
animation: 设置拖拽动画时间（毫秒）。
group: 定义拖拽分组，允许跨列表拖拽。
multiDrag: 启用多拖拽功能（需要安装 sortablejs 的多拖拽插件）。
selectedClass: 选中项的 CSS 类名。
multiDragKey: 用于多选拖拽的键（例如 ctrl）。
通过这些配置，你可以实现多行拖拽排序，并根据需求进行自定义。
