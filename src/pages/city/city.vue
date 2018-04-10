<template>
    <div class='city'>
      <c-head></c-head>
      <c-search></c-search>
    </div>
</template>

<script>
import cHead from '@/pages/city/c-head'
import cSearch from '@/pages/city/c-search'
export default {
  name: 'city',
  components: {
    cHead,
    cSearch
  }
}
</script>

<style lang="less" scoped>

</style>
