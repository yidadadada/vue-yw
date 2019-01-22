<template>
  <div class="goodslist">
   
      <router-link class="goods" v-for=" (item,index) in goodslist" :key="index" :to="'/home/goodsinfo/'+item.id" tag="div">
        <img :src=" item.img_url" alt>
        <p>{{ item.zhaiyao }}</p>
        <div class="price">
          <p>
            <span class="market_price">￥{{ item.market_price}}</span>
            <del class="sell_price">￥{{ item.sell_price}}</del>
          </p>
          <div class="hott">
            <span class="hot">热卖中</span>
            <span class="stock_quantity">剩余{{item.stock_quantity}}件</span>
          </div>
        </div>
      </router-link>
   
    <van-button size="large" class="btn" @click="getmore">加载更多</van-button>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      goodslist: [],
      pageindex : 1
    };
  },
  methods: {
    async getgoodlist() {
      const res = await this.$http.get("/api/getgoods?pageindex="+ this.pageindex );
      const { data } = res;
      if (res.status === 200) {
        this.goodslist = this.goodslist.concat(data.message);
        console.log( this.goodslist )
      } else {
        alert("获取数据失败");
      }
    },
    getmore(){
        this.pageindex++;
        this.getgoodlist()
    }
  },
  created() {
    this.getgoodlist();
  }
};
</script>

<style lang="less">
.goodslist {
  .goods {
    position: relative;
    float: left;
    width: 47%;
    margin: 5px 1%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    height: 320px;
    //  color : #666;
    img {
      width: 100%;
    }
    p {
      font-size: 14px;
      padding: 0 5px;
      margin: 0;
    }
    .price {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      margin-top: 15px;
      padding: 10px 0;
      background-color: #ccc;
      font-size: 13px;
     
      .market_price {
        font-size: 16px;
        font-weight: 700;
        color: red;
        margin-right: 10px;
      }
      .hott {
        padding: 0 10px;
        .hot {
          float: left;
        }
        .stock_quantity {
          float: right;
        }
      }
    }
  }
  .btn {
      width: 98%;
      margin-left: 1%;
      border: 1px solid red;
      color: red
  }
}
</style>
