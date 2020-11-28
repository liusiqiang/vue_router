<template>
  <div class="index.main">
    <ul>
      <li
        class="lists"
        style="
          width: 30%;
          float: left;
          margin-top: 25px;
          display: inline-block;
          text-align: center;
          margin: 5px;
          font-size: 14px;
        "
        v-for="(v, i) in list"
        :key="i"
      >
        <router-link to="./detail" style="padding-bottom:88px">
          <img
            v-for="(item, index) in imgArrays"
            :key="index"
            :src="item"
            v-show="n == index"
            style="width: 100%"
          />
          <label>
            <b class="discount" style="color: red">折扣价：{{ v.old }}</b>
            <span
              class="price-text"
              style="text-decoration: line-through; display: block"
              >原价：{{ v.rebate }}</span
            >
          </label>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      n: 0,
      imgArrays: [require("@/assets/img/01.jpeg")],
      list: [
        { old: "321", rebate: "250" },
        { old: "325", rebate: "250" },
        { old: "3251", rebate: "4250" },
        { old: "3421", rebate: "2540" },
        { old: "32", rebate: "2540" },
        { old: "341", rebate: "2450" },
        { old: "321", rebate: "250" },
        { old: "325", rebate: "250" },
        { old: "3251", rebate: "4250" },
        { old: "3421", rebate: "2540" },
        { old: "32", rebate: "2540" },
        { old: "341", rebate: "2450" },
      ],
    };
  },
};
</script>
<style scoped>
@import ("@/assets/index.css");
</style>