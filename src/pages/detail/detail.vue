<template>
    <div>
      <detail-head></detail-head>
      <banner></banner>
      <div class="content"></div>
    </div>
</template>

<script>
import banner from '@/pages/detail/detail-banner'
import detailHead from '@/pages/detail/detail-head'
export default {
  name: 'detail',
  components: {
    banner,
    detailHead
  }
}
</script>

<style lang='less' scoped>
.content{
  width: 100%;
  height: 0;
  padding-bottom: 30rem;
}
</style>
