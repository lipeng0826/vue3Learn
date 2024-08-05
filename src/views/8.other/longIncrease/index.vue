<template>
  <div>
    <h1>Longest Increasing Subsequence</h1>
    <input v-model="inputArray" placeholder="输入数字，通过逗号分割" />
    <button @click="calculateLIS">Calculate LIS</button>
    <div v-if="result">
      <h2>Longest Increasing Subsequence:</h2>
      <p>{{ result }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputArray: '',
      result: null
    };
  },
  methods: {
    calculateLIS() {
      const arr = this.inputArray.split(',').map(Number);
      this.result = this.longestIncreasingSubsequence(arr);
    },
    longestIncreasingSubsequence(arr) {
      if (arr.length === 0) return [];

      const dp = Array(arr.length).fill(1);
      const predecessor = Array(arr.length).fill(-1);

      let maxLength = 1;
      let maxIndex = 0;

      for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
          if (arr[i] > arr[j] && dp[i] < dp[j] + 1) {
            dp[i] = dp[j] + 1;
            predecessor[i] = j;
          }
        }
        if (dp[i] > maxLength) {
          maxLength = dp[i];
          maxIndex = i;
        }
      }

      const lis = [];
      for (let i = maxIndex; i >= 0; i = predecessor[i]) {
        lis.push(arr[i]);
        if (predecessor[i] === -1) break;
      }

      return lis.reverse();
    }
  }
};
</script>

<style scoped>
input {
  margin-bottom: 10px;
  padding: 5px;
}
button {
  margin-bottom: 10px;
  padding: 5px 10px;
}
</style>
