<template>
  <div class="newsinfo">
       <h3> {{ list.title }} </h3> 
       <div class="time"> 
           <span> 发表时间：{{ list.add_time }} </span>
           <span> 点击次数：{{ list.click }}次 </span>
       </div>
       <hr>
       <div class="content">
           {{ list.content }}
           <img :src=" list.img_url " alt="">
       </div>
    <comment-box :id=" id"  > </comment-box>
  </div>
</template>
<script>
import comment from '../subcomponent/comment.vue'
export default {
  data() {
    return {
      id: '',
      list : {},
     
    };
  },
  methods: {
    async getnews() {
      const res = await this.$http.get("/api/getnew/" + this.id);
        const {data} = res
        // console.log(data.message)
       
        this.list = data.message
    }
  },
  created() {
    this.id = this.$route.params.id;
    this.getnews();
  }, 
  components : {
     'comment-box' : comment
  }
};
</script>
<style lang="less" scoped>
    .newsinfo {
        padding: 0 15px;
        h3 {
            text-align: center;
            color: red;
            font-size: 1rem;
        }
        .time {
            font-size: 13px;
            color: blue;
            overflow: hidden;
            span:first-of-type {
                float: left;
            }
              span:last-of-type {
                float: right;
            }
        }
        .content {
            font-size: 14px;
            color : rgb( 111,50,111 );
            img {
                margin-top: 15px;
                width: 100%;
            }
        }
    }
</style>
