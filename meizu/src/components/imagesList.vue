<template>
  <div :class="{'images-wrapper': type === 'small', 'images-wrapper_big': type === 'big'}">
      <img class="img" :src="data[activeIndex]" alt="">
      <ul class="imgs">
          <li class="imgs-item" :class="{'active' : activeIndex === index}" v-for="(item,index) in data" @click="changeImage(index)" :key="index">
              <img :src="item" alt="">
          </li>
      </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'images-list',
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    },
    type: {
      type: String,
      default: 'small'
    }
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  methods: {
    changeImage (index) {
      this.activeIndex = index
    }
  }
}
</script>

<style lang="less" scoped>
.images-wrapper{
    text-align: center;
    .img{
        height: 230px;
        margin-top: 20px;
    }
    .imgs{
        overflow: hidden;
        margin: 13px auto 15px;
        .imgs-item{
            width: 40px;
            height: 40px;
            display: inline-block;
            border-radius: 4px;
            margin: 0 4px;
            border: 1px solid #EFEFEF;
            cursor: pointer;
            &.active{
                border-color: #bdbdbd;
            }
            img{
                width: 40px;
                height: 40px;
            }
        }
    }
}
.images-wrapper_big{
    text-align: center;
    .img{
        height: 375px;
        margin: 20px auto;
    }
    .imgs{
        overflow: hidden;
        margin-top: 10px;
        .imgs-item{
            width: 75px;
            height: 75px;
            display: inline-block;
            border-radius: 4px;
            margin: 0 5px;
            border: 1px solid transparent;
            cursor: pointer;
            &.active{
                border-color: #dcdcdc;
            }
            img{
                width: 75px;
                height: 75px;
            }
        }
    }
}
</style>
