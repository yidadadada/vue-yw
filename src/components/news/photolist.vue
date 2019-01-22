<template>
  <div>
    <van-tabs v-model="active" @click="onclick">
      <van-tab v-for="(item , index) in photolist" :title="item.title" :key="index">
        <router-link v-for="(item , index) in images" :key="index" class="pic" :to="'/home/photoinfo/'+item.id">
          标题 ： {{ item.title}}
          <img :src=" item.img_url " alt  >
        </router-link>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { Lazyload } from 'vant';

export default {
  data() {
    return {
      photolist: [],
      msg: "",
      images: [],
      active: 0
    };
  },
  methods: {
    // 获取图片列表页面上面的分类信息获取
    async getphotolist() {
      const res = await this.$http.get("/api/getimgcategory");
      const { data } = res;
      this.photolist = data.message;
      var arr = { title: "全部 ", id: 0 };
      this.photolist.unshift(arr);
    },

    // 获取点击首页上的“图片分享”后进入到的列表数据
    async getimgcategory() {
      const res = await this.$http.get("/api/getimages/" + this.active);
      const { data } = res;
      console.log(data);
      this.images = data.message;
    },
    onclick(active) {
      this.getimgcategory(active);
    }
  },
  created() {
    this.getphotolist();
    this.getimgcategory();
  }
};
</script>
<style lang="less" >
 
</style>
