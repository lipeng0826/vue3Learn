import { reactive, computed } from "vue";
import { defineStore } from "pinia";
import { type LoveTalk } from "../types";

/**
 *
 * 定义一个名为 counter 的 store
 *  defineStore 接受两个参数，第一个参数是 store 的名字，第二个参数是一个函数，函数返回一个对象，对象中包含了 store 的数据和方法
 *     第二个参数可以是一个函数，也可以是一个对象
 *
 */

export const useLoveTalk = defineStore("loveTalk", () => {
  const list: LoveTalk[] = reactive([]);
  function unshift(value: LoveTalk) {
    list.unshift(value);
  }
  return { list, unshift };
});
