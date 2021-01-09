<template>
  <div>
      <v-header></v-header>
      <div class="category-wrapper">
          <div class="bread">
              <span>首页</span>
              <span class="arrow">></span>
              <span>全部</span>
              <span class="arrow">></span>
              <span class="last-bread">手机</span>
          </div>
          <filter-box :data="filterListData" @filter="getQuery"></filter-box>
          <sort-box @getKey="getSortKey" @getStock="getSortStock"></sort-box>
          <category-list :data="categoryListData" @clickItem="goToDetail"></category-list>
          <recommend-list :data="recommendListData"></recommend-list>
      </div>
      <v-footer></v-footer>
  </div>
</template>

<script type="text/javascript">
import axios from 'axios'
import vHeader from '../components/header'
import vFooter from '../components/footer'
import categoryList from '../components/categoryList'
import filterBox from '../components/filterBox'
import sortBox from '../components/sortBox'
import recommendList from '../components/recommendList'
export default {
  name: 'category',
  components: {
    vHeader,
    vFooter,
    categoryList,
    filterBox,
    sortBox,
    recommendList
  },
  data () {
    return {
      categoryListData: [],
      filterListData: [],
      categoryListCopy: [],
      recommendListData: [],
      currentQuery: null,
      currentStock: null,
      currentKey: null
    }
  },
  mounted () {
    this.getCategoryListData()
    this.getFilterListData()
    this.getRecommendListData()
  },
  methods: {
    async getCategoryListData () {
      const { data } = await axios.get('/api/categoryList')
      this.categoryListData = data
      this.categoryListCopy = [].concat(data)
    },
    async getFilterListData () {
      const { data } = await axios.get('/api/queryList')
      this.filterListData = data
    },
    async getRecommendListData () {
      const { data } = await axios.get('/api/smartSale')
      this.recommendListData = data
    },
    getQuery (val) {
      this.currentQuery = val
      this.sortGoods()
    },
    getSortKey (key) {
      this.currentKey = key
      this.sortGoods()
    },
    getSortStock (val) {
      this.currentStock = val
      this.sortGoods()
    },
    sortGoods () {
      this.categoryListData = [].concat(this.categoryListCopy)
      if (this.currentQuery) {
        Object.keys(this.currentQuery).forEach((key) => {
          if (this.currentQuery[key]) {
            // key是key，val[key]是value
            this.categoryListData = this.categoryListData.filter((item) => {
              return item.features.indexOf(this.currentQuery[key]) >= 0
            })
          }
        })
      }
      if (this.currentStock) {
        this.categoryListData = this.categoryListData.filter((item) => {
          return item.available
        })
      }
      if (this.currentKey) {
        if (this.currentKey === 'recommend') {
          this.categoryListData.sort((a, b) => {
            return b.shelveTime - a.shelveTime
          })
        } else if (this.currentKey === 'new') {
          this.categoryListData.sort((a, b) => {
            return b.publishedTime - a.publishedTime
          })
        } else if (this.currentKey === 'low') {
          this.categoryListData.sort((a, b) => {
            return b.goodsPrice - a.goodsPrice
          })
        } else if (this.currentKey === 'high') {
          this.categoryListData.sort((a, b) => {
            return a.goodsPrice - b.goodsPrice
          })
        }
      }
    },
    goToDetail (item) {
      this.$router.push({
        name: 'Detail',
        params: {
          id: item.id
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.category-wrapper{
    width: 1240px;
    margin: 0 auto;
    padding-bottom: 60px;
}
.bread{
    height: 40px;
    line-height: 40px;
    .arrow,.last-bread{
        color: #999;
    }
}
</style>
