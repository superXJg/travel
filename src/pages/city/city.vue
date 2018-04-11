<template>
    <div class='city'>
      <c-head></c-head>
      <c-search :cities='cities'></c-search>
      <c-list :hotCities='hotCities' :cities='cities' :letter='letter'></c-list>
      <alphabet @change="getLetter" :cities='cities'></alphabet>
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
      cities: {},
      letter: ''
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
  },
  methods: {
    getLetter (letter) {
      this.letter = letter
    }
  }
}
</script>

<style lang="less" scoped>

</style>
