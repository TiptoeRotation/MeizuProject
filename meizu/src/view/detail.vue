<template>
  <div class="bg-white">
    <v-header></v-header>
    <div class="detail-wrapper">
      <div class="bread">
        <span>首页</span>
        <span class="arrow">></span>
        <span>全部</span>
        <span class="arrow">></span>
        <span class="last-bread">手机</span>
      </div>
      <div class="clearfix">
        <div class="fl detail-images">
          <images-list :data="infoData.colorImageUrls" type="big"></images-list>
        </div>
        <div class="fr detail-props">
          <h1 class="prop-title">{{infoData.goodsName}}</h1>
          <p class="prop-desc">{{infoData.goodsDesc}}</p>
          <div class="prop-sale">
            <span class="prop-name">价<span class="prop-space"></span>格:</span>
            <span class="prop-price">￥{{infoData.goodsPrice}}</span>
          </div>
          <div>
            <span class="prop-name">支<span class="prop-space"></span>持:</span>
            <ul class="service-list">
              <li class="list-item"><i class="icon-font icon-check-circle"></i>百城速达</li>
              <li class="list-item"><i class="icon-font icon-check-circle"></i>顺丰包邮</li>
              <li class="list-item"><i class="icon-font icon-check-circle"></i>7天无理由退货</li>
            </ul>
          </div>
          <div>
            <span class="prop-name">服<span class="prop-space"></span>务:</span>
            <span>本商品由 魅族 负责发货并提供售后服务</span>
          </div>
          <div>
            <span class="prop-name">数<span class="prop-space"></span>量:</span>
            <div class="clearfix prop-num">
              <input class="fl prop-input" v-model="purchaseQuantity" type="number">
              <div class="fl change-box">
                <div class="change-value" @click="increase">+</div>
                <div class="change-value" @click="reduce">-</div>
              </div>
            </div>
          </div>
          <div class="prop-buy">
            <a href="javascript:;" class="btn danger mr20" @click="purchase">立即购买</a>
            <a href="javascript:;" class="btn success" @click="addShopcart">加入购物车</a>
          </div>
        </div>
      </div>
      <div class="detail-info_wrapper">
        <div class="detail-info">
          <a href="" class="info-title">商品详情</a>
        </div>
        <img class="detail-images" :src="item" alt="" v-for="(item,index) in infoData.information" :key="index">
      </div>
    </div>
    <v-footer></v-footer>
    <v-dialog :show.sync="dialogShow" :width="360" :height="80" :confirm-button-show="false" :cancel-button-show="false">
      <div>
        <i class="icon-font icon-check-circle add-success"></i>成功加入购物车
      </div>
      <a href="javascript:;" @click="goToShopcart" class="go-shopcart">进入购物车</a>
    </v-dialog>
  </div>
</template>

<script type="text/javascript">
import axios from 'axios'
import vHeader from '../components/header'
import vFooter from '../components/footer'
import imagesList from '../components/imagesList'
import vDialog from '../components/dialog'
export default {
  name: 'detail',
  data () {
    return {
      infoData: {},
      purchaseQuantity: 1,
      dialogShow: false
    }
  },
  components: {
    vHeader,
    vFooter,
    imagesList,
    vDialog
  },
  mounted () {
    this.getInfoData(this.$route.params.id)
  },
  methods: {
    async getInfoData (id) {
      const { data } = await axios.get(`/api/categoryList/${id}`)
      this.infoData = data
    },
    increase () {
      // 把变量类型转化为数据类型，避免出现字符串加字符串的情况，如1+1=11
      this.purchaseQuantity = parseInt(this.purchaseQuantity) + 1
    },
    reduce () {
      if (this.purchaseQuantity > 1) {
        this.purchaseQuantity = parseInt(this.purchaseQuantity) - 1
      }
    },
    addShopcart () {
      this.$store.commit('ADD_SHOPCART', {
        data: this.infoData,
        num: parseInt(this.purchaseQuantity)
      })
      this.dialogShow = true
    },
    purchase () {
      this.$store.commit('ADD_SHOPCART', {
        data: this.infoData,
        num: parseInt(this.purchaseQuantity)
      })
      this.goToShopcart()
    },
    goToShopcart () {
      this.$router.push({
        name: 'Shopcart'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.bg-white{
  background-color: white;
}
.bread{
    height: 40px;
    line-height: 40px;
    .arrow,.last-bread{
        color: #999;
    }
}
.detail-wrapper{
  width: 1240px;
  margin: 0 auto;
  .detail-images{
    width: 495px;
  }
  .detail-props{
    font-size: 12px;
    width: 675px;
    .prop-title{
      font-size: 24px;
      font-weight: 400;
      color: #000;
      margin-bottom: 10px;
    }
    .prop-desc{
      font-size: 16px;
      color: #e22841;
      margin-bottom: 15px;
    }
    .prop-name{
      padding: 0 10px;
      line-height: 34px;
      .prop-space{
        padding: 0 12px;
      }
    }
    .prop-sale{
      height: 55px;
      background-color: #f5f5f5;
      line-height: 55px;
      margin-bottom: 26px;
      .prop-price{
        color: #e02b41;
        font-size: 24px;
      }
    }
    .service-list{
      display: inline-block;
      .list-item{
        display: inline-block;
        margin-right: 20px;
        i{
          margin-right: 5px;
          color: #00c3f5;
        }
      }
    }
    .prop-num{
      display: inline-block;
      vertical-align: middle;
      .prop-input{
        width: 53px;
        height: 38px;
        text-align: center;
        line-height: 38px;
        border: 1px solid #dcdcdc;
        color: #333;
      }
      .change-box{
        margin-left: 6px;
      }
      .change-value{
        width: 20px;
        height: 16px;
        font-size: 14px;
        color: #666;
        border: 1px solid #dcdcdc;
        line-height: 16px;
        text-align: center;
        cursor: pointer;
        &:last-child{
          margin-top: 6px;
        }
      }
    }
    .prop-buy{
      margin-top: 17px;
    }
    .mr20{
      margin-right: 20px;
    }
  }
  .detail-info_wrapper{
    font-size: 0;
    margin-top: 60px;
    margin-bottom: 80px;
    .detail-info{
      height: 62px;
      border-bottom: 1px solid #dcdcdc;
    }
    .info-title{
      color: #00c3f5;
      border-bottom: 1px solid #00c3f5;
      font-size: 16px;
      height: 62px;
      line-height: 62px;
      padding: 0 20px;
      margin-bottom: -1px;
      box-sizing: border-box;
      display: inline-block;
    }
    .detail-images{
      width: 1240px;
    }
  }
}
.add-success{
  color: #00c3f5;
  margin-right: 5px;
}
.go-shopcart{
  color: #00c3f5;
  text-decoration: underline;
}
</style>
