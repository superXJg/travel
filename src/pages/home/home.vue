<template>
   <div>
     <m-head></m-head>
     <m-swiper></m-swiper>
     <m-icons></m-icons>
   </div>
</template>

<script>
import mHead from '@/pages/home/m-head'
import mSwiper from '@/pages/home/m-swiper'
import mIcons from '@/pages/home/m-icons'
export default {
  name: 'home',
  components: {
    mHead,
    mSwiper,
    mIcons
  }
}
</script>

<style scoped>

</style>
