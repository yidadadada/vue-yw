<template>
  <div class="photoinfo">
    <h3>{{ message.title }}</h3>
    <div class="subtime">
      <p>发表时间：{{ message.add_time }}</p>
      <p>点击率 ：{{ message.click}}</p>
    </div>
    <hr>
    <div>{{ message.content}}</div>
    <div class="img">
      <img :src=" item.src " alt v-for=" (item,index) in images " :key="index" @click="big(index)">
    </div>
    <cmt-box :id=" id "></cmt-box>
  </div>
</template>
 <script>
import comment from "../subcomponent/comment.vue";
import { ImagePreview } from "vant";


export default {
  data() {
    return {
      id: this.$route.params.id,
      message: {},
      images: []
    };
  },
  methods: {
    async getimageInfo() {
      const res = await this.$http.get("/api/getimageInfo/" + this.id);
      const { data } = res;
      this.message = data.message;
    },
    async getthumimages() {
      const res = await this.$http.get("/api/getthumimages/" + this.id);
      const { data } = res;
      this.images = data.message;
    },
    big( startPosition ){
       let imgs = [];
       this.images.forEach( function(item ){
               imgs.push( item.src)
       })  
        ImagePreview( {
               images: imgs,
                startPosition
        })

    }
  },
  created() {
        this.getimageInfo();
        this.getthumimages();
  },
  components: {
    "cmt-box": comment
  }
};
</script>
 <style lang="less" scoped>
.photoinfo {
  margin: 0 10px;
  h3 {
    text-align: center;
    font-size: 16px;
    color: rgb(100, 150, 200);
  }
  .subtime {
    overflow: hidden;
    font-size: 14px;
    color: rgb(138, 34, 138);
    p:first-of-type {
      float: left;
      margin: 0;
    }
    p:last-of-type {
      float: right;
      margin: 0;
    }
  }
  .img {
    img {
      width: 100px;
      height: 100px;
    }
  }
}
</style>
 
