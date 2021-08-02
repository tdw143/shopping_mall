<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button :is-checked="isSelectAll" @click.native="checkClick"></check-button>
      <span>全选</span>
    </div>
    <div class="price">
      合计：{{totalPrice}}
    </div>
    <div class="calc" @click="calcClick">
      去计算({{checkLength}})
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

import { mapGetters } from 'vuex'

export default {
  name: "CartBottomBar",
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(['cartList','cartLength']),
    totalPrice() {
      return '￥' + this.cartList.filter(
        item => item.checked).reduce((preValue,item) => {
          return preValue + item.price * item.count
        }, 0 ).toFixed(2)
    },
    checkLength() {
      return this.cartList.filter(item => item.checked).length
    },
    isSelectAll() {
      if(this.cartLength === 0) return false
      return !this.cartList.some(item => !item.checked)
    }
  },
  methods: {
    checkClick() {
      if(this.isSelectAll) {
        this.cartList.forEach(item => item.checked = false)
      } else {
        this.cartList.forEach(item => item.checked = true)
      }
    },
    calcClick() {
      if(!this.isSelectAll) {
        this.$toast.show('请选择购买的商品',2000)
      }
    }
  }
}
</script>

<style scoped>
  .bottom-bar {
    height: 40px;
    /* background-color: #bfa; */
    display: flex;
    align-items: center;
    background-color: #eee;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    font-size: 14px;
    color: #888;
  }

  .check-content {
    display: flex;
    height: 20px;
    margin-left: 10px;
  }

  .price {
    margin-left: 50px;
    flex: 1;
  }

  .calc {
    height: 40px;
    width: 100px;
    background-color: orangered;
    line-height: 44px;
    text-align: center;
    color: #fff;
  }
</style>
