<template>
  <div class="recommend">
    <div class="title border-bottom">周末去哪儿</div>
    <ul>
      <li v-for="(item, index) in weekendList" :key="index" class="item border-bottom">
        <div class="item-img">
          <img :src="item.imgUrl" alt="">
        </div>
        <div class="item-content">
          <div class="item-info">
            <div class="item-title">{{item.title}}</div>
            <div class="item-desc">{{item.desc}}</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'weekend',
  props: {
    weekendList: Array
  },
  data () {
    return {
      list: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1711/15/1cdd5ee885686b.jpg_r_640x214_46768064.jpg'
        },
        {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1711/15/1cdd5ee885686b.jpg_r_640x214_46768064.jpg'
        },
        {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1711/15/1cdd5ee885686b.jpg_r_640x214_46768064.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped lang='less'>
  .recommend{
    .title{
      height: 0.76rem;
      line-height: 0.76rem;
      padding-left: 0.5rem;
    }
    .item{
      padding: 0.2rem;
      height: 0;
      overflow: hidden;
      height: 3.8rem;
      .item-img{
        img{
          width: 100%;
        }
      }
      .item-content{
        padding: 0.2rem;
        .item-title{
          font-size: 20px;
          padding: 0 0 0.2rem 0;
        }
      }
    }
  }
</style>
