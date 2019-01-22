<template>
  <div class="coment">
    <h4>发表评论 </h4>
    <hr>
    <textarea placeholder="请输入想bb的内容，最多120字" maxlength="120" v-model="setcont"></textarea>
    <van-button size="large" class="btn" @click="setcomments">发表评论</van-button>
    <div class="cmt-item" v-for="( item, index) in comments " :key="index">
      <div class="item-user">第 {{ index + 1 }}楼 ： 用户名： {{ item.user_name }} 发表时间: {{item.add_time}}</div>
      <div class="item-cmt">{{ item.content?item.content:'此用户懒成狗 ' }}</div>
    </div>

    <van-button size="large" class="btn1" @click="getmore"> {{ nomore }}</van-button>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      pageindex: 1,
      comments: [],
      setcont : ''
    };
  },
  methods: {
    async getcomments() {
      const res = await this.$http.get(
        "/api/getcomments/" + this.id + "?pageindex=" + this.pageindex + ""
      );
      var { data } = res;
      this.comments = this.comments.concat(data.message);
    },
    getmore() {
      if (this.pageindex < 10) {
        this.pageindex++;
        this.getcomments();
      } else {
        return;
      }
    },
    async setcomments(){
      const res = await this.$http.post('/api/postcomment/'+ this.id, { content : this.setcont}) 
      // console.log(res)
      if( res.status ==  200 ){
        Toast('评论成功')
        this.setcont = ''
      }
    }
  },
  props: ["id"],
  created() {
    this.getcomments();
  },
  computed: {
    nomore(){
      if( this.pageindex < 10){
        return '加载更多 '
      }else {
        return ' 没更多 点个鸡儿  '
      }
    }
  }
};
</script>
<style lang="less">
.coment {
  h4 {
    margin: 10px;
  }
  .btn {
    background-color: rgb(100, 200, 250);
    color: aliceblue;
    margin-bottom: 10px;
  }
  textarea {
    width: 100%;
    height: 85px;
    margin-top: 10px;
    border: 1px solid #ccc;
    font-size: 12px;
    box-sizing: border-box;
  }
  .cmt-item {
    font-size: 12px;
    .item-user {
      background-color: #ccc;
      line-height: 20px;
    }
    .item-cmt {
      line-height: 25px;
      color : rgb( 100,130, 230 )
    }
  }
  .btn1 {
    color: red;
    border: 1px solid red;
    margin-bottom: 50px;
  }
}
</style>

