<template>
  <div class="banner">
    <img
    style="height:200px"
      v-for="(item, index) in imgArray"
      :key="index"
      :src="item"
      v-show="n == index"
    />
    <div class="banner-circle">
      <ul>
        <li
          v-for="(item, index) in imgArray"
          :key="index"
          :class="index == n ? 'selected' : ''"
          @click="clickImg(index)"
        ></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      n: 0,
      imgArray: [
        require("@/assets/img/01.jpeg"),
        require("@/assets/img/02.jpg"),
        require("@/assets/img/04.jpg"),
      ],
    };
  },
  created() {
    this.play();
  },
  methods: {
    play() {
      this.timer = setInterval(this.autoPlay, 5000); //用定时器控制每张图的显示时间
    },
    autoPlay() {
      this.$data.n++;
      if (this.imgArray.length == this.n) {
        this.n = 0;
      }
    },
    clickImg(index) {
      this.n = index; //显示当前点击的图片
    },
  },
  beforeDestroy() {
    clearInterval(this.timer); //清除定时器
  },
};
</script>
<style scoped>

</style>