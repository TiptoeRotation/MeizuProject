import Vue from 'vue'
const mutations = {
  // state就是在state.js中设置好的对象，obj就是使用方法时传进来的数据
  ADD_SHOPCART (state, obj) {
    // 用来判断这条数据是否在购物车里已经存在
    let haveData = false
    // 遍历查找该商品，判断是否存在
    state.shopcartData.forEach(item => {
      // 如果存在该商品
      if (item.id === obj.data.id) {
        haveData = true
        // 改变购物车里该商品的数量值
        item.count += obj.num
      }
    })
    // 如果购物车不存在该数据，当haveData为false时才运行下面这段代码
    if (!haveData) {
      // 使用set方法给obj.data添加count字段，并把obj.num赋值给该字段
      Vue.set(obj.data, 'count', obj.num)
      Vue.set(obj.data, 'checked', true)
      // 然后再将obj.data push给shopcartData字段中去
      state.shopcartData.push(obj.data)
    }
    console.log(state.shopcartData)
  },
  INCREASE_SHOPCART (state, id) {
    state.shopcartData.forEach(item => {
      if (item.id === id) {
        item.count++
      }
    })
  },
  REDUCE_SHOPCART (state, id) {
    state.shopcartData.forEach(item => {
      if (item.id === id && item.count > 1) {
        item.count--
      }
    })
  },
  CHECK_GOODS (state, id) {
    state.shopcartData.forEach(item => {
      if (item.id === id) {
        item.checked = !item.checked
      }
    })
  },
  CHECK_ALL_GOODS (state, checked) {
    state.shopcartData.forEach(item => {
      item.checked = !checked
    })
  },
  DEL_SHOPCART (state, id) {
    state.shopcartData.forEach((item, index) => {
      if (item.id === id) {
        state.shopcartData.splice(index, 1)
      }
    })
  },
  REMOVE_GOODS (state) {
    state.shopcartData = state.shopcartData.filter(item => !item.checked)
  }
}
export default mutations
