<template>
  <div>
    <div class="nav-bottom"   v-if="$route.meta.TabbarShow">
      <router-link to="/home">
        <i class="iconfont icon-shouye"></i>
        <label for="">首页</label>
      </router-link>
      <router-link to="/order">
        <i class="iconfont icon-gouwuche"></i>
        <label for="">订单</label>
      </router-link>
      <router-link to="/my">
        <i class="iconfont icon-jushoucang"></i>
        <label for="">我的</label>
      </router-link>
      <router-link to="/find">
        <i class="iconfont icon-xiaoxizhongxin"></i>
        <label for="">发现</label>
      </router-link>
    </div>
  </div>
</template>
<style scoped>
@import ("@/assets/index.css");
</style>