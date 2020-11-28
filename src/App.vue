<template>
  <div id="app">
    <!-- 上面展示 -->
    <router-view></router-view>
    <!-- 底部导航 -->
    <NavBoottom></NavBoottom>
  </div>
</template>
<script>
import NavBoottom from "./views/NavBoottom";
export default {
  components: {
    NavBoottom,
  },
};
</script>
<style scoped>
@import ("@/assets/index.css");
.app .nav-bottom :active {
  color: rgb(27, 27, 19);
}
</style>