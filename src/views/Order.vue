<template>
  <div class="order">
    <div class="header">
      <div class="one">
        <div class="car">购物车</div>
        <div class="content">
          <i class="iconfont icon-shouye" style="text-indent: 5px"></i
          >91元红包代领取
        </div>
        <div class="right">管理</div>
      </div>
      <div class="two">
        <span
          >共9件宝贝<span style="margin-left: 10px"
            >收获地址:察县欢喜化妆品店</span
          ></span
        >
      </div>
    </div>
    <div class="commodity">
      <div class="card">
        <div class="card_top">
          <label><input type="radio" /></label>
          <span>TOM FORD汤姆福特</span>
        </div>
        <div class="card_bottom">
          <div class="card_radio">
            <label><input type="radio" /></label>
          </div>
          <div class="card_log"></div>
        </div>
      </div>
    </div>
    <van-submit-bar
      :price="0"
      button-text="结算"
      @submit="onSubmit"
      style="position: fixed; bottom: 56px"
    >
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>
<script>
import Vue from "vue";
import { SubmitBar } from "vant";
Vue.use(SubmitBar);
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.order {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: aliceblue;
}
.order .header {
  height: 30px;
  line-height: 30px;
  padding-top: 10px;
}
.order .header .one {
  display: inline-block;
  display: flex;
  justify-content: space-around;
}
.one .car {
  font-size: 25px;
}
.one .content {
  text-indent: 10px;
  color: red;
}
.one .right {
  font-size: 18px;
}
.two {
  text-indent: -60px;
  margin-top: 4px;
  text-align: left;
  padding-left: 80px;
}
.commodity {
  margin-top: 45px;
}
.commodity .card {
  width: 95%;
  height: 100%;
  margin: 0 auto;
  margin-bottom: 10px;
  background-color: white;
  border-radius: 10px;
}
.commodity .card .card_top {
  text-align: left;
  padding-left: 14px;
}
.commodity .card .card_bottom {
  height: 100px;
  line-height: 100px;
}
.commodity .card .card_bottom .card_radio{
text-align: left;
  padding-left: 14px;
}

</style>
