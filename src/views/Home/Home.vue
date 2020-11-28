<template>
  <div class="home">
    <!-- 轮播 -->
    <Banner></Banner>
    <!-- 导航 -->
    <Category></Category>
    <!-- 列表 -->
    <List></List>
  </div>
</template>
<script>
import Banner from "./Banner.vue";
import Category from "./Category.vue";
import List from "./List.vue";
export default {
  data() {
    return {};
  },
  components: {
    Banner,
    Category,
    List,
  },
};
</script>
<style scoped>
@import ("@/assets/index.css");
</style>