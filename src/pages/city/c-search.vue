<template>
  <div>
  <div class="head">
    <input v-model="keyword" class="ipt" type="text" placeholder="输入城市或者拼音">
  </div>
  <div class="content" v-show="keyword" ref="scroll">
    <ul>
      <li @click="handleCity(item.name)" class="content-item border-bottom" v-for="(item, index) in list" :key="index">{{item.name}}</li>
      <li class="content-item border-bottom" v-show="!list.length">暂无数据</li>
    </ul>
  </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    cities: Object
  },
  name: 'c-search',
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  watch: {
    keyword (value) {
      if (value.length === 0 || value === '') {
        this.list = []
        return
      }
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        let result = []
        for (let key in this.cities) {
          this.cities[key].forEach((item) => {
            if (item.spell.indexOf(value) > -1 || item.name.indexOf(value) > -1) {
              result.push(item)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.scroll)
  },
  methods: {
    handleCity (value) {
      // this.$store.dispatch('changeCity', value)
      this.$store.commit('handleCity', value)
      this.$router.push('/')
    }
  }
}
</script>

<style lang='less' scoped>
  @import "../../assets/css/varibles";
  .head{
    box-sizing: border-box;
    padding: 0.1rem;
    position: relative;
    background-color: @bgColor;
    text-align: center;
    color: #fff;
    .ipt{
      width: 100%;
      text-align: center;
      height: 0.62rem;
      line-height: 0.62rem;
      border-radius: 0.1rem;
      background-color: #fff;
      color: #666;
    }
  }
  .content{
    position: absolute;
    overflow: hidden;
    top: 1.62rem;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #eee;
    z-index: 1;
    .content-item{
      line-height: 0.62rem;
      padding-left: 0.5rem;
      background-color: #fff;
    }
  }
</style>
