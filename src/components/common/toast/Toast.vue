<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    // message: {
    //   type: String,
    //   default: ''
    // },
    // isShow: {
    //   type: Boolean,
    //   default: false
    // }
    },
    data() {
      return {
        message: '',
        isShow: false
      }
    },
    methods: {
      show(message, duration = 20000) {
        this.isShow = true
        this.message = message

        setTimeout(() => {
          this.isShow = false
          this.message = ''
        }, duration)
      }
    }  
}
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    background-color: rgba(0, 0, 0, .5);
    color: #fff;
    z-index: 999;
    transform: translate(-50%,-50%);
    padding: 8px 10px;
    border-radius: 25px;
  }
</style>
