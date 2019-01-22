<template>
  <div id="app" class="app">
    <van-nav-bar
      class="nav-bar"
      title="长沙黑马前端13期"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <transition>
      <router-view></router-view>
    </transition>

    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/member">会员</van-tabbar-item>
      <van-tabbar-item icon="cart-o" :info=" $store.getters.getcount" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="search" to="/search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      active: 0
    };
  },
  name: "App",
  methods: {
    onClickLeft() {
      history.back();
    }
  }
};
</script>

<style>
.app {
  overflow-x: hidden;
  padding-bottom: 50px
}
.app .nav-bar {
  font-size: 14px;
  color: azure;
}
.nav-bar {
  background-color: skyblue;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
  left: -200%;
}
.v-enter-active,
.v-leave-active {
  transition: all 1s;
}
</style>
