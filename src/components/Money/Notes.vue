<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" v-model="value" placeholder="在这里输入备注" />
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch } from "vue-property-decorator";
import Vue from "vue";
@Component
export default class Notes extends Vue {
  value = "";
  @Watch("value")
  onvalueChanged(value: string, oldvalue: string) {
    this.$emit("update:value", value);
  }
}
</script>

<style  lang='scss' scoped>
.notes {
  font-size: 14px;
  background: #f5f5f5;
  display: flex;
  padding-left: 16px;
  display: flex;
  align-items: center;
  .names {
    padding-right: 16px;
  }
  input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-left: 16px;
  }
}
</style>