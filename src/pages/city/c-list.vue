<template>
    <div class="list" ref="scroll">
      <div>
        <div class="area">
          <div class="title border-topbottom">当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">{{this.$store.state.city}}</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
            <div class="button-wrapper" v-for="item of hotCities" :key='item.id'>
              <div @click="handleCity(item.name)" class="button">{{item.name}}</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="area-option" v-for="(item, key) of cities" :key='item.id' :ref="key">
            <div class="title border-topbottom">{{key}}</div>
            <ul>
              <li v-for="(inneritem, index) of item" class="area-item border-bottom" :key='index' @click="handleCity(inneritem.name)">{{inneritem.name}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'c-list',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.scroll, {
    })
  },
  components: {
  },
  watch: {
    letter (letter) {
      let ele = this.$refs[letter][0]
      this.scroll.scrollToElement(ele, 300)
    }
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
.list{
  position: absolute;
  top: 1.66rem;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
}
.title{
  height: 0.7rem;
  line-height: 0.7rem;
  background-color: #eee;
  padding-left: 0.2rem;
}
.button-list{
  overflow: hidden;
  padding: 0.1rem 0.6rem 0.1rem 0.1rem;
 .button-wrapper{
   padding: 0.1rem;
   float: left;
   box-sizing: border-box;
   width: 33.3%;
   .button{
     padding: 0.1rem;
     text-align: center;
     border: 2px solid #eee;
     border-radius: 3px;
   }
 }
}
.area-item{
  height: 0.62rem;
  line-height: 0.62rem;
  padding-left: 0.3rem;
}
</style>
