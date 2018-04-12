<template>
    <div class='city'>
      <c-head></c-head>
      <c-search :cities='cities'></c-search>
      <c-list @index='getIndex' :hotCities='hotCities' :cities='cities' :letter='letter'></c-list>
      <alphabet @change="getLetter" :cities='cities' :cIndex='cIndex'></alphabet>
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
      letter: '',
      cIndex: -1
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
      console.log('getLetter')
      this.letter = letter
    },
    getIndex (index) {
      console.log('getIndex')
      this.cIndex = index
    }
  }
}
</script>

<style lang="less" scoped>

</style>
