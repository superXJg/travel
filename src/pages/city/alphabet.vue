<template>
<ul class="list">
  <li v-for="(item, key) of cities" class="item" :key="key">{{key}}</li>
</ul>
</template>

<script>
export default {
  name: 'alphabet',
  props: {
    cities: Object
  }
}
</script>

<style scoped lang='less'>
@import "../../assets/css/varibles";
.list{
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 1.62rem;
  width: .4rem;
  bottom: 0;
  .item{
    line-height: .44rem;
    color: @bgColor;
  }
}
</style>
