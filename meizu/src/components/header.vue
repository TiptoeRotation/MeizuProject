<template>
  <div class="header">
    <div class="header-wrapper clearfix">
        <div class="header-logo fl"></div>
        <div class="header-cart fr">
            <span class="icon-moon icon-cart"></span>
        </div>
        <div class="header-user fr">
            <span class="icon-moon icon-user"></span>
        </div>
        <div class="header-search fr">
            <input class="search-input" type="text" placeholder="购物车">
            <span class="search-icon icon-moon icon-search"></span>
        </div>
        <ul class="header-nav fr">
            <li v-for="(item,index) in newData" :key="index" @mouseenter="showChildren(item)">
                <a class="nav-item" href="javascript:;" @click="goToCategory">{{item.name}}</a>
            </li>
        </ul>
    </div>
    <transition name="nav">
        <div class="nav-children" v-show="childrenShow" @mouseleave="hideChildren">
            <div class="children-wrapper">
                <transition-group tag="ul" @enter="enter">
                    <li class="children-item" v-for="(item,index) in childrenData" :key="item.pic" :data-index="index">
                        <img :src="item.pic" alt="">
                        <p>{{item.name}}</p>
                        <p>{{item.price}}</p>
                    </li>
                </transition-group>
            </div>
        </div>
    </transition>
  </div>
</template>

<script type="text/javascript">
import axios from 'axios'
import Velocity from 'velocity-animate'
export default {
  name: 'vheader',
  data () {
    return {
      newData: [],
      childrenData: [],
      childrenShow: false
    }
  },
  mounted () {
    this.getNavData()
  },
  methods: {
    async getNavData () {
      const { data } = await axios.get('/api/nav')
      this.newData = data
      console.log(data)
    },
    showChildren (item) {
      this.childrenData = item.children
      this.childrenShow = true
    },
    hideChildren () {
      this.childrenShow = false
      this.childrenData = []
    },
    enter (el) {
      const timeOut = el.dataset.index * 150
      setTimeout(() => {
        Velocity(el, {
          'opacity': 1,
          'translateX': '-50px'
        })
      }, timeOut)
    },
    goToCategory () {
      this.$router.push({
        name: 'Category'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.header{
    width: 100%;
    background-color: white;
    position: relative;
}
.header-wrapper{
    width: 1240px;
    margin: 0 auto;
}
.header-logo{
    width: 140px;
    height: 26px;
    margin: 28px 0;
    background: url("../assets/images/logo.png") no-repeat center;
}
.header-cart, .header-user{
    padding: 29px 10px 0 20px;
    font-size: 24px;
    cursor: pointer;
    line-height: 1px;
}
.header-search{
    width: 172px;
    height: 32px;
    border: 1px solid #ddd;
    border-radius: 2px;
    position: relative;
    margin: 25px 0;
}
.search-input{
    width: 127px;
    height: 20px;
    border: 0;
    outline: none;
    position: absolute;
    left: 5px;
    top: 6px;
    font-size: 12px;
}
.search-icon{
    font-size: 16px;
    position: absolute;
    right: 10px;
    top: 8px;
}
.header-nav{
    li{
        display: inline-block;
    }
    a{
        display: inline-block;
        font-size: 16px;
        padding: 33px 20px;
        line-height: 1;
        cursor: pointer;
        transition: color .1s ease;
        &:hover{
            color: #31a5e7;
        }
    }
}
.nav-children{
    width: 100%;
    height: 156px;
    background-color: white;
    position: absolute;
    left: 0;
    top: 82px;
    border-bottom: 1px solid #e9e9e9;
    z-index: 1;
}
.children-wrapper{
    width: 1240px;
    padding-left: 150px;
    margin: 0 auto;
}
.children-item{
    opacity: 0;
    width: 136px;
    height: 145px;
    display: inline-block;
    text-align: center;
    font-size: 12px;
    color: #666;
    img{
        width: 100px;
        height: 100px;
    }
}
.nav-enter-active{
    height: 156px;
    transition: height .3s ease-in-out;
}
.nav-enter{
    height: 0;
}
</style>
