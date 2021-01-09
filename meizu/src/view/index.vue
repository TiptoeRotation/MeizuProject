<template>
  <div>
    <v-header></v-header>
    <div class="swiper-wrapper">
      <swiper :data="swiperData"></swiper>
      <ul class="menus">
        <li v-for="(item,index) in menuData" :key="index">
          <a :href="item.href">{{item.name}}</a>
        </li>
      </ul>
    </div>
    <ul class="post-wrapper clearfix">
        <li v-for="(item,index) in postData" :key="index">
          <a :href="item.href">
            <img :src="item.imgUrl" alt="">
          </a>
        </li>
    </ul>
    <div class="index-container">
        <div class="sale">
          <h3 class="title">热卖商品</h3>
          <goods-list :data="hotSaleData"></goods-list>
        </div>
        <div class="sale">
          <h3 class="title">手机</h3>
          <ad-list :data="phoneAdData"></ad-list>
          <goods-list :data="phoneSaleData"></goods-list>
        </div>
        <div class="sale">
          <h3 class="title">智能配件</h3>
          <ad-list :data="smartAdData"></ad-list>
          <goods-list :data="smartSaleData"></goods-list>
        </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/javascript">
import axios from 'axios'
import vHeader from '../components/header'
import swiper from '../components/swiper'
import goodsList from '../components/goodsList'
import adList from '../components/adList'
import vFooter from '../components/footer'
export default {
  name: 'index',
  data () {
    return {
      swiperData: [],
      menuData: [],
      postData: [],
      hotSaleData: [],
      phoneSaleData: [],
      smartSaleData: [],
      phoneAdData: [],
      smartAdData: []
    }
  },
  components: {
    vHeader,
    swiper,
    goodsList,
    adList,
    vFooter
  },
  mounted () {
    this.getSwiperData()
    this.getMenuData()
    this.getPostData()
    this.getHotSaleData()
    this.getPhoneSaleData()
    this.getSmartSaleData()
    this.getPhoneAdData()
    this.getSmartAdData()
  },
  methods: {
    async getSwiperData () {
      const { data } = await axios.get('/api/advertise')
      this.swiperData = data
    },
    async getMenuData () {
      const { data } = await axios.get('/api/menu')
      this.menuData = data
    },
    async getPostData () {
      const { data } = await axios.get('/api/post')
      this.postData = data
    },
    async getHotSaleData () {
      const { data } = await axios.get('/api/hotSale')
      this.hotSaleData = data
    },
    async getPhoneSaleData () {
      const { data } = await axios.get('/api/phoneSale')
      this.phoneSaleData = data
    },
    async getSmartSaleData () {
      const { data } = await axios.get('/api/smartSale')
      this.smartSaleData = data
    },
    async getPhoneAdData () {
      const { data } = await axios.get('/api/phoneRecommend')
      this.phoneAdData = data
    },
    async getSmartAdData () {
      const { data } = await axios.get('/api/smartRecommend')
      this.smartAdData = data
    }
  }
}
</script>

<style lang="less" scoped>
  .swiper-wrapper{
    width: 1240px;
    height: 500px;
    position: relative;
    margin: 0 auto;
    .menus{
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 303px;
      background-color: rgba(0, 0, 0, .5);
      padding-top: 17px;

      li{
        height: 57px;
        line-height: 57px;
      }

      a{
        font-size: 16px;
        color: #fff;
        padding-left: 40px;
        transition: color .3s;

        &:hover{
          color: #31a5e7;
        }
      }
    }
  }
  .post-wrapper{
    width: 1240px;
    margin: 10px auto 50px;

    li{
      float: left;
      width: 303px;
      height: 180px;
      margin-right: 9px;
      a{
        transition: opacity .3s ease-in-out;
        &:hover{
          opacity: .85;
        }
      }
      &:last-child{
        margin-right: 0;
      }
    }
  }
  .index-container{
    width: 1240px;
    margin: 0 auto;
    .title{
      font-size: 30px;
      font-weight: 400;
      margin-bottom: 10px;
    }
    .sale{
      margin-bottom: 50px;
    }
  }
</style>
