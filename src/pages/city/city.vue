<template>
    <div class='city'>
      <c-head></c-head>
      <c-search></c-search>
      <c-list :hotCities='hotCities' :cities='cities'></c-list>
      <alphabet :cities='cities'></alphabet>
    </div>
</template>

<script>
import cHead from '@/pages/city/c-head'
import cSearch from '@/pages/city/c-search'
import cList from '@/pages/city/c-list'
import alphabet from '@/pages/city/alphabet'
import axios from 'axios'
export default {
  name: 'city',
  data () {
    return {
      hotCities: [],
      cities: {}
    }
  },
  components: {
    cHead,
    cSearch,
    cList,
    alphabet
  },
  mounted () {
    axios.get('/api/city.json').then((res) => {
      this.hotCities = res.data.data.hotCities
      this.cities = res.data.data.cities
    })
  }
}
</script>

<style lang="less" scoped>

</style>
