<template>
  <div>
    <van-row>
      <van-col span="8" class="news" v-for="(item, index) in list" :key="index">
        <router-link :to=" item.link ">
          <img :src="item.src" alt>
          <p>{{item.name}}</p>
        </router-link>
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        { src: "static/assets/menu1.png", name: "新闻资讯" , link : '/newslist'},
        { src: "static/assets/menu2.png", name: "图片分享" , link : '/photolist' },
        { src: "static/assets/menu3.png", name: "商品购买" , link : '/home/goodslist'},
        { src: "static/assets/menu4.png", name: "留言反馈" , link : ''},
        { src: "static/assets/menu5.png", name: "视频专区" , link : ''},
        { src: "static/assets/menu6.png", name: "联系我们" , link : ''}
      ]
    };
  }
};
</script>
<style lang="less">
.news {
  padding-top: 10px;
  width: 33.33%;
  height: 110px;
  text-align: center;
  img {
    width: 50px;
    height: 50px;
  }
  p {
    font-size: 12px;
  }
}
</style>

