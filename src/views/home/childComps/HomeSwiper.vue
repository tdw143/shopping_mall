<template>
  <swiper ref="swiper" v-if="banner.length">
    <swiper-item v-for="(item, index) in banner" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

	export default {
		name: "HomeSwiper",
    components: {
		  Swiper,
      SwiperItem
    },
    props: {
		  banner: {
		    type: Array,
        default: []
      }
    },
    methods: {
		  stopTimer() {
		    this.$refs.swiper.stopTimer()
      },
      startTimer() {
		    if (this.$refs.swiper) {
          this.$refs.swiper.startTimer()
        }
      }
    }
	}
</script>

<style scoped>

</style>
