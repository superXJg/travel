<template>
  <div>
    <router-link tag='div' to='/' class="head-abs" v-show="isShow">返回</router-link>
    <div class="head" v-show="!isShow" :style="styleObj">
      <router-link tag='div' to='/' class="icon">返回</router-link>
      <div class="title">热门景点</div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail-head',
  data () {
    return {
      isShow: true,
      styleObj: {
        opacity: 0
      }
    }
  },
  methods: {
    handler () {
      console.log(document.documentElement.scrollTop)
      const t = document.documentElement.scrollTop
      if (t > 40) {
        let opacity = t / 140
        opacity = opacity > 1 ? 1 : opacity
        this.styleObj = { opacity }
        this.isShow = false
      } else {
        this.isShow = true
      }
    }
  },
  activated () {
    addEventListener('scroll', this.handler)
  }
}
</script>

<style lang='less' scoped>
@import "../../assets/css/varibles.less";
.head-abs{
  position: absolute;
  left: 0.2rem;
  top: 0.1rem;
  width: .8rem;
  height: .8rem;
  line-height: .8rem;
  border-radius: 50%;
  background-color: rgba(0,0,0,.4);
  z-index: 1;
  text-align: center;
  color: #fff;
}
.head{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
  height: 0.8rem;
  line-height: 0.8rem;
  background-color: @bgColor;
  display: flex;
  color: #fff;
  .icon{
    flex: 0 0 .8rem;
    text-align: center;
  }
  .title{
    flex: 1;
    text-align: center;
  }
  .right{
    flex: 0 0 .8rem;
    text-align: center;
  }
}
</style>
