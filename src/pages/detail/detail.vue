<template>
    <div>
      <detail-head></detail-head>
      <banner></banner>
      <detailList :list="list"></detailList>
      <div class="content"></div>
    </div>
</template>

<script>
import banner from '@/pages/detail/detail-banner'
import detailHead from '@/pages/detail/detail-head'
import detailList from '@/pages/detail/detail-list'
export default {
  name: 'detail',
  components: {
    banner,
    detailHead,
    detailList
  },
  data () {
    return {
    }
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
