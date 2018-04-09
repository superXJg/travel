<template>
   <div>
     <m-head></m-head>
     <m-swiper></m-swiper>
   </div>
</template>

<script>
import mHead from '@/pages/home/m-head'
import mSwiper from '@/pages/home/m-swiper'
export default {
  name: 'home',
  components: {
    mHead,
    mSwiper
  }
}
</script>

<style scoped>

</style>
