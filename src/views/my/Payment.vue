<template>
  <div class="payment">
    <a class="go" @click="goback">返回</a>
    <b>我是支付</b>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    goback() {
      this.$router.push("/My");
    },
  },
};
</script>
<style scoped>
.payment .go{
  position: absolute;
  width: 50px;
  height: 50px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  line-height: 50px;
  color: #fff;
  left: 10px;
  top: 10px;
}
</style>