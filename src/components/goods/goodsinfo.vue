<template>
  <div class="goodsinfo">
    <div class="lunbo">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for=" (item, index) in images " :key="index">
          <img :src="item.src " alt class="img">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="buy">
      <h2>{{ info.title }}</h2>
      <hr>
      <p class="pic">
        市场价格 :
        <del>{{ info.market_price }}</del>
        销售价格 ：{{ info.sell_price }}
      </p>
      <div class="much">购买数量 :
        <van-stepper v-model="value"/>
        <transition
          v-on:before-enter="beforeEnter"
          v-on:enter="enter"
          v-on:after-enter="afterEnter"
        >
          <div class="ball" v-show=" flag "></div>
        </transition>
      </div>
      <van-button type="primary">立即购买</van-button>
      <van-button :disabled="disabled" type="danger" @click="getcar ">加入购物车</van-button>
    </div>
    <div class="product">
      <h3>商品参数</h3>
      <hr>
      <div>
        <p>商品货架：{{ info.goods_no }}</p>
        <p>库存情况：{{ info.stock_quantity }}</p>
        <p>上架时间：{{ info.add_time }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: [],
      id: parseInt(this.$route.params.id) + 100,
      info: {},
      value: 1,
      flag: false,
      disabled: false
    };
  },
  methods: {
    async getimg() {
      const res = await this.$http.get("/api/getthumimages/" + this.id);
      const {
        data: { message }
      } = res;
      this.images = message;
    },
    async getgoodsinfo() {
      const res = await this.$http.get(
        "/api/goods/getinfo/" + (parseInt(this.id) - 100)
      );
      const {
        data: { message }
      } = res;
      this.info = message;
    },
    getcar() {
      const obj = {
        id: parseInt(this.$route.params.id),
        num: this.value
      };
      console.log(obj)
      this.flag = !this.flag;
      this.disabled = !this.disabled;
      setTimeout(() => {
        this.disabled = !this.disabled;
      }, 1000);
      this.$store.commit("rou",obj);
    },
    beforeEnter(el) {
      el.style.transform = "translate( 0 , 0 )";
    },
    enter(el) {
      el.offsetWidth;
      var car = document.querySelector(".van-info").getBoundingClientRect();
      var ball = el.getBoundingClientRect();
      el.style.transform = `translate( ${car.left - ball.left}px,  ${car.top -
        ball.top}px)`;
      el.style.transition = "all .5s ease";
    },
    afterEnter(el) {
      this.flag = !this.flag;
    }
  },
  created() {
    this.getimg();
    this.getgoodsinfo();
  }
};
</script>
<style lang="less">
.goodsinfo {
  padding: 2%;
  .lunbo {
    height: 200px;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin-bottom: 20px;
    .van-swipe {
      height: 100%;
      text-align: center;
      .img {
        height: 96%;
      }
    }
  }
  .buy {
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    padding: 10px;
    font-size: 13px;
    h2 {
      margin: 0;
    }
    del {
      margin-right: 20px;
      color: #666;
    }
    .much {
      margin-bottom: 10px;
      position: relative;
      .van-stepper {
        display: inline-block;
        margin-left: 20px;
      }
      .ball {
        position: absolute;
        top: 2px;
        left: 37%;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: red;
        z-index: 999;
      }
    }
    .van-button {
      width: 47%;
      margin: 0 1%;
      margin-bottom: 10px;
    }
  }
  .product {
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin-top: 20px;
    padding: 10px;
    h3 {
      margin: 0;
    }
    p {
      margin: 5px;
      font-size: 13px;
    }
  }
}
</style>

