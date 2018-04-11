<template>
<ul class="list">
  <li class="item">A</li>
  <li>A</li>
  <li>A</li>
  <li>A</li>
  <li>A</li>
  <li>A</li>
</ul>
</template>

<script>
export default {
  name: 'alphabet'
}
</script>

<style scoped lang='less'>
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
  }
}
</style>
