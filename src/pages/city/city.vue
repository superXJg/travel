<template>
    <div class='city'>
      <c-head></c-head>
      <c-search></c-search>
      <c-list></c-list>
    </div>
</template>

<script>
import cHead from '@/pages/city/c-head'
import cSearch from '@/pages/city/c-search'
import cList from '@/pages/city/c-list'
export default {
  name: 'city',
  components: {
    cHead,
    cSearch,
    cList
  }
}
</script>

<style lang="less" scoped>

</style>
