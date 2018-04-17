<template>
  <div>
    <div class='banner' @click="handleShow">
      <div class='banner-img'>
        <img src="//img1.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_600x330_ae0eb039.jpg" alt="">
      </div>
      <div class="banner-info">
        <div class='title'>鼓浪屿(AAAAA景区)</div>
        <div class='num'>32张</div>
      </div>
    </div>
    <fade>
      <gallary @close="handleClose" v-show="isShow"></gallary>
    </fade>
  </div>
</template>

<script>
import gallary from 'common/gallary/gallary'
import fade from 'common/fade/fade'
export default {
  name: 'detail-banner',
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
