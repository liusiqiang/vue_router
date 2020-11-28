<template>
  <div>
    <div v-for="(item, index) in list" :key="index" @click="clickItem(item)">
      {{ item }}
    </div>
    <button @click="$emit('listEmit', '飞机迪斯科范德萨')">emit</button>
    <slot name="header">头部</slot>
    <slot name="footer">底部</slot>
    <cowan-button type="primary">主要按钮</cowan-button>
  </div>
</template>

<script>
// import Vue from "vue";
import { Button } from "vant";

// Vue.use(Button);
export default {
  components: { "cowan-button": Button },
  props: {
    list: {
      type: Array,
    },
    clickItem: Function,
  },
};
</script>