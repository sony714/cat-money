<template>
  <div>
    <label class="formItem">
      <span class="name">{{ this.fieldName }}</span>
      <input type="text" v-model="value" :placeholder="this.placeholder" />
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch } from "vue-property-decorator";
import Vue from "vue";
@Component
export default class formItem extends Vue {
  @Prop() value!: string;
  @Prop({ required: true }) fieldName!: string;
  @Prop() placeholder?: string;

  @Watch("value")
  onvalueChanged(value: string, oldvalue: string) {
    this.$emit("update:value", value);
  }
}
</script>

<style  lang='scss' scoped>
.formItem {
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
    height: 40px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-left: 16px;
  }
}
</style>