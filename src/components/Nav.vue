<template>
  <nav>
    <router-link to="/money" class="item" active-class="selected"
      >记账<Icon name="money" />
    </router-link>
    <router-link to="/labels" class="item" active-class="selected">
      标签<Icon name="label" />
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected"
      >统计 <Icon name="statistics"
    /></router-link>
  </nav>
</template> 

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Nav",
});
</script>

<style lang = "scss" scoped>
nav {
  display: flex;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  flex-direction: row;
  > .item {
    padding: 2px 0;
    width: 33.333333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .icon {
      width: 32px;
      height: 32px;
    }
  }
  > .item.selected {
    color: red;
  }
}
</style>