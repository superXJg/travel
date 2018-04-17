<template>
    <div class="gallary" @click="handleGallary">
      <swiper :options="swiperOption" @click.stop >
        <swiper-slide>
          <img class="item-img" src="//img1.qunarzz.com/sight/p0/1711/fe/fe517fa5a183e4bca3.img.jpg_600x330_a413e5b1.jpg" alt="">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
/* eslint-disable */
  export default {
  name: 'gallary',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleGallary() {
      console.log('close')
      this.$emit('close')
    }
  }
}
</script>

<style lang='less' scoped>
.gallary /deep/ .swiper-pagination{
  color: #fff;
}
.gallary /deep/ .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: -67px;
}
.gallary /deep/ .swiper-container{
  overflow: inherit;
}
.gallary{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  .item-img{
    width: 100%;
  }
}
</style>
