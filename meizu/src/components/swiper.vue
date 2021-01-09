<template>
  <div class="swiper" :style="swiperSize">
    <ul class="swiper-ul" :style="ListWrapper" @transitionend="setDuration">
        <li class="swiper-list" v-for="(item,index) in data" :key="index">
            <a :href="item.href">
                <img :style="swiperSize" :src="item.imgUrl" alt="">
            </a>
        </li>
        <li v-if="data.length > 1" class="swiper-list" :key="data.length + 1">
            <a :href="data[0].href">
                <img :style="swiperSize" :src="data[0].imgUrl" alt="">
            </a>
        </li>
    </ul>
    <ul class="swiper-pagination">
        <li v-for="(item,index) in data" @click="changeImg(index)" :class="{'active': activeIndex === index}" :key="index"></li>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'swiper',
  data () {
    return {
      activeIndex: 0,
      timer: null,
      haveDuration: true
    }
  },
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    },
    height: {
      type: Number,
      default: 500
    },
    width: {
      type: Number,
      default: 1240
    },
    delay: {
      type: Number,
      default: 5000
    }
  },
  computed: {
    swiperSize () {
      return {
        width: `${this.width}px`,
        height: `${this.height}px`
      }
    },
    ListWrapper () {
      return {
        width: `${(this.data.length + 1) * this.width}px`,
        height: `${this.height}px`,
        transform: `translateX(-${this.activeIndex * this.width}px)`,
        transitionDuration: this.haveDuration ? '.3s' : ''
      }
    }
  },
  mounted () {
    this.setTimer()
  },
  methods: {
    setTimer () {
      console.log(this.activeIndex)
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        if (this.activeIndex === (this.data.length)) {
          this.activeIndex = 0
          this.haveDuration = false
        } else {
          this.activeIndex++
          this.haveDuration = true
        }
      }, this.delay)
    },
    changeImg (index) {
      this.activeIndex = index
      this.haveDuration = true
    },
    setDuration () {
      if (this.activeIndex === this.data.length) {
        this.activeIndex = 0
        this.haveDuration = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
.swiper{
    position: relative;
    overflow: hidden;
    .swiper-list{
        display: inline-block;
    }
    .swiper-pagination{
        position: absolute;
        left: 30%;
        bottom: 20px;
        li{
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            margin: 0 5px;
            background-color: white;
            cursor: pointer;
            &.active{
                background-color: transparent;
                border: 1px solid #fff;
            }
        }
    }
    .swiper-ul{
        font-size: 0%;
    }
}
</style>
