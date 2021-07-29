import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations-types'

export default {
  // mutations 唯一的目的就是修改state中的状态
  // mutations 中的每个方法尽可能完成的事情比较单一一点
  [ADD_COUNTER](state, payload) {
    payload.count++
  },
  [ADD_TO_CART](state, payload) {
    state.cartList.push(payload)
  }
  // addCart(state, payload) {
  //   // 1.查找之前数组中是否有该商品
  //   // let oldProduct = null
  //   // for(let item of state.cartList) {
  //   //   if(item.iid === payload.iid) {
  //   //     oldProduct = item
  //   //   }
  //   // }
  //   let oldProduct = state.cartList.find(item => item.iid === payload.iid)
  //   // 2.判断oldProduct
  //   if(oldProduct) {
  //     oldProduct.count += 1
  //   } else {
  //     payload.count = 1
  //     state.cartList.push(payload)
  //   }
  // }
}