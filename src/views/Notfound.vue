<template>
  <div>
    <div>当前页面不存在，请检查网址是否正确</div>
    <router-link to="/money">返回首页</router-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Notfound",
});
</script>

<style scoped>
</style>