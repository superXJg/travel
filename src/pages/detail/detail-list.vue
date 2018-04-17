<template>
    <div>
       <div v-for="(item, index) in list" :key="index">
         <div class="item border-bottom">
           <span class='icon'></span>
           <div class="title">{{item.title}}</div>
         </div>
         <div v-if="item.children" class="item-child">
           <detail-list :list="item.children"></detail-list>
         </div>
       </div>
    </div>
</template>
<style lang="less" scoped>
  .item{
    height: .8rem;
    line-height:0.8rem;
    padding:0 0.3rem;
    .icon{
      display: inline-block;
      width: .36rem;
      height: .36rem;
      margin-top:0.2rem;
      background: url("http://s.qunarzz.com/piao/image/touch/sight/detail.png") 0 -.45rem no-repeat;
      margin-right: .1rem;
      background-size: .4rem 3rem;
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
    list: Array
  },
  data () {
    return {
    }
  }
}
</script>
