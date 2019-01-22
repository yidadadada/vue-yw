<template>
  <div class="index">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item, index) in images" :key="index">
        <img v-lazy="item.img" class="img">
        <!-- <img :src= " {{ item.img}}"  alt=""> -->
      </van-swipe-item>
    </van-swipe>

   <gird> </gird>
  </div>
</template>

<script>
import gird from '../gird/gird.vue'
export default {
  data() {
    return {
      images: [],
    };
  },
  methods: {
    async getlunbo(){
      const res = await this.$http.get('api/getlunbo')
      var {data } = res 
      // console.log(res)
      this.images = data.message;
    }
  },
  created() {
    this.getlunbo();
  },
  components : {
    gird
  }
};
</script>
<style lang="less">
.index {
  .img {
    width: 100%;
    height: 200px;
  }
 
}
</style>

