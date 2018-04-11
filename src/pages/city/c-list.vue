<template>
    <div class="list" ref="scroll">
      <div>
        <div class="area">
          <div class="title border-topbottom">当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
            <div class="button-wrapper" v-for="item of hotCities" :key='item.id'>
              <div class="button">{{item.name}}</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="area-option" v-for="(item, key) of cities" :key='item.id'>
            <div class="title border-topbottom">{{key}}</div>
            <ul>
              <li v-for="(inneritem, index) of item" class="area-item border-bottom" :key='index'>{{inneritem.name}}</li>
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
    hotCities: Array
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.scroll, {
    })
    console.log(this.hotCities)
  },
  components: {
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
