<template>
  <div>
      <ul v-if="data.length > 0" class="clearfix">
        <li @click="clickItem(item)" class="goods-list" v-for="(item,index) in data" :key="index" :class="{'last-child': (index + 1) % 4 === 0}">
            <a :href="item.href">
                <images-list :data="item.colorImageUrls"></images-list>
                <div class="goods-name">{{item.goodsName}}</div>
                <div class="goods-desc">{{item.goodsDesc}}</div>
                <div class="goods-price">
                    <i>￥</i>
                    {{item.goodsPrice}}
                    <span class="lower" v-if="item.lower">起</span>
                    <span class="goods-oldprice" v-if="item.oldPrice">{{item.oldPrice}}</span>
                </div>
            </a>
            <div class="goods-new" v-if="item.newProduct">新品</div>
        </li>
      </ul>
      <div v-else class="clearfix empty">
          <div class="fl empty-bg"></div>
          <div class="fr empty-desc">
              <div class="title">很抱歉没有找到相关商品</div>
              <p>
                  建议您：<br>
                  1.适当减少筛选条件<br>
                  2.尝试其他条件
              </p>
          </div>
      </div>
  </div>
</template>

<script type="text/javascript">
import imagesList from './imagesList'
export default {
  name: 'category-list',
  components: {
    imagesList
  },
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    clickItem (item) {
      this.$emit('clickItem', item)
    }
  }
}
</script>

<style lang="less" scoped>
.goods-list{
    float: left;
    width: 303px;
    height: 416px;
    background-color: #fff;
    cursor: pointer;
    transition: all .3s ease;
    position: relative;
    margin-top: 10px;
    margin-right: 9px;
    overflow: hidden;
    text-align: center;
    &:hover{
        box-shadow: 0 15px 30px rgba(0, 0, 0, .1);
    }
    &.last-child{
        margin-right: 0px;
    }
}
.goods-img{
    height: 230px;
    margin-top: 30px;
}
.goods-name{
    color: #333;
    font-size: 14px;
    margin-bottom: 2px;
}
.goods-desc{
    color: #999;
    font-size: 12px;
}
.goods-price{
    position: relative;
    display: inline-block;
    padding-left: 14px;
    color: #c00;
    font-size: 18px;
    i{
        font-style: normal;
        font-size: 14px;
        position: absolute;
        left: 0;
        top: 5px;
    }
    .lower{
        font-size: 16px;
    }
    .goods-oldprice{
        text-decoration: line-through;
        color: #666;
        font-size: 12px;
        margin-left: 8px;
    }
}
.goods-new{
    position: absolute;
    left: 30px;
    top: 30px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border-radius: 50%;
    background: linear-gradient(120deg,#2e74f6,#56bdf9);
    color: #fff;
}
.empty{
    width: 335px;
    margin: 120px auto 380px;
    .empty-bg{
        background: url("../assets/images/xiongmao.png") no-repeat;
        width: 105px;
        height: 135px;
        margin-right: 30px;
    }
    .empty-desc{
        width: 200px;
    }
    .title{
        font-size: 18px;
        color: #00c3f5;
        margin: 15px auto;
    }
}
</style>
