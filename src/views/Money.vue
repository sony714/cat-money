<template>
  <Layout class-prefix="layout">
    <NumberPad />
    <Types />
    <Notes />
    <Tags :dataSource.sync="tags" />
  </Layout>
</template> 
 
<script lang="ts">
import Notes from "@/components/Money/Notes.vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Types from "@/components/Money/Types.vue";
import Tags from "@/components/Money/Tags.vue";
import Vue from "vue";
export default Vue.extend({
  components: { Notes, NumberPad, Types, Tags },
  name: "Money",
  data() {
    return {
      tags: ["衣", "食", "住", "行"],
    };
  },
});
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
</style>