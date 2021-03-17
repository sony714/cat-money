<template>
  <Layout>
    <div class="tags">
      <router-link
        class="tag"
        v-for="tag in tags"
        :key="tag.id"
        :to="`/labels/edit/${tag.id}`"
      >
        <span>{{ tag.name }}</span>
        <Icon name="right" />
      </router-link>
    </div>
    <div class="creatType-wrapper">
      <Button class="createTag" @click="createTag"> 新建标签 </Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import Button from "@/components/Button.vue";
import Vue from "vue";
import { mixins } from "vue-class-component";
import TagHelper from "@/mixins/TagHelper";
@Component({
  components: { Button },
  computed: {
    tags() {
      return this.$store.state.tagList;
    },
  },
})
export default class labels extends mixins(TagHelper) {
  beforeCreate() {
    this.$store.commit("fetchTags");
  }
  get tags() {
    return this.$store.state.tagList;
  }
}
</script>

<style lang = "scss" scoped>
.tags {
  background: white;
  font-size: 20px;
  > .tag {
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