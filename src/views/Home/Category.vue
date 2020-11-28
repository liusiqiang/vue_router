<template>
  <div class="index-category">
    <div class="category" v-for="(v, i) in lists" :key="i">
      <i
        style="font-size: 20px"
        class="iconfont icon-shouye"
        :class="v.icon"
      ></i>
      <label style="font-size: 20px">{{ v.title }}</label>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lists: [
        { title: "美食", icon: "iconfont icon-shouye" },
        { title: "上衣", icon: "iconfont icon-xiaoxizhongxin" },
        { title: "裤子", icon: "iconfont icon-shouye" },
        { title: "老婆", icon: "iconfont icon-xiaoxizhongxin" },
        { title: "老公", icon: "iconfont icon-shouye" },
        { title: "对象", icon: "iconfont icon-xiaoxizhongxin" },
        { title: "住宿", icon: "iconfont icon-shouye" },
        { title: "出行", icon: "iconfont icon-shouye" },
      ],
    };
  },
};
</script>