<template>
    <div class="recommend">
      <div class="title border-bottom">推荐</div>
      <ul>
        <router-link tag='li' v-for="(item, index) in recommendList" :key="index" class="item border-bottom" :to="'/detail/' + item.id">
          <div class="item-img">
            <img :src="item.imgUrl" alt="">
          </div>
          <div class="item-content">
            <div class="item-info">
              <div class="item-title">{{item.title}}</div>
              <div class="item-desc">{{item.desc}}</div>
            </div>
          </div>
        </router-link>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'recommend',
  props: {
    recommendList: Array
  },
  data () {
    return {
      list: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_200x200_a3c26b4d.jpg'
        },
        {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_200x200_a3c26b4d.jpg'
        },
        {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_200x200_a3c26b4d.jpg'
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
    display: flex;
    height: 1.9rem;
    .item-img{
      flex: 1;
      img{
        width: 100%;
      }
    }
    .item-content{
      flex: 3;
      padding: 0.4rem;
      .item-title{
        font-size: 20px;
        padding: 0 0 0.2rem 0;
      }
    }
  }
}
</style>
