<template>
   <div>
     <m-head></m-head>
     <m-swiper></m-swiper>
     <m-icons></m-icons>
     <recommend></recommend>
     <weekend></weekend>
   </div>
</template>

<script>
import mHead from '@/pages/home/m-head'
import mSwiper from '@/pages/home/m-swiper'
import mIcons from '@/pages/home/m-icons'
import recommend from '@/pages/home/recommend'
import weekend from '@/pages/home/weekend'
export default {
  name: 'home',
  components: {
    mHead,
    mSwiper,
    mIcons,
    recommend,
    weekend
  }
}
</script>

<style scoped>

</style>
