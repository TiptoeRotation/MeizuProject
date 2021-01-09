const getters = {
  // 检测是否为全选状态
  isAllChecked (state) {
    // 默认值为全选状态
    let checked = true
    state.shopcartData.forEach(item => {
      // 遍历全部数据，如果有一条数据没有被选中
      if (!item.checked) {
        // 就取消全选状态
        checked = false
      }
    })
    // 把最终的checked返回出去
    return checked
  },
  // 检测选中商品的数量
  checkedGoodsTotal (state) {
    let total = 0
    state.shopcartData.forEach(item => {
      if (item.checked) {
        total += item.count
      }
    })
    return total
  },
  // 计算选中商品总的价格
  checkedGoodsPrice (state) {
    let total = 0
    state.shopcartData.forEach(item => {
      if (item.checked) {
        total += (item.count * item.goodsPrice)
      }
    })
    return total
  },
  // 检测购物车里有多少个商品
  shopcartTotal (state) {
    let total = 0
    state.shopcartData.forEach(item => {
      total += item.count
    })
    return total
  }
}
export default getters
