<template>
  <div class="edit-container">
    <div class="edit-area">
      <div class="edit-area-tools">
        <!-- emoji -->
        <div class="emoji-btn">
          <a-icon type="smile" @click="triggerIcon" />
          <div v-show="emojiVisible" class="emoji-list">
            <div class="emoji-list-title"></div>
            <span
              v-for="(item, index) in emojis"
              :key="index"
              @click="setEmoji(item)"
              >{{ item }}
            </span>
          </div>
        </div>
        <div class="edit-signs">
          <span
            v-for="sign in inputSigns"
            :key="setSignKey(sign)"
            @click="() => onClickHolder(sign)"
            class="sign"
          >
            {{ sign.label }}
          </span>
        </div>
        <div v-if="showRecoverBtn" class="recover-btn">
          <a-icon type="reload" /><span class="str">恢复默认文案</span>
        </div>
      </div>
      <div class="edit-area-content">
        <div
          class="content"
          :contenteditable="!disabled"
          @input="onChange"
          ref="content"
          @blur="onBlurEdit()"
        ></div>
      </div>
      <div class="edit-area-len">{{ getStrLength(value) }}/{{ maxLength }}</div>
    </div>
    <div class="select-text" v-if="type === 2">
      <p
        v-for="sign in inputSigns"
        :key="setSignKey(sign)"
        @click="() => onClickHolder(sign)"
        class="sign"
      >
        <span>{{ sign.label }}</span>
      </p>
    </div>
  </div>
</template>
<script>
/**
 * 组件描述
 * @method reset  初始化输入内容
 * @event recover 点击恢复按钮触发，恢复按钮的显示以来属性showRecoverBtn
 */
// todo: 表情的支持需要继续开发

const emojis = Object.freeze([
  "👍",
  "🌹",
  "🌸",
  "🌟",
  "👏",
  "😄",
  "😁",
  "😃",
  "😆",
  "😂",
  "😉",
  "😊",
  "😜",
  "😝",
  "✊",
  "🙈"
]);
let position = "";
const SIGN_STYLE = "color: #3780E5;white-space: nowrap;";
/**创建标签节点 DOM Element */
const getSignEle = function(label = "") {
  let ele = document.createElement("span");
  let newContent = document.createTextNode(label);
  ele.style.cssText = SIGN_STYLE;
  ele.contentEditable = false;
  ele.appendChild(newContent);
  return ele;
};
// 生成节点 html
const getSignString = function(label = "") {
  return `<span contenteditable=false style='${SIGN_STYLE}'>${label}</span>`;
};
export default {
  name: "EditArea",
  props: {
    // 输入文案
    value: {
      type: String,
      default: ""
    },
    // 输入的标签[{label: "学生姓名", type:}]
    inputSigns: {
      type: Array,
      default: () => []
    },
    inputSignKey: {
      type: String || Function,
      default: null
    },
    showEmoji: {
      type: Boolean,
      default: false
    },
    maxLength: {
      type: Number,
      default: 400
    },
    showRecoverBtn: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      emojis: emojis,
      preValue: this.value,
      emojiVisible: false
    };
  },
  mounted() {
    this.reset(this.value);
  },
  methods: {
    onRecover() {
      this.$emit("recover");
    },
    onBlurEdit() {
      position = window.getSelection().getRangeAt(0);
    },
    onClickHolder(sign) {
      const { content } = this.$refs;
      if (this.isMaxLength(sign.label)) return;

      // 插入文本
      if (position === "") {
        // 如果div没有光标，则在div内容末尾插入
        content.focus();
        const range = window.getSelection();
        range.selectAllChildren(content);
        range.collapseToEnd();
        position = window.getSelection().getRangeAt(0);
      }

      // 创建一个元素
      let ele = getSignEle(sign.label);

      // 将按钮插入
      position.insertNode(ele);
      this.onChange();
    },
    /**创建signkey */
    setSignKey(sign) {
      let key = "";
      if (this.inputSignKey instanceof Function) {
        key = this.inputSignKey(sign);
      } else {
        key = sign[this.inputSignKey || "label"];
      }
      return key;
    },
    /**内容变化 */
    onChange(e) {
      const {
        content: { innerText, innerHTML }
      } = this.$refs;
      if (this.isMaxLength()) {
        this.$refs.content.innerHTML = this.preValue;
        let range = document.createRange();
        range.selectNodeContents(this.$refs.content);
        range.collapse(false);
        let sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      } else {
        this.preValue = innerHTML;
        this.$emit("input", innerText);
      }
    },
    isMaxLength(addLabel = "") {
      // var str1 = inputLength(addLabel + this.value).replace(/#.*?#/g, ""),
      //   str2 = this.$refs.content.innerText.replace(/#.*?#/g, "");
      // console.log(str1, str2);
      return (
        this.getStrLength(addLabel + this.value) > this.maxLength ||
        this.getStrLength(this.$refs.content.innerText) > this.maxLength
      );
    },
    getStrLength(str) {
      return str.replace(/#.*?#/g, "").length;
    },
    reset(input = "") {
      var result = input.replace(/#.*?#/g, word => {
        return getSignString(word);
      });
      this.$refs.content.innerHTML = result;
      position = "";
      this.$emit("input", input);
    },
    triggerIcon() {
      this.emojiVisible = !this.emojiVisible;
    },
    setEmoji(item) {
      const { content } = this.$refs;
      if (this.isMaxLength()) return;

      // 插入文本
      if (position === "") {
        // 如果div没有光标，则在div内容末尾插入
        content.focus();
        const range = window.getSelection();
        range.selectAllChildren(content);
        range.collapseToEnd();
        position = window.getSelection().getRangeAt(0);
      }

      // 将按钮插入
      position.insertNode(new Text(item));
      this.onChange();
      this.triggerIcon();
    }
  }
};
</script>

<style lang="less" scoped>
.edit-container {
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: row;
  .select-text {
    padding: 10px;
    background: #f5f5f5;
    min-width: 160px;
    overflow: auto;
    > p {
      cursor: pointer;
      color: #3780e5;
      line-height: 24px;
      transition: all 0.2s;
      > span {
        padding: 2px 5px;
        &:hover {
          border-radius: 50px;
          background: #e8e8e8;
        }
      }
    }
  }
}
.edit-area {
  width: 338px;
  height: 200px;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .edit-area-tools {
    width: 100%;
    height: 40px;
    min-height: 40px;
    background: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 8px;
    .edit-signs {
      .sign {
        display: inline-block;
        height: 24px;
        line-height: 24px;
        border-radius: 50px;
        font-size: 14px;
        vertical-align: middle;
        color: #3780e6;
        padding: 0 8px;
        margin: 0 8px;
        cursor: pointer;
        transition: all 0.2s;
        &:nth-child(1) {
          margin-left: 0;
        }
        &:hover {
          background: #e8e8e8;
        }
      }
    }

    .recover-btn {
      float: right;
      color: #8c8c8c;
      cursor: pointer;
      .str {
        color: #595959;
        margin-left: 9px;
      }
    }
  }
  .edit-area-content {
    width: 100%;
    height: 100%;
    padding: 8px;
    overflow-y: auto;
    box-sizing: border-box;
    .content {
      width: 100%;
      min-height: 100%;
    }
  }
  .edit-area-len {
    width: 100%;
    height: 38px;
    min-height: 38px;
    font-size: 14px;
    color: #8c8c8c;
    text-align: end;
    padding-right: 16px;
    line-height: 38px;
  }
}
.emoji-btn {
  cursor: pointer;
  position: relative;
}
.emoji-list {
  position: absolute;
  width: 120px;
  top: 25px;
  background: #fff;
  border: 1px solid #ccc;
  .emoji-list-title {
    width: 100%;
    padding-bottom: 20px;
    background: #eee;
  }
  > span {
    margin: 6px;
    cursor: pointer;
  }
}
</style>
