<template>
  <Layout>
    <ol class="tags">
      <li v-for="tag in tags" :key="tag.id">
        <span>{{ tag.name }}</span>
        <Icon name="right" />
      </li>
    </ol>
    <div class="creatType-wrapper">
      <button class="creatType" @click="creatTag">新建标签</button>
    </div>
  </Layout>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import Vue from "vue";
const tagListModel = require("@/models/tagListModel").tagListModel;
tagListModel.fetch();
@Component
export default class Labels extends Vue {
  tags = tagListModel.data;
  creatTag() {
    const name = window.prompt("请输入标签名");
    if (name) {
      const message = tagListModel.create(name);
      if (message === "duplicated") {
        window.alert("标签名重复了");
      } else if (message === "success") {
        window.alert("添加成功");
      }
    }
  }
}
</script>

<style lang = "scss" scoped>
.tags {
  background: white;
  font-size: 20px;
  > li {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    padding-left: 25px;
    > svg {
      color: #333;
      width: 18px;
      height: 18px;
      margin-right: 16px;
    }
  }
}
.creatType {
  background: #767676;
  color: white;
  border: none;
  border-radius: 4px;
  height: 40px;
  padding: 0 16px;
  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 28px;
  }
}
</style>