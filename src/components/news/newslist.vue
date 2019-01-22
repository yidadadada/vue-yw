<template>
  <div>
    <router-link  v-for=" (item,index) in newslist" :key="index" :to="'/home/newsinfo/' + item.id">
      <van-card
        :desc="item.content"
        :title="item.title"
        :thumb="item.img_url"
      >
        <div slot="footer" class="foot">
          <span size="mini" class="time">发表时间: {{item.add_time | datefmt()}}</span>
          <span size="mini">点击{{item.click }}次</span>
        </div>
      </van-card>
    </router-link>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      newslist: []
    };
  },
  methods: {
    async getNews() {
      const res = await this.$http.get("api/getnewslist")
      if (res.status == 200) {
        var { data } = res;
        console.log(res)
        this.newslist = data.message;
      } else {
        Toast("获取数据失败");
      }
    }
  },
  created() {
    this.getNews();
  }
};
</script>
<style lang="less">
.van-card__header {
  height: 60px;
  .van-card__content {
    height: 100%;
  }
  .van-card__thumb {
    height: 100%;
    img {
      width: 100%;
    }
  }
}
.foot {
  font-size: 10px;
  position: absolute;
  bottom: 10px;
  right: 20px;
  .time {
    margin-right: 50px;
  }
}
</style>
