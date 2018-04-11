<template>
    <div class='city'>
      <c-head></c-head>
      <c-search></c-search>
      <c-list></c-list>
      <alphabet></alphabet>
    </div>
</template>

<script>
import cHead from '@/pages/city/c-head'
import cSearch from '@/pages/city/c-search'
import cList from '@/pages/city/c-list'
import alphabet from '@/pages/city/alphabet'
export default {
  name: 'city',
  components: {
    cHead,
    cSearch,
    cList,
    alphabet
  }
}
</script>

<style lang="less" scoped>

</style>
