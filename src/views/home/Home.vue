<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <recommend-view :recommend="recommend"></recommend-view>
    <feature-view/>
    <tab-control :titles="['流行','新款','精选']"
                  class="tab-control"/>

    <ul>
      <li>list1</li>
      <li>list2</li>
      <li>list3</li>
      <li>list4</li>
      <li>list5</li>
      <li>list6</li>
      <li>list7</li>
      <li>list8</li>
      <li>list9</li>
      <li>list10</li>
      <li>list11</li>
      <li>list12</li>
      <li>list13</li>
      <li>list14</li>
      <li>list15</li>
      <li>list16</li>
      <li>list17</li>
      <li>list18</li>
      <li>list19</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
      <li>list20</li>
    </ul>


  </div>
  
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  import NavBar from "components/common/navbar/NavBar"
  import TabControl from 'components/content/tabControl/TabControl'

  import {getHomeMultidata} from 'network/home'
  
  export default {
    name: "Home",
    components: {
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl
    },
    data() {
      return {
        banner: [],
        recommend: []
      }
    },
    created() {
      // 1.请求多个数据
      getHomeMultidata().then(res => {
        console.log(res)
        this.banner = res.data.banner.list
        this.recommend = res.data.recommend.list
        })
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;    
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }

  .tab-control {
    position: sticky;
    top: 44px;
  }
</style>
