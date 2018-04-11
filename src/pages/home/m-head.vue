<template>
  <div class='head'>
    <div class="head-left">返回</div>
    <div class="head-input">
    </div>
    <div class="head-right">
      <router-link class="go" to="/city">{{this.$store.state.city}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'm-head'
}
</script>

<style scoped lang='less'>
@import "../../assets/css/varibles.less";
.head{
  height: 0.86rem;
  line-height: 0.86rem;
  display: flex;
  background-color: @bgColor;
  color: #fff;
  .head-left{
    width: .64rem;
  }
  .head-right{
    min-width: 1.24rem;
    text-align: center;
    .go{
      color: #fff;
      padding:0 0.1rem;
    }
  }
  .head-input{
    flex: 1;
    background-color: #fff;
    height: 0.64rem;
    margin-top: 0.12rem;
    border-radius: 5px;
  }
}
</style>
