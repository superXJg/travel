<template>
    <div>
        <div class="item border-bottom" @click.stop="toggal">
           <span class='icon'></span>
           <div class="title">{{title}}{{isShow}}</div>
           <span v-show="list" class="has-icon" :class="iconClass">v</span>
        </div>
        <div class="item-child">
           <detail-list v-if="isShow" v-for="(item, index) in list" :title="item.title" :list="item.children" :key="index"></detail-list>
        </div>
    </div>
</template>
<style lang="less" scoped>
  .item{
    height: .8rem;
    line-height:0.8rem;
    padding:0 0.3rem;
    position: relative;
    .icon{
      display: inline-block;
      width: .36rem;
      height: .36rem;
      margin-top:0.2rem;
      background: url("http://s.qunarzz.com/piao/image/touch/sight/detail.png") 0 -.45rem no-repeat;
      margin-right: .1rem;
      background-size: .4rem 3rem;
    }
    .has-icon{
      position: absolute;
      right: 10px;
      transition: all 1s;
      &.open{
        transform: rotateZ(0deg)
      }
      &.close{
        transform: rotateZ(180deg)
      }
    }
    .title{
      display: inline-block;
    }
  }
  .item-child{
    padding-left: 12px;
  }
</style>
<script>

export default{
  name: 'detailList',
  props: {
    list: Array,
    title: String
  },
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    toggal () {
      this.isShow = !this.isShow
    }
  },
  computed: {
    iconClass () {
      if(!this.isShow) {
        return `open`
      } else {
        return `close`
      }
    }
  }
}
</script>
