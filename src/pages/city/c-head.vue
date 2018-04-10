<template>
<div class="head">
  <div class='head-right'>
    <router-link class="back" to="/">返回</router-link></div>
  城市选择
</div>
</template>

<script>
export default {
  name: 'c-head'
}
</script>

<style lang='less' scoped>
@import "../../assets/css/varibles";
  .head{
    position: relative;
    height: 0.86rem;
    line-height: 0.86rem;
    background-color: @bgColor;
    text-align: center;
    color: #fff;
    .head-right{
      background-color: @bgColor;
      position: absolute;
      left: 0;
      top: 0;
      width: 1rem;
      .back{
        color: #fff;
      }
    }
  }
</style>
