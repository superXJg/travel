<template>
  <div class="icons">
    <swiper :options="swiperOption" class="icons-swiper">
      <swiper-slide v-for="(page, index) in pages2" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-inner-img" :src="item.imgUrl" alt="">
          </div>
          <p class="desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'm-icons',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: false
      },
      page: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        },
        {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/c1/ac058f238b9a6802.png',
          desc: '一日游'
        },
        {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/c1/ac058f238b9a6802.png',
          desc: '游船游艇'
        },
        {
          id: '004',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '踏青赏花'
        },
        {
          id: '005',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png',
          desc: '植物园'
        },
        {
          id: '006',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '名胜古迹'
        },
        {
          id: '007',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '厦门老子院'
        },
        {
          id: '008',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '鼓浪屿'
        },
        {
          id: '009',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '全部玩乐'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.page.forEach((item, index) => {
        let page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      console.log(pages)
      return pages
    },
    pages2 () {
      const pages2 = []
      for (let i = 0; i < this.page.length; i += 8) {
        pages2.push(this.page.slice(i, i + 8))
      }
      return pages2
    }
  }
}
</script>

<style scoped lang='less'>
  @import "../../assets/css/varibles.less";
  .icons /deep/ .swiper-pagination-bullet-active{
    background-color: #fff;
  }
  .icons /deep/ .icons-swiper{
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 50%;
    .icon{
      float: left;
      width: 25%;
      height: 0;
      overflow: hidden;
      padding-bottom: 25%;
      position: relative;
      .icon-img{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0.44rem;
        .icon-inner-img{
          height: 100%;
          display: block;
          margin: 0 auto;
          padding: .1rem;
        }
      }
      .desc{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 0.44rem;
        line-height: 0.44rem;
        text-align: center;
        .ellipsis()
      }
    }
  }
</style>
