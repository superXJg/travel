<template>
<ul class="list">
  <li class="item needsclick" :class="{'active':cIndex === index}"
    @click="handle"
    v-for="(item, index) of city"
    :key="item" :ref='item'
    @touchstart.prevent="tstart"
    @touchmove="tmove"
    @touchend="tend"
  >{{item}}</li>
</ul>
</template>

<script>
export default {
  name: 'alphabet',
  props: {
    cities: Object,
    cIndex: Number
  },
  data () {
    return {
      isTouch: false,
      starY: 0,
      timer: null
    }
  },
  updated () {
    this.starY = this.$refs['A'][0].offsetTop
  },
  computed: {
    city () {
      let city = []
      // console.log(this.cities)
      for (let key in this.cities) {
        city.push(key)
      }
      return city
    }
  },
  methods: {
    handle (e) {
      this.$emit('change', e.target.innerHTML)
    },
    tstart () {
      this.isTouch = true
    },
    /* eslint-disable */
    tmove (e) {
      if (this.isTouch) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          let starY = this.starY
          let touchY = e.touches[0].clientY
          let index = Math.floor((touchY - starY - 74)/22)
          if (index >= 0 && index <= this.city.length) {
            this.$emit('change',this.city[index])
          }
        }, 16)
      }
    },
    tend () {
      this.isTouch = false
    }
  }
}
</script>

<style scoped lang='less'>
@import "../../assets/css/varibles";
.list{
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 1.62rem;
  width: .4rem;
  bottom: 0;
  .item{
    line-height: .44rem;
    color: @bgColor;
    &.active{
      color: orangered;
      text-shadow:0 0 4px white,
        0 -2px 2px #ff3,
        3px -3px 3px #fd3,
        -3px -4px 4px #C90,
        2px -5px 5px #f20;
    }
  }
}
</style>
