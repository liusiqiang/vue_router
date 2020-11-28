<template>
  <div class="detail">
    <a class="goback" @click="goback">返回</a>
    <b>我是详情页</b>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    goback() {
      this.$router.push("/Home");
    },
  },
};
</script>