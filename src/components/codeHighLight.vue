<template>
  <pre><code ref="codeBlock" class="javascript">{{ code }}</code></pre>
  <!-- <a-collapse v-model:activeKey="activeKey">
    <a-collapse-panel>
      <pre><code ref="codeBlock" class="javascript">{{ code }}</code></pre>
    </a-collapse-panel>
  </a-collapse> -->
</template>

<script>
// 代码高亮插件
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css'; // 根据需要选择不同的主题

export default {
  props: {
    code: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.highlightCode();
  },
  methods: {
    highlightCode() {
      this.$nextTick(() => {
        hljs.highlightBlock(this.$refs.codeBlock);
      });
    },
  },
};
</script>

<style scoped>
pre {
  background: #f5f5f5;
  padding: 16px;
  border-radius: 8px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 14px;
  overflow: auto;
}
</style>
