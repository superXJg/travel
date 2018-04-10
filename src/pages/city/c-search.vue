<template>
  <div class="head">
    <input class="ipt" type="text" placeholder="输入城市或者拼音">
  </div>
</template>

<script>
export default {
  name: 'c-search'
}
</script>

<style lang='less' scoped>
  @import "../../assets/css/varibles";
  .head{
    box-sizing: border-box;
    padding: 0.1rem;
    position: relative;
    background-color: @bgColor;
    text-align: center;
    color: #fff;
    .ipt{
      width: 100%;
      text-align: center;
      height: 0.62rem;
      line-height: 0.62rem;
      border-radius: 0.1rem;
      background-color: #fff;
      color: #666;
    }
  }
</style>
