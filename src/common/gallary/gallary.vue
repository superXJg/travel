<template>
    <div class="gallary" @click="handleGallary">
      <swiper class="wrapper" :options="swiperOption" @click.stop >
        <swiper-slide v-for="(item, index) in gallaryImgs" :key='index'>
          <img class="item-img" :src="item" alt="">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
/* eslint-disable */
  export default {
  props: {
    gallaryImgs: Array
  },
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
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  .wrapper{
    width: 100%;
  }
  .item-img{
    width: 100%;
  }
}
</style>
