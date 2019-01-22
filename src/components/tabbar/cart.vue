<template>
  <div class="cart">
    <van-card num="2" price="2.00" desc="描述信息" title="商品标题" />
  </div>
</template>
<script>
export default {
  data : () => ({
     imgs : []
  }),
  methods : {
     async getmsg(){
        const res =await this.$http.get('/api/goods/getdesc/1')
        console.log(res)
     }
  },
  created(){
     this.getmsg()
  }
};
</script>

