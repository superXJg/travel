<template>
  <div>
    <div class='banner' @click="handleShow">
      <div class='banner-img'>
        <img :src="bannerImg" alt="">
      </div>
      <div class="banner-info">
        <div class='title'>{{sightName}}</div>
        <div class='num'>32张</div>
      </div>
    </div>
    <fade>
      <gallary :gallaryImgs='gallaryImgs' @close="handleClose" v-show="isShow"></gallary>
    </fade>
  </div>
</template>

<script>
import gallary from 'common/gallary/gallary'
import fade from 'common/fade/fade'
export default {
  name: 'detail-banner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  components: {
    gallary,
    fade
  },
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    handleShow () {
      this.isShow = true
    },
    handleClose () {
      this.isShow = false
    }
  }
}
</script>

<style lang='less' scoped>
.banner{
  position: relative;
  height: 0;
  overflow: hidden;
  padding-bottom: 55%;
  .banner-img{
    img{
      width: 100%;
    }
  }
  .banner-info{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 0.5rem;
    line-height: 0.5rem;
    padding: 0.1rem;
    background-image: linear-gradient(top,rgba(0,0,0,0),rgb(0,0,0,0.7));
    color: #fff;
  }
  .title{
    float: left;
  }
  .num{
    float: right;
    width: 1.5rem;
    text-align: center;
    border-radius: 5px;
  }
}
</style>
