<template>
  <div class="my">
    <div class="header">
      <div class="right_log">
        <img src="@/assets/img/01.jpeg" />
      </div>
      <div class="left_content">
        <h3>鲸落</h3>
        <span>微信号：L2553522110</span>
      </div>
      <div class="left_code">
        <i class="iconfont icon-saoyisao"></i>
        <span>></span>
      </div>
    </div>
    <div class="nav">
      <div class="nav_one">
        <div class="one_left">
          <i class="iconfont icon-shouye"></i>
          <span>支付</span>
          <div class="one_right">
            <span>></span>
          </div>
        </div>
      </div>
      <div class="nav_two">
        <div class="two_left" v-for="(v, i) in item" :key="i">
          <i :class="v.icon"></i>
          <span>{{ v.title }}</span>
          <div class="two_right" >
            <span>></span>
          </div>
        <div style="border-bottom: 2px solid aliceblue"></div>
        </div>
      </div>
      <div class="nav_three">
        <div class="three_left">
          <i class="iconfont icon-shouye"></i>
          <span>设置</span>
          <div class="three_right">
            <span>></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      item: [
        { title: "收藏", icon: "iconfont icon-shouye" },
        { title: "相册", icon: "iconfont icon-shouye" },
        { title: "卡包", icon: "iconfont icon-shouye" },
        { title: "表情", icon: "iconfont icon-shouye" },
      ],
    };
  },
};
</script>
<style scoped>
.my {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: aliceblue;
}
.my .header {
  display: flex;
  background-color: white;
  height: 120px;
}
.my .header .right_log {
  display: flex;
  width: 75px;
  height: 70px;
  line-height: 70px;
  margin: 20px;
}
.my .header .right_log img {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
}
.my .header .left_content {
  margin-top: 5px;
}
.my .header .left_content h3 {
  text-indent: -140px;
}
.my .header .left_content span {
  margin-top: 40px;
  letter-spacing: 1px;
}
.my .header .left_code {
  display: flex;
  margin-top: 68px;
  margin-left: 40px;
}
.my .header .left_code span {
  margin-left: 12px;
}
.nav {
  font-size: 18px;
  text-indent: -250px;
  margin-top: 10px;
}
.nav i {
  font-size: 20px;
}
.nav .nav_one {
  height: 40px;
  background-color: white;
  margin-bottom: 10px;
}
.nav .nav_one .one_left {
  line-height: 40px;
  margin-left: -20px;
}
.nav .nav_one .one_left span {
  padding-left: 10px;
  font-size: 18px;
}

.nav .nav_one .one_right {
  float: right;
  margin-right: -108px;
}
.nav .nav_two {
  height: 100%;
  background-color: white;
  margin-bottom: 10px;
}
.nav .nav_two .two_left {
  line-height: 40px;
  margin-left: -20px;
}
.nav .nav_two .two_left span {
  padding-left: 10px;
  font-size: 18px;
}

.nav .nav_two .two_right {
  float: right;
  margin-right: -108px;
}
.nav .nav_three {
  height: 40px;
  background-color: white;
  margin-bottom: 10px;
}
.nav .nav_three .three_left {
  line-height: 40px;
  margin-left: -20px;
}
.nav .nav_three .three_left span {
  padding-left: 10px;
  font-size: 18px;
}

.nav .nav_three .three_right {
  float: right;
  margin-right: -108px;
}
</style>