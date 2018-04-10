<template>
  <div class="home-swiper">
    <swiper :options="swiperOption" v-if="swiperList.length">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  /* eslint-disable */
  name: 'm-swiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
        swiperOption: {
          pagination: '.swiper-pagination',
          swiperSlides: [
            {
              id: 100,
              imgUrl: 'http://img1.qunarzz.com/piao/fusion/1802/23/da45ee3852538002.jpg_640x200_a17ebc59.jpg'
            },
            {
              id: 101,
              imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/81/61e16fc667c0bb02.jpg_640x200_ea28d62a.jpg'
            },
          ],
          loop: true
        }
    }
  }
}
</script>

<style scoped lang='less'>
.home-swiper /deep/ .swiper-pagination-bullet-active{
  background-color: #fff;
}
.home-swiper{
  width: 100%;
  height: 0;
  padding-bottom: 31.2%;
  background-color: #ccc;
  overflow: hidden;
}
.item-img{
  width: 100%;
}
</style>
