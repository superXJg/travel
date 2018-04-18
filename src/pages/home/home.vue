<template>
   <div>
     <m-head></m-head>
     <m-swiper :swiperList=swiperList></m-swiper>
     <m-icons :iconList=iconList></m-icons>
     <recommend :recommendList=recommendList></recommend>
     <weekend :weekendList=weekendList></weekend>
   </div>
</template>

<script>
import mHead from '@/pages/home/m-head'
import mSwiper from '@/pages/home/m-swiper'
import mIcons from '@/pages/home/m-icons'
import recommend from '@/pages/home/recommend'
import weekend from '@/pages/home/weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      iconList: [],
      swiperList: [],
      recommendList: [],
      weekendList: []
    }
  },
  components: {
    mHead,
    mSwiper,
    mIcons,
    recommend,
    weekend
  },
  mounted () {
    // axios.get('/api/index.json').then((res) => {
    //   let data = res.data.data
    //   this.iconList = data.iconList
    //   this.swiperList = data.swiperList
    //   this.recommendList = data.recommendList
    //   this.weekendList = data.weekendList
    // })
  },
  computed: {
    ...mapState(['city'])
  },
  activated () {
    axios.get('/api/index.json?city=' + this.city).then((res) => {
      let data = res.data.data
      this.iconList = data.iconList
      this.swiperList = data.swiperList
      this.recommendList = data.recommendList
      this.weekendList = data.weekendList
    })
  }
}
</script>

<style scoped>

</style>
