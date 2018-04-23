
<template>
    <div>
      <detail-head></detail-head>
      <banner :sightName='sightName' :bannerImg='bannerImg' :gallaryImgs='gallaryImgs'></banner>
      <detailList v-for="(item, index) in categoryList" :title="item.title" :list="item.children" :key='index'></detailList>
      <div class="content"></div>
    </div>
</template>

<script>
/* eslint-disable */
import banner from '@/pages/detail/detail-banner'
import axios from 'axios'
import detailHead from '@/pages/detail/detail-head'
import detailList from '@/pages/detail/detail-list'
export default {
  name: 'detail',
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: []
    }
  },
  components: {
    banner,
    detailHead,
    detailList
  },
  activated () {
    axios.get('/api/detail.json', {
      params: {id: this.$route.params.id}
    }).then((res) => {
      this.sightName = res.data.data.sightName
      this.bannerImg = res.data.data.bannerImg
      this.gallaryImgs = res.data.data.gallaryImgs
      this.categoryList = res.data.data.categoryList
    })
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
